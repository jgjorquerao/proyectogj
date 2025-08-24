import axios from "axios";

// Inicializar Axios
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.querySelector(
    'meta[name="csrf-token"]'
).content;
axios.defaults.headers.common["Content-Type"] = "application/json";

let openAddModal,
    closeAddModal,
    addModal,
    addUserForm,
    errorName,
    errorEmail,
    userListContainer,
    detailPanelContainer;
let deleteModal,
    closeDeleteModal,
    confirmDeleteBtn,
    cancelDeleteBtn,
    userNameToDeleteEl,
    messageModal,
    messageTextEl;
let selectedUserId = null;

let users = []; // Array de usuarios cargados

window.addEventListener("load", function () {
    initUserSection();
});

window.initUserSection = () => {
    // Referencias DOM
    openAddModal = document.getElementById("openModal");
    closeAddModal = document.getElementById("closeAddModal");
    addModal = document.getElementById("addUserModal");
    addUserForm = document.getElementById("addUserForm");
    errorName = document.getElementById("errorName");
    errorEmail = document.getElementById("errorEmail");
    userListContainer = document.getElementById("user-list");
    detailPanelContainer = document.getElementById("user-detail-panel");
    deleteModal = document.getElementById("deleteUserModal");
    closeDeleteModal = document.getElementById("closeDeleteModal");
    confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
    userNameToDeleteEl = document.getElementById("userNameToDelete");
    messageModal = document.getElementById("messageModal");
    messageTextEl = document.getElementById("messageText");

    if (!openAddModal || !closeAddModal || !addModal) return;

    // Abrir modal ADD
    openAddModal.addEventListener("click", () => {
        addModal.classList.remove("hidden");
    });

    // Cerrar modal ADD
    closeAddModal.addEventListener("click", () => {
        addModal.classList.add("hidden");
        addUserForm.reset();
        errorName.textContent = "";
        errorEmail.textContent = "";
    });

    // Cerrar modal ADD al hacer click fuera del contenido
    addModal.addEventListener("click", (e) => {
        if (e.target === addModal) {
            addModal.classList.add("hidden");
            addUserForm.reset();
        }
    });

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
        if (selectedUserId) {
            users = users.filter((user) => user.id !== selectedUserId);
            renderUserList();
            detailPanelContainer.innerHTML = `<div class="flex items-center justify-center h-full text-gray-500">
                                                <span class="hidden md:block text-lg">Selecciona un usuario</span>
                                            </div>`;
            selectedUserId = null;
            deleteModal.classList.add("hidden");
            showMessage("Usuario eliminado correctamente.", "success");
        }
    });

    // Lógica para cancelar la eliminación
    cancelDeleteBtn.addEventListener("click", () => {
        deleteModal.classList.add("hidden");
    });

    // Cargar usuarios desde backend
    fetchUsers();

    // Agregar usuario
    addUserForm.addEventListener("submit", handleAddUser);
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
/* function renderUserList() {
    const container = document.getElementById("user-list");
    container.innerHTML = "";

    users.forEach((user) => {
        const item = document.createElement("div");
        item.className =
            "p-4 flex items-center space-x-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100";
        item.dataset.userId = user.id;

        item.innerHTML = `
            <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                ${user.name.charAt(0).toUpperCase()}
            </div>
            <div class="flex-1">
                <div class="font-semibold">${user.name}</div>
                <div class="text-sm text-gray-500">${user.email}</div>
            </div>
        `;

        item.addEventListener("click", () => handleSelectUser(user.id));
        container.appendChild(item);
    });
} */
function renderUserList() {
    userListContainer.innerHTML = "";
    users.forEach((user) => {
        const item = document.createElement("div");
        item.className =
            "user-list-item p-4 flex items-center space-x-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors";
        item.dataset.userId = user.id;

        if (selectedUserId === user.id) {
            item.classList.add("active");
        }

        item.innerHTML = `
                    <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ${user.name.charAt(0).toUpperCase()}
                    </div>
                    <div class="flex-1">
                        <div class="font-semibold text-gray-900">${
                            user.name
                        }</div>
                        <div class="text-sm text-gray-500">${user.email}</div>
                    </div>
                `;

        item.addEventListener("click", () => handleSelectUser(user.id));
        userListContainer.appendChild(item);
    });
}

// Función para manejar el submit del formulario
async function handleAddUser(e) {
    e.preventDefault();

    // Limpiar errores anteriores
    errorName.textContent = "";
    errorEmail.textContent = "";

    const formData = new FormData(addUserForm);

    try {
        const response = await axios.post("/panel/store_user", {
            name: formData.get("name"),
            email: formData.get("email"),
        });

        const newUser = response.data.user; // Usuario recién creado desde el backend

        users.unshift(newUser); // Agregar al inicio del array
        renderUserList();

        // Cerrar modal y limpiar form
        addModal.classList.add("hidden");
        addUserForm.reset();
    } catch (error) {
        if (error.response && error.response.status === 422) {
            const errors = error.response.data.errors;
            if (errors.name) errorName.textContent = errors.name[0];
            if (errors.email) errorEmail.textContent = errors.email[0];
        } else {
            alert("Ocurrió un error. Intenta nuevamente.");
        }
    }
}

// Manejar selección de usuario
/* function handleSelectUser(userId) {
    window.selectedUserId = userId;
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    const detailPanel = document.getElementById("user-detail-panel");
    detailPanel.innerHTML = createUserDetail(user);
} */
function handleSelectUser(userId) {
    selectedUserId = userId;
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

    renderUserDetail(user);
}

// Crear panel de detalle
/* function createUserDetail(user) {
    return `
        <div class="flex flex-col h-full bg-gray-50">
            <!-- Header -->
            <div class="flex items-center p-4 bg-white border-b border-gray-200 shadow-sm">
                <div class="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ${user.name.charAt(0).toUpperCase()}
                </div>
                <h3 class="font-semibold text-lg">${user.name}</h3>
            </div>

            <!-- Body -->
            <div class="flex-1 p-6 space-y-4 overflow-y-auto">
                <div>
                    <p class="text-sm font-bold text-gray-600">Correo:</p>
                    <p class="text-gray-800">${user.email}</p>
                </div>
                <div>
                    <p class="text-sm font-bold text-gray-600">Creado:</p>
                    <p class="text-gray-800">${new Date(
                        user.created_at
                    ).toLocaleDateString()}</p>
                </div>
                <div>
                    <p class="text-sm font-bold text-gray-600">Rol:</p>
                    <p class="text-gray-800">${user.role ?? "No asignado"}</p>
                </div>
            </div>

            <!-- Footer (acciones) -->
            <div class="flex items-center justify-end p-4 border-t border-gray-200 bg-white space-x-2">
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Editar</button>
                <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Eliminar</button>
            </div>
        </div>
    `;
} */
function renderUserDetail(user) {
    detailPanelContainer.innerHTML = `
                <div class="w-full max-w-xl m-auto bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in transition-all">
                    <!-- Cabecera del perfil -->
                    <div class="p-8 bg-gray-800 text-white flex items-center justify-between space-x-6">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 flex-shrink-0 bg-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-white border-opacity-30 shadow-inner">
                                ${user.name.charAt(0).toUpperCase()}
                            </div>
                            <!-- Usamos un span para el nombre para que sea editable -->
                            <span class="font-bold text-2xl" data-field="name" data-id="${
                                user.id
                            }">${user.name}</span>
                        </div>
                        <!-- Botón de eliminar con icono de papelera -->
                        <button id="deleteUserBtn" data-id="${
                            user.id
                        }" class="text-white hover:text-red-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <!-- Cuerpo de la tarjeta con los detalles -->
                    <div class="p-8 space-y-6">
                        <div>
                            <p class="text-sm font-bold text-gray-600 mb-1">Correo Electrónico:</p>
                            <!-- Usamos un span para el correo -->
                            <span class="text-gray-800 text-lg" data-field="email" data-id="${
                                user.id
                            }">${user.email}</span>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-600 mb-1">Clave:</p>
                            <div class="flex items-center justify-between space-x-2">
                                <!-- Usamos un span para la clave que se puede editar en línea -->
                                <span class="text-gray-800 text-lg" data-field="password" data-id="${
                                    user.id
                                }">${
        user.password ? "********" : "Sin clave"
    }</span>
                                <!-- Botón para enviar correo de restablecimiento -->
                                <button onclick="handleSendPasswordResetEmail(${
                                    user.id
                                })" class="px-3 py-1 text-sm bg-indigo-800 text-white rounded-lg hover:bg-indigo-900 transition-colors">
                                    Enviar correo
                                </button>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-600 mb-1">Rol:</p>
                            <span class="text-gray-800 text-lg" data-field="role" data-id="${
                                user.id
                            }">${user.role ?? "Vendedor"}</span>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-600 mb-1">Creado:</p>
                            <p class="text-gray-800 text-lg">${new Date(
                                user.created_at
                            ).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            `;
    // Agrega los eventos de doble clic a los campos editables
    addInlineEditListeners();
    // Agrega el evento para el botón de eliminar
    document.getElementById("deleteUserBtn").addEventListener("click", () => {
        showDeleteConfirmationModal(user);
    });
}

// Agrega listeners para la edición en línea
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
}

// Muestra el modal de confirmación para eliminar
function showDeleteConfirmationModal(user) {
    userNameToDeleteEl.textContent = user.name;
    deleteModal.classList.remove("hidden");
}

// Función para manejar la simulación de envío de correo
function handleSendPasswordResetEmail(userId) {
    const user = users.find((u) => u.id === userId);
    if (user) {
        showMessage(
            `Simulando envío de correo de restablecimiento de clave a ${user.email}`,
            "info"
        );
    }
}

// Muestra un mensaje de notificación flotante
function showMessage(text, type = "info") {
    messageTextEl.textContent = text;
    if (type === "success") {
        messageModal.classList.remove("bg-gray-800");
        messageModal.classList.add("bg-green-600");
    } else {
        messageModal.classList.remove("bg-green-600");
        messageModal.classList.add("bg-gray-800");
    }
    messageModal.classList.remove("hidden");
    messageModal.classList.add("animate-fade-in");
    setTimeout(() => {
        messageModal.classList.add("hidden");
        messageModal.classList.remove("animate-fade-in");
    }, 3000);
}
