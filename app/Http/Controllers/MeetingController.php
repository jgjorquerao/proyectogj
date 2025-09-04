<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Meeting;
use App\Models\Schedule;
use App\Models\Client;
use App\Models\User;
use App\Models\Whatsapp;
use App\Events\NewMessage;
use Illuminate\Http\Request;

class MeetingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getMeetings()
    {
        //Obtener al usuario logueado
        $user = auth()->user();

        //Obtener meetings que sean de la misma compañia que el usuario logueado
        $meetings = Meeting::whereHas('client', function ($q) use ($user) {
            $q->where('company_id', $user->company_id);
        })->orderBy('start_date', 'asc')->get()
        ->map(function ($meeting) {
            return $this->getMeetingDataFormatted($meeting);
        });

        //Obtener schedule de la misma compañia que el usuario logueado
        $schedule = Schedule::where('company_id', $user->company_id)->first();

        return response()->json([
            'schedule' => $schedule,
            'meetings' => $meetings,
        ]);
    }

    public function deleteMeeting(Request $request)
    {
        // Validar que se obtuvo el id de la cita
        $request->validate([
            'id' => 'required|integer',
        ]);

        // Buscar cita
        $meeting = Meeting::find($request->id);

        if ($meeting) {
            // Si se encontró, borrar
            $meeting->delete();

            // Enviar notificación de que la cita se canceló en este punto

            return response()->json([
                'success' => true
            ], 200);
        } else {
            // Si no se encontró, enviar error 404
            return response()->json([
                'success' => false,
                'message' => 'Cita no encontrada'
            ], 404);
        }
    }

    public function addMeeting(Request $request)
    {
        $is_valid = true;
        $date_error = "";
        $start_hour_error = "";
        $end_hour_error = "";
        $client_error = "";
        $user_error = "";

        try {
            // Obtener al usuario logueado
            $user = auth()->user();

            // Validar datos de la request
            $request->validate([
                'user_timezone' => 'required|string',
                'meeting_date' => 'required|date',
                'start_hour' => 'required|date_format:H:i',
                'end_hour' => 'required|date_format:H:i|after:start_hour',
                'client_id' => 'required|exists:clients,id',
                'user_id' => 'required|exists:users,id',
            ]);

            // Establecer fecha de inicio y fin en UTC (lo que se guarda en la BD)
            $userTimezone = $request->user_timezone; // por ejemplo "America/Santiago"
            $db_start_datetime = Carbon::parse($request->meeting_date . ' ' . $request->start_hour, $userTimezone)->setTimezone('UTC');
            $db_end_datetime = Carbon::parse($request->meeting_date . ' ' . $request->end_hour, $userTimezone)->setTimezone('UTC');

            // Establecer datos para validaciones en la zona horaria del usuario (reflejar correctamente a nivel de usuario)
            $now = Carbon::now('UTC')->setTimezone($userTimezone)->startOfMinute(); // Fecha y hora actual
            $today = Carbon::now('UTC')->setTimezone($userTimezone)->startOfDay(); // Fecha actual
            $meeting_date = Carbon::parse($request->meeting_date, $userTimezone)->startOfDay(); // Fecha de la cita
            
            // Verificar que la fecha no sea en el pasado y que la hora de inicio/término esté en el horario de trabajo
            $schedule = Schedule::where('company_id', $user->company_id)->first();
            $schedule_start_hour_time = Carbon::createFromFormat('H:i', $schedule->start_hour);
            $schedule_end_hour_time = Carbon::createFromFormat('H:i', $schedule->end_hour);
            $start_hour_time = Carbon::createFromFormat('H:i', $request->start_hour);
            $end_hour_time = Carbon::createFromFormat('H:i', $request->end_hour);
            $startHourOffWork = $start_hour_time->lt($schedule_start_hour_time) || $start_hour_time->gt($schedule_end_hour_time);
            $endHourOffWork = $end_hour_time->lt($schedule_start_hour_time) || $end_hour_time->gt($schedule_end_hour_time);
            $dateIsPast = $meeting_date->lt($today);
            
            if ($startHourOffWork || $endHourOffWork || $dateIsPast)
            {
                if ($startHourOffWork) {
                    $start_hour_error = "*Hora de inicio fuera del horario de trabajo";
                }
                
                if ($endHourOffWork) {
                    $end_hour_error = "*Hora de término fuera del horario de trabajo";
                }

                if ($dateIsPast) {
                    $date_error = "*La fecha no puede ser anterior a la fecha actual";
                }
                $is_valid = false;
            }

            // Realizar las demás validaciones del tiempo si es que las anteriores validaciones fueron un éxito
            if ($is_valid)
            {
                // Revisar que la hora de inicio no sea anterior a la hora actual, si la fecha es hoy
                $new_start_datetime = $db_start_datetime->copy()->setTimezone($userTimezone)->startOfMinute();
                if ($meeting_date->equalTo($today)) {
                    $startMinutesDiff = 5;
                    $min_start_time = $now->copy()->subMinutes($startMinutesDiff);

                    if ($new_start_datetime->lt($min_start_time)) {
                        $start_hour_error = "Si la cita es hoy, la hora de inicio no puede ser anterior a la hora actual";
                        $is_valid = false;
                    }
                }

                // Revisar que la hora de término sea al menos 5 minutos después de la hora de inicio
                $new_end_datetime = $db_end_datetime->copy()->setTimezone($userTimezone)->startOfMinute();
                $endMinutesDiff = 5;
                $min_end_time = $new_start_datetime->copy()->addMinutes($endMinutesDiff);

                if ($new_end_datetime->lt($min_end_time)) {
                    $end_hour_error = "La hora de término debe ser al menos 5 minutos más tarde que la hora de inicio";
                    $is_valid = false;
                }
            }

            // Revisar que no haya citas del mismo cliente en el mismo horario
            $clientMeetings = Meeting::where('client_id', $request->client_id)
            ->where(function($q) use ($db_start_datetime, $db_end_datetime) {
                $q->where('start_date', '<', $db_end_datetime)
                ->where('end_date',   '>', $db_start_datetime);
            })
            ->exists();

            if ($clientMeetings)
            {
                $client = Client::find($request->client_id);
                $client_error = "El cliente ".$client->name." ya está asignado a una cita en ese horario.";
                $is_valid = false;
            }

            // Revisar que no haya citas del mismo usuario en el mismo horario
            $userMeetings = Meeting::where('user_id', $request->user_id)
            ->where(function($q) use ($db_start_datetime, $db_end_datetime) {
                $q->where('start_date', '<', $db_end_datetime)
                ->where('end_date',   '>', $db_start_datetime);
            })
            ->exists();

            if ($userMeetings)
            {
                $user = User::find($request->user_id);
                $user_error = "El usuario ".$user->name." ya está asignado a una cita en ese horario.";
                $is_valid = false;
            }

            // Revisar si está todo bien
            if ($is_valid == true)
            {
                //Crear cita
                $meeting = Meeting::create([
                    'start_date' => $db_start_datetime,
                    'end_date' => $db_end_datetime,
                    'reminder_done' => false,
                    'client_id' => $request->client_id,
                    'user_id' => $request->user_id,
                ]);

                // Enviar notificación de que la cita se creó en este punto
                /* //Crear mensaje de notificación
                $msg = new Whatsapp();
                $msg->conversation_id = $conversation->id;
                $msg->message = $request->message;
                $msg->client_message = 0; // enviado por nosotros
                $msg->processed = 1;
                $msg->currentdate = now();
                $msg->save();

                $clientPhone = $conversation->client->phone;
                $clientPhone = ltrim($clientPhone, '+');
                $response = Http::withToken(env('WHATSAPP_TOKEN'))
                    ->post($url, [
                        "messaging_product" => "whatsapp",
                        "to" => ltrim($clientPhone, '+'),
                        "type" => "text",
                        "text" => ["body" => $request->message],
                    ]);

                event(new NewMessage($msg)); */

                //Enviar respuesta
                return response()->json([
                    'success' => true,
                    'meeting' => $this->getMeetingDataFormatted($meeting),
                ]);
            }
            else
            {
                return response()->json([
                    'success' => false,
                    'date_error' => $date_error,
                    'start_hour_error' => $start_hour_error,
                    'end_hour_error' => $end_hour_error,
                    'client_error' => $client_error,
                    'user_error' => $user_error,
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function editMeeting(Request $request)
    {
        $is_valid = true;
        $date_error = "";
        $start_hour_error = "";
        $end_hour_error = "";
        $client_error = "";
        $user_error = "";

        try {
            // Obtener al usuario logueado
            $user = auth()->user();

            // Validar datos de la request
            $request->validate([
                'user_timezone' => 'required|string',
                'id' => 'required|integer',
                'meeting_date' => 'required|date',
                'start_hour' => 'required|date_format:H:i',
                'end_hour' => 'required|date_format:H:i|after:start_hour',
                'user_id' => 'required|exists:users,id',
            ]);

            // Recuperar la cita a editar
            $meeting = Meeting::find($request->id);

            if ($meeting)
            {
                // Si se encontró
                // Establecer fecha de inicio y fin en UTC (lo que se guarda en la BD)
                $userTimezone = $request->user_timezone; // por ejemplo "America/Santiago"
                $db_start_datetime = Carbon::parse($request->meeting_date . ' ' . $request->start_hour, $userTimezone)->setTimezone('UTC');
                $db_end_datetime = Carbon::parse($request->meeting_date . ' ' . $request->end_hour, $userTimezone)->setTimezone('UTC');

                // Establecer datos para validaciones en la zona horaria del usuario (reflejar correctamente a nivel de usuario)
                $now = Carbon::now('UTC')->setTimezone($userTimezone)->startOfMinute(); // Fecha y hora actual. Simular cambio local de tiempo -> Carbon::parse('2025-08-30 02:16:00', 'UTC')
                $today = Carbon::now('UTC')->setTimezone($userTimezone)->startOfDay(); // Fecha actual
                $meeting_date = Carbon::parse($request->meeting_date, $userTimezone)->startOfDay(); // Fecha de la cita

                // Establecer si se puede editar la fecha, hora de inicio y hora de termino
                $schedule = Schedule::where('company_id', $user->company_id)->first();
                $schedule_start_hour_time = Carbon::createFromFormat('H:i', $schedule->start_hour);
                $schedule_end_hour_time = Carbon::createFromFormat('H:i', $schedule->end_hour);
                $original_start_datetime = Carbon::parse($meeting->start_date, "UTC")->setTimezone($userTimezone)->startOfMinute();
                $original_end_datetime = Carbon::parse($meeting->end_date, "UTC")->setTimezone($userTimezone)->startOfMinute();
                $can_modify_start = $original_start_datetime->gt($now); // Solo se puede editar fecha y hora de inicio si la cita aún no empieza
                $can_modify_end = $original_end_datetime->gt($now); // Solo se puede editar la hora de término si la cita aún no termina
                $dateChanged = false;
                $startHourChanged = false;
                $endHourChanged = false;
                $userChanged = false;

                // Si se puede modificar fecha/hora de inicio/hora de término, hacer las validaciones que les corresponda
                if ($can_modify_start || $can_modify_end)
                {
                    // Aplicar validaciones para fecha y hora de inicio, si es que se pueden modificar
                    $new_start_datetime = $db_start_datetime->copy()->setTimezone($userTimezone)->startOfMinute();
                    if ($can_modify_start)
                    {
                        // Verificar que la fecha seleccionada no sea menor a la actual, si es que fue editada
                        $dateChanged = !$original_start_datetime->isSameDay($new_start_datetime);
                        if ($dateChanged)
                        {
                            $dateIsPast = $meeting_date->lt($today);
                            if ($dateIsPast)
                            {
                                $date_error = "*La fecha no puede ser anterior a la fecha actual";
                                $is_valid = false;
                            }
                        }

                        // Verificar que la hora de inicio sea dentro del horario de trabajo, si es que fue editada
                        $start_hour_time = Carbon::createFromFormat('H:i', $request->start_hour);
                        $startHourOffWork = $start_hour_time->lt($schedule_start_hour_time) || $start_hour_time->gt($schedule_end_hour_time);
                        if ($startHourOffWork) {
                            $start_hour_error = "*Hora de inicio fuera del horario de trabajo";
                            $is_valid = false;
                        }
                        else
                        {
                            // Verificar que la hora de inicio no sea anterior a la hora actual si la fecha es hoy, si es que fue editada
                            $startHourChanged = $original_start_datetime->hour !== $new_start_datetime->hour || $original_start_datetime->minute !== $new_start_datetime->minute;
                            if ($dateChanged || $startHourChanged) {
                                if ($meeting_date->equalTo($today)) {
                                    $startMinutesDiff = 5;
                                    $min_start_time = $now->copy()->subMinutes($startMinutesDiff);

                                    if ($new_start_datetime->lt($min_start_time)) {
                                        $start_hour_error = "Si la cita es hoy, la hora de inicio no puede ser anterior a la hora actual";
                                        $is_valid = false;
                                    }
                                }
                            }
                        }
                    }

                    // Aplicar validaciones para hora de término, si es que se puede modificar
                    if ($can_modify_end)
                    {
                        // Verificar que la hora de término sea dentro del horario de trabajo, si es que fue editada
                        $end_hour_time = Carbon::createFromFormat('H:i', $request->end_hour);
                        $endHourOffWork = $end_hour_time->lt($schedule_start_hour_time) || $end_hour_time->gt($schedule_end_hour_time);
                        if ($endHourOffWork) {
                            $end_hour_error = "*Hora de término fuera del horario de trabajo";
                            $is_valid = false;
                        }
                        else
                        {
                            // Verificar que la hora de término sea al menos 5 minutos más tarde de la hora de inicio, si es que fue editada
                            $new_end_datetime = $db_end_datetime->copy()->setTimezone($userTimezone)->startOfMinute();
                            $endHourChanged = $original_end_datetime->hour !== $new_end_datetime->hour || $original_end_datetime->minute !== $new_end_datetime->minute;
                            if ($startHourChanged || $endHourChanged) {
                                $endMinutesDiff = 5;
                                $min_end_time = $new_start_datetime->copy()->addMinutes($endMinutesDiff);

                                if ($new_end_datetime->lt($min_end_time)) {
                                    $end_hour_error = "La hora de término debe ser al menos 5 minutos más tarde que la hora de inicio";
                                    $is_valid = false;
                                }
                            }
                        }
                    }
                }

                // Revisar que no haya citas del mismo cliente en el mismo horario, si cambió el tiempo
                if ($dateChanged || $startHourChanged || $endHourChanged) {
                    $clientMeetings = Meeting::where('client_id', $meeting->client_id)
                    ->where('id', '!=', $request->id)
                    ->where(function($q) use ($db_start_datetime, $db_end_datetime) {
                        $q->where('start_date', '<', $db_end_datetime)
                        ->where('end_date',   '>', $db_start_datetime);
                    })
                    ->exists();

                    if ($clientMeetings)
                    {
                        $client = Client::find($meeting->client_id);
                        $client_error = "El cliente ".$client->name." ya está asignado a una cita en ese horario.";
                        $is_valid = false;
                    }
                }

                // Revisar que no haya citas del mismo usuario en el mismo horario, si es que cambió algo
                $userChanged = $meeting->user_id !== $request->user_id;
                if ($dateChanged || $startHourChanged || $endHourChanged || $userChanged) {
                    $userMeetings = Meeting::where('user_id', $request->user_id)
                    ->where('id', '!=', $request->id)
                    ->where(function($q) use ($db_start_datetime, $db_end_datetime) {
                        $q->where('start_date', '<', $db_end_datetime)
                        ->where('end_date',   '>', $db_start_datetime);
                    })
                    ->exists();

                    if ($userMeetings)
                    {
                        $user = User::find($request->user_id);
                        $user_error = "El usuario ".$user->name." ya está asignado a una cita en ese horario.";
                        $is_valid = false;
                    }
                }

                // Revisar si está todo bien
                if ($is_valid == true)
                {
                    //Editar cita
                    $anyChange = $dateChanged || $startHourChanged || $endHourChanged || $userChanged;

                    // Si hubo algún cambio, modificar
                    if ($anyChange) {
                        if ($can_modify_start && ($dateChanged || $startHourChanged)) {
                            $meeting->start_date = $db_start_datetime;
                        }
                        if ($can_modify_start && $dateChanged || $can_modify_end && $endHourChanged) {
                            $meeting->end_date = $db_end_datetime;
                        }
                        if ($userChanged) $meeting->user_id = $request->user_id;
                        $meeting->save();
                    }

                    // Enviar notificación de que la cita se modificó en este punto
                    // En base a lo que fue modificado (fecha/hora inicio/hora término -> Se reagendó)

                    //Enviar respuesta
                    return response()->json([
                        'success' => true,
                        'meeting' => $this->getMeetingDataFormatted($meeting),
                    ]);
                }
                else
                {
                    return response()->json([
                        'success' => false,
                        'meeting' => $this->getMeetingDataFormatted($meeting),
                        'date_error' => $date_error,
                        'start_hour_error' => $start_hour_error,
                        'end_hour_error' => $end_hour_error,
                        'client_error' => $client_error,
                        'user_error' => $user_error,
                    ]);
                }
            } else {
                // Si no se encontró, enviar error 404
                return response()->json([
                    'success' => false,
                    'message' => 'Cita no encontrada'
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getMeetingDataFormatted($meeting)
    {
        return [
            'id'         => $meeting->id,
            'start_date' => $meeting->start_date->toISOString(),
            'end_date'   => $meeting->end_date->toISOString(),
            'reminder_done' => $meeting->reminder_done,
            'client_id' => $meeting->client_id,
            'user_id' => $meeting->user_id,
            'client_name'  => $meeting->client->name,
            'user_name'    => $meeting->user->name,
        ];
    }
}
