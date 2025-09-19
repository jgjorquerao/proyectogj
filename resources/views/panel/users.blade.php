<!-- Panel de lista de usuarios -->
<div id="user-list-panel" class="w-full md:w-1/3 h-full flex-shrink-0 p-5 md:pe-0">
    <div class="flex flex-col h-full content-list bg-gray-800 rounded-xl border border-gray-700">
        <!-- Título y botón de nuevo usuario -->
        <div class="p-4 flex justify-center items-center border-b border-gray-700 relative">
            <h2 class="text-xl font-bold text-white">Usuarios</h2>
            <button class="absolute right-4 flex btn-custom font-semibold py-2 px-4 rounded-lg shadow-md cursor-pointer" data-modal-open="addUserModal">
                <x-heroicon-s-user-plus class="w-4 h-4" />
            </button>
        </div>
        <!-- Barra de búsqueda de usuarios -->
        <div class="p-4 border-b border-gray-700">
            <input type="text" placeholder="Buscar un usuario" class="w-full px-4 py-2 text-sm bg-gray-700 rounded-lg focus:outline-none placeholder-slate-500">
        </div>
        <!-- Contenedor de las tarjetas de usuario -->
        <div id="user-list" class="flex-1 overflow-y-auto">
            <!-- Los usuarios se renderizarán aquí con JavaScript -->
            <!-- Skeleton lista de usuarios -->
            <div id="chat-items-skeleton">
                <div class="p-4 space-y-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div class="flex-1 space-y-2 py-1">
                            <div class="h-4 bg-gray-500 rounded w-3/4"></div>
                            <div class="h-3 bg-gray-500 rounded w-1/2"></div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div class="flex-1 space-y-2 py-1">
                            <div class="h-4 bg-gray-500 rounded w-2/3"></div>
                            <div class="h-3 bg-gray-500 rounded w-1/3"></div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div class="flex-1 space-y-2 py-1">
                            <div class="h-4 bg-gray-500 rounded w-3/5"></div>
                            <div class="h-3 bg-gray-500 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Panel de ventana de usuario -->
<div id="user-detail-panel" class="w-full md:w-2/3 h-full flex-shrink-0 flex flex-col p-5">
    <div id="user-empty-state" class="flex items-center justify-center h-full rounded-xl text-gray-500 bg-gray-800 border border-gray-700">
        <span class="hidden md:block text-lg">Selecciona un usuario</span>
    </div>

    <div id="user-detail-card" class="w-full h-full m-auto rounded-xl shadow-2xl overflow-hidden hidden bg-gray-800 border border-gray-700">
        <!-- El detalle del usuario se genera a traves del JS -->
    </div>
</div>

<!-- Modal de opciones para reestablecer contraseña -->
<div id="resetPassModal" class="fixed inset-0 bg-slate-900/80 backdrop-blur-[2px] flex items-center justify-center p-4 z-50 hidden">
    <div class="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-md p-6 relative">
        <button id="closeResetPassBtn" class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500" data-modal-close>✕</button>
        <h3 class="text-xl font-semibold text-white mb-2">Nueva Contraseña</h3>
        <p class="text-slate-400 mb-6">Elige una de las opciones:</p>
        <div class="space-y-4">
            <!-- Opción 1: Manual -->
            <button id="manualResetPassBtn" class="w-full text-left flex items-start gap-4 p-4 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
                <div>
                    <h4 class="font-semibold text-white">Establecer contraseña manualmente</h4>
                    <p class="text-sm text-slate-400">Crea una nueva contraseña para el usuario directamente.</p>
                </div>
            </button>
            <!-- Opción 2: Enviar Correo -->
            <button id="mailResetPassBtn" class="w-full text-left flex items-start gap-4 p-4 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                </svg>
                <div>
                    <h4 class="font-semibold text-white">Enviar enlace de restablecimiento</h4>
                    <p class="text-sm text-slate-400">El usuario recibirá un correo para cambiar su contraseña.</p>
                </div>
            </button>
        </div>
    </div>
</div>

<!-- Modal para restablecer contraseña manualmente -->
<div id="manualResetPassModal" class="fixed inset-0 bg-slate-900/80 backdrop-blur-[2px] flex items-center justify-center p-4 z-50 hidden">
    <div class="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-md p-6 relative">
        <button class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500 cursor-pointer" data-modal-close>✕</button>
        <h3 class="text-xl font-semibold text-white mb-6">Crear nueva contraseña</h3>
        <form id="manualResetPassForm">
            <div class="space-y-4">
                <!-- Sección de la nueva contraseña -->
                <div class="relative mb-1">
                    <label for="newPassInput" class="block text-sm font-medium text-slate-400 mb-2">Nueva contraseña</label>
                    <div>
                        <input type="password" id="newPassInput" class="w-full bg-slate-700 border border-slate-600 rounded-lg pr-12 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required="" autofocus="" autocomplete="off">
                        <button id="newPassToggle" type="button" class="absolute inset-y-0 right-0 top-6 px-3 flex items-center text-slate-400 hover:text-white transition-colors">
                            <div class="eye-slash"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg></div>
                            <div class="eye-normal hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></div>
                        </button>
                    </div>
                </div>
                <div class="text-red-500 text-sm" id="errorNewPass"></div>
                <!-- Sección de confirmar la contraseña -->
                <div class="relative mb-1">
                    <label for="confirmPassInput" class="block text-sm font-medium text-slate-400 mb-2">Confirmar nueva contraseña</label>
                    <div>
                        <input type="password" id="confirmPassInput" class="w-full bg-slate-700 border border-slate-600 rounded-lg pr-12 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required="" autofocus="" autocomplete="off">
                        <button id="confirmPassToggle" type="button" class="absolute inset-y-0 right-0 top-6 px-3 flex items-center text-slate-400 hover:text-white transition-colors">
                            <div class="eye-slash"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg></div>
                            <div class="eye-normal hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></div>
                        </button>
                    </div>
                </div>
                <div class="text-red-500 text-sm" id="errorConfirmPass"></div>
            </div>
            <!-- Sección de condiciones de validación -->
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
            <!-- Sección de botones -->
            <div class="flex justify-end gap-4 mt-8">
                <button type="button" id="backManualResetBtn" class="bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold py-2 px-4 rounded-full shadow-md transition-colors">
                    Volver
                </button>
                <button type="submit" class="btn-custom font-semibold py-2 px-4 shadow-md">
                    Confirmar
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Modal de correo enviado -->
<div id="mailResetPassModal" class="fixed inset-0 bg-slate-900/80 backdrop-blur-[2px] flex items-center justify-center p-4 z-50 modal-transition hidden">
    <div class="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-md p-6 relative text-center">
        <button class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500 cursor-pointer" data-modal-close>✕</button>
        <div class="flex flex-col items-center gap-4">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg></div>
            <h3 class="text-2xl font-semibold text-white">¡Enlace enviado!</h3>
            <p id="mailResetPassText" class="text-slate-400 text-center"></p>
            <button id="confirmPassMailSentBtn" class="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors">
                Aceptar
            </button>
        </div>
    </div>
</div>

<!-- Modal ADD -->
<div id="addUserModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px]" data-on-open="resetUserForm">
    <div class="card-custom rounded-lg w-96 p-6 relative shadow-2xl">
        <button class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500 cursor-pointer" data-modal-close>✕</button>
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
            <button type="submit" class="w-full btn-custom text-white py-2 rounded-lg hover:bg-blue-600 mt-4 w-30 cursor-pointer">Agregar</button>
        </form>

    </div>
</div>

<!-- Nuevo modal para confirmar la eliminación de usuario -->
<div id="deleteUserModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px]" data-on-open="setupDeleteUserModal">
    <div class="card-custom rounded-xl w-96 p-6 relative shadow-2xl text-center">
        <button class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500 cursor-pointer" data-modal-close>✕</button>
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