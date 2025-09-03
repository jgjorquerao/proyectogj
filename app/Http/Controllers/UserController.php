<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
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
            ->get(['id', 'name', 'email']); // Puedes agregar otros campos si quieres

        return response()->json($users);
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

        // Generar token temporal
        $token = Str::random(60);
        DB::table('password_reset_tokens')->insert([
            'email' => $user->email,
            'token' => $token,
            'created_at' => Carbon::now(),
        ]);

        // Enviar email
        /* Mail::send('emails.password_setup', ['token' => $token], function ($message) use ($user) {
            $message->to($user->email)
                ->subject('Configura tu contraseña');
        });
 */
        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }
}
