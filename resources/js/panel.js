import axios from "axios";

import "./chat.js";
import "./pusher_setup.js";
import "./user.js";
import "./meeting.js";
import "./products.js";

let messageModal,
    messageTextEl;

document.addEventListener("DOMContentLoaded", () => {
    // Referencias generales del DOM
    const menuButton = document.getElementById("menu-button");
    const closeMenuButton = document.getElementById("close-menu-button");
    const appContainer = document.getElementById("app-container");
    messageModal = document.getElementById("messageModal");
    messageTextEl = document.getElementById("messageText");

    const btn_default = document.getElementById(`btn-${currentMenu}`);
    if (btn_default) {
        btn_default.classList.add("bg-gray-700");
    }

    // Abrir el menú
    if (menuButton && appContainer) {
        menuButton.addEventListener("click", () => {
            appContainer.classList.add("nav-active");
        });
    }

    // Cerrar el menú
    if (closeMenuButton && appContainer) {
        closeMenuButton.addEventListener("click", () => {
            appContainer.classList.remove("nav-active");
        });
    }

    // Referencias del cuadro de perfil
    let isBoxVisible = false;
    const nameMaxLength = 50;
    const profileBtn = document.getElementById('profileBtn');
    const profileBox = document.getElementById('profileBox');
    const profileLogoutBtn = document.getElementById('profileLogoutBtn');
    const profileLogoutForm = document.getElementById('profileLogoutForm');
    const closeProfileBtn = document.getElementById('closeProfileBtn');
    const profileNameDisplay = document.getElementById('profileNameDisplay');
    const profileNameEditer = document.getElementById('profileNameEditer');
    const profileNameEditOptions = document.getElementById('profileNameEditOptions');
    const profileNameEditBtn = document.getElementById('profileNameEditBtn');
    const profileNameInput = document.getElementById('profileNameInput');
    const profileNameText = document.getElementById('profileNameText');
    const profileNameSaveBtn = document.getElementById('profileNameSaveBtn');
    //const profileNameCancelBtn = document.getElementById('profileNameCancelBtn');
    const profileNameError = document.getElementById("profileNameError");
    let currentProfileName = profileNameText.textContent.trim();
    profileNameInput.maxLength = nameMaxLength;

    // Funciones de mostrar / esconder cuadro de perfil
    function ShowProfileBox() {
        profileBox.classList.add('is-visible');
        isBoxVisible = true;
    }

    function HideProfileBox() {
        profileBox.classList.remove('is-visible');
        isBoxVisible = false;
    }

    // El click del botón de perfil en el panel de la izquierda
    profileBtn.addEventListener('click', (event) => {
        if (isBoxVisible) {
            HideProfileBox();
        } else {
            ShowProfileBox();
        }
    });

    // Cerrar cuadro si se presiona fuera
    document.addEventListener('click', (event) => {
        if (isBoxVisible && !profileBox.contains(event.target) && !profileBtn.contains(event.target)) {
            HideProfileBox();
        }
    });

    // Cerrar cuadro si se presiona el botón de cerrar
    closeProfileBtn.addEventListener("click", () => {
        HideProfileBox();
    });

    // Funciones de mostrar / esconder editar nombre
    function ShowEditProfileName() {
        profileNameEditer.classList.remove('hidden');
        profileNameEditer.classList.add('flex');
        profileNameEditOptions.classList.remove('invisible');
    }

    function HideEditProfileName() {
        profileNameEditer.classList.add('hidden');
        profileNameEditer.classList.remove('flex');
        profileNameEditOptions.classList.add('invisible');
    }

    function ShowDisplayProfileName() {
        profileNameDisplay.classList.remove('hidden');
    }

    function HideDisplayProfileName() {
        profileNameDisplay.classList.add('hidden');
    }

    async function SaveProfileName() {
        const originalValue = currentProfileName;
        const newValue = profileNameInput.value.trim();
        profileNameError.textContent = "";

        // Revisar si el nuevo valor está vacío
        const isEmpty = newValue == "";
        if (isEmpty) {
            // Si está vacío, mostrar mensaje de error
            showMessage("Tu nombre no puede estar vacío", "error");
        }
        else
        {
            // No está vacío, actualizar nombre actual
            currentProfileName = newValue;
        }

        // Establecer valor a mostrar, terminar editar
        profileNameText.textContent = currentProfileName;
        HideEditProfileName(); // Esconder edit
        ShowDisplayProfileName(); // Mostrar display

        // Verificar si hay que actualizar en base de datos
        let needUpdate = newValue !== originalValue;
        if (!isEmpty && needUpdate) {
        // Es diferente al original, enviar a backend
            showMessage("Nombre de perfil actualizado.", "success");
            try {
                const response = await axios.post("/panel/edit_user_name", {
                    name: newValue,
                });
            }
            catch (error) {
                console.error("Error al actualizar nombre de perfil: ", error);
            }
        }
    }

    // El click del botón para empezar a editar
    profileNameEditBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        // Establecer valor del input
        profileNameInput.value = currentProfileName;
        HideDisplayProfileName(); // Esconder display
        ShowEditProfileName(); // Mostrar edit
        profileNameInput.focus();
    });

    // Verificar que el valor del input esté correcto
    profileNameInput.addEventListener('input', (event) => {
        let errorMessage = "";

        // Limitar el tamaño máximo del nombre
        if (profileNameInput.value.length > nameMaxLength) {
            profileNameInput.value = profileNameInput.value.slice(0, nameMaxLength);
        }

        if (profileNameInput.value == "") {
            // El nombre está vacío
            errorMessage = "Nombre vacío";
        }

        profileNameError.textContent = errorMessage;
    });

    // Tratar de guardar el nombre cuando se pierde el focus del input
    profileNameInput.addEventListener('blur', (event) => {
        SaveProfileName();
    });

    // Tratar de guardar el nombre cuando se hace click en botón de OK
    profileNameSaveBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        SaveProfileName();
    });

    /* // El click del botón para cancelar editar
    profileNameCancelBtn.addEventListener('click', (event) => {
        if (!updatingProfileName) {
            event.stopPropagation();
            HideEditProfileName(); // Esconder edit
            ShowDisplayProfileName(); // Mostrar display
        }
    }); */

    // El click para cerrar sesión
    profileLogoutBtn.addEventListener('click', (event) => {
        profileLogoutForm.submit();
    });
});

const mainContent = document.getElementById("main-content");

// mapa de menús (url + función init)
const menus = {
    chat: {
        url: "/panel/chats",
        init: window.initChatSection,
        btn: document.getElementById("btn-chat"),
    },
    users: {
        url: "/panel/users",
        init: window.initUserSection,
        btn: document.getElementById("btn-users"), // puede ser null si no es admin
    },
    products: {
        url: "/panel/products",
        init: window.initProductSection,
        btn: document.getElementById("btn-products"), // puede ser null si no es admin
    },
    meetings: {
        url: "/panel/meetings",
        init: window.initMeetingSection,
        btn: document.getElementById("btn-meetings"),
    },
};

// 🔹 controlador global para abortar requests anteriores
let controller = null;

// función genérica para cargar secciones
async function loadSection(menuKey) {
    const menu = menus[menuKey];
    if (!menu) return;

    // evitar recarga innecesaria
    if (window.currentMenu === menuKey) return;
    window.currentMenu = menuKey;

    // cancelar request anterior si existe
    if (controller) {
        controller.abort();
    }
    controller = new AbortController();

    // quitar clase a todos los botones
    document.querySelectorAll(".menu-btn").forEach((el) => {
        el.classList.remove("bg-gray-700");
    });

    // marcar botón activo si existe
    if (menu.btn) {
        menu.btn.classList.add("bg-gray-700");
    }

    // loader
    mainContent.innerHTML = `
        <div class="flex items-center justify-center w-full h-full">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
                <span class="mt-4 text-gray-500">Cargando...</span>
            </div>
        </div>
    `;

    try {
        const response = await axios.get(menu.url, {
            signal: controller.signal,
        });
        mainContent.innerHTML = response.data;

        if (typeof menu.init === "function") {
            menu.init();
        }
    } catch (error) {
        if (error.name === "CanceledError" || error.name === "AbortError") {
            console.log("Petición cancelada");
        } else {
            console.error("Error cargando sección:", error);
        }
    }
}

// listeners (solo si el botón existe)
Object.keys(menus).forEach((key) => {
    const menu = menus[key];
    if (menu.btn) {
        menu.btn.addEventListener("click", () => loadSection(key));
    }
});

//Resalta el item seleccionado y desmarca los demás
window.highlightSelectedItem = (selector, selectedId) => {
    document.querySelectorAll(selector).forEach((el) => {
        if (el.dataset.chatId === String(selectedId) || el.dataset.userId === String(selectedId)) {
            el.classList.add(
                "bg-indigo-50",
                "border-l-4",
                "border-indigo-500",
                "border-l-indigo-500"
            );
            el.classList.remove("border-b", "border", "divide-y");
        } else {
            el.classList.remove(
                "bg-indigo-50",
                "border-l-4",
                "border-indigo-500",
                "border-l-indigo-500"
            );
        }
    });
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

window.showMessage = showMessage;