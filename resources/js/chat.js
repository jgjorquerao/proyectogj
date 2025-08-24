// Variables globales
import axios from "axios";
import "../css/app.css";

// Inicializar Axios
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.querySelector(
    'meta[name="csrf-token"]'
).content;
axios.defaults.headers.common["Content-Type"] = "application/json";

let chats = [];
window.selectedChatId = null;

// Referencias DOM
let appContainer;
let chatItemsContainer;
let chatWindowPanel;

// Al cargar la página
window.addEventListener("load", function () {
    initChatSection();
});

// chat.js
window.initChatSection = () => {
    // Referencias DOM dentro de la sección
    appContainer = document.getElementById("app-container");
    chatItemsContainer = document.getElementById("chat-items-container");
    chatWindowPanel = document.getElementById("chat-window-panel");

    if (!chatItemsContainer || !chatWindowPanel) return;

    // Carga chats
    cargarChats();
};

// Cargar chats desde la API
window.cargarChats = async function () {
    try {
        const response = await fetch("/chat/get_chats");
        chats = await response.json();

        renderChatList();

        // Suscribirse a Pusher después de tener los chats
        if (window.subscribeToChats) window.subscribeToChats(chats);

        // Si hay chat abierto, actualizar mensajes
        if (window.selectedChatId) {
            const selectedChat = chats.find(
                (c) => c.id === window.selectedChatId
            );
            if (selectedChat) window.renderMessages(selectedChat.messages);
        }
    } catch (error) {
        console.error("Error al cargar chats:", error);
    }
};

const createChatListItem = (chat) => {
    const chatItem = document.createElement("div");
    // Agrega una clase CSS condicional para un estilo diferente si hay mensajes no leídos
    chatItem.className = `flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
        chat.isUnread ? "bg-blue-50" : ""
    }`;
    chatItem.dataset.chatId = chat.id;

    let unreadIndicator = "";
    // Agrega el elemento del indicador si hay mensajes no leídos
    if (chat.isUnread) {
        unreadIndicator = `<div class="w-2.5 h-2.5 bg-blue-500 rounded-full ml-auto"></div>`;
    }

    chatItem.innerHTML = `
        <img src="${chat.avatar}" alt="${chat.name}" class="w-12 h-12 rounded-full mr-4" 
             onerror="this.onerror=null;this.src='https://placehold.co/100x100/A3A3A3/FFFFFF?text=U';">
        <div class="flex-1 overflow-hidden">
            <h3 class="font-semibold text-sm truncate">${chat.name}</h3>
            <p class="text-gray-500 text-xs truncate">${chat.lastMessage}</p>
        </div>
        ${unreadIndicator}
    `;

    chatItem.addEventListener("click", () => handleSelectChat(chat.id));
    return chatItem;
};

window.renderChatList = () => {
    chatItemsContainer.innerHTML = "";
    chats.forEach((chat) =>
        chatItemsContainer.appendChild(createChatListItem(chat))
    );
};

// Renderizar ventana de chat
const createChatWindow = (chat) => {
    const chatWindow = document.createElement("div");
    chatWindow.className = "flex flex-col h-full bg-gray-100";

    chatWindow.innerHTML = `
        <div class="flex items-center p-4 bg-white border-b border-gray-200 shadow-sm">
            <button id="back-button" class="md:hidden mr-4 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <img src="${chat.avatar}" alt="${chat.name}" class="w-10 h-10 rounded-full mr-4" 
                 onerror="this.onerror=null;this.src='https://placehold.co/100x100/A3A3A3/FFFFFF?text=U';">
            <h3 class="font-semibold">${chat.name}</h3>
            <!-- Switch -->
            <div class="ml-auto">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="ai-manual-toggle" class="sr-only peer">
                    <div id="toggle-container" class="w-20 h-8 flex items-center justify-center rounded-full bg-gray-400 peer-checked:bg-green-500 transition-colors">
                        <span id="label-manual" class="text-xs font-medium text-white">Manual</span>
                        <span id="label-ia" class="hidden text-xs font-medium text-white">Agente IA</span>
                    </div>
                </label>
            </div>
        </div>
        <div id="messages-container" class="flex-1 p-4 overflow-y-auto space-y-3"></div>
        <div class="flex items-center p-4 border-t border-gray-200 bg-white">
            <input type="text" id="message-input" placeholder="Escribe un mensaje" class="flex-1 px-4 py-2 text-sm bg-gray-100 rounded-full focus:outline-none">
            <button id="send-button" class="ml-2 p-2 bg-blue-500 text-white rounded-full transition-transform transform active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </button>
        </div>
    `;

    const aiManualToggle = chatWindow.querySelector("#ai-manual-toggle");
    const labelIA = chatWindow.querySelector("#label-ia");
    const labelManual = chatWindow.querySelector("#label-manual");
    const toggleContainer = chatWindow.querySelector("#toggle-container");
    // 🔹 Función para actualizar el estado del UI
    const updateUI = (isChecked) => {
        if (isChecked) {
            // Agente IA: activa el checkbox, muestra el texto y añade la animación
            aiManualToggle.checked = true;
            labelIA.classList.remove("hidden");
            labelManual.classList.add("hidden");
            toggleContainer.classList.add("is-breathing");
        } else {
            // Manual: desactiva el checkbox, muestra el texto y elimina la animación
            aiManualToggle.checked = false;
            labelManual.classList.remove("hidden");
            labelIA.classList.add("hidden");
            toggleContainer.classList.remove("is-breathing");
        }
    };

    // 🔹 Setear el UI según el control_status inicial
    updateUI(chat.control_status == 1);

    // 🔹 Referencias al modal del Blade
    const modal = document.getElementById("changeStatusModal");
    const statusName = document.getElementById("statusName");
    const btnConfirm = document.getElementById("confirmChangeStatusBtn");
    const btnCancel = document.getElementById("cancelChangeStatusBtn");
    const btnClose = document.getElementById("closeChangeStatusModal");

    // Mostrar modal al cambiar el checkbox
    aiManualToggle.addEventListener("click", (e) => {
        e.preventDefault();

        const nuevoEstado = aiManualToggle.checked ? "Agente IA" : "Manual";
        // Invertimos porque el checkbox aún no cambió
        statusName.textContent = nuevoEstado;
        modal.classList.remove("hidden");

        btnConfirm.onclick = () => {
            axios
                .post(`/chat/toggle_status/${chat.id}`)
                .then(() => {
                    const nuevoEstadoToggle = !aiManualToggle.checked; // cambia el toggle
                    labelIA.classList.toggle("hidden");
                    labelManual.classList.toggle("hidden");
                    modal.classList.add("hidden");
                    updateUI(nuevoEstadoToggle);
                })
                .catch((error) => {
                    console.error("Error al actualizar estado:", error);
                    // Podrías mostrar un mensaje de error en tu modal de mensajes
                });
        };

        const cerrarModal = () => modal.classList.add("hidden");
        btnCancel.onclick = cerrarModal;
        btnClose.onclick = cerrarModal;
    });

    return chatWindow;
};

// Renderizar mensajes
window.renderMessages = (messages) => {
    const messagesContainer = document.getElementById("messages-container");
    if (!messagesContainer) return;
    messagesContainer.innerHTML = "";

    messages.forEach((msg) => {
        const messageBubble = document.createElement("div");
        messageBubble.className = `flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
        }`;

        const bubbleContent = document.createElement("div");
        bubbleContent.className = `
            max-w-xs md:max-w-md p-3 rounded-xl
            ${
                msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
            }
            relative
            min-w-10
        `;

        const date = new Date(msg.date);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        bubbleContent.innerHTML = `
            <p class="text-sm mb-2 break-words"">${msg.text}</p>
            <span class="text-[10px] ${
                msg.sender === "user" ? "text-gray-100" : "text-gray-400"
            } absolute bottom-1 right-2">${hours}:${minutes}</span>
        `;
        messageBubble.appendChild(bubbleContent);
        messagesContainer.appendChild(messageBubble);
    });

    setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 0);
};

// Seleccionar chat
const handleSelectChat = (chatId) => {
    window.selectedChatId = chatId;
    const selectedChat = chats.find((c) => c.id === chatId);
    if (!selectedChat) return;

    // Quita el indicador de no leído al seleccionar el chat
    selectedChat.isUnread = false;
    window.updateChatListDOM(); // Vuelve a renderizar la lista para reflejar el cambio

    window.updateDocumentTitle();

    chatWindowPanel.innerHTML = "";
    chatWindowPanel.appendChild(createChatWindow(selectedChat));
    window.renderMessages(selectedChat.messages);

    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const backButton = document.getElementById("back-button");

    sendButton.addEventListener("click", handleSendMessage);
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleSendMessage();
    });
    backButton.addEventListener("click", handleBack);

    appContainer.classList.add("chat-active");
};

// Enviar mensaje
const handleSendMessage = async () => {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    if (!messageText || !window.selectedChatId) return;
    messageInput.value = "";

    try {
        await axios.post("/chat/send_message", {
            conversation_id: window.selectedChatId,
            message: messageText,
        });
    } catch (error) {
        console.error("Error al enviar mensaje:", error);
    }
};

// Botón volver en móvil
const handleBack = () => {
    window.selectedChatId = null;
    appContainer.classList.remove("chat-active");
};

window.addMessageToChat = (message) => {
    // Si el chat abierto es el mismo que el del nuevo mensaje
    if (
        window.selectedChatId &&
        window.selectedChatId == message.conversation_id
    ) {
        const messagesContainer = document.getElementById("messages-container");
        if (messagesContainer) {
            const messageBubble = createMessageBubble(message);
            messagesContainer.appendChild(messageBubble);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
};

// Crea una función auxiliar para generar un solo elemento de mensaje
const createMessageBubble = (msg) => {
    const messageBubble = document.createElement("div");
    messageBubble.className = `flex ${
        msg.client_message === 0 ? "justify-end" : "justify-start"
    }`;

    const bubbleContent = document.createElement("div");
    bubbleContent.className = `
        max-w-xs md:max-w-md p-3 rounded-xl
        ${
            msg.client_message === 0
                ? "bg-blue-500 text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-bl-none"
        }
        relative
        min-w-10
    `;

    // Asegúrate de que tu objeto de mensaje tenga una propiedad de fecha
    const date = new Date(msg.currentdate); // O la propiedad que uses para la fecha
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    bubbleContent.innerHTML = `
        <p class="text-sm mb-2 break-words"">${msg.message}</p>
        <span class="text-[10px] ${
            msg.client_message === 0 ? "text-gray-100" : "text-gray-400"
        } absolute bottom-1 right-2">${hours}:${minutes}</span>
    `;
    messageBubble.appendChild(bubbleContent);
    return messageBubble;
};

window.updateChatListDOM = () => {
    const currentItems = Array.from(chatItemsContainer.children);
    const domMap = new Map();
    currentItems.forEach((item) => {
        domMap.set(parseInt(item.dataset.chatId), item);
    });

    chatItemsContainer.innerHTML = "";

    chats.forEach((chat) => {
        let item = domMap.get(chat.id);
        if (item) {
            // Actualiza el último mensaje
            const lastMessageEl = item.querySelector("p.text-gray-500");
            if (lastMessageEl) {
                lastMessageEl.textContent = chat.lastMessage;
            }
            // Actualiza la clase para el fondo y agrega/remueve el indicador
            item.className = `flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
                chat.isUnread ? "bg-blue-50" : ""
            }`;
            const existingIndicator = item.querySelector(
                ".bg-blue-500.rounded-full"
            );
            if (chat.isUnread && !existingIndicator) {
                const newIndicator = document.createElement("div");
                newIndicator.className =
                    "w-2.5 h-2.5 bg-blue-500 rounded-full ml-auto";
                item.appendChild(newIndicator);
            } else if (!chat.isUnread && existingIndicator) {
                existingIndicator.remove();
            }

            chatItemsContainer.appendChild(item);
        } else {
            chatItemsContainer.appendChild(createChatListItem(chat));
        }
    });
};

window.updateDocumentTitle = () => {
    // Contamos los chats que tienen mensajes no leídos
    const unreadCount = chats.filter((chat) => chat.isUnread).length;
    const baseTitle = import.meta.env.VITE_APP_NAME; // El título base de tu página

    if (unreadCount > 0) {
        // Actualizamos el título con el contador
        document.title = `(${unreadCount}) ${baseTitle}`;
    } else {
        // Si no hay mensajes sin leer, volvemos al título original
        document.title = baseTitle;
    }
};

/* document.addEventListener("visibilitychange", () => {
    // Si la página es visible, "leemos" todos los mensajes
    if (document.visibilityState === "visible") {
        chats.forEach((chat) => (chat.isUnread = false));
        window.updateChatListDOM();
        window.updateDocumentTitle();
    }
});
 */