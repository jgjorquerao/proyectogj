<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getUsers()
    {
        $creator = Auth::user();

        $users = User::where('company_id', $creator->company_id)
        ->where('is_admin', false)           // Excluye a los admins
        ->where('id', '!=', $creator->id)
        ->orderBy('name', 'asc')
        ->get(['id', 'name', 'email', 'created_at', 'password']) // Puedes agregar otros campos si quieres
        ->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at,
            ];
        });

        return response()->json($users);
    }

    public function getUsersForMeetings()
    {
        $creator = Auth::user();

        $users = User::where('company_id', $creator->company_id)
            ->orderBy('name', 'asc')
            ->get(['id', 'name']); // Puedes agregar otros campos si quieres

        return response()->json($users);
    }

    public function deleteUser(Request $request)
    {
        // Validar que se obtuvo el id del usuario
        $request->validate([
            'id' => 'required|integer',
        ]);

        // Buscar cita
        $user = User::find($request->id);

        if ($user) {
            // Si se encontró, borrar
            $user->delete();

            return response()->json([
                'success' => true
            ], 200);
        } else {
            // Si no se encontró, enviar error 404
            return response()->json([
                'success' => false,
            ], 404);
        }
    }

    public function store(Request $request)
    {
        $creator = Auth::user();

        if (!$creator->is_admin) {
            abort(403, 'No tienes permisos para crear usuarios');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'is_admin' => false,
            'company_id' => $creator->company_id,
            'password' => null,
        ]);

        $this->sendPasswordSetupEmail($user);

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }

    public function editUserName(Request $request)
    {
        $request->validate([
            'id' => 'nullable|integer',
            'name' => 'required|string|max:255',
        ]);

        $user = Auth::user();
        if ($request->id != null) {
            $user = User::find($request->id);
        }
        if ($user) {
            $newName = $request->name;
            $isNew = $newName != $user->name;
            if ($isNew == true) {
                $user->name = $newName;
                $user->save();
            }

            return response()->json([
                'success' => true,
            ]);
        }
        else
        {
            // Si no se encontró, enviar error 404
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }
    }

    public function editUserEmail(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'email' => 'required|string|max:255',
        ]);

        $user = User::find($request->id);
        if ($user) {
            $newEmail = $request->email;
            $isNew = $newEmail != $user->email;
            if ($isNew == true) {
                $user->email = $newEmail;
                $user->save();
            }

            return response()->json([
                'success' => true,
            ]);
        }
        else
        {
            // Si no se encontró, enviar error 404
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }
    }

    public function editUserPasswordManual(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'password' => 'required|string|max:255',
        ]);

        $user = User::find($request->id);
        if ($user) {
            $newPassword = $request->password;
            $isNew = !Hash::check($newPassword, $user->password);
            if ($isNew == true) {
                $user->password = Hash::make($newPassword);
                $user->save();

                return response()->json([
                    'success' => true,
                ]);
            }
            else
            {
                return response()->json([
                    'success' => false,
                    'message' => 'La nueva contraseña no puede ser igual a la anterior'
                ]);
            }
        }
        else
        {
            // Si no se encontró, enviar error 404
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }
    }

    public function editUserPasswordMail(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
        ]);

        $user = User::find($request->id);
        if ($user) {
            $this->sendPasswordSetupEmail($user);
        }
        else
        {
            // Si no se encontró, enviar error 404
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }
    }

    protected function sendPasswordSetupEmail(User $user)
    {
        // Generar token temporal
        $token = Str::random(60);
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $user->email],
            [
                'token' => $token,
                'created_at' => Carbon::now(),
            ]
        );

        // Enviar email
        Mail::send('emails.password_email', [
            'token' => $token,
            'user' => $user,
        ], function ($message) use ($user) {
            $message->to($user->email)
                ->subject('Configura tu contraseña');
        });
    }
}
