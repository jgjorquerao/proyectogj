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
    detailPanelContainer,
    appContainer,
    menuButton;
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
    appContainer = document.getElementById("app-container");
    menuButton = document.getElementById("menu-button");

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
/* async function handleAddUser(e) {
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
} */
async function handleAddUser(e) {
    e.preventDefault();

    // Limpiar errores anteriores
    errorName.textContent = "";
    errorEmail.textContent = "";

    const submitBtn = addUserForm.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;

    // Bloquear botón y mostrar loader
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loader"></span>';

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
    } finally {
        // Desbloquear botón y restaurar texto
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
    }
}

// Manejar selección de usuario
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

    // Manejo de color del chat seleccionado
    highlightSelectedItem("[data-user-id]", userId);

    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", handleBack);
    appContainer.classList.add("user-active");
    renderUserDetail(user);
    updateMenuButtonVisibility();
}

// Crear panel de detalle
function renderUserDetail(user) {
    const emptyState = document.getElementById("user-empty-state");
    const detailCard = document.getElementById("user-detail-card");

    // Ocultar mensaje inicial y mostrar card
    emptyState.classList.add("hidden");
    detailCard.classList.remove("hidden");

    // Rellenar info
    document.getElementById("user-avatar").textContent = user.name
        .charAt(0)
        .toUpperCase();
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("user-password").textContent = user.password
        ? "********"
        : "Sin clave";
    document.getElementById("user-role").textContent = user.role ?? "Vendedor";
    document.getElementById("user-created").textContent = new Date(
        user.created_at
    ).toLocaleDateString();

    // Botón eliminar
    const deleteBtn = document.getElementById("deleteUserBtn");
    deleteBtn.onclick = () => showDeleteConfirmationModal(user);

    // Botón reset
    const resetBtn = document.getElementById("sendResetBtn");
    resetBtn.onclick = () => handleSendPasswordResetEmail(user.id);

    // Activar inline edit (doble click en spans con data-field)
    addInlineEditListeners();
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

// Botón volver en móvil
const handleBack = () => {
    selectedUserId = null;
    appContainer.classList.remove("user-active");
    updateMenuButtonVisibility();
};

//Toggle Burguer menu and back button
const updateMenuButtonVisibility = () => {
    if (!menuButton) return;

    if (selectedUserId) {
        menuButton.classList.add("hidden"); // Oculta cuando hay chat abierto
    } else {
        menuButton.classList.remove("hidden"); // Muestra cuando estamos en listado
    }
};
