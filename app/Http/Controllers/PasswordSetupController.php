<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class PasswordSetupController extends Controller
{
    public function showSetupForm($token)
    {
        $record = DB::table('password_reset_tokens')->where('token', $token)->first();

        if (!$record || Carbon::parse($record->created_at)->addMinutes(60)->isPast()) {
            return response()
            ->view('auth.password_setup_invalid', [], 410);
        }

        return view('auth.password_setup', [
            'token' => $token,
            'email' => $record->email
        ]);
    }

    public function setPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'password' => 'required|string|max:255',
        ]);

        // Revisar si existe token en DB
        $record = DB::table('password_reset_tokens')->where('token', $request->token)->first();
        if (!$record) {
            return back()
            ->withErrors(['record_not_found' => 'No se ha encontrado el token en DB']);
        }

        // Revisar si existe usuario con el email
        $user = User::where('email', $record->email)->first();
        if (!$user) {
            return back()
            ->withErrors(['user_not_found' => 'No se ha encontrado un usuario con este email']);
        }

        // Revisar si la contraseña de al menos 8 caracteres
        $newPassword = $request->password;
        if (strlen($newPassword) < 8) {
            return back()
            ->withErrors(['password_error' => 'La contraseña debe tener al menos 8 caracteres']);
        }

        // Revisar si la contraseña es diferente a la actual
        $isNew = !Hash::check($newPassword, $user->password);
        if (!$isNew) {
            return back()
            ->withErrors(['password_error' => 'La nueva contraseña no puede ser igual a la anterior']); //->withInput()
        }

        // Actualizar contraseña en DB
        $user->password = Hash::make($newPassword);
        $user->save();

        // Borrar token
        DB::table('password_reset_tokens')->where('email', $user->email)->delete();

        // Redirigir a login
        return redirect()->route('login')->with('success', 'Contraseña creada correctamente');
    }
}
