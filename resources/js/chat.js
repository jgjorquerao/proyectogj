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
let menuButton


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
    menuButton = document.getElementById("menu-button");

    if (!chatItemsContainer || !chatWindowPanel) return;

    // Carga chats
    fetchChats();
};

// Cargar chats desde la API
window.fetchChats = async function () {
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

//Renderizar chat
const createChatWindow = (chat) => {
    const template = document.getElementById("chat-window-template");
    const chatWindow = template.content.cloneNode(true);

    // Referencias
    const avatar = chatWindow.querySelector(".chat-avatar");
    const name = chatWindow.querySelector(".chat-name");
    const aiManualToggle = chatWindow.querySelector(".ai-manual-toggle");
    const labelIA = chatWindow.querySelector(".label-ia");
    const labelManual = chatWindow.querySelector(".label-manual");
    const toggleContainer = chatWindow.querySelector(".toggle-container");
    /* const messagesContainer = chatWindow.querySelector(".messages-container"); */

    // Rellenar datos
    avatar.src = chat.avatar;
    name.textContent = chat.name;

    // Función para actualizar UI
    const updateUI = (isChecked) => {
        aiManualToggle.checked = isChecked;
        if (isChecked) {
            labelManual.classList.add("hidden");
            labelIA.classList.remove("hidden");
            toggleContainer.classList.add("is-breathing");
        } else {
            labelManual.classList.remove("hidden");
            labelIA.classList.add("hidden");
            toggleContainer.classList.remove("is-breathing");
        }
    };

    // Estado inicial
    updateUI(chat.control_status == 1);

    // Modal
    const modal = document.getElementById("changeStatusModal");
    const statusName = document.getElementById("statusName");
    const btnConfirm = document.getElementById("confirmChangeStatusBtn");
    const btnCancel = document.getElementById("cancelChangeStatusBtn");
    const btnClose = document.getElementById("closeChangeStatusModal");

    aiManualToggle.addEventListener("click", (e) => {
        e.preventDefault();

        const nuevoEstado = aiManualToggle.checked ? "Agente IA" : "Manual";
        statusName.textContent = nuevoEstado;
        modal.classList.remove("hidden");

        btnConfirm.onclick = () => {
            aiManualToggle.disabled = true;
            btnConfirm.disabled = true;
            btnCancel.disabled = true;
            btnClose.disabled = true;

            btnConfirm.innerHTML = '<span class="loader"></span>';

            axios
                .post(`/chat/toggle_status/${chat.id}`)
                .then(() => {
                    const nuevoEstadoToggle = !aiManualToggle.checked;
                    updateUI(nuevoEstadoToggle);
                    modal.classList.add("hidden");
                })
                .catch((error) => {
                    console.error("Error al actualizar estado:", error);
                })
                .finally(() => {
                    aiManualToggle.disabled = false;
                    btnConfirm.disabled = false;
                    btnCancel.disabled = false;
                    btnClose.disabled = false;
                    btnConfirm.innerHTML = "Confirmar";
                });
        };

        const cerrarModal = () => modal.classList.add("hidden");
        btnCancel.onclick = cerrarModal;
        btnClose.onclick = cerrarModal;
    });

    return chatWindow;
};

// Renderizar mensajes
/* window.renderMessages = (messages) => {
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
                    ? "bg-sky-700 text-white rounded-br-none"
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
}; */
window.renderMessages = (messages) => {
    const messagesContainer = document.getElementById("messages-container");
    if (!messagesContainer) return;
    messagesContainer.innerHTML = "";

    messages.forEach((msg) => {
        const bubble = createMessageBubble({
            id: msg.id,
            message: msg.text,
            currentdate: msg.date,
            client_message: msg.sender === "user" ? 0 : 1, // 👈 normalizamos
            status: "sent",
        });
        messagesContainer.appendChild(bubble);
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
    document
        .getElementById("chat-window-panel")
        .appendChild(createChatWindow(selectedChat));
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

    highlightSelectedItem("[data-chat-id]", chatId);
    updateMenuButtonVisibility(); 
};

// Variable global para guardar el tiempo de inicio de la animación
let animationStartTime = null;

// Enviar mensaje
const handleSendMessage = async () => {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    if (!messageText || !window.selectedChatId) return;
    messageInput.value = "";

    // 🆕 Si es el primer mensaje "sending", guarda el tiempo de inicio de la animación.
    if (!animationStartTime) {
        animationStartTime = performance.now();
    }

    // 🔹 Crear un mensaje "temporal"
    const tempId = Date.now(); // ID temporal único
    const tempMessage = {
        id: tempId,
        conversation_id: window.selectedChatId,
        message: messageText,
        currentdate: new Date().toISOString(),
        status: "sending", // estado temporal
        client_message: 0,
    };

    // Pintar mensaje en UI de inmediato
    if (window.addMessageToChat) window.addMessageToChat(tempMessage);

    try {
        await axios.post("/chat/send_message", {
            conversation_id: window.selectedChatId,
            message: messageText,
            temp_id: tempId,
        });
    } catch (error) {
        console.error("Error al enviar mensaje:", error);
        if (window.updateMessageStatus) {
            window.updateMessageStatus(tempId, "error");
        }
    }
};

// Reemplazar mensaje temporal por definitivo
window.replaceTempMessage = (realMessage) => {
    if (!realMessage.temp_id) return false;
    const tempDiv = document.querySelector(
        `[data-id='${realMessage.temp_id}']`
    );
    if (tempDiv) {
        const newBubble = createMessageBubble(realMessage);
        newBubble.dataset.id = realMessage.id;
        tempDiv.replaceWith(newBubble);
        return true;
    }
    return false;
};

// Actualizar estado de un mensaje (por ejemplo a "error")
window.updateMessageStatus = (tempId, status) => {
    const msgDiv = document.querySelector(`[data-id='${tempId}']`);
    if (msgDiv) {
        msgDiv.remove(); // si prefieres borrarlo
        // o cambiar visualmente:
        const newBubble = createMessageBubble({
            id: tempId,
            conversation_id: window.selectedChatId,
            message: msgDiv.textContent.trim(),
            status: status,
        });
        msgDiv.replaceWith(newBubble);
    }
};

// Botón volver en móvil
const handleBack = () => {
    window.selectedChatId = null;
    appContainer.classList.remove("chat-active");
    updateMenuButtonVisibility();
};

window.addMessageToChat = (message) => {
    if (
        window.selectedChatId &&
        window.selectedChatId == message.conversation_id
    ) {
        const messagesContainer = document.getElementById("messages-container");
        if (messagesContainer) {
            const messageBubble = createMessageBubble(message);
            messageBubble.dataset.id = message.id; // 👈 importante para identificar luego
            messagesContainer.appendChild(messageBubble);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
};

/* const createMessageBubble = (msg) => {
    const messageBubble = document.createElement("div");
    messageBubble.className = `flex ${
        msg.client_message === 0 ? "justify-end" : "justify-start"
    }`;

    const bubbleContent = document.createElement("div");
    bubbleContent.className = `
        max-w-xs md:max-w-md p-3 rounded-xl
        ${
            msg.client_message === 0
                ? "bg-sky-700text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-bl-none"
        }
        relative min-w-10
    `;

    // Si el mensaje es temporal, agregamos la clase "respirando"
    if (msg.status === "sending") {
        bubbleContent.classList.add("bubble-breathing");
        if (animationStartTime) {
            const animationDuration = 1000; // 1s en milisegundos
            const elapsedTime = performance.now() - animationStartTime;
            const cycleTime = elapsedTime % animationDuration;
            const delay = -cycleTime / 1000; // Convertir a segundos y hacer negativo
            bubbleContent.style.animationDelay = `${delay}s`;
        }
    }

    const date = new Date(msg.currentdate || Date.now());
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    bubbleContent.innerHTML = `
        <p class="text-sm mb-2 break-words">${msg.message}</p>
        <span class="text-[10px] ${
            msg.client_message === 0 ? "text-gray-100" : "text-gray-400"
        } absolute bottom-1 right-2">
            ${hours}:${minutes}
        </span>
    `;

    messageBubble.appendChild(bubbleContent);

    if (msg.id) messageBubble.dataset.id = msg.id;

    return messageBubble;
}; */
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
                ? "bg-sky-700 text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-bl-none"
        }
        relative min-w-10
    `;

    // Si el mensaje está en envío
    if (msg.status === "sending") {
        bubbleContent.classList.add("bubble-breathing");
        if (animationStartTime) {
            const animationDuration = 1000;
            const elapsedTime = performance.now() - animationStartTime;
            const cycleTime = elapsedTime % animationDuration;
            const delay = -cycleTime / 1000;
            bubbleContent.style.animationDelay = `${delay}s`;
        }
    }

    const date = new Date(msg.currentdate || Date.now());
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    bubbleContent.innerHTML = `
        <p class="text-sm mb-2 break-words">${msg.message}</p>
        <span class="text-[10px] ${
            msg.client_message === 0 ? "text-gray-100" : "text-gray-400"
        } absolute bottom-1 right-2">
            ${hours}:${minutes}
        </span>
    `;

    messageBubble.appendChild(bubbleContent);

    if (msg.id) messageBubble.dataset.id = msg.id;

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

            // Si es el seleccionado actual, aplica el highlight
            highlightSelectedItem("[data-chat-id]", window.selectedChatId);

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

//FALTA USAR
const handleDeleteMessage = async (messageId) => {
    if (!window.selectedChatId) return;

    try {
        // 1️⃣ Primero, eliminar en la UI
        const msgDiv = document.querySelector(`[data-id='${messageId}']`);
        if (msgDiv) msgDiv.remove();

        // 2️⃣ Eliminar en tu BD via API
        await axios.post("/chat/delete_message", {
            conversation_id: window.selectedChatId,
            message_id: messageId,
        });

        // 3️⃣ Opcional: actualizar el último mensaje del chat
        const selectedChat = chats.find((c) => c.id === window.selectedChatId);
        if (selectedChat) {
            selectedChat.lastMessage = "Mensaje eliminado"; // o recalcular
            window.updateChatListDOM();
        }
    } catch (error) {
        console.error("Error al eliminar mensaje:", error);
    }
};

//Toggle Burguer menu and back button
const updateMenuButtonVisibility = () => {
    if (!menuButton) return;

    if (window.selectedChatId) {
        menuButton.classList.add("hidden"); // Oculta cuando hay chat abierto
    } else {
        menuButton.classList.remove("hidden"); // Muestra cuando estamos en listado
    }
};
