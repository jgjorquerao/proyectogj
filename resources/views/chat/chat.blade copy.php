<!DOCTYPE html>
<html lang="es">

<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ env('APP_NAME')}}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* En móviles, el main-content no se desplaza, sino que la barra de navegación se superpone. */
        @media (max-width: 767px) {
            #main-content {
                transform: translateX(0) !important;
            }

            #nav-panel {
                width: 16rem; /* Ancho completo en móvil */
                transform: translateX(-100%);
            }

            .nav-active #nav-panel {
                transform: translateX(0);
            }

            .nav-active #menu-button-container {
                left: 16rem; /* Ajustar el desplazamiento del botón */
                background-color: rgb(31 41 55); /* Color de fondo para que se integre con la barra de navegación */
            }
            
            /* Ocultar el botón de menú de hamburguesa cuando el panel está activo */
            .nav-active #menu-button-container {
                display: none;
            }
        }
    </style>
    @vite(['resources/css/app.css','resources/js/chat.js','resources/js/pusher_setup.js'])
</head>

<body class="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">

    <!-- Contenedor principal de la aplicación -->
    <div id="app-container" class="w-full h-[90vh] max-w-7xl mx-auto flex rounded-2xl overflow-hidden shadow-2xl bg-white relative md:static">
        
        <!-- Contenedor del botón de menú de hamburguesa, solo visible en móviles -->
        <div id="menu-button-container" class="md:hidden absolute top-2 left-4 z-50 transition-all duration-300 ease-in-out p-1 bg-white rounded-full shadow-md">
            <button id="menu-button" class="p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>

        <!-- Nuevo Panel de navegación lateral izquierda (fixed para móviles, estático para escritorio) -->
        <div id="nav-panel" class="absolute inset-y-0 left-0 z-40 md:relative md:flex flex-col items-center justify-between p-3 bg-gray-900 md:w-16 text-white flex-shrink-0 transition-transform duration-300 ease-in-out">
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
                <button class="p-2 w-full text-white bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                    <x-heroicon-s-chat-bubble-oval-left-ellipsis class="w-6 h-6 text-white" />
                    <span class="text-sm md:hidden">Chats</span>
                </button>
                <!-- Ícono de Configuración (ejemplo) -->
                <button class="p-2 w-full text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors duration-200 flex items-center justify-center cursor-pointer">
                    <x-heroicon-s-users class="w-6 h-6 text-white" />
                    <span class="text-sm md:hidden">Usuarios</span>
                </button>
            </div>
            <!-- Perfil de usuario o avatar -->
            <div class="flex items-center space-x-2">
                <img src="https://placehold.co/40x40/cccccc/333333?text=PF" alt="Foto de perfil" class="w-10 h-10 rounded-full border-2 border-gray-700">
            </div>
        </div>

        <!-- Contenedor que maneja el deslizamiento en móviles -->
        <div id="main-content" class="flex w-full h-full transition-transform duration-300 ease-in-out">
            <!-- Panel de lista de chats -->
            <div id="chat-list-panel" class="w-full md:w-1/3 h-full flex-shrink-0">
                <div class="flex flex-col h-full bg-white border-r border-gray-200">
                    <!-- Título y botón de nuevo chat -->
                    <div class="p-4 flex justify-center items-center border-b border-gray-200">
                        <div class="flex items-center space-x-2">
                            <h2 class="text-xl font-bold">Chat X</h2>
                        </div>
                    </div>
                    <!-- Barra de búsqueda de chats -->
                    <div class="p-4 border-b border-gray-200">
                        <input type="text" placeholder="Buscar un chat" class="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg focus:outline-none">
                    </div>
                    <!-- Contenedor de las tarjetas de chat -->
                    <div id="chat-items-container" class="flex-1 overflow-y-auto">
                        <!-- Los chats se renderizarán aquí con JavaScript -->
                        <!-- Skeleton lista de chats -->
                        <div id="chat-items-skeleton">
                            <div class="p-4 space-y-4">
                                <div class="flex items-center space-x-4 animate-pulse">
                                    <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div class="flex-1 space-y-2 py-1">
                                        <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                                        <div class="h-3 bg-gray-300 rounded w-1/2"></div>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-4 animate-pulse">
                                    <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div class="flex-1 space-y-2 py-1">
                                        <div class="h-4 bg-gray-300 rounded w-2/3"></div>
                                        <div class="h-3 bg-gray-300 rounded w-1/3"></div>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-4 animate-pulse">
                                    <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div class="flex-1 space-y-2 py-1">
                                        <div class="h-4 bg-gray-300 rounded w-3/5"></div>
                                        <div class="h-3 bg-gray-300 rounded w-1/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Panel de ventana de chat -->
            <div id="chat-window-panel" class="w-full md:w-2/3 h-full flex-shrink-0 flex flex-col">
                <div class="flex items-center justify-center h-full text-gray-500">
                    <span class="hidden md:block text-lg">Selecciona un chat para comenzar</span>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const menuButton = document.getElementById('menu-button');
            const closeMenuButton = document.getElementById('close-menu-button');
            const appContainer = document.getElementById('app-container');

            // Abrir el menú
            if (menuButton && appContainer) {
                menuButton.addEventListener('click', () => {
                    appContainer.classList.add('nav-active');
                });
            }

            // Cerrar el menú
            if (closeMenuButton && appContainer) {
                closeMenuButton.addEventListener('click', () => {
                    appContainer.classList.remove('nav-active');
                });
            }
        });
    </script>
</body>

</html>
