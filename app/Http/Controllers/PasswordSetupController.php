<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PasswordSetupController extends Controller
{
    public function showSetupForm($token)
    {
        $record = DB::table('password_reset_tokens')->where('token', $token)->first();

        if (!$record || Carbon::parse($record->created_at)->addMinutes(60)->isPast()) {
            abort(404, 'Token inválido o expirado');
        }

        return view('auth.password_setup', ['token' => $token, 'email' => $record->email]);
    }

    public function setPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'password' => 'required|confirmed|min:8',
        ]);

        $record = DB::table('password_reset_tokens')->where('token', $request->token)->first();

        if (!$record) abort(404);

        $user = User::where('email', $record->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();

        // Borrar token
        DB::table('password_reset_tokens')->where('email', $user->email)->delete();

        return redirect()->route('login')->with('success', 'Contraseña creada correctamente');
    }
}
