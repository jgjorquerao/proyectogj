import axios from "axios";

// Inicializar Axios
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.querySelector(
    'meta[name="csrf-token"]'
).content;
axios.defaults.headers.common["Content-Type"] = "application/json";

// Variables generales
let calendarTemp,
    calendarContainer,
    calendarDaysGrid,
    calendarHeader,
    calendarPrevBtn,
    calendarNextBtn,
    meetingListContainer,
    meetingListDate,
    messageModal,
    messageTextEl;
let selectedYear = null;
let selectedMonth = null;
let selectedDay = null;
let lastSelectedDate = null;
let selectedMeetingId = null;
let schedule = null;
let meetings = []; // Array de citas cargadas
let clientList = []; // Array de clientes
let userList = []; // Array de usuarios
let validClientIds = []; // IDs válidos de clientes
let validUserIds = []; // IDs válidos de usuarios
let clientsFilled = false; // Boolean para asegurarse de que select de clientes esté relleno en el modal de agregar/editar
let usersFilled = false; // Boolean para asegurarse de que select de usuarios esté relleno en el modal de agregar/editar

// Variables del timePicker
let timePickerModal,
    timePickerCancelBtn,
    timePickerOkBtn,
    timePickerHourInput,
    timePickerMinuteInput,
    timePickerAM,
    timePickerPM;
let isPickerPM = false,
    activeTimeInput = null;

// Variables del modal de agregar
let openAddModal,
    closeAddModal,
    addModal,
    addModalContent,
    addMeetingForm,
    addDateInput,
    addStartHourInput,
    addEndHourInput,
    addClientInput,
    addUserInput,
    addDateError,
    addStartHourError,
    addEndHourError,
    addClientError,
    addUserError;

// Variables del modal de editar
let closeEditModal,
    editModal,
    editModalContent,
    editMeetingForm,
    editDateInput,
    editStartHourInput,
    editEndHourInput,
    editClientInput,
    editUserInput,
    editDateError,
    editStartHourError,
    editEndHourError,
    editClientError,
    editUserError;

// Variables del modal de eliminar
let deleteModal,
    closeDeleteModal,
    confirmDeleteBtn,
    cancelDeleteBtn;

// Variables del modal de mes/año
let monthYearModal,
    monthYearGrid,
    monthYearPrevBtn,
    monthYearNextBtn,
    monthYearHeader,
    monthYearOpenBtn,
    monthYearCloseBtn;

window.addEventListener("load", function () {
    initMeetingSection();
});

window.initMeetingSection = () => {
    // Referencias generales del DOM
    calendarTemp = document.getElementById('calendar-temp');
    calendarContainer = document.getElementById('calendar-container');
    calendarDaysGrid = document.getElementById('calendar-days-grid');
    calendarHeader = document.getElementById('calendar-header');
    calendarPrevBtn = document.getElementById('calendar-prev-btn');
    calendarNextBtn = document.getElementById('calendar-next-btn');
    meetingListContainer = document.getElementById("meeting-list");
    meetingListDate = document.getElementById("meeting-list-date");
    messageModal = document.getElementById("messageModal");
    messageTextEl = document.getElementById("messageText");

    // Referencias del DOM del timepicker
    timePickerModal = document.getElementById('time-picker-modal');
    timePickerCancelBtn = document.getElementById('cancel-time');
    timePickerOkBtn = document.getElementById('ok-time');
    timePickerHourInput = document.getElementById('hour-input');
    timePickerMinuteInput = document.getElementById('minute-input');
    timePickerAM = document.getElementById('ampm-am');
    timePickerPM = document.getElementById('ampm-pm');

    // Referencias del DOM del modal de agregar
    openAddModal = document.getElementById("openAddModal");
    closeAddModal = document.getElementById("closeAddModal");
    addModal = document.getElementById("addMeetingModal");
    addModalContent = document.getElementById("addMeetingModalContent");
    addMeetingForm = document.getElementById("addMeetingForm");
    addDateInput = document.getElementById("addDateInput");
    addStartHourInput = document.getElementById("addStartHourInput");
    addEndHourInput = document.getElementById("addEndHourInput");
    addClientInput = document.getElementById("addClientInput");
    addUserInput = document.getElementById("addUserInput");
    addDateError = document.getElementById("addDateError");
    addStartHourError = document.getElementById("addStartHourError");
    addEndHourError = document.getElementById("addEndHourError");
    addClientError = document.getElementById("addClientError");
    addUserError = document.getElementById("addUserError");

    // Referencias del DOM del modal de editar
    closeEditModal = document.getElementById("closeEditModal");
    editModal = document.getElementById("editMeetingModal");
    editModalContent = document.getElementById("editMeetingModalContent");
    editMeetingForm = document.getElementById("editMeetingForm");
    editDateInput = document.getElementById("editDateInput");
    editStartHourInput = document.getElementById("editStartHourInput");
    editEndHourInput = document.getElementById("editEndHourInput");
    editClientInput = document.getElementById("editClientInput");
    editUserInput = document.getElementById("editUserInput");
    editDateError = document.getElementById("editDateError");
    editStartHourError = document.getElementById("editStartHourError");
    editEndHourError = document.getElementById("editEndHourError");
    editClientError = document.getElementById("editClientError");
    editUserError = document.getElementById("editUserError");

    // Referencias del DOM del modal de eliminar
    deleteModal = document.getElementById("deleteMeetingModal");
    closeDeleteModal = document.getElementById("closeDeleteModal");
    confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

    // Referencias del DOM del modal de mes/año
    monthYearModal = document.getElementById('monthYearModal');
    monthYearGrid = document.getElementById('monthYearGrid');
    monthYearPrevBtn = document.getElementById('monthYearPrevBtn');
    monthYearNextBtn = document.getElementById('monthYearNextBtn');
    monthYearHeader = document.getElementById('monthYearHeader');
    monthYearOpenBtn = document.getElementById('monthYearOpenBtn');
    monthYearCloseBtn = document.getElementById('monthYearCloseBtn');

    // Abrir modal ADD
    openAddModal.addEventListener("click", () => {
        addMeetingForm.reset();
        cleanAddErrors();
        setAddModalData();
        addModal.classList.remove("hidden");
    });

    // Cerrar modal ADD
    closeAddModal.addEventListener("click", () => {
        addModal.classList.add("hidden");
    });

    // Cerrar modal ADD al hacer click fuera del contenido
    addModal.addEventListener("click", (e) => {
        if (e.target === addModal) {
            addModal.classList.add("hidden");
        }
    });

    // Agregar cita
    addMeetingForm.addEventListener("submit", handleAddMeeting);

    // Cerrar modal de editar
    closeEditModal.addEventListener("click", () => {
        editModal.classList.add("hidden");
    });

    // Cerrar modal de editar al hacer click fuera del contenido
    editModal.addEventListener("click", (e) => {
        if (e.target === editModal) {
            editModal.classList.add("hidden");
        }
    });

    // Editar cita
    editMeetingForm.addEventListener("submit", handleEditMeeting);

    // Cerrar modal de eliminar al hacer click fuera
    deleteModal.addEventListener("click", (e) => {
        if (e.target === deleteModal) {
            deleteModal.classList.add("hidden");
        }
    });

    // Cerrar modal de eliminar
    closeDeleteModal.addEventListener("click", () => {
        deleteModal.classList.add("hidden");
    });

    // Lógica para confirmar la eliminación
    confirmDeleteBtn.addEventListener("click", () => {
        handleDeleteMeeting();
    });

    // Lógica para cancelar la eliminación
    cancelDeleteBtn.addEventListener("click", () => {
        deleteModal.classList.add("hidden");
    });

    // Cargar citas desde backend -> inicializar calendario -> crear citas
    fetchMeetings();

    // Inicializar el time picker
    initTimePicker();

    /* // Event listeners
    clientInput.addEventListener('click', () => {
        // Mostrar clientes si ya se rellenaron
        if (clientsFilled) {
            dropdownList.classList.remove('hidden');
            searchInput.focus();
            renderClientList(clientList);
        }
    });

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredClients = clientList.filter(client =>
            client.client_name.toLowerCase().includes(searchTerm)
        );
        renderClientList(filteredClients);
    });

    document.addEventListener('mousedown', (event) => {
        if (!dropdownContainer.contains(event.target)) {
            dropdownList.classList.add('hidden');
            searchInput.value = '';
        }
    }); */
};

/* // Function to render the client list
function renderClientList(clients) {
    clientListContainer.innerHTML = '';
    if (clients.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        clients.forEach(client => {
            const listItem = document.createElement('li');
            listItem.textContent = client.client_name;
            listItem.classList.add('p-3', 'text-white', 'cursor-pointer', 'hover:bg-blue-600', 'transition-colors', 'duration-200');
            listItem.addEventListener('click', () => {
                clientInput.value = btoa(client.client_id);
                dropdownList.classList.add('hidden');
                searchInput.value = ''; // Clear search input
            });
            clientListContainer.appendChild(listItem);
        });
    }
} */

// Función para traer citas desde el backend
async function fetchMeetings() {
    try {
        const response = await axios.get("/panel/get_meetings");
        const data = response.data;
        schedule = data.schedule;
        meetings = data.meetings;
        initCalendar(); // Inicializar el calendario y la lista de citas
    } catch (error) {
        console.error("Error al cargar citas:", error);
    }
}

// Función para inicializar el calendario
function initCalendar() {
    // Obtener fecha actual para empezar en el dia de hoy
    let currentDate = new Date();
    selectedYear = currentDate.getFullYear();
    selectedMonth = currentDate.getMonth();
    selectedDay = currentDate.getDate();
    lastSelectedDate = new Date(selectedYear, selectedMonth, selectedDay);

    // Ir al mes anterior
    calendarPrevBtn.addEventListener('click', () => {
        selectedMonth--;
        if (selectedMonth < 0) {
            selectedMonth = 11;
            selectedYear--;
        }
        renderCalendar();
    });

    // Ir al mes siguiente
    calendarNextBtn.addEventListener('click', () => {
        selectedMonth++;
        if (selectedMonth > 11) {
            selectedMonth = 0;
            selectedYear++;
        }
        renderCalendar();
    });

    // Presionar un dia
    calendarDaysGrid.addEventListener('click', (e) => {
        const dayEl = e.target.closest('div[data-day]');
        if (dayEl) {
            const newDay = parseInt(dayEl.dataset.day);
            const newMonth = parseInt(dayEl.dataset.month);
            const newYear = parseInt(dayEl.dataset.year);
            const newDate = new Date(newYear, newMonth, newDay);
            const oldDate = new Date(selectedYear, selectedMonth, selectedDay);

            // Hacer algo solo si la nueva fecha es diferente a la anterior
            if (!isSameDate(newDate, oldDate))
            {
                // Actualizar valores seleccionados
                selectedMonth = newMonth;
                selectedYear = newYear;
                selectedDay = newDay;

                // Actualizar la ultima fecha seleccionada
                lastSelectedDate = new Date(selectedYear, selectedMonth, selectedDay);

                // Crear el calendario otra vez
                renderCalendar();
            }
        }
    });

    // Presionar un mes
    monthYearGrid.addEventListener('click', (e) => {
        const monthEl = e.target.closest('div[data-month]');
        if (monthEl) {
            selectedMonth = parseInt(monthEl.dataset.month);
            hideMonthYearModal();
            renderCalendar();
        }
    });

    // Ir al año anterior
    monthYearPrevBtn.addEventListener('click', () => {
        selectedYear--;
        renderMonthYearSelection();
    });

    // Ir al año siguiente
    monthYearNextBtn.addEventListener('click', () => {
        selectedYear++;
        renderMonthYearSelection();
    });

    // Click para abrir el modal de mes/año
    monthYearOpenBtn.addEventListener('click', () => {
        showMonthYearModal();
    });

    // Click para cerrar el modal de mes/año
    monthYearCloseBtn.addEventListener('click', () => {
        hideMonthYearModal();
    });

    // Cerrar modal de mes/año al hacer click fuera del contenido
    monthYearModal.addEventListener("click", (e) => {
        if (e.target === monthYearModal) {
            monthYearModal.classList.add("hidden");
        }
    });

    // Crear calendario
    renderCalendar();

    // Mostar calendario
    calendarTemp.classList.add('hidden');
    calendarContainer.classList.remove('hidden');
}

// Función para crear el calendario
function renderCalendar() {
    // Establecer estilos
    const selectBackColor = 'bg-black'; // bg-indigo-600
    const meetingBorder = 'ring-1';
    const diffMonthOpacity = 'custom-diff-opacity';
    const hoverBackColor = "hover:bg-gray-100";
    const blackText = 'text-gray-800';
    const whiteText = 'text-white';

    // Limpiar tabla antes de rellenar otra vez
    calendarDaysGrid.innerHTML = '';
    calendarHeader.textContent = `${GetMonthName(selectedMonth)}`+", "+`${selectedYear}`; // Establecer mes y año del calendario

    // Obtener el primer dia del mes actual, el número de dias del mes actual y el número de dias del mes anterior
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();

    // Para hacer que la tabla empiece en Lunes se ajusta el index del primer dia
    // Normalmente Domingo es 0, Lunes es 1, Martes es 2, etc
    // Asi que el index sería primer dia del mes actual - 1, a excepción de Domingo que sería 6
    const startDayIndex = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

    // Crear los días del mes anterior
    for (let i = startDayIndex; i > 0; i--) {
        const day = daysInPrevMonth - i + 1;
        const month = (selectedMonth === 0) ? 11 : selectedMonth - 1;
        const year = (selectedMonth === 0) ? selectedYear - 1 : selectedYear;
        const elementDate = new Date(year, month, day);

        const dayEl = document.createElement('div');
        dayEl.className = 'py-2 '+diffMonthOpacity+' text-center other-month-day cursor-pointer rounded-lg transition-colors duration-100';
        dayEl.textContent = day;
        dayEl.dataset.day = day;
        dayEl.dataset.month = month;
        dayEl.dataset.year = year;

        // Pintar el dia seleccionado
        const isSelectedDay = isSameDate(elementDate, lastSelectedDate);
        if (isSelectedDay) {
            dayEl.classList.add(selectBackColor, whiteText);
        } else {
            // Agregar clases de no seleccionado
            dayEl.classList.add(blackText, hoverBackColor);

            // Revisar si hay citas ese dia
            const meetingsForDay = meetings.filter(meeting => {
                const meetingDate = new Date(meeting.start_date);
                return isSameDate(meetingDate, elementDate);
            });

            // Si hay citas, entonces colocar el borde
            if (meetingsForDay.length > 0) {
                dayEl.classList.add(meetingBorder);
            }
        }

        calendarDaysGrid.appendChild(dayEl);
    }

    // Crear los dias del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
        const day = i;
        const elementDate = new Date(selectedYear, selectedMonth, day);

        const dayEl = document.createElement('div');
        dayEl.className = 'py-2 text-center font-medium cursor-pointer rounded-lg transition-colors duration-100';
        dayEl.textContent = day;
        dayEl.dataset.day = day;
        dayEl.dataset.month = selectedMonth;
        dayEl.dataset.year = selectedYear;

        // Pintar el dia seleccionado
        const isSelectedDay = isSameDate(elementDate, lastSelectedDate);
        if (isSelectedDay) {
            dayEl.classList.add(selectBackColor, whiteText);
        } else {
            // Agregar clases de no seleccionado
            dayEl.classList.add(blackText, hoverBackColor);

            // Revisar si hay citas ese dia
            const meetingsForDay = meetings.filter(meeting => {
                const meetingDate = new Date(meeting.start_date);
                return isSameDate(meetingDate, elementDate);
            });

            // Si hay citas, entonces colocar el borde
            if (meetingsForDay.length > 0) {
                dayEl.classList.add(meetingBorder);
            }
        }
        
        calendarDaysGrid.appendChild(dayEl);
    }

    // Crear los dias del siguiente mes para rellenar los espacios restantes de la tabla
    const totalDays = startDayIndex + daysInMonth;
    const remainingCells = 42 - totalDays; // Son 6 filas * 7 dias
    for (let i = 1; i <= remainingCells; i++) {
        const day = i;
        const month = (selectedMonth === 11) ? 0 : selectedMonth + 1;
        const year = (selectedMonth === 11) ? selectedYear + 1 : selectedYear;
        const elementDate = new Date(year, month, day);

        const dayEl = document.createElement('div');
        dayEl.className = 'py-2 '+diffMonthOpacity+' text-center other-month-day cursor-pointer rounded-lg transition-colors duration-100';
        dayEl.textContent = day;
        dayEl.dataset.day = day;
        dayEl.dataset.month = month;
        dayEl.dataset.year = year;

        // Pintar el dia seleccionado
        const isSelectedDay = isSameDate(elementDate, lastSelectedDate);
        if (isSelectedDay) {
            dayEl.classList.add(selectBackColor, whiteText);
        } else {
            // Agregar clases de no seleccionado
            dayEl.classList.add(blackText, hoverBackColor);

            // Revisar si hay citas ese dia
            const meetingsForDay = meetings.filter(meeting => {
                const meetingDate = new Date(meeting.start_date);
                return isSameDate(meetingDate, elementDate);
            });

            // Si hay citas, entonces colocar el borde
            if (meetingsForDay.length > 0) {
                dayEl.classList.add(meetingBorder);
            }
        }

        calendarDaysGrid.appendChild(dayEl);
    }

    // Crear la lista de citas
    renderMeetingList();
};

// Función para crear la lista de citas
function renderMeetingList() {
    // Actualizar fecha que aparece sobre la lista de citas
    updateMeetingsHeader();

    // Crear la lista de las citas
    meetingListContainer.innerHTML = '';
    const meetingsForDay = meetings.filter(meeting => {
        const meetingDate = new Date(meeting.start_date);
        return isSameDate(meetingDate, lastSelectedDate); // Obtener solo las citas de la fecha seleccionada
    })
    .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    meetingsForDay.forEach((meeting, index) => {
        // Obtener horas a desplegar
        const startDate = new Date(meeting.start_date);
        const endDate = new Date(meeting.end_date);
        const startHourTime = dateToTime24(startDate);
        const startHourStr = to12HourFormat(startHourTime, true);
        const endHourTime = dateToTime24(endDate);
        const endHourStr = to12HourFormat(endHourTime, true);

        // Crear cita de la lista
        const item = document.createElement("div");
        const optionsBtnId = "options-btn-" + index;
        const optionsMenuId = "options-menu-" + index;
        const optionsEditId = "edit-btn-" + index;
        const optionsDeleteId = "delete-btn-" + index;
        item.className =
            "p-4 relative flex items-center space-x-4 border-b border-gray-200";
        item.dataset.meetingId = meeting.id;

        item.innerHTML = `
                    <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ${meeting.client_name.charAt(0).toUpperCase()}
                    </div>
                    <div class="flex-1">
                        <div class="font-semibold text-gray-900">
                            ${meeting.client_name}
                        </div>
                        <div class="flex flex-col mt-2">
                            <div class="flex items-start gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="w-4 h-4 text-gray-500">
                                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                </svg>

                                <div class="text-sm text-gray-500">
                                    <p>${meeting.user_name}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-x-2 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="w-4 h-4 text-gray-500">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                </svg>
                                <div class="text-sm text-gray-500">
                                    ${startHourStr} - ${endHourStr}
                                </div>
                            </div>
                        </div>
                        <div class="absolute right-3 top-3">
                            <div class="relative inline-block text-left">
                                <button id="${optionsBtnId}" type="button" aria-controls="${optionsMenuId}" aria-haspopup="true" aria-expanded="false" class="flex items-center rounded-sm hover:bg-gray-100 transition-colors duration-100 cursor-pointer">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-500" aria-hidden="true">
                                        <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                                    </svg>
                                </button>

                                <!-- Dropdown Menu -->
                                <div id="${optionsMenuId}" role="menu" aria-labelledby="${optionsBtnId}" class="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none hidden">
                                    <div class="py-2">
                                        <button id="${optionsEditId}" type="button" role="menuitem" class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                            <p>Editar</p>
                                        </button>
                                        <button id="${optionsDeleteId}" type="button" role="menuitem" class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                            <p>Eliminar</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

        const optionsMenu = item.querySelector("#"+optionsMenuId);
        const optionsBtn = item.querySelector("#"+optionsBtnId);

        // El click del botón de opciones
        optionsBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the "outside click" from firing
            handleSelectMeeting(meeting.id);
            optionsMenu.classList.toggle("hidden");
        });

        // El click del botón de editar
        item.querySelector("#"+optionsEditId).addEventListener("click", () => {
            editMeetingForm.reset();
            cleanEditErrors();
            setEditModalData(meeting);
            editModal.classList.remove("hidden");
            optionsMenu.classList.add("hidden");
        });

        // El click del botón de eliminar
        item.querySelector("#"+optionsDeleteId).addEventListener("click", () => {
            showDeleteConfirmationModal();
            optionsMenu.classList.add("hidden");
        });

        // Que el menú se cierre al hacer click fuera
        document.addEventListener("click", (e) => {
            if (!optionsMenu.classList.contains("hidden") && !optionsMenu.contains(e.target) && !optionsBtn.contains(e.target)) {
                optionsMenu.classList.add("hidden");
            }
        });
        meetingListContainer.appendChild(item);
    });
}

// Función para inicializar el time picker
function initTimePicker() {
    activeTimeInput = null;
    isPickerPM = false;

    // El click de los input de hora del modal de añadir
    addStartHourInput.addEventListener('click', (event) => {
        event.stopPropagation();
        showTimePicker(addStartHourInput);
    });

    addEndHourInput.addEventListener('click', (event) => {
        event.stopPropagation();
        showTimePicker(addEndHourInput, true);
    });

    // El click de los input de hora del modal de editar
    editStartHourInput.addEventListener('click', (event) => {
        event.stopPropagation();
        showTimePicker(editStartHourInput);
    });

    editEndHourInput.addEventListener('click', (event) => {
        event.stopPropagation();
        showTimePicker(editEndHourInput, true);
    });

    // El click del botón de cancelar
    timePickerCancelBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        hideTimePicker();
    });

    // El click del botón de confirmar
    timePickerOkBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!activeTimeInput) return;

        // Obtener los primeros 2 caracteres de los valores
        const hourRaw = timePickerHourInput.value.trim().slice(0, 2);
        let minuteRaw = timePickerMinuteInput.value.trim().slice(0, 2);

        // Revisar si son números
        const hourIsNumber = /^\d+$/.test(hourRaw);
        if (hourIsNumber && minuteRaw.length < 1) minuteRaw = 0; // Establecer minutos como 0 si se colocó una hora y los minutes están vacíos
        const minuteIsNumber = /^\d+$/.test(minuteRaw);
        if (!hourIsNumber || !minuteIsNumber) {
            if (!hourIsNumber) {
                // La hora no es un número
                console.log("La hora no es un número");
            }

            if (!minuteIsNumber) {
                // Los minutos no son número
                console.log("Los minutos no son un número");
            }
            return;
        }

        // Asegurarse de que los valores estén dentro de los limites
        let hour = clampNumber(parseInt(hourRaw, 10), 1, 12);
        let minute = clampNumber(parseInt(minuteRaw, 10), 0, 59);
        
        // Format minute with leading zero if needed
        const ampmText = isPickerPM ? "PM" : "AM";
        const formattedHour = String(hour).padStart(2, "0");
        const formattedMinute = String(minute).padStart(2, "0");

        activeTimeInput.value = `${formattedHour}:${formattedMinute} ${ampmText}`;
        hideTimePicker();
    });

    // Función que regula el valor de la hora / minutos del cuadro del time picker
    function setupTwoDigitInput(input, min, max) {
        input.addEventListener("input", () => {
            // Quitar cualquier cosa que no sea un digito
            input.value = input.value.replace(/\D/g, "");

            // Limitar a 2 caracteres
            if (input.value.length > 2) {
                input.value = input.value.slice(0, 2);
            }
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                /* // Si está vacío establecer minimo (con formato)
                input.value = String(min).padStart(2, "0");
                return; */
            }
            else
            {
                // Limitar valor entre el minimo y el máximo
                let num = parseInt(input.value, 10);
                if (isNaN(num)) num = min;
                if (num < min) num = min;
                if (num > max) num = max;

                // Aplicar formato de 2 digits
                input.value = String(num).padStart(2, "0");
            }
        });
    }

    // Aplicar lógica de cuando se modifica la hora del time picker
    setupTwoDigitInput(timePickerHourInput, 1, 12);
    setupTwoDigitInput(timePickerMinuteInput, 0, 59);

    // El click de los botones de AM/PM
    timePickerAM.addEventListener('click', handleAmpmClick);
    timePickerPM.addEventListener('click', handleAmpmClick);
    
    // Que el time picker se cierre al hacer click fuera
    document.addEventListener('click', (event) => {
        if (!timePickerModal.contains(event.target) && event.target !== addStartHourInput && event.target !== addEndHourInput
            && event.target !== editStartHourInput && event.target !== editEndHourInput) {
            hideTimePicker();
        }
    });

    // Establecer estado inicial de los botones de AM/PM
    timePickerAM.click();
}

// Función para abrir el cuadro del time picker
function showTimePicker(input, isEndHour = false) {
    activeTimeInput = input;
    const inEdit = input.id == editStartHourInput.id || input.id == editEndHourInput.id;
    const modalContent = inEdit ? editModalContent : addModalContent;
    modalContent.appendChild(timePickerModal);

    // Establecer tiempo que aparecerá en el time picker
    let hour = "";
    let minute = "";
    let ampm = "AM";

    // Intentar obtener el tiempo directamente del input
    const twelveHourRegex = Get12HourRegex();
    const match = twelveHourRegex.exec(input.value.trim());
    if (match) {
        // Se puede obtener un tiempo válido, obtener valores que se colocarán en el time picker
        hour = String(clampNumber(parseInt(match[1], 10), 1, 12)).padStart(2, "0");
        minute = String(clampNumber(parseInt(match[2], 10), 0, 59)).padStart(2, "0");
        ampm = match[3].toUpperCase();
    }
    else
    {
        // No se puede obtener un tiempo válido, revisar si se está agregando o editando
        if (inEdit) {
            // Si se está editando, obtener valor del tiempo directamente de la cita
            const meeting = meetings.find((m) => m.id === selectedMeetingId);
            if (meeting)
            {
                const meetingDate = isEndHour ? meeting.end_hour : meeting.start_hour;
                const meetingTime = dateToTime24(meetingDate);
                const meeting12Hour = to12HourFormat(meetingTime);
                hour = meeting12Hour[0];
                minute = meeting12Hour[1];
                ampm = meeting12Hour[2];
            }
        }
        else
        {
            // Si se está agregando, que empiece vacío
        }
    }

    // Establecer valores del time picker
    const ampmBtn = ampm == "AM" ? timePickerAM : timePickerPM;
    ampmBtn.click();
    timePickerHourInput.value = hour;
    timePickerMinuteInput.value = minute;

    // Posicionar el time picker relativo al input
    const modalRect = modalContent.getBoundingClientRect();
    const inputRect = input.getBoundingClientRect();
    timePickerModal.style.top = `${inputRect.bottom - modalRect.top + 8}px`;
    if (isEndHour) {
        // Alinear con el lado derecho
        timePickerModal.style.left = "auto"; // resetear el posicionamiento izquierdo
        timePickerModal.style.right = `${modalRect.right - inputRect.right}px`;
    } else {
        // Alinear con el lado izquierdo
        timePickerModal.style.right = "auto"; // resetear el posicionamiento derecho
        timePickerModal.style.left = `${inputRect.left - modalRect.left}px`;
    }

    timePickerModal.classList.remove('hidden');
}

// Función para cerrar el cuadro del time picker
function hideTimePicker() {
    timePickerModal.classList.add('hidden');
    activeTimeInput = null;
}

// Función para manejar el click de los botones de AM/PM
function handleAmpmClick(event) {
    const target = event.currentTarget;

    // Establecer estilos
    const selectBackColor = 'bg-purple-500';
    const selectTextColor = 'text-white';
    const selectHoverColor = 'hover:bg-purple-600';
    const normalBackColor = 'bg-gray-200';
    const normalTextColor = 'text-gray-700';
    const normalHoverColor = 'hover:bg-gray-300';

    // Establecer valor de AM/PM y estilos de los botones 
    if (target.id === timePickerAM.id) {
        isPickerPM = false;
        timePickerAM.classList.add(selectBackColor, selectTextColor, selectHoverColor);
        timePickerAM.classList.remove(normalBackColor, normalTextColor, normalHoverColor);
        timePickerPM.classList.remove(selectBackColor, selectTextColor, selectHoverColor);
        timePickerPM.classList.add(normalBackColor, normalTextColor, normalHoverColor);
    } else {
        isPickerPM = true;
        timePickerPM.classList.add(selectBackColor, selectTextColor, selectHoverColor);
        timePickerPM.classList.remove(normalBackColor, normalTextColor, normalHoverColor);
        timePickerAM.classList.remove(selectBackColor, selectTextColor, selectHoverColor);
        timePickerAM.classList.add(normalBackColor, normalTextColor, normalHoverColor);
    }
}

// Función para crear el contenido del modal de mes/año
function renderMonthYearSelection() {
    // Establecer estilos
    const selectDayBackColor = 'bg-black';
    const currentMonthBackColor = 'bg-gray-200';
    const hoverBackColor = "hover:bg-gray-300";
    const blackText = 'text-gray-800';
    const whiteText = 'text-white';
    const meetingBorder = 'ring-1';
    const currentMonthDate = new Date(selectedYear, selectedMonth, 1);

    // Establecer el año como título
    monthYearGrid.innerHTML = '';
    monthYearHeader.textContent = selectedYear;

    // Crear los meses
    const allMonths = GetAllMonthsArr();
    allMonths.forEach((month, index) => {
        const monthEl = document.createElement('div');
        monthEl.className = 'flex items-center justify-center py-2 px-2 text-center font-medium cursor-pointer rounded-lg text-xs md:text-base transition-colors duration-100';
        monthEl.textContent = month;
        monthEl.dataset.month = index;
        const elementDate = new Date(selectedYear, index, 1);

        // Pintar el mes que tiene el dia seleccionado
        const isSelectedDayMonth = isSameMonthYear(elementDate, lastSelectedDate);
        if (isSelectedDayMonth) {
            monthEl.classList.add(selectDayBackColor, whiteText);
        } else {
            // Agregar clases de no seleccionado
            monthEl.classList.add(blackText);

            // Pintar el mes seleccionado
            const isSelectedMonth = isSameMonthYear(elementDate, currentMonthDate);
            if (isSelectedMonth) {
                monthEl.classList.add(currentMonthBackColor);
            }
            else
            {
                monthEl.classList.add(hoverBackColor);
            }

            // Revisar si hay citas ese mes
            const meetingsForDay = meetings.filter(meeting => {
                let meetingDate = new Date(meeting.start_date);
                return isSameMonthYear(meetingDate, elementDate);
            });

            // Si hay citas, entonces colocar el borde
            if (meetingsForDay.length > 0) {
                monthEl.classList.add(meetingBorder);
            }
        }

        monthYearGrid.appendChild(monthEl);
    });
}

// Función para abrir el modal de mes/año
function showMonthYearModal() {
    monthYearModal.classList.remove('hidden');
    renderMonthYearSelection();
}

// Función para cerrar el modal de mes/año
function hideMonthYearModal() {
    monthYearModal.classList.add('hidden');
}

// Función para traer clientes al modal que corresponda
async function fillModalClients(selectedClientId = "") {
    clientsFilled = false;
    try {
        let modalClientInput = addClientInput;
        if (selectedClientId != "") { modalClientInput = editClientInput; }
        modalClientInput.innerHTML = "";

        // Crear opción default
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.innerHTML = "Seleccione un cliente";
        defaultOption.selected = true;
        modalClientInput.appendChild(defaultOption);

        // Obtener lista de clientes del server
        const response = await axios.get("/panel/get_clients");
        clientList = response.data;
        validClientIds = clientList.map(c => c.id); // establecer IDs validos

        // Crear opciones de clientes
        clientList.forEach(client => {
            const option = document.createElement("option");
            option.value = btoa(client.id);
            option.textContent = client.name;
            if (client.id == selectedClientId) { 
                defaultOption.selected = false;
                option.selected = true;
            }
            modalClientInput.appendChild(option);
        });
    } catch (error) {
        clientList = [];
        validClientIds = [];
        console.error("Error al cargar clientes:", error);
    }
    clientsFilled = true;
}

// Función para traer usuarios al modal que corresponda
async function fillModalUsers(selectedUserId = -1) {
    usersFilled = false;
    try {
        let modalUserInput = addUserInput;
        if (selectedUserId != -1) { modalUserInput = editUserInput; }
        modalUserInput.innerHTML = "";

        // Crear opción default
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.innerHTML = "Seleccione un usuario";
        defaultOption.selected = true;
        modalUserInput.appendChild(defaultOption);

        // Obtener lista de usuarios del server
        const response = await axios.get("/panel/get_users_for_meetings");
        userList = response.data;
        validUserIds = userList.map(u => u.id); // establecer IDs validos

        // Crear opciones de usuarios
        userList.forEach(user => {
            const option = document.createElement("option");
            option.value = btoa(user.id);
            option.textContent = user.name;
            if (user.id == selectedUserId) { 
                defaultOption.selected = false;
                option.selected = true; 
            }
            modalUserInput.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar usuarios:", error);
    }
    usersFilled = true;
}

// Seleccionar cita al abrir sus opciones
function handleSelectMeeting(meetingId) {
    const meeting = meetings.find((m) => m.id === meetingId);
    if (!meeting) return;

    selectedMeetingId = meetingId;
}

// Agregar nueva cita
async function handleAddMeeting(e) {
    e.preventDefault();

    // Primero verificar que haya terminado el axios de clientes y usuarios
    if (clientsFilled && usersFilled)
    {
        // Establecer valores
        let isValid = true;
        const theTimezone = GetTimezone();
        const now = GetCurrentDatetime();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const formDate = addDateInput.value.trim();
        const formStartHour = addStartHourInput.value.trim();
        const formEndHour = addEndHourInput.value.trim();
        const formClient = safeAtob(addClientInput.value.trim());
        const formUser = safeAtob(addUserInput.value.trim());
        
        // Limpiar errores anteriores
        cleanAddErrors();

        // Verificar que los valores no estén vacíos y sean válidos
        const dateRegex = GetDateRegex();
        const twelveHourRegex = Get12HourRegex();
        const dateValid = formDate && dateRegex.test(formDate);
        const startHourValid = formStartHour && twelveHourRegex.test(formStartHour);
        const endHourValid = formEndHour && twelveHourRegex.test(formEndHour);
        const clientValid = formClient && formClient != null && validClientIds.includes(Number(formClient));
        const userValid = formUser && formUser != null && validUserIds.includes(Number(formUser));
        if (!dateValid || !startHourValid || !endHourValid || !clientValid || !userValid) {
            if (!dateValid) { addDateError.textContent = "Selecciona una fecha válida"; }
            if (!startHourValid) { addStartHourError.textContent = "Selecciona una hora de inicio válida"; }
            if (!endHourValid) { addEndHourError.textContent = "Selecciona una hora de término válida"; }
            if (!clientValid) { addClientError.textContent = "Selecciona un cliente válido"; }
            if (!userValid) { addUserError.textContent = "Selecciona un usuario válido"; }
            return; //Regresar si se encontró alguno de estos errores
        }
        const startHour24 = to24HourFormat(formStartHour);
        const endHour24 = to24HourFormat(formEndHour);

        // Verificar que la fecha no sea en el pasado y que la hora de inicio/término esté en el horario de trabajo
        const [year, month, day] = formDate.split("-").map(Number);
        const selectedDatetime = new Date(year, month - 1, day, 0, 0, 0, 0);
        const startHourTime = time24ToDate(startHour24);
        const endHourTime = time24ToDate(endHour24);
        const scheduleStartTime = time24ToDate(schedule.start_hour);
        const scheduleEndTime = time24ToDate(schedule.end_hour);
        const startHourOffWork = startHourTime < scheduleStartTime || startHourTime > scheduleEndTime;
        const endHourOffWork = endHourTime < scheduleStartTime || endHourTime > scheduleEndTime;
        const dateIsPast = selectedDatetime < today;

        if (startHourOffWork || endHourOffWork || dateIsPast)
        {
            // Verificar que la hora de inicio sea dentro del horario de trabajo
            if (startHourOffWork) {
                addStartHourError.textContent = "*Hora de inicio fuera del horario de trabajo";
            }

            // Verificar que la hora de término sea dentro del horario de trabajo
            if (endHourOffWork) {
                addEndHourError.textContent = "*Hora de término fuera del horario de trabajo";
            }

            // Verificar que la fecha seleccionada no sea menor a la actual
            if (dateIsPast) {
                addDateError.textContent = "*La fecha no puede ser anterior a la fecha actual";
            }
            isValid = false;
            return; //Regresar si se encontró alguno de estos errores
        }
        
        // Verificar que la hora de inicio no sea anterior a la hora actual si la fecha es hoy
        const [startH, startM] = startHour24.split(":").map(Number);
        const startDatetime = new Date(selectedDatetime);
        startDatetime.setHours(startH, startM, 0, 0);

        if (isSameDate(selectedDatetime, today)) { //selectedDatetime.getTime() === today.getTime()
            const startMinutesDiff = 5;
            const minStartTime = new Date(now.getTime() - startMinutesDiff * 60000);
            if (startDatetime < minStartTime) {
                addStartHourError.textContent = "Si la cita es hoy, la hora de inicio no puede ser anterior a la hora actual";
                isValid = false;
            }
        }

        // Verificar que la hora de término sea al menos 5 minutos más tarde de la hora de inicio
        const [endH, endM] = endHour24.split(":").map(Number);
        const endDatetime = new Date(selectedDatetime);
        endDatetime.setHours(endH, endM, 0, 0);

        const endMinutesDiff = 5;
        const minEndTime = new Date(startDatetime.getTime() + endMinutesDiff * 60000);
        if (endDatetime < minEndTime) {
            addEndHourError.textContent = "La hora de término debe ser al menos 5 minutos más tarde que la hora de inicio";
            isValid = false;
        }

        if (isValid == true)
        {
            // Todos los datos recibidos son válidos, se puede enviar al backend
            try {
                const response = await axios.post("/panel/add_meeting", {
                    user_timezone: theTimezone,
                    meeting_date: formDate,
                    start_hour: startHour24,
                    end_hour: endHour24,
                    client_id: formClient,
                    user_id: formUser,
                });

                const data = response.data;
                if (data.success == true)
                {
                    // Se agregó exitosamente
                    const newMeeting = data.meeting; // Cita recién creada desde el backend

                    meetings.unshift(newMeeting); // Agregar al inicio del array
                    renderCalendar(); // Crear calendario otra vez

                    // Cerrar modal y limpiar form
                    showMessage("Cita agregada correctamente.", "success");
                    addModal.classList.add("hidden");
                    addMeetingForm.reset();
                }
                else
                {
                    // Hay uno o varios problemas que se deben corregir
                    addDateError.textContent = data.date_error;
                    addStartHourError.textContent = data.start_hour_error;
                    addEndHourError.textContent = data.end_hour_error;
                    addClientError.textContent = data.client_error;
                    addUserError.textContent = data.user_error;
                }
            } catch (error) {
                console.error("Error al crear cita:", error);
                if (error.response) {
                    const errors = error.response.data.errors;

                    showMessage("Ocurrió un error al crear la cita. Intenta nuevamente", "error");
                } else {
                    alert("Ocurrió un error. Intenta nuevamente.");
                }
            }
        }
    }
}

// Editar cita existente
async function handleEditMeeting(e) {
    e.preventDefault();

    // Primero verificar que haya terminado el axios de clientes y usuarios
    if (clientsFilled && usersFilled)
    {
        // Buscar la cita en la lista
        let meeting = meetings.find((m) => m.id === selectedMeetingId);
        if (meeting)
        {
            // Establecer valores
            let isValid = true;
            const meetingId = meeting.id;
            const theTimezone = GetTimezone();
            const now = GetCurrentDatetime();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const formDate = editDateInput.value.trim();
            const formStartHour = editStartHourInput.value.trim();
            const formEndHour = editEndHourInput.value.trim();
            const formUser = safeAtob(editUserInput.value.trim());
            
            // Limpiar errores anteriores
            cleanEditErrors();

            // Verificar que valores no estén vacíos y sean válidos
            const dateRegex = GetDateRegex();
            const twelveHourRegex = Get12HourRegex();
            const dateValid = formDate && dateRegex.test(formDate);
            const startHourValid = formStartHour && twelveHourRegex.test(formStartHour);
            const endHourValid = formEndHour && twelveHourRegex.test(formEndHour);
            const userValid = formUser && formUser != null && validUserIds.includes(Number(formUser));
            if (!dateValid || !startHourValid || !endHourValid || !userValid) {
                if (!dateValid) { editDateError.textContent = "Selecciona una fecha válida"; }
                if (!startHourValid) { editStartHourError.textContent = "Selecciona una hora de inicio válida"; }
                if (!endHourValid) { editEndHourError.textContent = "Selecciona una hora de término válida"; }
                if (!userValid) { editUserError.textContent = "Selecciona un usuario"; }
                return; //Regresar si se encontró alguno de estos errores
            }
            const startHour24 = to24HourFormat(formStartHour);
            const endHour24 = to24HourFormat(formEndHour);

            // Establecer si la cita ya empezó y si ya terminó
            const [year, month, day] = formDate.split("-").map(Number);
            const selectedDatetime = new Date(year, month - 1, day, 0, 0, 0, 0);
            const scheduleStartTime = time24ToDate(schedule.start_hour);
            const scheduleEndTime = time24ToDate(schedule.end_hour);
            const originalStartDatetime = new Date(meeting.start_date);
            const originalEndDatetime = new Date(meeting.end_date);
            const canModifyStart = originalStartDatetime > now; // Solo se puede editar fecha y hora de inicio si la cita aún no empieza
            const canModifyEnd = originalEndDatetime > now; // Solo se puede editar la hora de término si la cita aún no termina
            let dateChanged = false;
            let startHourChanged = false;
            let endHourChanged = false;
            let userChanged = false;

            // Si se puede modificar fecha/hora de inicio/hora de término, hacer las validaciones que les corresponda
            if (canModifyStart || canModifyEnd)
            {
                const [startH, startM] = startHour24.split(":").map(Number);
                const startDatetime = new Date(selectedDatetime);
                startDatetime.setHours(startH, startM, 0, 0);

                // Aplicar validaciones para fecha y hora de inicio, si es que se pueden modificar
                if (canModifyStart)
                {
                    // Verificar que la fecha seleccionada no sea menor a la actual, si es que fue editada
                    const normalizedOriginalStartDatetime = new Date(originalStartDatetime);
                    normalizedOriginalStartDatetime.setHours(0, 0, 0, 0);
                    dateChanged = selectedDatetime.getTime() !== normalizedOriginalStartDatetime.getTime();
                    if (dateChanged) {
                        const dateIsPast = selectedDatetime < today;
                        if (dateIsPast) {
                            editDateError.textContent = "*La fecha no puede ser anterior a la fecha actual";
                            isValid = false;
                        }
                    }

                    // Verificar que la hora de inicio sea dentro del horario de trabajo, si es que fue editada
                    const startHourTime = time24ToDate(startHour24);
                    const startHourOffWork = startHourTime < scheduleStartTime || startHourTime > scheduleEndTime;
                    if (startHourOffWork) {
                        editStartHourError.textContent = "*Hora de inicio fuera del horario de trabajo";
                        isValid = false;
                    }
                    else
                    {
                        // Verificar que la hora de inicio no sea anterior a la hora actual si la fecha es hoy, si es que fue editada
                        const originalStartHour = dateToTime24(originalStartDatetime);
                        startHourChanged = startHour24 !== originalStartHour;
                        if (dateChanged || startHourChanged) { // Hay que incluir la validación para cuando se modifica la fecha
                            if (isSameDate(selectedDatetime, today)) { //selectedDatetime.getTime() === today.getTime()
                                const startMinutesDiff = 5;
                                const minStartTime = new Date(now.getTime() - startMinutesDiff * 60000);
                                if (startDatetime < minStartTime) {
                                    editStartHourError.textContent = "Si la cita es hoy, la hora de inicio no puede ser anterior a la hora actual";
                                    isValid = false;
                                }
                            }
                        }
                    }                
                }

                // Aplicar validaciones para hora de término, si es que se puede modificar
                if (canModifyStart || canModifyEnd) // Incluir canModifyStart por si acaso (se debe validar la hora de término si se edita la hora de inicio)
                {
                    // Verificar que la hora de término sea dentro del horario de trabajo, si es que fue editada
                    const endHourTime = time24ToDate(endHour24);
                    const endHourOffWork = endHourTime < scheduleStartTime || endHourTime > scheduleEndTime;
                    if (endHourOffWork) {
                        editEndHourError.textContent = "*Hora de término fuera del horario de trabajo";
                        isValid = false;
                    }
                    else
                    {
                        // Verificar que la hora de término sea al menos 5 minutos más tarde de la hora de inicio, si es que fue editada
                        const originalEndHour = dateToTime24(originalEndDatetime);
                        endHourChanged = endHour24 !== originalEndHour;
                        if (startHourChanged || endHourChanged) { // Hay que incluir la validación para cuando se modifica la hora de inicio
                            const [endH, endM] = endHour24.split(":").map(Number);
                            const endDatetime = new Date(selectedDatetime);
                            endDatetime.setHours(endH, endM, 0, 0);

                            const endMinutesDiff = 5;
                            const minEndTime = new Date(startDatetime.getTime() + endMinutesDiff * 60000);
                            if (endDatetime < minEndTime) {
                                editEndHourError.textContent = "La hora de término debe ser al menos 5 minutos más tarde que la hora de inicio";
                                isValid = false;
                            }
                        }
                    }
                }
            }

            // Verificar si usuario fue modificado
            userChanged = formUser != meeting.user_id;

            // Continuar si no se detuvo flujo por algún problema
            if (isValid == true)
            {
                // Enviar al backend si hay al menos 1 cambio
                const anyChange = dateChanged || startHourChanged || endHourChanged || userChanged;
                if (anyChange == true)
                {
                    console.log("Hay cambios que se pueden editar");
                    try {
                        // Los datos de fecha, hora de inicio y hora de término que se envían
                        // no son relevantes si es que no se pueden editar, ya que en ese caso se toman
                        // directamente los valores que ya tiene la cita en el backend
                        const response = await axios.post("/panel/edit_meeting", {
                            user_timezone: theTimezone,
                            id: meetingId,
                            meeting_date: formDate,
                            start_hour: startHour24,
                            end_hour: endHour24,
                            user_id: formUser,
                        });

                        // Obtener respuesta del servidor
                        const data = response.data;
                        const serverMeeting = data.meeting; // Cita enviada desde el backend

                        // Reemplazar la cita del array por la que fue enviada desde el backend (es la que está más al dia)
                        meeting = serverMeeting;
                        meetings = meetings.map(m =>
                            m.id === serverMeeting.id ? serverMeeting : m
                        );
                        renderCalendar(); // Crear calendario otra vez

                        if (data.success == true)
                        {
                            // Se editó exitosamente
                            selectedMeetingId = null;
                            editModal.classList.add("hidden");
                            editMeetingForm.reset();
                            showMessage("Cita editada correctamente.", "success");
                        }
                        else
                        {
                            // Hay un problema que se debe corregir
                            editDateError.textContent = data.date_error;
                            editStartHourError.textContent = data.start_hour_error;
                            editEndHourError.textContent = data.end_hour_error;
                            editClientError.textContent = data.client_error;
                            editUserError.textContent = data.user_error;
                        }
                    } catch (error) {
                        console.error("Error al editar la cita:", error);
                        if (error.response) {
                            const errors = error.response.data.errors;

                            // Quitar la cita de la lista si es que no existe
                            if (error.response.status === 404)
                            {
                                meetings = meetings.filter((meeting) => meeting.id !== selectedMeetingId);
                                selectedMeetingId = null;
                                renderCalendar(); // Crear calendario otra vez
                                editModal.classList.add("hidden");
                                editMeetingForm.reset();
                                showMessage("La cita no existe", "error");
                            }
                            else
                            {
                                showMessage("Ocurrió un error al editar la cita. Intenta nuevamente", "error");
                            }
                        } else {
                            alert("Ocurrió un error. Intenta nuevamente.");
                        }
                    }
                }
                else
                {
                    console.log("No hay cambios que editar");
                    // No hay ningún cambio
                }
            }

            // En base a los valores de la cita deshabilitar y volver a asignar valores a los campos que correspondan
            handleEditDisable(false, meeting);
        }
    }
}

// Establece valores por defecto de fecha en el modal de agregar
function setAddModalData() {
    // Establecer fecha
    const now = GetCurrentDatetime();
    const todayStr = formatDate(now); // Formato de YYYY-MM-DD

    // Tooltip
    const scheduleStart = to12HourFormat(schedule.start_hour, true);
    const scheduleEnd = to12HourFormat(schedule.end_hour, true);
    const hourTooltip = "Horario de trabajo: "+scheduleStart+" - "+scheduleEnd;
    addStartHourInput.title = hourTooltip;
    addEndHourInput.title = hourTooltip;

    // Establecer valores
    addDateInput.value = todayStr;
    addDateInput.min = todayStr;

    // Rellenar selects de clientes y usuarios
    fillModalClients();
    fillModalUsers();
}

// Establece estado y valores en el modal de editar
function setEditModalData(meeting) {
    // Desactivar inputs y rellenar valores del modal
    handleEditDisable(true, meeting);

    // Rellenar selects de clientes y usuarios
    fillModalClients(meeting.client_id);
    fillModalUsers(meeting.user_id);
}

// Función para desactivar y establecer valores del modal de editar
function handleEditDisable(forceValues = false, meeting)
{
    // Obtener valores
    const now = GetCurrentDatetime();

    // Desactivar inputs que no puedan modificarse
    const originalStartDatetime = new Date(meeting.start_date);
    const originalEndDatetime = new Date(meeting.end_date);
    const canModifyStart = originalStartDatetime > now; // Solo se puede modificar el inicio si la cita aún no empieza
    const canModifyEnd = originalEndDatetime > now; // Solo se puede modificar el fin si la cita aún no termina
    editDateInput.disabled = !canModifyEnd || !canModifyStart;
    editStartHourInput.disabled = !canModifyEnd || !canModifyStart;
    editEndHourInput.disabled = !canModifyEnd;
    editClientInput.disabled = true;

    // Tooltip
    const scheduleStart = to12HourFormat(schedule.start_hour, true);
    const scheduleEnd = to12HourFormat(schedule.end_hour, true);
    const scheduleTooltip = "Horario de trabajo: "+scheduleStart+" - "+scheduleEnd;
    editClientInput.title = "No se puede editar el cliente de una cita";

    let dateTooltip = "";
    let startTooltip = scheduleTooltip;
    if (!canModifyEnd || !canModifyStart)
    {
        const startMessage1 = "No se puede editar, ";
        const startMessage2 = !canModifyEnd ? "la cita ya terminó" : "la cita ya empezó";
        dateTooltip = startMessage1+startMessage2;
        startTooltip = startMessage1+startMessage2;
    }
    editDateInput.title = dateTooltip;
    editStartHourInput.title = startTooltip;

    let endTooltip = scheduleTooltip;
    if (!canModifyEnd)
    {
        endTooltip = "No se puede editar, la cita ya terminó"
    }
    editEndHourInput.title = endTooltip;

    // Colocar los valores de la meeting
    if (forceValues || !canModifyEnd || !canModifyStart)
    {
        // Colocar fecha
        editDateInput.value = formatDate(originalStartDatetime);
        const minDate = new Date(Math.min(originalStartDatetime.getTime(), now.getTime()));
        const minDateDay = formatDate(minDate);
        editDateInput.min = minDateDay;

        // Colocar hora de inicio
        const startHourTime = dateToTime24(originalStartDatetime);
        const start12HourStr = to12HourFormat(startHourTime, true);
        editStartHourInput.value = start12HourStr;
    }

    if (forceValues || !canModifyEnd)
    {
        // Colocar hora de término
        const endHourTime = dateToTime24(originalEndDatetime);
        const end12HourStr = to12HourFormat(endHourTime, true);
        editEndHourInput.value = end12HourStr;
    }
}

// Muestra el modal de confirmación para eliminar
function showDeleteConfirmationModal() {
    deleteModal.classList.remove("hidden");
}

// Eliminar cita seleccionada
async function handleDeleteMeeting() {
    if (selectedMeetingId) {
        try {
            const response = await axios.post("/panel/delete_meeting", {
                id: selectedMeetingId
            });

            meetings = meetings.filter((meeting) => meeting.id !== selectedMeetingId);
            selectedMeetingId = null;
            renderCalendar(); // Crear calendario otra vez
            deleteModal.classList.add("hidden");
            showMessage("Cita eliminada correctamente.", "success");
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;

                // Quitar la cita de la lista si es que no existe
                if (error.response.status === 404)
                {
                    meetings = meetings.filter((meeting) => meeting.id !== selectedMeetingId);
                    selectedMeetingId = null;
                    renderCalendar(); // Crear calendario otra vez
                    deleteModal.classList.add("hidden");
                    showMessage("La cita no existe", "error");
                }
            } else {
                alert("Ocurrió un error. Intenta nuevamente.");
            }
        }
    }
}

// Muestra un mensaje de notificación flotante
function showMessage(text, type = "info") {
    messageTextEl.textContent = text;
    if (type === "success") {
        messageModal.classList.remove("bg-gray-800");
        messageModal.classList.remove("bg-red-600");
        messageModal.classList.add("bg-green-600");
    }
    else if (type === "error") {
        messageModal.classList.remove("bg-gray-800");
        messageModal.classList.remove("bg-green-600");
        messageModal.classList.add("bg-red-600");
    } 
    else {
        messageModal.classList.remove("bg-green-600");
        messageModal.classList.remove("bg-red-600");
        messageModal.classList.add("bg-gray-800");
    }
    messageModal.classList.remove("hidden");
    messageModal.classList.add("animate-fade-in");
    setTimeout(() => {
        messageModal.classList.add("hidden");
        messageModal.classList.remove("animate-fade-in");
    }, 3000);
}

// Actualizar la fecha que aparece sobre la lista de citas
function updateMeetingsHeader() {
    meetingListDate.innerHTML = ""+lastSelectedDate.getDate()+" de "+GetMonthName(lastSelectedDate.getMonth())+", "+lastSelectedDate.getFullYear();
}

// Limpiar errores del formulario de agregar
function cleanAddErrors() {
    addDateError.textContent = "";
    addStartHourError.textContent = "";
    addEndHourError.textContent = "";
    addClientError.textContent = "";
    addUserError.textContent = "";
}

// Limpiar errores del formulario de editar
function cleanEditErrors() {
    editDateError.textContent = "";
    editStartHourError.textContent = "";
    editEndHourError.textContent = "";
    editClientError.textContent = "";
    editUserError.textContent = "";
}

// Obtener la zona horaria del dispositivo
function GetTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Obtener regex de la fecha
function GetDateRegex() {
    return /^\d{4}-\d{2}-\d{2}$/;
}

// Obtener regex del tiempo en HH:MM AM/PM de 12 horas
function Get12HourRegex() {
    return /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i;
} 

// Obtener Date del momento actual (fecha y hora), sin segundos ni milisegundos
function GetCurrentDatetime() {
    const now = new Date();
    now.setSeconds(0, 0); // Mantener solo horas y minutos, lo demás no se considera
    return now;
}

// Revisar si dos fechas son iguales (Año / mes / dia)
function isSameDate(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

// Revisar si dos fechas tienen el mismo mes/año
function isSameMonthYear(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth()
}

// Convertir Date a YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

// Convertir Date a tiempo de 24 horas (HH:MM)
function dateToTime24(date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};

// Convertir tiempo de 24 horas a Date
function time24ToDate(timeStr) {
    const parts = timeStr.split(':');
    const date = new Date();
    date.setHours(parseInt(parts[0], 10));
    date.setMinutes(parseInt(parts[1], 10));
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

// Convertir de 24 horas a formato de 12 horas
function to12HourFormat(time24, getString = false) {
    // Debería recibir algo como "14:05" o "08:30:00"
    const [hourStr, minuteStr] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (isNaN(hour) || isNaN(minute)) {
        console.log("Error convirtiendo este tiempo a 12 horas: "+time24); // Para que esto no pase, asegurarse de que se está enviando valor en formato 24 horas
        return '00:00 AM';
    }

    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12; // Las 0 se vuelven 12 AM

    // Darle formato correcto a horas y minutos
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");

    if (getString) {
        return `${formattedHour}:${formattedMinute} ${ampm}`;
    }
    else {
        return [formattedHour, formattedMinute, ampm];
    }
}

// Convertir de 12 horas a formato de 24 horas
function to24HourFormat(time12) {
    // Debería recibir algo como "02:05 PM" o "12:30 AM"
    const twelveHourRegex = Get12HourRegex();
    const match = twelveHourRegex.exec(time12.trim());
    if (!match) {
        console.log("Error convirtiendo este tiempo a 24 horas: "+time12); // Para asegurarse de que esto no pase, hacer regex.test antes de llamar está función
        return '00:00';
    }

    // Obtener partes del tiempo
    let hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();

    // Modificar y añadir horas en ciertos casos
    if (ampm === "AM" && hour === 12) {
        hour = 0; // Media noche es hora 0
    } else if (ampm === "PM" && hour !== 12) {
        hour += 12; // Se les suma 12 horas a las de la tarde que no sean 12
    }

    // Darle formato correcto a horas y minutos
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");

    return `${formattedHour}:${formattedMinute}`;
}

// Obtener el nombre de un mes
function GetMonthName(monthIndex)
{
    const monthNames = GetAllMonthsArr();
    return monthNames[monthIndex];
}

// Obtener array de todos los nombres de los meses
function GetAllMonthsArr() {
    return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
}

// Descifrar de forma segura
function safeAtob(value) {
    try {
        return atob(value);
    } catch (e) {
        return null; // devolver null si no se puede descifrar
    }
}

// Función para delimitar un número dentro de un mínimo y máximo
function clampNumber(value, min, max) {
    let clampedNumber = value;
    if (clampedNumber < min) clampedNumber = min;
    if (clampedNumber > max) clampedNumber = max;
    return clampedNumber;
}