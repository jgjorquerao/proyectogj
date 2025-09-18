import axios from "axios";

import "./password_setup.js";

// Inicializar Axios
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.querySelector(
    'meta[name="csrf-token"]'
).content;
axios.defaults.headers.common["Content-Type"] = "application/json";

let closeAddModal,
    addModal,
    addUserForm,
    errorName,
    errorEmail,
    userListContainer,
    userEmptyState,
    userDetailCard,
    appContainer,
    menuButton;
let resetPassModal,
    closeResetPassBtn,
    mailResetPassBtn,
    mailResetPassModal,
    mailResetPassText,
    closePassMailSentBtn,
    confirmPassMailSentBtn;
let deleteModal,
    closeDeleteModal,
    confirmDeleteBtn,
    cancelDeleteBtn,
    userNameToDeleteEl;
window.selectedUserId = null;

let users = []; // Array de usuarios cargados

/* window.addEventListener("load", function () {
    initUserSection();
}); */

window.initUserSection = () => {
    // Referencias DOM
    /* openAddModal = document.getElementById("openModal"); */
    closeAddModal = document.getElementById("closeAddModal");
    addModal = document.getElementById("addUserModal");
    addUserForm = document.getElementById("addUserForm");
    errorName = document.getElementById("errorName");
    errorEmail = document.getElementById("errorEmail");
    userListContainer = document.getElementById("user-list");
    deleteModal = document.getElementById("deleteUserModal");
    closeDeleteModal = document.getElementById("closeDeleteModal");
    confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
    userNameToDeleteEl = document.getElementById("userNameToDelete");
    appContainer = document.getElementById("app-container");
    menuButton = document.getElementById("menu-button");

    // Referencias DOM detalle de usuario
    userEmptyState = document.getElementById("user-empty-state");
    userDetailCard = document.getElementById("user-detail-card");

    // Referencias DOM de contraseña
    resetPassModal = document.getElementById('resetPassModal');
    closeResetPassBtn = document.getElementById('closeResetPassBtn');
    mailResetPassBtn = document.getElementById('mailResetPassBtn');
    mailResetPassModal = document.getElementById('mailResetPassModal');
    mailResetPassText = document.getElementById('mailResetPassText');
    closePassMailSentBtn = document.getElementById('closePassMailSentBtn');
    confirmPassMailSentBtn = document.getElementById('confirmPassMailSentBtn');

    if (!closeAddModal || !addModal) return;

    // Abrir modal ADD
    /* openAddModal.addEventListener("click", () => {
        addModal.classList.remove("hidden");
    }); */

    // Cerrar modal ADD
    /* closeAddModal.addEventListener("click", () => {
        addModal.classList.add("hidden");
        addUserForm.reset();
        errorName.textContent = "";
        errorEmail.textContent = "";
    }); */

    // Cerrar modal ADD al hacer click fuera del contenido
    /* addModal.addEventListener("click", (e) => {
        if (e.target === addModal) {
            addModal.classList.add('hidden');
            addUserForm.reset();
        }
    }); */

    // Cerrar modal de eliminar al hacer click fuera
    deleteModal.addEventListener("click", (e) => {
        if (e.target === deleteModal) {
            deleteModal.classList.add('hidden');
        }
    });

    // Cerrar modal de eliminar
    closeDeleteModal.addEventListener("click", () => {
        deleteModal.classList.add('hidden');
    });

    // Click para eliminar el usuario
    confirmDeleteBtn.addEventListener("click", () => {
        handleDeleteUser();
    });

    // Lógica para cancelar la eliminación
    cancelDeleteBtn.addEventListener("click", () => {
        deleteModal.classList.add('hidden');
    });

    // Cerrar modal de resetear contraseña al hacer clic en el botón de cerrar
    closeResetPassBtn.addEventListener('click', () => {
        resetPassModal.classList.add('hidden');
    });
    
    // Cerrar modal de resetear contraseña al hacer clic fuera del contenido del modal
    resetPassModal.addEventListener('click', (e) => {
        if (e.target == resetPassModal) {
            resetPassModal.classList.add('hidden');
        }
    });

    // Click del botón de enviar contraseña al email
    mailResetPassBtn.addEventListener('click', () => {
        handleMailResetPass();
    });

    // Cerrar modal de correo enviado al hacer clic en el botón de cerrar
    closePassMailSentBtn.addEventListener('click', () => {
        mailResetPassModal.classList.add('hidden');
    });

    // Cerrar modal de correo enviado al hacer clic en el botón de aceptar
    confirmPassMailSentBtn.addEventListener('click', () => {
        mailResetPassModal.classList.add('hidden');
    });
    
    // Cerrar modal de correo enviado al hacer clic fuera del contenido del modal
    mailResetPassModal.addEventListener('click', (e) => {
        if (e.target == mailResetPassModal) {
            mailResetPassModal.classList.add('hidden');
        }
    });

    // LLamar función de password_setup.js para inicializar formulario de nueva contraseña
    setupPasswordForm(true, () => {
        return users.find(u => u.id === window.selectedUserId) || null;
    });

    // Cargar usuarios desde backend
    fetchUsers();

    // Agregar usuario
    addUserForm.addEventListener("submit", handleAddUser);

    window.selectedChatId = null; // Resetear la variable
    window.selectedUserId = null; // Resetear la variable
};

// Función para traer usuarios desde el backend
async function fetchUsers() {
    try {
        const response = await axios.get("/panel/get_users"); // Define esta ruta en tu backend
        users = response.data;
        renderUserList();
    } catch (error) {
        console.error("Error al cargar usuarios:", error);
    }
}

// Render listado
function renderUserList() {
    userListContainer.innerHTML = "";
    users.forEach((user) => {
        const item = document.createElement("div");
        item.className =
            "user-list-item p-4 flex items-center space-x-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-colors";
        item.dataset.userId = user.id;

        if (window.selectedUserId === user.id) {
            item.classList.add("active");
        }

        item.innerHTML = `
                    <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ${user.name.charAt(0).toUpperCase()}
                    </div>
                    <div class="flex-1">
                        <div class="user-item-name font-semibold text-white">${user.name}</div>
                        <div class="user-item-email text-sm text-gray-500">${user.email}</div>
                    </div>
                `;

        item.addEventListener("click", (event) => {
            if (window.selectedUserId != user.id) {
                event.stopPropagation();
                handleSelectUser(user.id);
            }
        });
        userListContainer.appendChild(item);
    });
}

// Función para manejar el submit del formulario
async function handleAddUser(e) {
    e.preventDefault();

    // Establecer valores
    const formData = new FormData(addUserForm);
    const formName = formData.get("name");
    const formEmail = formData.get("email");

    // Limpiar errores anteriores
    errorName.textContent = "";
    errorEmail.textContent = "";

    // Verificar que los valores no estén vacíos y sean válidos
    const nameValid = formName;
    const emailValid = formEmail;
    if (!nameValid || !emailValid) {
        if (!nameValid) {
            errorName.textContent = "El nombre está vacío";
        }
        if (!emailValid) {
            errorEmail.textContent = "El email está vacío";
        }
        return;
    }

    // Verificar que email tenga formato valido
    const emailValidFormat = validateEmail(formEmail);
    if (!emailValidFormat) {
        errorEmail.textContent = "El formato del email no es válido";
        return;
    }

    // Si son validos, continuar
    const submitBtn = addUserForm.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;

    // Bloquear botón y mostrar loader
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loader"></span>';

    try {
        const response = await axios.post("/panel/store_user", {
            name: formName,
            email: formEmail,
        });

        const newUser = response.data.user; // Usuario recién creado desde el backend

        users.unshift(newUser); // Agregar al inicio del array
        renderUserList();

        // Cerrar modal y limpiar form
        showMessage("Usuario creado correctamente.", "success");
        addModal.classList.add('hidden');
        addUserForm.reset();
    } catch (error) {
        if (error.response && error.response.status === 422) {
            const errors = error.response.data.errors;
            if (errors.name) errorName.textContent = errors.name[0];
            if (errors.email) errorEmail.textContent = errors.email[0];
        } else {
            alert("Ocurrió un error. Intenta nuevamente.");
        }
    } finally {
        // Desbloquear botón y restaurar texto
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
    }
}

// Manejar selección de usuario
function handleSelectUser(userId) {
    window.selectedUserId = userId;
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    // Remueve la clase 'active' de todos los elementos y la agrega al seleccionado.
    document.querySelectorAll(".user-list-item").forEach((item) => {
        item.classList.remove("active");
    });
    const selectedItem = document.querySelector(`[data-user-id="${userId}"]`);
    if (selectedItem) {
        selectedItem.classList.add("active");
    }

    // Manejo de color del chat seleccionado
    highlightSelectedItem("[data-user-id]", userId);

    appContainer.classList.add("user-active");
    renderUserDetail(user);
    updateMenuButtonVisibility();
}

// Crear panel de detalle
function renderUserDetail(user) {
    // Ocultar mensaje inicial y mostrar card
    userEmptyState.classList.add("hidden");
    userDetailCard.classList.remove("hidden");
    userDetailCard.innerHTML = `
        <!-- Cabecera del perfil -->
        <div class="p-8 bg-gray-800 text-white flex items-center justify-between space-x-6 border-b border-gray-700">
            <div class="flex items-center space-x-4">
                <button class="user-back-btn md:hidden p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div class="user-avatar w-16 h-16 flex-shrink-0 bg-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-white border-opacity-30 shadow-inner">
                    A
                </div>
                <span class="user-title font-bold text-2xl"></span>
            </div>
            <button class="delete-user-btn text-white hover:text-red-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>

        <!-- Cuerpo -->
        <div class="p-6 md:p-8">
            <div class="grid grid-cols-2 gap-x-8 gap-y-6">
                <!-- Sección del nombre -->
                <div>
                    <div class="block text-sm font-medium text-gray-400">Nombre</div>
                    <!-- Mostrar -->
                    <div class="user-name-display w-full flex items-center justify-between">
                        <span class="user-name-text py-1 my-1 text-lg text-white truncate"></span>
                        <button class="user-name-edit-btn p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                                <path d="M21.731 2.269a2.25 2.25 0 0 0-3.182 0l-14.881 14.88a2.25 2.25 0 0 0-.583 1.015l-1.55 4.65a.75.75 0 0 0 .964 1.014l4.65-1.55a2.25 2.25 0 0 0 1.015-.583l14.88-14.88a2.25 2.25 0 0 0 0-3.182ZM15.75 6.75l-4.25 4.25-1.5-1.5 4.25-4.25 1.5 1.5Z" />
                            </svg>
                        </button>
                    </div>
                    <!-- Editar -->
                    <div class="user-name-editer w-full flex-col items-end pt-1 hidden">
                        <input type="text" class="user-name-input w-full px-2 py-1 mb-2 rounded-md text-lg text-white ring-1 ring-gray-500 focus:outline-none" autocomplete="off" required>
                    </div>
                    <div class="user-name-edit-options invisible flex w-full space-x-2">
                        <div class="user-name-error flex w-full text-red-500 text-xs"></div>
                        <button class="user-name-save-btn p-0 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-100">
                            <p class="px-3 py-1 text-xs text-white">OK</p>
                        </button>
                    </div>
                </div>
                <!-- Sección del email -->
                <div>
                    <div class="block text-sm font-medium text-gray-400">Correo electrónico</div>
                    <!-- Mostrar -->
                    <div class="user-email-display w-full flex items-center justify-between">
                        <span class="user-email-text py-1 my-1 text-lg text-white truncate"></span>
                        <button class="user-email-edit-btn p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                                <path d="M21.731 2.269a2.25 2.25 0 0 0-3.182 0l-14.881 14.88a2.25 2.25 0 0 0-.583 1.015l-1.55 4.65a.75.75 0 0 0 .964 1.014l4.65-1.55a2.25 2.25 0 0 0 1.015-.583l14.88-14.88a2.25 2.25 0 0 0 0-3.182ZM15.75 6.75l-4.25 4.25-1.5-1.5 4.25-4.25 1.5 1.5Z" />
                            </svg>
                        </button>
                    </div>
                    <!-- Editar -->
                    <div class="user-email-editer w-full flex-col items-end pt-1 hidden">
                        <input type="text" class="user-email-input w-full px-2 py-1 mb-2 rounded-md text-lg text-white ring-1 ring-gray-500 focus:outline-none" autocomplete="off" required>
                    </div>
                    <div class="user-email-edit-options invisible flex w-full space-x-2">
                        <div class="user-email-error flex w-full text-red-500 text-xs"></div>
                        <button class="user-email-save-btn p-0 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-100">
                            <p class="px-3 py-1 text-xs text-white">OK</p>
                        </button>
                    </div>
                </div>
                <!-- Sección del rol -->
                <div>
                    <div class="block text-sm text-gray-400">Rol</div>
                    <div class="flex items-center justify-between">
                        <span class="user-role-text py-1 my-1 text-lg text-white truncate"></span>
                    </div>
                </div>
                <!-- Sección de fecha creación -->
                <div>
                    <div class="block text-sm text-gray-400">Creado</div>
                    <div class="flex items-center justify-between">
                        <span class="user-created-text py-1 my-1 text-lg text-white truncate"></span>
                    </div>
                </div>

                <!-- <div>
                    <p class="text-sm font-medium text-gray-400 mb-1">Correo Electrónico</p>
                    <span id="user-email" data-field="email" class="text-white text-lg"></span>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-400 mb-1">Clave</p>
                    <div class="flex items-center justify-between space-x-2">
                        <span data-field="password" class="user-password text-white text-lg">********</span>
                        <button id="sendResetBtn" class="btn-custom font-semibold py-2 px-4 rounded-lg shadow-md">
                            Enviar correo
                        </button>
                    </div>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-400 mb-1">Rol</p>
                    <span id="user-role" data-field="role" class="text-white text-lg"></span>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-400 mb-1">Creado</p>
                    <p id="user-created" class="text-white text-lg"></p>
                </div> -->
            </div>
        </div>
        <div class="w-full mt-4 pt-6 border-t border-gray-700">
            <div class="px-6 md:px-8">
                <span class="text-lg font-bold text-white">Contraseña</span>
                <div class="user-pass-container flex flex-row items-center justify-between rounded-lg p-4 mt-2">
                    <p class="user-password text-slate-300"></p>
                    <button class="reset-password-btn btn-custom font-semibold text-sm py-3 px-3 rounded-lg shadow-md">
                        Nueva contraseña
                    </button>
                </div>
            </div>
        </div>
    `;

    const backButton = userDetailCard.querySelector(".user-back-btn");
    backButton.addEventListener("click", handleBack);

    const userDetailAvatar = userDetailCard.querySelector(".user-avatar");
    const userDetailTitle = userDetailCard.querySelector(".user-title");
    const userDetailPassword = userDetailCard.querySelector(".user-password");
    const userDetailName = userDetailCard.querySelector(".user-name-text");
    const userDetailEmail = userDetailCard.querySelector(".user-email-text");
    const userDetailRole = userDetailCard.querySelector(".user-role-text");
    const userDetailCreated = userDetailCard.querySelector(".user-created-text");
    const resetPassBtn = userDetailCard.querySelector('.reset-password-btn');

    // Rellenar info
    userDetailAvatar.textContent = user.name
        .charAt(0)
        .toUpperCase();
    userDetailTitle.textContent = user.name;

    userDetailName.textContent = user.name;
    userDetailEmail.textContent = user.email;
    userDetailPassword.textContent = 'Gestionar la contraseña del usuario.';
    userDetailRole.textContent = user.role ?? "Vendedor";
    userDetailCreated.textContent = new Date(
        user.created_at
    ).toLocaleDateString();

    // Botón eliminar
    const deleteBtn = userDetailCard.querySelector(".delete-user-btn");
    deleteBtn.onclick = () => showDeleteConfirmationModal(user);

    // Función de editar
    function setupInputEdit(type, maxLength, allowEmpty, emptyDisplay = '') {
        const inputMaxLength = maxLength;
        const theDisplay = document.querySelector('.user-'+type+'-display');
        const theEditer = document.querySelector('.user-'+type+'-editer');
        const theEditOptions = document.querySelector('.user-'+type+'-edit-options');
        const theEditBtn = document.querySelector('.user-'+type+'-edit-btn');
        const theInput = document.querySelector('.user-'+type+'-input');
        const theText = document.querySelector('.user-'+type+'-text');
        const theSaveBtn = document.querySelector('.user-'+type+'-save-btn');
        const theError = document.querySelector(".user-"+type+"-error");
        let currentValue = null;
        theInput.maxLength = inputMaxLength;

        // Funciones de mostrar / esconder editar nombre
        function ShowEdit() {
            theEditer.classList.remove('hidden');
            theEditer.classList.add('flex');
            theEditOptions.classList.remove('invisible');
        }

        function HideEdit() {
            theEditer.classList.add('hidden');
            theEditer.classList.remove('flex');
            theEditOptions.classList.add('invisible');
        }

        function ShowDisplay() {
            theDisplay.classList.remove('hidden');
        }

        function HideDisplay() {
            theDisplay.classList.add('hidden');
        }

        async function Save() {
            if (window.selectedUserId == user.id) {
                let allGood = true;
                const originalValue = currentValue;
                let newValue = theInput.value.trim();
                let newText = originalValue == null || allowEmpty && newValue == '' ? emptyDisplay : currentValue;

                // Revisar si el nuevo valor está vacío
                const isEmpty = newValue == '';
                if (!isEmpty) {
                    // No está vacío, revisar tipo
                    if (type == "name") {
                        // Ninguna otra comprobación, actualizar texto
                        newText = newValue;
                    } else if (type == "email") {
                        // Comprobar si el email ingresado es válido
                        const validEmail = validateEmail(newValue);
                        if (!validEmail) {
                            // Email no es válido, mostrar mensaje de error
                            allGood = false;
                            showMessage("El formato del email no es válido", "error");
                        } else {
                            // Email válido
                            newText = newValue;
                        }
                    }
                }
                else
                {
                    // Si está vacío, revisar si se permite que esté vacío
                    if (!allowEmpty) {
                        // No se permite, mostrar mensaje de error
                        allGood = false;
                        let message = "";
                        if (type == 'name') message = "El nombre no puede estar vacío";
                        if (type == 'email') message = "El email no puede estar vacío";
                        showMessage(message, "error");
                    }
                }

                // Establecer valor a mostrar, terminar editar
                theText.textContent = newText;
                theError.textContent = "";
                HideEdit(); // Esconder edit
                ShowDisplay(); // Mostrar display

                // Regresar si algo salió mal
                if (!allGood) return;

                // Verificar si hay que actualizar en base de datos
                if (isEmpty) newValue = null;
                let needUpdate = newValue !== originalValue;
                if (needUpdate) {
                    // Es diferente al original
                    currentValue = newValue;

                    // Verificar tipo
                    const userItem = document.querySelector(`[data-user-id="${user.id}"]`);
                    if (type == 'name') {
                        // Actualizar valor del nombre del usuario en JS
                        user.name = newValue;
                        if (userItem) {
                            // Actualizar nombre de la lista
                            const listNameEl = userItem.querySelector(".user-item-name");
                            if (listNameEl) {
                                listNameEl.textContent = newValue;
                            }

                            userDetailTitle.textContent = user.name;
                        }
                    }
                    else if (type == 'email') {
                        // Actualizar valor del email del usuario en JS
                        user.email = newValue;
                        if (userItem) {
                            // Actualizar email de la lista
                            const listEmailEl = userItem.querySelector(".user-item-email");
                            if (listEmailEl) {
                                listEmailEl.textContent = newValue;
                            }
                        }
                    }

                    let message = '';
                    if (type == 'name') message = "Nombre de usuario actualizado";
                    if (type == 'email') message = "Email de usuario actualizado";
                    showMessage(message, "success");

                    // Enviar a backend
                    if (type == 'name') {
                        try {
                            const response = await axios.post("/panel/edit_user_name", {
                                id: user.id,
                                name: newValue,
                            });
                        }
                        catch (error) {
                            console.error("Error al actualizar nombre de usuario: ", error);
                        }
                    }
                    else if (type == 'email') {
                        try {
                            const response = await axios.post("/panel/edit_user_email", {
                                id: user.id,
                                email: newValue,
                            });
                        }
                        catch (error) {
                            console.error("Error al actualizar email de usuario: ", error);
                        }
                    }
                }
            }
        }

        // El click del botón para empezar a editar
        theEditBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            // Establecer valor del input
            if (type == 'name') currentValue = user.name;
            if (type == 'email') currentValue = user.email;
            theInput.value = currentValue == null ? '' : currentValue;
            HideDisplay(); // Esconder display
            ShowEdit(); // Mostrar edit
            theInput.focus();
        });

        // Verificar que el valor del input esté correcto
        theInput.addEventListener('input', (event) => {
            let errorMessage = "";

            // Limitar el tamaño máximo del nombre
            if (theInput.value.length > inputMaxLength) {
                theInput.value = theInput.value.slice(0, inputMaxLength);
            }

            if (theInput.value == "") {
                if (!allowEmpty) {
                    // El input está vacío
                    let errorStart = "";
                    if (type == 'name') errorStart = 'Nombre vacío';
                    if (type == 'email') errorStart = 'Email vacío';
                    errorMessage = errorStart;
                }
            }

            theError.textContent = errorMessage;
        });

        // Tratar de guardar cuando se pierde el focus del input
        theInput.addEventListener('blur', () => {
            Save();
        });

        // Tratar de guardar cuando se hace click en botón de OK
        theSaveBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            Save();
        });
    }

    // Aplicar lógica de editar nombre
    const nameMaxLength = 254;
    setupInputEdit('name', nameMaxLength, false);

    // Aplicar lógica de editar email
    const emailMaxLength = 254;
    setupInputEdit('email', emailMaxLength, false);

    // Click del botón de nueva contraseña
    resetPassBtn.addEventListener('click', () => {
        resetPassModal.classList.remove('hidden');
    });
}

async function handleDeleteUser() {
    if (window.selectedUserId) {
        try {
            const response = await axios.post("/panel/delete_user", {
                id: window.selectedUserId,
            });

            removeSelectedUser();
            showMessage("Usuario eliminado correctamente", "success");
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;

                // Quitar al usuario de la lista si es que no existe
                if (error.response.status === 404)
                {
                    removeSelectedUser();
                    showMessage("El usuario no existe", "error");
                }
            } else {
                alert("Ocurrió un error. Intenta nuevamente.");
            }
        }
    }
}

function removeSelectedUser() {
    if (window.selectedUserId) {
        users = users.filter((user) => user.id !== window.selectedUserId);
        window.selectedUserId = null;
        renderUserList();
        userEmptyState.classList.remove("hidden");
        userDetailCard.classList.add("hidden");
        userDetailCard.innerHTML = '';
        deleteModal.classList.add('hidden');
        console.log(users);
    }
}

/* // Agrega listeners para la edición en línea
function addInlineEditListeners() {
    document.querySelectorAll("[data-field]").forEach((element) => {
        element.addEventListener("dblclick", () => enableInlineEdit(element));
    });
}

// Habilita la edición en un campo específico
function enableInlineEdit(element) {
    const userId = element.dataset.id;
    const field = element.dataset.field;
    const originalValue = element.textContent.trim();

    const isPassword = field === "password";

    // Crea un input y lo inserta en lugar del texto
    const input = document.createElement("input");
    input.type = isPassword ? "text" : "text"; // Usamos 'text' para poder editar
    input.value = isPassword ? "" : originalValue;
    input.placeholder = isPassword ? "Nueva clave" : "";
    input.className =
        "w-full px-2 py-1 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";

    // Verifica el contenedor para manejar la clase 'flex'
    const container = element.parentElement;
    let parentIsFlex = false;
    if (container.classList.contains("flex")) {
        parentIsFlex = true;
        element.style.flex = "1";
        input.style.flex = "1";
    }

    element.replaceWith(input);
    input.focus();

    // Función para guardar los cambios
    const saveChanges = () => {
        const newValue = input.value.trim();
        const user = users.find((u) => u.id == userId);
        const span = document.createElement("span");

        if (user) {
            if (newValue !== "") {
                // Solo actualiza si hay un nuevo valor
                user[field] = newValue;
            }
            span.textContent = isPassword
                ? "********"
                : newValue || originalValue; // Muestra asteriscos para la clave
            span.className = element.className;
            span.dataset.field = field;
            span.dataset.id = userId;
            input.replaceWith(span);

            if (parentIsFlex) {
                span.style.flex = "1";
            }

            if (newValue !== "" && newValue !== originalValue) {
                showMessage("Cambio guardado exitosamente.", "success");
            }
        }
        addInlineEditListeners(); // Vuelve a agregar los listeners
    };

    // Eventos para guardar o cancelar
    input.addEventListener("blur", saveChanges); // Guarda si el input pierde el foco
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            input.removeEventListener("blur", saveChanges); // Evita que se dispare el blur después
            saveChanges();
        } else if (e.key === "Escape") {
            input.removeEventListener("blur", saveChanges);
            const span = document.createElement("span");
            span.textContent = originalValue;
            span.className = element.className;
            span.dataset.field = field;
            span.dataset.id = userId;
            input.replaceWith(span);
            addInlineEditListeners();
        }
    });
} */

// Muestra el modal de confirmación para eliminar
function showDeleteConfirmationModal(user) {
    userNameToDeleteEl.textContent = user.name;
    deleteModal.classList.remove('hidden');
}

// Función para enviar correo para reestablecer contraseña
async function handleMailResetPass() {
    if (window.selectedUserId) {
        const user = users.find(u => u.id === window.selectedUserId);
        if (user) {
            mailResetPassText.textContent = `Se ha enviado un enlace de restablecimiento a ${user.email}. Expirará en 60 minutos.`;
        }

        try {
            const response = await axios.post("/panel/edit_user_password_mail", {
                id: window.selectedUserId,
            });

            resetPassModal.classList.add('hidden');
            mailResetPassModal.classList.remove('hidden');
            showMessage('Email enviado al correo del usuario', 'success');
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;

                // Quitar al usuario de la lista si es que no existe
                if (error.response.status === 404)
                {
                    removeSelectedUser();
                    resetPassModal.classList.add('hidden');
                    showMessage("El usuario no existe", "error");
                }
            } else {
                alert("Ocurrió un error. Intenta nuevamente.");
            }
        }
    }
}

// Botón volver en móvil
const handleBack = () => {
    window.selectedUserId = null;
    appContainer.classList.remove("user-active");
    updateMenuButtonVisibility();
};

//Toggle Burguer menu and back button
const updateMenuButtonVisibility = () => {
    if (!menuButton) return;

    if (window.selectedUserId) {
        menuButton.classList.add("hidden"); // Oculta cuando hay chat abierto
    } else {
        menuButton.classList.remove("hidden"); // Muestra cuando estamos en listado
    }
};

window.resetUserForm = () =>{
    addUserForm.reset();
    errorName.textContent = "";
    errorEmail.textContent = "";
};

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
