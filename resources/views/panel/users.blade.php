<style>
    /* Estilo del pseudo-elemento para el texto del switch */
    .toggle-label::after {
        content: "Manual";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        font-weight: 600;
        color: #4b5563;
        /* Color de texto para el estado "Manual" */
        transition: color 0.3s ease-in-out;
    }

    /* Cambia el texto y el color del texto cuando el checkbox está activado */
    /* Corrección: Se cambió '.toggle-peer:checked' a '.peer:checked' para que funcione correctamente */
    .peer:checked+.toggle-label::after {
        content: "Agente IA";
        color: white;
        /* Color de texto para el estado "Agente IA" */
    }
</style>

<!-- Panel de lista de usuarios -->
<div id="user-list-panel" class="w-full md:w-1/3 h-full flex-shrink-0">
    <div class="flex flex-col h-full content-list border-r border-gray-200">
        <!-- Título y botón de nuevo chat -->
        <div class="p-4 flex justify-center items-center border-b border-gray-200 relative">
            <h2 class="text-xl font-bold">Usuarios</h2>
            <button id="openModal" class="absolute right-4 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                <x-heroicon-s-plus-circle class="w-6 h-6 text-gray-500" />
            </button>
        </div>
        <!-- Barra de búsqueda de chats -->
        <div class="p-4 border-b border-gray-200">
            <input type="text" placeholder="Buscar un usuario" class="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg focus:outline-none">
        </div>
        <!-- Contenedor de las tarjetas de chat -->
        <div id="user-list" class="flex-1 overflow-y-auto">
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

<!-- Panel de ventana de usuario -->
<div id="user-detail-panel" class="w-full md:w-2/3 h-full flex-shrink-0 flex flex-col">
    <div class="flex items-center justify-center h-full text-gray-500">
        <span class="hidden md:block text-lg">Selecciona un usuario</span>
    </div>
</div>

<div id="addUserModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px]">
    <div class="card-custom rounded-lg w-96 p-6 relative shadow-2xl">
        <button id="closeAddModal" class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500">✕</button>
        <h3 class="text-lg font-bold mb-4 text-white">Agregar Usuario</h3>
        <form id="addUserForm" class="space-y-4">
            <div>
                <label for="email" class="form-label form-label-custom">Nombre</label>
                <input id="name" name="name" type="text" class="form-control form-control-custom w-full px-4 py-1" value="" autocomplete="email" required="" autofocus="">
                <div class="text-red-500 text-sm mt-1" id="errorName"></div>
            </div>
            <div>
                <label for="email" class="form-label form-label-custom">Correo Electrónico</label>
                <input id="email" type="email" class="form-control form-control-custom w-full px-4 py-1" name="email" value="" autocomplete="email" required="" autofocus="">
                <div class="text-red-500 text-sm mt-1" id="errorEmail"></div>
            </div>
            <button type="submit" class="w-full btn-custom text-white py-2 rounded-lg hover:bg-blue-600 mt-4">Agregar</button>
        </form>

    </div>
</div>

<!-- Nuevo modal para confirmar la eliminación de usuario -->
<div id="deleteUserModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px] z-50">
    <div class="card-custom rounded-xl w-96 p-6 relative shadow-2xl text-center">
        <button id="closeDeleteModal" class="absolute top-2 right-2 text-white mr-2 mt-2 hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h3 class="text-lg font-bold mb-4 text-white">Confirmar Eliminación</h3>
        <p class="text-gray-300 mb-6">¿Estás seguro de que deseas eliminar a <span id="userNameToDelete" class="font-bold"></span>?</p>
        <div class="flex justify-center space-x-4">
            <button id="cancelDeleteBtn" class="px-5 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors">
                Cancelar
            </button>
            <button id="confirmDeleteBtn" class="px-5 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                Eliminar
            </button>
        </div>
    </div>
</div>

<!-- Modal para mensajes de notificación -->
<div id="messageModal" class="fixed bottom-4 right-4 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-xl hidden z-50 transition-opacity duration-300">
    <p id="messageText"></p>
</div>