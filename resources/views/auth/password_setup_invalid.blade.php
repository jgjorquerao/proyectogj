<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enlace inválido</title>
    <link href="{{ asset('img/gylerr.png') }}" rel="icon">
    @vite([
        'resources/sass/app.scss',
        'resources/css/app.css',
        'resources/css/panel.css',
    ])
</head>
<body class="dark-mode">
    <div class="bg-slate-900 text-white flex items-center justify-center min-h-screen">
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-8 max-w-md text-center">
            <div class="flex text-center items-center justify-center mb-4">
                <div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg></div>
                <h1 class="text-2xl font-semibold">Enlace expirado</h1>
            </div>
            <p class="text-slate-300 mb-6">
                Este enlace para configurar tu contraseña ha expirado. Solicita uno nuevo al administrador.
            </p>
            <!-- <a href="{{ route('login') }}"
            class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
            Volver al inicio de sesión
            </a> -->
        </div>
    </div>
</body>
</html>