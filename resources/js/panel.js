import axios from "axios";

import "./chat.js";
import "./pusher_setup.js";
import "./user.js";
import "./products.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const closeMenuButton = document.getElementById("close-menu-button");
    const appContainer = document.getElementById("app-container");

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