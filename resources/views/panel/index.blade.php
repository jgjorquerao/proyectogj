<!DOCTYPE html>
<html lang="es">

<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="manifest" href="{{ asset('pwa.json') }}">
    <title>Defiant AI</title>
    <link href="{{ asset('img/gylerr.png') }}" rel="icon">
    @vite([
        'resources/sass/app.scss',
        'resources/css/panel.css',
        'resources/js/panel.js',
    ])
</head>

<body class="h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">

    <!-- Contenedor principal de la aplicación -->
    <div id="app-container"
        class="w-full h-full mx-auto flex rounded-2xl overflow-hidden shadow-2xl bg-white relative md:static">

        <!-- Contenedor del botón de menú de hamburguesa, solo visible en móviles -->
        <div id="menu-button-container"
            class="md:hidden absolute top-2 left-4 z-50 transition-all duration-300 ease-in-out p-1 bg-white rounded-full shadow-md">
            <button id="menu-button"
                class="p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>

        <!-- Nuevo Panel de navegación lateral izquierda (fixed para móviles, estático para escritorio) -->
        <div id="nav-panel"
            class="absolute inset-y-0 left-0 z-40 md:relative md:flex flex-col items-center justify-between p-3 bg-gray-900 md:w-16 text-white flex-shrink-0 transition-transform duration-300 ease-in-out">
            <!-- Íconos de navegación -->
            <div class="flex flex-col items-center space-y-6 w-full">
                <!-- Título y botón de cerrar menú para móviles -->
                <div class="flex justify-between items-center w-full md:hidden mb-4">
                    <button id="close-menu-button"
                        class="p-2 text-white hover:bg-gray-700 rounded-full transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <!-- Ícono de Chat (activo por defecto) -->
                <!-- bg-gray-700  -->
                <button id="btn-chat"
                    class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                    <x-heroicon-s-chat-bubble-oval-left-ellipsis class="w-6 h-6 text-white" />
                    <span class="text-sm md:hidden">Chats</span>
                </button>
                <!-- Ícono de Configuración (ejemplo) -->
                @if(Auth::user()->is_admin)
                    <button id="btn-users"
                        class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                        <x-heroicon-s-users class="w-6 h-6 text-white" />
                        <span class="text-sm md:hidden">Usuarios</span>
                    </button>
                    <button id="btn-products"
                        class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                        <x-heroicon-s-squares-plus class="w-6 h-6 text-white" />
                        <span class="text-sm md:hidden">Productos</span>
                    </button>
                @endif
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path
                        d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                </svg>

            </div>
            <!-- Perfil de usuario o avatar -->
            <div class="flex items-center space-x-2">
                <img src="https://placehold.co/40x40/cccccc/333333?text=PF" alt="Foto de perfil"
                    class="w-10 h-10 rounded-full border-2 border-gray-700">
            </div>
        </div>

        <!-- Contenedor que maneja el deslizamiento en móviles -->
        <div id="main-content" class="flex w-full h-full transition-transform duration-300 ease-in-out">
            <!-- Panel de lista de chats -->
            @include('panel.' . $menu)
        </div>
    </div>

    <script>
        window.currentMenu = '{{$menu}}';

        //APP para descargar
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").then(() => {
                /* console.log("✅ Service Worker registrado"); */
            }).catch(err => {
                console.error("❌ Error registrando SW:", err);
            });
        }
    </script>

</body>

</html>