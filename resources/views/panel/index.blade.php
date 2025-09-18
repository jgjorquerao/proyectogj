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

<body class="h-screen flex items-center justify-center">

    <!-- Contenedor principal de la aplicación -->
    <div id="app-container" class="w-full h-full mx-auto flex overflow-hidden shadow-2xl bg-gray-900 relative">
        <!-- Contenedor de todo menos profile box -->
        <div class="w-full h-full mx-auto flex overflow-hidden relative md:static">
            <!-- Contenedor del botón de menú de hamburguesa, solo visible en móviles -->
            <div id="menu-button-container" class="md:hidden absolute top-2 left-4 z-50 transition-all duration-300 ease-in-out p-1 bg-white rounded-full shadow-md">
                <button id="menu-button" class="p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            <!-- Nuevo Panel de navegación lateral izquierda (fixed para móviles, estático para escritorio) -->
            <div id="nav-panel" class="absolute inset-y-0 left-0 z-40 md:relative md:flex flex-col items-center justify-between p-3 bg-gray-800 md:w-16 text-white flex-shrink-0 transition-transform duration-300 ease-in-out">
                <!-- Íconos de navegación -->
                <div class="flex flex-col items-center space-y-6 w-full">
                    <!-- Título y botón de cerrar menú para móviles -->
                    <div class="flex justify-between items-center w-full md:hidden mb-4">
                        <button id="close-menu-button" class="p-2 text-white hover:bg-gray-700 rounded-full transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <!-- Ícono de Chat (activo por defecto) -->
                    <!-- bg-gray-700  -->
                    <button id="btn-chat" type="button" class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                        <x-heroicon-s-chat-bubble-oval-left-ellipsis class="w-6 h-6 text-white" />
                        <span class="ml-1 text-sm md:hidden">Chats</span>
                    </button>
                    <!-- Ícono de Configuración (ejemplo) -->
                    @if(Auth::user()->is_admin)
                    <button id="btn-users" type="button" class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                        <x-heroicon-s-users class="w-6 h-6 text-white" />
                        <span class="ml-1 text-sm md:hidden">Usuarios</span>
                    </button>
                    <button id="btn-products" type="button" class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                        <x-heroicon-s-squares-plus class="w-6 h-6 text-white" />
                        <span class="ml-1 text-sm md:hidden">Productos</span>
                    </button>
                    @endif
                    <button id="btn-meetings" type="button" class="menu-btn p-2 w-full text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                        <x-heroicon-s-calendar-days class="w-6 h-6 text-white" />
                        <span class="ml-1 text-sm md:hidden">Citas</span>
                    </button>
                </div>
                <!-- Perfil de usuario o avatar -->
                <div class="absolute mb-2 bottom-0 left-0 right-0 p-2">
                    <div id="profileBtn" class="flex py-1 w-full items-center justify-center text-white hover:bg-gray-700 rounded-full transition-colors duration-200 space-x-2 cursor-pointer">
                        <span class="w-10 h-10 m-0 rounded-full border-2 border-gray-700 bg-gray-300 flex items-center justify-center font-bold text-gray-800">
                            {{ strtoupper(substr(Auth::user()->name, 0, 1)) }}
                        </span>
                        <div id="profile-sidebar-name" class="ml-1 text-sm items-center justify-center md:hidden">{{ Auth::user()->name }}</div>
                    </div>
                </div>
            </div>

            <!-- Contenedor que maneja el deslizamiento en móviles -->
            <div id="main-content" class="flex w-full h-full transition-transform duration-300 ease-in-out bg-gray-900">
                <!-- Panel de lista de chats -->
                @include('panel.' . $menu)
            </div>
        </div>

        <!-- Cuadro de perfil del usuario -->
        <div id="profileBox" class="profile-box absolute bottom-0 left-0 z-50">
            <div class="w-full relative">
                <button id="closeProfileBtn" class="absolute top-2 right-2 mr-1 text-xl text-white hover:text-gray-500">✕</button>
                <div class="bg-slate-800 rounded-lg shadow-xl p-6 min-h-[12rem] flex flex-col justify-between border border-gray-600">
                    <!-- Información del usuario -->
                    <div>
                        <div class="flex items-center space-x-4 mb-4">
                            <img src="https://placehold.co/40x40/cccccc/333333?text={{ strtoupper(substr(Auth::user()->name, 0, 1)) }}"
                                alt="Foto de perfil" class="w-16 h-16 m-0 rounded-full border-2 border-gray-500">
                        </div>
                        <!-- Sección del nombre -->
                        <div class="mb-0">
                            <div class="text-sm text-gray-500">Nombre</div>
                            <!-- Mostrar -->
                            <div id="profileNameDisplay" class="flex items-center justify-between">
                                <span id="profileNameText" class="py-1 my-1 text-white">{{ Auth::user()->name }}</span>
                                <button id="profileNameEditBtn" class="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                                        <path d="M21.731 2.269a2.25 2.25 0 0 0-3.182 0l-14.881 14.88a2.25 2.25 0 0 0-.583 1.015l-1.55 4.65a.75.75 0 0 0 .964 1.014l4.65-1.55a2.25 2.25 0 0 0 1.015-.583l14.88-14.88a2.25 2.25 0 0 0 0-3.182ZM15.75 6.75l-4.25 4.25-1.5-1.5 4.25-4.25 1.5 1.5Z" />
                                    </svg>
                                </button>
                            </div>
                            <!-- Editar -->
                            <div id="profileNameEditer" class="hidden flex-col items-end pt-1">
                                <input type="text" id="profileNameInput" class="w-full px-2 py-1 mb-2 rounded-md text-white ring-1 ring-gray-500 focus:outline-none" autocomplete="off" required>
                            </div>
                            <div id="profileNameEditOptions" class="invisible flex w-full space-x-2">
                                <div id="profileNameError" class="flex w-full text-red-500 text-xs"></div>
                                <button id="profileNameSaveBtn" class="p-0 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-100">
                                    <p class="px-3 py-1 text-xs text-white">OK</p>
                                </button>
                            </div>
                        </div>
                        <!-- Sección del rol -->
                        <div class="mb-8">
                            <div class="text-sm text-gray-500">Rol</div>
                            <div class="flex items-center justify-between">
                                <span class="py-1 my-1 text-white">{{ Auth::user()->is_admin ? 'Administrador' : 'Trabajador' }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- Botón para cerrar sesión -->
                    <div class="w-full mb-5 border-b-1 border-gray-200"></div>
                    <button id="profileLogoutBtn" class="w-full text-red-500 py-2 px-4 rounded-lg border-1 border-gray-300 bg-gray-700 shadow-md hover:bg-gray-600 transition-colors duration-100">
                        Cerrar sesión
                    </button>
                    <form id="profileLogoutForm" action="{{ route('logout') }}" method="POST" class="hidden">
                        @csrf
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal para mensajes de notificación -->
    <div id="messageModal" class="fixed bottom-4 right-4 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-xl hidden z-50 transition-opacity duration-300">
        <p id="messageText"></p>
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