<!-- Panel de lista de chats -->
<div id="chat-list-panel" class="w-full md:w-1/3 h-full flex-shrink-0">
    <div class="flex flex-col h-full content-list border-r border-gray-200">
        <!-- Título y botón de nuevo chat -->
        <div class="p-4 flex justify-center items-center border-b border-gray-200">
            <div class="flex items-center space-x-2">
                <h2 class="text-xl font-bold">Chat</h2>
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

<!-- Template de ventana de chat (oculto, para clonar con JS) -->
<template id="chat-window-template">
    <div class="flex flex-col h-full bg-gray-100 relative">
        <div class="flex items-center px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
            <button id="back-button" class="md:hidden mr-4 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div class="chat-profile-btn flex items-center px-1 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <img class="chat-avatar w-8 h-8 rounded-full mr-2"
                    onerror="this.onerror=null;this.src='https://placehold.co/100x100/A3A3A3/FFFFFF?text=U';">
                <h3 class="chat-name font-semibold"></h3>
            </div>
            <!-- Switch -->
            <div class="ml-auto">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="ai-manual-toggle sr-only peer">
                    <div class="toggle-container w-20 h-8 flex items-center justify-center rounded-full bg-gray-400 peer-checked:bg-green-500 transition-colors">
                        <span class="label-manual text-xs font-medium text-white">Manual</span>
                        <span class="label-ia hidden text-xs font-medium text-white">Agente IA</span>
                    </div>
                </label>
            </div>
        </div>
        <div id="messages-container" class="flex-1 p-4 overflow-y-auto space-y-3"></div>
        <div class="flex items-center p-4 border-t border-gray-200 bg-white">
            <input type="text" id="message-input" autocomplete="off" class="message-input flex-1 px-4 py-2 text-sm bg-gray-100 rounded-full focus:outline-none" placeholder="Escribe un mensaje">
            <button id="send-button" class="ml-2 p-2 btn-custom rounded-full transition-transform transform active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </button>
        </div>
        <div class="chat-profile-box absolute top-0 inset-x-0 z-10">
            <div class="w-full h-full relative">
                <button class="chat-profile-close-btn absolute top-2 right-2 mr-1 text-xl text-gray-800 hover:text-gray-500">✕</button>
                <div class="w-full h-full bg-white rounded-lg shadow-xl p-1 h-10 flex ring-1 ring-gray-300">
                    <!-- Panel de izquierda -->
                    <div class="w-1/3 pr-1">
                        <ul class="space-y-2">
                            <li>
                                <button class="chat-profile-tab-btn tab-btn flex w-full text-xs text-left py-2 px-2 rounded-lg text-gray-900 bg-gray-100" data-tab="profile">
                                    <div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg></div>
                                    Resumen
                                </button>
                            </li>
                            @if(Auth::user()->is_admin)
                            <li>
                                <button class="chat-user-tab-btn tab-btn flex w-full text-xs text-left py-2 px-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900" data-tab="user">
                                    <div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg></div>
                                    Usuario
                                </button>
                            </li>
                            @endif
                        </ul>
                    </div>
                    <!-- Panel de la derecha -->
                    <div class="w-2/3 flex flex-col justify-between px-2 py-2 border-l border-gray-200">
                        <div id="profile-tab" class="chat-profile-tab tab-content p-1">
                            <!-- Se rellena a través de JS -->
                        </div>
                        @if(Auth::user()->is_admin)
                        <div id="user-tab" class="chat-user-tab tab-content hidden py-1">
                            <!-- Se rellena a través de JS -->
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Modal para confirmar cambio de estado de chat -->
<div id="changeStatusModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px] z-50">
    <div class="card-custom rounded-xl w-96 p-6 relative shadow-2xl text-center">
        <button id="closeChangeStatusModal" class="absolute top-2 right-2 text-white hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h3 class="text-lg font-bold mb-4 text-white">Confirmar Cambio de Estado</h3>
        <p id="changeStatusModalText" class="text-gray-300 mb-6">¿Deseas cambiar a modo <span id="statusName" class="font-bold"></span>?</p>
        <div class="flex justify-center space-x-4">
            <button id="cancelChangeStatusBtn" class="px-5 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors w-30">
                Cancelar
            </button>
            <button id="confirmChangeStatusBtn" class="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors w-30">
                Confirmar
            </button>
        </div>
    </div>
</div>

