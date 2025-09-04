<style>
    /* input[type="time"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    } */

    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }

    .custom-diff-opacity {
        opacity: 35%;
    }
</style>

<!-- Contenedor principal -->
<div class="flex flex-col md:flex-row h-full w-full">

    <!-- Panel de calendario -->
    <div class="flex-1 p-8 flex justify-center items-center">
        <!-- Mensaje mientras el calendario está cargando -->
        <div id="calendar-temp" class="text-center text-lg text-gray-500">
            Obteniendo citas...
        </div>

        <!-- Contenedor de calendario -->
        <div id="calendar-container" class="hidden w-full max-w-xl bg-white border border-gray-300 rounded-xl shadow-lg p-4 md:p-8">
            <!-- Header del calendario -->
            <div class="flex justify-between items-center mb-6">
                <button id="calendar-prev-btn" class="text-gray-500 hover:bg-gray-200 p-2 rounded-full transition-colors duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button id="monthYearOpenBtn" class="w-3/4 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-100">
                    <h2 id="calendar-header" class="text-center text-lg md:text-xl font-bold text-gray-800"></h2>
                </button>
                <button id="calendar-next-btn" class="text-gray-500 hover:bg-gray-200 p-2 rounded-full transition-colors duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Dias de la semana -->
            <div class="grid grid-cols-7 gap-2 md:gap-4 mb-4 text-center text-sm md:text-base font-medium text-gray-500">
                <div>L</div>
                <div>M</div>
                <div>M</div>
                <div>J</div>
                <div>V</div>
                <div>S</div>
                <div>D</div>
            </div>

            <!-- Tabla de dias -->
            <div id="calendar-days-grid" class="grid grid-cols-7 gap-2 md:gap-4 text-center">
                <!-- Los dias se generan a traves del JS -->
            </div>
        </div>
    </div>

    <!-- Panel de lista de citas -->
    <div id="meeting-list-panel" class="w-full md:w-1/3 flex-shrink-0 flex flex-col">
        <div class="flex flex-col h-full border-l border-gray-200 content-list">

            <!-- Título y botón de nueva cita -->
            <div class="p-4 flex justify-center items-center border-b border-gray-200 relative">
                <h2 class="text-xl font-bold">Citas</h2>
                <button id="openAddModal" class="absolute right-4 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                    <x-heroicon-s-plus-circle class="w-6 h-6 text-gray-500" />
                </button>
            </div>

            <!-- Barra de búsqueda de citas -->
            <div class="p-4 border-b border-gray-200">
                <h3 id="meeting-list-date" class="text-gray-700" style="min-height:1.5rem;"></h3>
            </div>

            <!-- Contenedor de las tarjetas de citas -->
            <div id="meeting-list" class="flex-1 overflow-y-auto">
                <!-- Skeleton lista de citas -->
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
</div>

<!-- Modal para crear una cita -->
<div id="addMeetingModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px]">
    <div id="addMeetingModalContent" class="card-custom rounded-lg w-96 p-6 relative shadow-2xl">
        <button id="closeAddModal" class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500">✕</button>
        <h3 class="text-lg font-bold mb-4 text-white">Agregar Cita</h3>
        <form id="addMeetingForm" class="space-y-4">
            <div>
                <label for="addDateInput" class="form-label form-label-custom mb-1">Fecha</label>
                <input id="addDateInput" name="addDateInput" type="date" class="form-control form-control-custom w-full px-4 py-1" min="" value="" required="" autofocus="">
                <div class="text-red-500 text-sm mt-1" id="addDateError"></div>
            </div>
            <!-- Inputs de hora -->
            <div class="mb-4 z-10">
                <div class="flex gap-4">
                    <!-- Hora de inicio -->
                    <div class="w-1/2">
                        <label for="addStartHourInput" class="form-label form-label-custom mb-1">Hora de inicio</label>
                        <input id="addStartHourInput" name="addStartHourInput" type="text" class="form-control form-control-custom w-full px-4 py-1" value="" required="" autofocus="" placeholder="--:--" readonly>
                    </div>
                    <!-- Hora de termino -->
                    <div class="w-1/2">
                        <label for="addEndHourInput" class="form-label form-label-custom mb-1">Hora de término</label>
                        <input id="addEndHourInput" name="addEndHourInput" type="text" class="form-control form-control-custom w-full px-4 py-1" value="" required="" autofocus="" placeholder="--:--" readonly>
                    </div>
                </div>
                <div class="flex text-red-500 text-sm mt-2 mb-0" id="addStartHourError"></div>
                <div class="flex text-red-500 text-sm mb-0" id="addEndHourError"></div>
            </div>
            <div>
                <label for="addClientInput" class="form-label form-label-custom mb-1">Cliente</label>
                <select id="addClientInput" name="addClientInput" class="form-control form-control-custom w-full px-4 py-1" required="" autofocus=""></select>
                <div class="text-red-500 text-sm mt-1" id="addClientError"></div>
            </div>
            <div>
                <label for="addUserInput" class="form-label form-label-custom mb-1">Usuario</label>
                <select id="addUserInput" name="addUserInput" class="form-control form-control-custom w-full px-4 py-1" required="" autofocus=""></select>
                <div class="text-red-500 text-sm mt-1" id="addUserError"></div>
            </div>
            <button type="submit" class="w-full btn-custom text-white py-2 rounded-lg hover:bg-blue-600 mt-4">Agregar</button>
        </form>
    </div>
</div>

<!-- Modal para editar una cita -->
<div id="editMeetingModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px]">
    <div id="editMeetingModalContent" class="card-custom rounded-lg w-96 p-6 relative shadow-2xl">
        <button id="closeEditModal" class="absolute top-2 right-2 text-white mr-4 hover:text-gray-500">✕</button>
        <h3 class="text-lg font-bold mb-4 text-white">Editar Cita</h3>
        <form id="editMeetingForm" class="space-y-4">
            <div>
                <label for="editDateInput" class="form-label form-label-custom mb-1">Fecha</label>
                <input id="editDateInput" name="editDateInput" type="date" class="form-control form-control-custom w-full px-4 py-1" min="" value="" required="" autofocus="">
                <div class="text-red-500 text-sm mt-1" id="editDateError"></div>
            </div>
            <!-- Inputs de hora -->
            <div class="mb-4 z-10">
                <div class="flex gap-4">
                    <!-- Hora de inicio -->
                    <div class="w-1/2">
                        <label for="editStartHourInput" class="form-label form-label-custom mb-1">Hora de inicio</label>
                        <input id="editStartHourInput" name="editStartHourInput" type="text" class="form-control form-control-custom w-full px-4 py-1" value="" required="" autofocus="" placeholder="--:--" readonly>
                    </div>
                    <!-- Hora de termino -->
                    <div class="w-1/2">
                        <label for="editEndHourInput" class="form-label form-label-custom mb-1">Hora de término</label>
                        <input id="editEndHourInput" name="editEndHourInput" type="text" class="form-control form-control-custom w-full px-4 py-1" value="" required="" autofocus="" placeholder="--:--" readonly>
                    </div>
                </div>
                <div class="flex text-red-500 text-sm mt-2 mb-0" id="editStartHourError"></div>
                <div class="flex text-red-500 text-sm mb-0" id="editEndHourError"></div>
            </div>
            <div>
                <label for="editClientInput" class="form-label form-label-custom mb-1">Cliente</label>
                <select id="editClientInput" name="editClientInput" class="form-control form-control-custom w-full px-4 py-1" required="" autofocus="" disabled></select>
                <div class="text-red-500 text-sm mt-1" id="editClientError"></div>
            </div>
            <div>
                <label for="editUserInput" class="form-label form-label-custom mb-1">Usuario</label>
                <select id="editUserInput" name="editUserInput" class="form-control form-control-custom w-full px-4 py-1" required="" autofocus=""></select>
                <div class="text-red-500 text-sm mt-1" id="editUserError"></div>
            </div>
            <button type="submit" class="w-full btn-custom text-white py-2 rounded-lg hover:bg-blue-600 mt-4">Editar</button>
        </form>
    </div>
</div>

<!-- Modal para confirmar la eliminación de cita -->
<div id="deleteMeetingModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px] z-50">
    <div class="card-custom rounded-xl w-96 p-6 relative shadow-2xl text-center">
        <button id="closeDeleteModal" class="absolute top-2 right-2 text-white mr-2 mt-2 hover:text-gray-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h3 class="text-lg font-bold mb-4 text-white">Confirmar Eliminación</h3>
        <p class="text-gray-300 mb-6">¿Estás seguro de que deseas eliminar esta cita?</p>
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

<!-- Modal del time picker -->
<div id="time-picker-modal" class="hidden absolute mt-2 z-50 w-64">
    <div class="bg-white rounded-xl p-4 shadow-xl text-center border border-gray-200">
        <div class="flex justify-center items-center mb-4">
            <!-- Hour -->
            <div class="relative w-1/4">
                <input type="text" id="hour-input" class="w-full text-2xl font-bold text-center text-gray-700 bg-gray-100 border-2 border-purple-400 rounded-xl py-2 px-1 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" maxlength="2" autocomplete="off">
                <span class="text-xs text-gray-400 mt-2 block">Hora</span>
            </div>
            <span class="text-4xl font-light text-gray-400 mx-2 mb-8">:</span>
            <!-- Minute -->
            <div class="relative w-1/4">
                <input type="text" id="minute-input" class="w-full text-2xl font-bold text-center text-gray-700 bg-gray-100 border-2 border-purple-400 rounded-xl py-2 px-1 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" maxlength="2" autocomplete="off">
                <span class="text-xs text-gray-400 mt-2 block">Minutos</span>
            </div>
            <!-- AM/PM -->
            <div class="flex flex-col ml-4">
                <button type="button" id="ampm-am" class="text-sm font-semibold rounded-xl px-4 py-2 mb-2 transition-all duration-100">AM</button>
                <button type="button" id="ampm-pm" class="text-sm font-semibold rounded-xl px-4 py-2 transition-all duration-100">PM</button>
            </div>
        </div>
        <div class="flex justify-between items-center text-gray-400">
            <div class="flex w-full">
                <button id="cancel-time" type="button" class="w-1/2 text-sm text-gray-500 font-medium px-2 py-2 rounded-lg bg-white border-1 border-gray-400 hover:bg-gray-100 transition-colors duration-100">CANCELAR</button>
                <button id="ok-time" type="button" class="w-1/2 text-sm text-purple-500 font-semibold px-2 py-2 rounded-lg border-1 border-gray-400 hover:bg-gray-100 transition-colors duration-100 ml-2">OK</button>
                <!-- <button id="cancel-time" type="button" class="w-1/2 text-sm text-white font-semibold px-2 py-2 rounded-lg bg-red-500 hover:bg-red-300 transition-colors duration-100">CANCELAR</button>
                <button id="ok-time" type="button" class="w-1/2 text-sm text-white font-semibold px-2 py-2 rounded-lg bg-green-500 hover:bg-green-300 transition-colors duration-100 ml-2">OK</button> -->
            </div>
        </div>
    </div>
</div>

<!-- Modal para la selección de mes/año -->
<div id="monthYearModal" class="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-50 hidden">
    <div class="bg-white rounded-xl shadow-lg p-4 w-11/12 max-w-sm">
        <!-- Header del modal -->
        <div class="flex justify-between items-center mb-4">
            <button id="monthYearPrevBtn" class="text-gray-500 hover:bg-gray-200 p-2 rounded-full transition-colors duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <h3 id="monthYearHeader" class="text-lg md:text-xl font-bold text-gray-800"></h3>
            <button id="monthYearNextBtn" class="text-gray-500 hover:bg-gray-200 p-2 rounded-full transition-colors duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        <!-- Tabla de meses -->
        <div id="monthYearGrid" class="grid grid-cols-3 gap-3 text-center mb-4 text-sm">
            <!-- Los meses se generan a traves del JS -->
        </div>
        <div class="text-right">
            <button id="monthYearCloseBtn" class="hidden px-3 py-1 bg-gray-200 rounded-lg text-gray-800 text-sm font-medium hover:bg-gray-300 transition-colors duration-100">Close</button>
        </div>
    </div>
</div>

<!-- Modal para mensajes de notificación -->
<div id="messageModal" class="fixed bottom-4 right-4 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-xl hidden z-50 transition-opacity duration-300">
    <p id="messageText"></p>
</div>