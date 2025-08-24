import axios from "axios";

import "./chat.js";
import "./pusher_setup.js";
import "./user.js";

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
};

// función genérica para cargar secciones
async function loadSection(menuKey) {
    const menu = menus[menuKey];
    if (!menu) return;

    // evitar recarga innecesaria
    if (window.currentMenu === menuKey) return;
    window.currentMenu = menuKey;

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
        const response = await axios.get(menu.url);
        mainContent.innerHTML = response.data;

        if (typeof menu.init === "function") {
            menu.init();
        }
    } catch (error) {
        console.error("Error cargando sección:", error);
    }
}

// listeners (solo si el botón existe)
Object.keys(menus).forEach((key) => {
    const menu = menus[key];
    if (menu.btn) {
        menu.btn.addEventListener("click", () => loadSection(key));
    }
});
