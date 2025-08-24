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

<!-- Modal para confirmar cambio de estado de chat -->
<div id="changeStatusModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px] z-50">
    <div class="card-custom rounded-xl w-96 p-6 relative shadow-2xl text-center">
        <button id="closeChangeStatusModal" class="absolute top-2 right-2 text-white hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h3 class="text-lg font-bold mb-4 text-white">Confirmar Cambio de Estado</h3>
        <p class="text-gray-300 mb-6">¿Deseas cambiar a modo <span id="statusName" class="font-bold"></span>?</p>
        <div class="flex justify-center space-x-4">
            <button id="cancelChangeStatusBtn" class="px-5 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors">
                Cancelar
            </button>
            <button id="confirmChangeStatusBtn" class="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                Confirmar
            </button>
        </div>
    </div>
</div>
