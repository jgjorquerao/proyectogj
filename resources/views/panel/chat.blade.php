<!-- Panel de lista de chats -->
<div id="chat-list-panel" class="w-full md:w-1/3 h-full flex-shrink-0 p-5 md:pe-0">
    <div class="flex flex-col h-full bg-gray-800 rounded-xl border border-gray-700">
        <!-- Título y botón de nuevo chat -->
        <div class="p-4 flex justify-center items-center border-b border-gray-700">
            <div class="flex items-center space-x-2">
                <h2 class="text-xl font-bold text-white">Chat</h2>
            </div>
        </div>
        <!-- Barra de búsqueda de chats -->
        <div class="p-4 border-b border-gray-700">
            <input type="text" placeholder="Buscar un chat" class="w-full px-4 py-2 text-sm bg-gray-700 rounded-lg focus:outline-none placeholder-slate-400 focus:ring-2 focus:ring-indigo-500">
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
<div id="chat-window-panel" class="w-full md:w-2/3 h-full flex-shrink-0 flex flex-col p-5">
    <div class="flex items-center justify-center h-full text-gray-500 rounded-xl bg-gray-800 border border-gray-700">
        <span class="hidden md:block text-lg">Selecciona un chat para comenzar</span>
    </div>
</div>

<!-- Template de ventana de chat (oculto, para clonar con JS) -->
<template id="chat-window-template">
    <div class="flex flex-col h-full bg-gray-800 relative rounded-xl border border-gray-700">
        <div class="flex items-center px-4 py-2 bg-gray border-b border-gray-700 shadow-sm">
            <button id="back-button" class="md:hidden mr-4 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div class="chat-profile-btn flex items-center px-1 py-2 rounded-xl hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                <img class="chat-avatar w-8 h-8 rounded-full mr-2"
                    onerror="this.onerror=null;this.src='https://placehold.co/100x100/364153/FFFFFF?text=U';">
                <h3 class="chat-name font-semibold text-white"></h3>
            </div>
            <!-- Switch -->
            <div class="ml-auto">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="ai-manual-toggle sr-only peer">
                    <div class="toggle-container w-20 h-8 flex items-center justify-center rounded-full bg-gray-400 peer-checked:bg-green-600 transition-colors">
                        <span class="label-manual text-xs font-medium text-white">Manual</span>
                        <span class="label-ia hidden text-xs font-medium text-white">Agente IA</span>
                    </div>
                </label>
            </div>
        </div>
        <!-- <div id="messages-container" class="flex-1 p-4 overflow-y-auto space-y-3"></div> -->
        <div class="relative flex-1 p-4 overflow-y-auto ">
            <div class="absolute inset-0" style="background-image: url('{{ asset('img/bg_tiled.png') }}'); background-repeat: repeat; opacity:0.1; pointer-events:none; background-size:220px;"></div>
            <div id="messages-container" class="space-y-3"></div>
        </div>
        <div class="flex items-center p-4 border-t border-gray-700">
            <input type="text" id="message-input" autocomplete="off" class="message-input flex-1 px-4 py-2 text-sm bg-gray-700 rounded-full focus:outline-none placeholder-slate-400 text-white focus:ring-2 focus:ring-indigo-500" placeholder="Escribe un mensaje">
            <button id="send-button" class="ml-2 p-2 btn-custom rounded-full transition-transform transform active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </button>
        </div>
        <div class="chat-profile-box absolute top-0 inset-x-0 z-10">
            <div class="w-full h-full relative">
                <button class="chat-profile-close-btn absolute top-2 right-2 mr-1 text-xl text-white hover:text-gray-500">✕</button>
                <div class="w-full h-full rounded-lg shadow-xl p-1 h-10 flex border border-gray-600 rounded-xl bg-slate-800">
                    <!-- Panel de izquierda -->
                    <div class="w-1/3 pr-1">
                        <ul class="space-y-2">
                            <li>
                                <button class="chat-profile-tab-btn tab-btn flex w-full text-xs text-left py-2 px-2 rounded-lg" data-tab="profile">
                                    <div class="mr-2">
                                        <x-heroicon-o-information-circle class="w-4 h-4 text-slate-300" />
                                    </div>
                                    Resumen
                                </button>
                            </li>
                            @if(Auth::user()->is_admin)
                            <li>
                                <button class="chat-user-tab-btn tab-btn flex w-full text-xs text-left py-2 px-2 rounded-lg hover:bg-gray-600 hover:text-slate-200" data-tab="user">
                                    <div class="mr-2">
                                        <x-heroicon-o-users class="w-4 h-4 text-slate-300" />
                                    </div>
                                    Usuario
                                </button>
                            </li>
                            @endif
                        </ul>
                    </div>
                    <!-- Panel de la derecha -->
                    <div class="w-2/3 flex flex-col justify-between px-2 py-2 border-l border-gray-600">
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

