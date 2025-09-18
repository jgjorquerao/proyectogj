<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva contraseña</title>
    <link href="{{ asset('img/gylerr.png') }}" rel="icon">
    @vite([
        'resources/sass/app.scss',
        'resources/css/app.css',
        'resources/css/panel.css',
        'resources/js/password_setup.js',
    ])
</head>
<body class="dark-mode">
    <div class="fixed inset-0 bg-slate-900 flex items-center justify-center p-4">
        <div class="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-md p-6 relative">
            <h3 class="text-xl font-semibold text-white mb-6">Crear nueva contraseña</h3>

            {{-- Errores de validación de Laravel --}}
            <div class="text-sm text-red-500">
                @error('record_not_found')<li>{{ $message }}</li>@enderror
                @error('user_not_found')<li>{{ $message }}</li>@enderror
            </div>

            <form id="manualResetPassForm" method="POST" action="{{ route('password.set') }}">
                @csrf
                <input type="hidden" name="token" value="{{ $token }}">
                <input type="hidden" name="email" value="{{ $email }}">

                <div class="space-y-4">
                    <!-- Nueva contraseña -->
                    <div class="relative">
                        <label for="newPassInput" class="block text-sm font-medium text-slate-400 mb-2">Nueva contraseña</label>
                        <input type="password" id="newPassInput" name="password" required autocomplete="off"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg pr-12 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <button id="newPassToggle" type="button" class="absolute inset-y-0 right-0 top-6 px-3 flex items-center text-slate-400 hover:text-white transition-colors">
                            <div class="eye-slash"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg></div>
                            <div class="eye-normal hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></div>
                        </button>
                        <div class="text-red-500 text-sm mt-1" id="errorNewPass">@error('password_error'){{ $message }}@enderror</div>
                    </div>

                    <!-- Confirmar contraseña -->
                    <div class="relative">
                        <label for="confirmPassInput" class="block text-sm font-medium text-slate-400 mb-2">Confirmar nueva contraseña</label>
                        <input type="password" id="confirmPassInput" name="password_confirmation" required autocomplete="off"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg pr-12 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <button id="confirmPassToggle" type="button" class="absolute inset-y-0 right-0 top-6 px-3 flex items-center text-slate-400 hover:text-white transition-colors">
                            <div class="eye-slash"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg></div>
                            <div class="eye-normal hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></div>
                        </button>
                        <div class="text-red-500 text-sm mt-1" id="errorConfirmPass"></div>
                    </div>
                </div>

                <!-- Condiciones -->
                <div class="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                    <ul class="space-y-2 text-sm">
                        <li id="passLengthCondition" class="flex items-center gap-2 text-slate-500">
                            <span class="user-pass-condition-circle rounded-full bg-slate-500"></span>
                            <span>Al menos 8 caracteres</span>
                        </li>
                        <li id="passMatchCondition" class="flex items-center gap-2 text-slate-500">
                            <span class="user-pass-condition-circle rounded-full bg-slate-500"></span>
                            <span>Las contraseñas deben coincidir</span>
                        </li>
                    </ul>
                </div>

                <div class="flex justify-end mt-8">
                    <button type="submit" class="btn-custom font-semibold py-2 px-4 shadow-md">
                        Confirmar
                    </button>
                </div>
            </form>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            setupPasswordForm(false);
        });
    </script>
</body>
</html>