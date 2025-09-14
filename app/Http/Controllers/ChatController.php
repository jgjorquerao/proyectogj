<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Models\Client;
use App\Models\User;
use App\Models\Company;
use App\Models\Conversation;
use Illuminate\Http\Request;
use App\Models\Whatsapp;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /* public function index()
    {
        return view('chat.chat');
    } */

    public function getChats()
    {
        // Obtenemos el usuario logueado
        $user = auth()->user();

        // Creamos la consulta base
        $query = Conversation::with([
            'client',
            'messages' => function ($q) {
                $q->orderBy('currentdate', 'asc');
            }
        ])->whereHas('client', function ($q) use ($user) {
            $q->where('company_id', $user->company_id);
        });

        // Si no es admin, filtramos solo las conversaciones asignadas a su user_id
        if (!$user->is_admin) {
            $query->where('user_id', $user->id);
        }

        $conversations = $query->get();

        $chatsData = $conversations->map(function ($conv) {
            $messagesData = $conv->messages->map(function ($msg) {
                return [
                    'id' => $msg->id,
                    'text' => $msg->message,
                    'sender' => $msg->client_message == 0 ? 'user' : 'contact',
                    'date' => $msg->currentdate,
                ];
            });

            $lastMsg = $messagesData->last();

            return [
                'id' => $conv->id,
                'name' => $conv->client->name ?? $conv->client->phone, // 👈 ahora desde client
                'avatar' => 'https://placehold.co/100x100/A3A3A3/FFFFFF?text=' . substr($conv->client->phone, -2),
                'lastMessage' => $lastMsg ? $lastMsg['text'] : '',
                'messages' => $messagesData,
                'client_id' => $conv->client->id,
                'client_rut' => $conv->client->rut,
                'client_phone' => $conv->client->phone,
                'user_id' => $conv->user->id ?? null,
                'control_status' => $conv->control_status,
            ];
        });

        return response()->json($chatsData);
    }

    public function editChatUser(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'user_id' => 'nullable|integer',
        ]);

        // Revisar si el chat existe
        $chat = Conversation::find($request->id);
        if ($chat) {
            $newUserId = $request->user_id;
            $isNew = $newUserId != $chat->user_id;
            if ($isNew == true) {
                if ($newUserId == null) {
                    // Guardar el user_id como null
                    $chat->user_id = $newUserId;
                    $chat->save();
                }
                else
                {
                    // Revisar si el usuario existe para guardarlo
                    $user = User::find($newUserId);
                    if ($user) {
                        $chat->user_id = $newUserId;
                        $chat->save();
                    }
                }
            }

            return response()->json([
                'success' => true,
            ]);
        }
        else
        {
            return response()->json([
                'success' => false,
            ]);
        }
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'conversation_id' => 'required|integer',
            'message' => 'required|string',
        ]);

        $conversation = Conversation::with('client')->find($request->conversation_id);

        if (!$conversation) {
            return response()->json([
                'success' => false,
                'error' => 'Conversación no encontrada',
            ], 404);
        }

        // Crear el mensaje
        $msg = new Whatsapp();
        $msg->conversation_id = $conversation->id;
        $msg->message = $request->message;
        $msg->client_message = 0; // enviado por nosotros
        $msg->processed = 1;
        $msg->currentdate = now();

        $clientPhone = $conversation->client->phone;
        $clientPhone = ltrim($clientPhone, '+');

        $user = Auth::user();
        $company = $user->company;

        // Llamada a WhatsApp Cloud API
        $url = "https://graph.facebook.com/v22.0/" . $company->PHONE_NUMBER_ID . "/messages";

        try {
            $response = Http::withToken($company->WHATSAPP_ACCESS_TOKEN)
                ->post($url, [
                    "messaging_product" => "whatsapp",
                    "to" => ltrim($clientPhone, '+'),
                    "type" => "text",
                    "text" => ["body" => $request->message],
                ]);

            $waData = $response->json();
            $msg->wa_message_id = $waData['messages'][0]['id'] ?? null;
            $msg->save();

            event(new NewMessage($msg, $request->temp_id));

            return response()->json([
                'success' => true,
                'conversation_id' => $conversation->id,
                'whatsapp_response' => $response->json(),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    //FALTA USAR
    /* public function deleteMessage(Request $request)
    {
        $request->validate([
            'conversation_id' => 'required|integer',
            'message_id' => 'required|integer',
        ]);

        $message = Whatsapp::find($request->message_id);

        if (!$message) {
            return response()->json([
                'success' => false,
                'error' => 'Mensaje no encontrado',
            ], 404);
        }

        // 1️⃣ Eliminar en WhatsApp usando la API oficial
        if ($message->wa_message_id) { // este campo debe existir y contener el id de WhatsApp
            $url = "https://graph.facebook.com/v22.0/" . env('WHATSAPP_PHONE_ID') . "/messages";
            try {
                $response = Http::withToken(env('WHATSAPP_TOKEN'))
                    ->post($url, [
                        "messaging_product" => "whatsapp",
                        "status" => "deleted",
                        "message_id" => $message->wa_message_id,
                    ]);

                // Opcional: loguear la respuesta
                \Log::info("WhatsApp delete response", $response->json());
            } catch (\Exception $e) {
                \Log::error("Error al eliminar mensaje en WhatsApp: " . $e->getMessage());
                // Puedes decidir continuar o retornar error
            }
        }

        // 2️⃣ Eliminar en tu base de datos
        $message->delete();

        return response()->json(['success' => true]);
    } */

    //Evento desde n8n
    public function triggerEvent(Request $request)
    {
        $request->validate([
            'client_phone'    => 'required|string',
            'message'         => 'required|string',
            'client_message'  => 'required|boolean',
            'company_id'      => 'required|integer',
            'name'            => 'sometimes|string',
        ]);

        // 1️⃣ Buscar o crear cliente
        $client = Client::firstOrCreate(
            [
                'phone'      => $request->client_phone,
                'company_id' => $request->company_id,
            ],
            [
                'name' => $request->name ?? $request->client_phone,
            ]
        );

        // 2️⃣ Buscar o crear conversación para ese cliente
        $conversation = Conversation::firstOrCreate(
            [
                'client_id' => $client->id,
            ],
            [
                'user_id'      => null,
                'control_status' => 1,        // por defecto IA
            ]
        );

        // 3️⃣ Crear mensaje asociado a la conversación
        $msg = new Whatsapp();
        $msg->message         = $request->message;
        $msg->client_message  = $request->client_message;
        $msg->currentdate     = now();
        $msg->conversation_id = $conversation->id;
        $msg->processed = ($request->client_message == 0) ? 1 : 0;
        $msg->save();

        // 4️⃣ Disparar el evento Pusher
        event(new NewMessage($msg));

        return response()->json([
            'success'         => true,
            'conversation_id' => $conversation->id,
            'message_id'      => $msg->id,
            'client_id'       => $client->id
        ]);
    }

    public function toggleControlStatus($id)
    {
        $conversation = Conversation::findOrFail($id);
        $conversation->control_status = !$conversation->control_status;
        $conversation->save();
    }
}
