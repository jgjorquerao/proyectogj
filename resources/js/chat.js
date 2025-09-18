// Variables globales
import axios from "axios";
import "../css/app.css";

// Inicializar Axios
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.querySelector(
    'meta[name="csrf-token"]'
).content;
axios.defaults.headers.common["Content-Type"] = "application/json";

let chats = [];
let chatUsers = [];
window.selectedChatId = null;

// Referencias DOM
let appContainer;
let chatItemsContainer;
let chatWindowPanel;
let menuButton;

// Al cargar la página
/* window.addEventListener("load", function () {
    initChatSection();
});
 */
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

    window.selectedChatId = null; // Resetear la variable
    window.selectedUserId = null; // Resetear la variable
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
    chatItem.className = `flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${
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
             onerror="this.onerror=null;this.src='https://placehold.co/100x100/364153/FFFFFF?text=U';">
        <div class="flex-1 overflow-hidden">
            <h3 class="chat-item-name font-semibold text-sm truncate text-white pe-3">${chat.name}</h3>
            <p class="text-gray-500 text-xs truncate">${chat.lastMessage}</p>
        </div>
        ${unreadIndicator}
    `;

    chatItem.addEventListener("click", () => {
        if (window.selectedChatId !== chat.id) {
            handleSelectChat(chat.id);
        }
    });
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
    const modalText = document.getElementById("changeStatusModalText");
    const btnConfirm = document.getElementById("confirmChangeStatusBtn");
    const btnCancel = document.getElementById("cancelChangeStatusBtn");
    const btnClose = document.getElementById("closeChangeStatusModal");

    aiManualToggle.addEventListener("click", (e) => {
        e.preventDefault();

        // If a custom message was passed in the event, use it
        /* const nuevoTexto = e.detail && e.detail.message ? 
            e.detail.message
            : (aiManualToggle.checked
                ? "¿Deseas cambiar a modo <strong>Agente IA</strong>?"
                : "¿Deseas cambiar a modo <strong>Manual</strong>?"
            ); */
        const message = aiManualToggle.checked
            ? "¿Deseas cambiar a modo <strong>Manual</strong>?"
            : "¿Deseas cambiar a modo <strong>Agente IA</strong>?";

        /* modalText.innerHTML = nuevoTexto; */
        /* modal.classList.remove("hidden"); */
        window.openModal("changeStatusModal", { message: message });

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
                    window.closeModal(modal);
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

        /* const cerrarModal = () => modal.classList.add("hidden"); */
        /* btnCancel.onclick = cerrarModal; */
        /* btnClose.onclick = cerrarModal; */
    });

    // Referencias del cuadro de perfil del cliente en chat
    let isBoxVisible = false;
    const profileBtn = chatWindow.querySelector(".chat-profile-btn");
    const profileBox = chatWindow.querySelector(".chat-profile-box");
    const profileCloseBtn = chatWindow.querySelector(".chat-profile-close-btn");
    const profileTabBtn = chatWindow.querySelector(".chat-profile-tab-btn");
    const userTabBtn = chatWindow.querySelector(".chat-user-tab-btn");
    const tabButtons = chatWindow.querySelectorAll(".tab-btn");
    const tabContents = chatWindow.querySelectorAll(".tab-content");
    let selectedTab = null;
    let fillingUsers = false;

    // Funciones de mostrar / esconder cuadro de perfil de chat
    function ShowChatProfileBox() {
        profileTabBtn.click();
        profileBox.classList.add("is-visible");
        isBoxVisible = true;
    }

    function HideChatProfileBox() {
        profileBox.classList.remove("is-visible");
        isBoxVisible = false;
        selectedTab = null;
    }

    // El click del botón de perfil en el panel de la izquierda
    profileBtn.addEventListener("click", (event) => {
        if (isBoxVisible) {
            HideChatProfileBox();
        } else {
            ShowChatProfileBox();
        }
    });

    // Cerrar cuadro si se presiona el botón de cerrar
    profileCloseBtn.addEventListener("click", () => {
        HideChatProfileBox();
    });

    // Cerrar cuadro si se presiona fuera
    document.addEventListener("click", (event) => {
        if (
            isBoxVisible &&
            !profileBox.contains(event.target) &&
            !profileBtn.contains(event.target)
        ) {
            HideChatProfileBox();
        }
    });

    // Establecer contenido de tab de perfil
    const emptyRutDisplay = "";
    const profileRut = chat.client_rut ? chat.client_rut : emptyRutDisplay;
    const profileTab = chatWindow.querySelector(".chat-profile-tab");
    profileTab.innerHTML = `
        <div class="flex items-center space-x-4 mt-1 mb-5">
            <img src="${chat.avatar}" alt="Foto de perfil" class="w-12 h-12 m-0 rounded-full border-2 border-gray-500">
        </div>
        <!-- Sección del nombre -->
        <div class="mb-0">
            <div class="text-xs text-gray-400">Nombre</div>
            <!-- Mostrar -->
            <div class="chat-profile-name-display flex items-center justify-between">
                <span class="chat-profile-name-text py-1 my-1 text-sm text-white">${chat.name}</span>
                <button class="chat-profile-name-edit-btn p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path d="M21.731 2.269a2.25 2.25 0 0 0-3.182 0l-14.881 14.88a2.25 2.25 0 0 0-.583 1.015l-1.55 4.65a.75.75 0 0 0 .964 1.014l4.65-1.55a2.25 2.25 0 0 0 1.015-.583l14.88-14.88a2.25 2.25 0 0 0 0-3.182ZM15.75 6.75l-4.25 4.25-1.5-1.5 4.25-4.25 1.5 1.5Z" />
                    </svg>
                </button>
            </div>
            <!-- Editar -->
            <div class="chat-profile-name-editer hidden flex-col items-end pt-1">
                <input type="text" class="chat-profile-name-input w-full px-2 py-1 mb-2 rounded-md text-sm text-white ring-1 ring-gray-500 focus:outline-none" autocomplete="off" required>
            </div>
            <div class="chat-profile-name-edit-options invisible flex w-full space-x-2">
                <div class="chat-profile-name-error flex w-full text-red-500 text-xs"></div>
                <button class="chat-profile-name-save-btn p-0 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-100">
                    <p class="px-3 py-1 text-xs text-white">OK</p>
                </button>
            </div>
        </div>
        <!-- Sección del rut -->
        <div class="mb-0">
            <div class="text-xs text-gray-400">Rut</div>
            <!-- Mostrar -->
            <div class="chat-profile-rut-display flex items-center justify-between">
                <span class="chat-profile-rut-text py-1 my-1 text-sm text-white">${profileRut}</span>
                <button class="chat-profile-rut-edit-btn p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                        <path d="M21.731 2.269a2.25 2.25 0 0 0-3.182 0l-14.881 14.88a2.25 2.25 0 0 0-.583 1.015l-1.55 4.65a.75.75 0 0 0 .964 1.014l4.65-1.55a2.25 2.25 0 0 0 1.015-.583l14.88-14.88a2.25 2.25 0 0 0 0-3.182ZM15.75 6.75l-4.25 4.25-1.5-1.5 4.25-4.25 1.5 1.5Z" />
                    </svg>
                </button>
            </div>
            <!-- Editar -->
            <div class="chat-profile-rut-editer hidden flex-col items-end pt-1">
                <input type="text" class="chat-profile-rut-input w-full px-2 py-1 mb-2 rounded-md text-sm text-white ring-1 ring-gray-500 focus:outline-none" autocomplete="off" required>
            </div>
            <div class="chat-profile-rut-edit-options invisible flex w-full space-x-2">
                <div class="chat-profile-rut-error flex w-full text-red-500 text-xs"></div>
                <button class="chat-profile-rut-save-btn p-0 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-100">
                    <p class="px-3 py-1 text-xs text-white">OK</p>
                </button>
            </div>
        </div>
        <!-- Sección del número -->
        <div class="mb-8">
            <div class="text-xs text-gray-400">Número</div>
            <div class="flex items-center justify-between">
                <span class="py-1 my-1 text-sm text-white">${chat.client_phone}</span>
            </div>
        </div>
    `;

    // Función de editar
    function setupInputEdit(type, maxLength, allowEmpty, emptyDisplay = "") {
        const inputMaxLength = maxLength;
        const profileDisplay = chatWindow.querySelector(
            ".chat-profile-" + type + "-display"
        );
        const profileEditer = chatWindow.querySelector(
            ".chat-profile-" + type + "-editer"
        );
        const profileEditOptions = chatWindow.querySelector(
            ".chat-profile-" + type + "-edit-options"
        );
        const profileEditBtn = chatWindow.querySelector(
            ".chat-profile-" + type + "-edit-btn"
        );
        const profileInput = chatWindow.querySelector(
            ".chat-profile-" + type + "-input"
        );
        const profileText = chatWindow.querySelector(
            ".chat-profile-" + type + "-text"
        );
        const profileSaveBtn = chatWindow.querySelector(
            ".chat-profile-" + type + "-save-btn"
        );
        const profileError = chatWindow.querySelector(
            ".chat-profile-" + type + "-error"
        );
        let currentValue = profileText.textContent.trim();
        profileInput.maxLength = inputMaxLength;

        // Funciones de mostrar / esconder editar nombre
        function ShowEditProfileName() {
            profileEditer.classList.remove("hidden");
            profileEditer.classList.add("flex");
            profileEditOptions.classList.remove("invisible");
        }

        function HideEditProfileName() {
            profileEditer.classList.add("hidden");
            profileEditer.classList.remove("flex");
            profileEditOptions.classList.add("invisible");
        }

        function ShowDisplayProfileName() {
            profileDisplay.classList.remove("hidden");
        }

        function HideDisplayProfileName() {
            profileDisplay.classList.add("hidden");
        }

        async function SaveProfileName() {
            let allGood = true;
            const originalValue =
                allowEmpty && currentValue == emptyDisplay ? "" : currentValue;
            let newValue = profileInput.value.trim();
            profileError.textContent = "";

            // Revisar si el nuevo valor está vacío
            const isEmpty = newValue == "";
            if (!isEmpty) {
                // No está vacío, revisar tipo
                if (type == "name") {
                    // Ninguna otra comprobación, actualizar valor actual
                    currentValue = newValue;
                } else if (type == "rut") {
                    // Comprobar si el rut ingresado es válido
                    const formattedRut = validateAndFormatRut(newValue);
                    if (formattedRut == null) {
                        // Rut ingresado no es válido, mostrar mensaje de error
                        allGood = false;
                        showMessage("El rut ingresado no es válido", "error");
                    } else {
                        // Rut válido, actualizar valor actual
                        newValue = formattedRut;
                        currentValue = newValue;
                    }
                }
            } else {
                // Si está vacío, revisar si se permite que esté vacío
                if (!allowEmpty) {
                    // No se permite, mostrar mensaje de error
                    allGood = false;
                    let message = "";
                    if (type == "name")
                        message = "El nombre no puede estar vacío";
                    showMessage(message, "error");
                } else {
                    // Si se permite, establecer valor actual a emptyDisplay
                    currentValue = emptyDisplay;
                }
            }

            // Establecer valor a mostrar, terminar editar
            profileText.textContent = currentValue;
            HideEditProfileName(); // Esconder edit
            ShowDisplayProfileName(); // Mostrar display

            // Regresar si algo salió mal
            if (!allGood) return;

            // Verificar si hay que actualizar en base de datos
            let needUpdate = newValue !== originalValue;
            if (needUpdate) {
                // Es diferente al original
                // Verificar tipo
                if (type == "name") {
                    // Actualizar valor del nombre del chat en JS
                    chat.name = newValue;
                    const chatItem = document.querySelector(
                        `[data-chat-id="${chat.id}"]`
                    );
                    if (chatItem) {
                        // Actualizar nombre de la lista
                        const listNameEl =
                            chatItem.querySelector(".chat-item-name");
                        if (listNameEl) {
                            listNameEl.textContent = newValue;
                        }
                    }

                    const chatBtn = document.querySelector(".chat-profile-btn");
                    if (chatBtn) {
                        // Actualizar nombre del chat
                        const btnNameEl = chatBtn.querySelector(".chat-name");
                        if (btnNameEl) {
                            btnNameEl.textContent = newValue;
                        }
                    }
                } else if (type == "rut") {
                    // Actualizar valor del rut del chat en JS, si está vacío que el nuevo valor sea null
                    const actualNewValue =
                        allowEmpty && currentValue == emptyDisplay
                            ? null
                            : newValue;
                    chat.client_rut = actualNewValue;
                }
                let message =
                    type == "name"
                        ? "Nombre de cliente actualizado"
                        : "Rut de cliente actualizado";
                showMessage(message, "success");

                // Enviar a backend
                if (type == "name") {
                    try {
                        const response = await axios.post(
                            "/panel/edit_client_name",
                            {
                                id: chat.client_id,
                                name: newValue,
                            }
                        );
                    } catch (error) {
                        console.error(
                            "Error al actualizar nombre de cliente: ",
                            error
                        );
                    }
                } else if (type == "rut") {
                    try {
                        const response = await axios.post(
                            "/panel/edit_client_rut",
                            {
                                id: chat.client_id,
                                rut: newValue,
                            }
                        );
                    } catch (error) {
                        console.error(
                            "Error al actualizar rut de cliente: ",
                            error
                        );
                    }
                }
            }
        }

        // El click del botón para empezar a editar
        profileEditBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            // Establecer valor del input
            profileInput.value =
                allowEmpty && currentValue == emptyDisplay ? "" : currentValue;
            HideDisplayProfileName(); // Esconder display
            ShowEditProfileName(); // Mostrar edit
            profileInput.focus();
        });

        // Verificar que el valor del input esté correcto
        profileInput.addEventListener("input", (event) => {
            let errorMessage = "";

            // Limitar el tamaño máximo del nombre
            if (profileInput.value.length > inputMaxLength) {
                profileInput.value = profileInput.value.slice(
                    0,
                    inputMaxLength
                );
            }

            if (profileInput.value == "") {
                if (!allowEmpty) {
                    // El input está vacío
                    let errorStart = "";
                    if (type == "name") errorStart = "Nombre ";
                    errorMessage = errorStart + " vacío";
                }
            }

            profileError.textContent = errorMessage;
        });

        // Tratar de guardar cuando se pierde el focus del input
        profileInput.addEventListener("blur", (event) => {
            SaveProfileName();
        });

        // Tratar de guardar cuando se hace click en botón de OK
        profileSaveBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            SaveProfileName();
        });
    }

    // Aplicar lógica de editar nombre
    const nameMaxLength = 50;
    setupInputEdit("name", nameMaxLength, false);

    // Aplicar lógica de editar rut
    const rutMaxLength = 12;
    setupInputEdit("rut", rutMaxLength, true, emptyRutDisplay);

    // Establecer contenido de tab de usuario
    let renderUserList = null;
    let userSearcher, userContent, userLoading, userList, userListEmpty;
    const userTab = chatWindow.querySelector(".chat-user-tab");
    if (userTab) {
        userTab.innerHTML = "";

        // Crear titulo
        const userTitle = document.createElement("div");
        userTitle.className = "flex font-medium text-sm text-white mb-2";
        userTitle.textContent = "Usuario asignado";

        // Crear contenedor de cargando
        userLoading = document.createElement("div");
        userLoading.className = "py-2 text-xs text-white";
        userLoading.textContent = "Obteniendo usuarios...";

        // Crear contendor del contenido
        userContent = document.createElement("div");
        userContent.className = "hidden";

        // Crear buscador
        userSearcher = document.createElement("input");
        userSearcher.type = "text";
        userSearcher.placeholder = "Buscar usuario...";
        userSearcher.autocomplete = "off";
        userSearcher.className =
            "user-search-input w-full pl-1 pr-2 py-1 mt-1 mb-2 border-1 border-gray-300 text-xs text-white rounded-sm focus:outline-none";

        // Crear contenedor para lista y mensaje de vacío
        const userListParent = document.createElement("div");
        userListParent.className = "relative";

        // Crear lista
        userList = document.createElement("div");
        userList.className =
            "chat-profile-user-list overflow-y-auto space-y-1 pr-1";

        // Crear mensaje cuando lista está vacía
        userListEmpty = document.createElement("div");
        userListEmpty.className =
            "w-full absolute top-0 p-2 text-center text-xs text-gray-400 hidden";
        userListEmpty.textContent = "Ningún usuario encontrado";

        userListParent.appendChild(userList);
        userListParent.appendChild(userListEmpty);
        userContent.appendChild(userSearcher);
        userContent.appendChild(userListParent);

        // Agregar elementos a la tab de usuarios
        userTab.appendChild(userTitle);
        userTab.appendChild(userLoading);
        userTab.appendChild(userContent);

        // Función para crear la lista de usuarios
        renderUserList = function (users) {
            const textColorHighlight = "text-blue-500";
            const textColorNormal = "text-white";
            userList.innerHTML = "";

            // Salir si no hay resultados
            if (users.length === 0) {
                userListEmpty.classList.remove("hidden");
                return;
            }

            // Si hay un usuario seleccionado moverlo al principio
            if (chat.user_id != null) {
                const linkedIndex = users.findIndex(
                    (u) => u.id == chat.user_id
                );
                if (linkedIndex !== -1) {
                    const [linkedUser] = users.splice(linkedIndex, 1);
                    users.unshift(linkedUser);
                }
            }

            userListEmpty.classList.add("hidden");
            users.forEach((user) => {
                const isLinkedUser = user.id == chat.user_id;
                const item = document.createElement("div");
                item.className =
                    "relative flex items-center space-x-1 px-1 py-2 rounded-md hover:bg-gray-600 cursor-pointer transition-colors duration-200";

                // Crear el check del elemento
                const itemCheckBox = document.createElement("div");
                const checkVisibleClass = isLinkedUser ? "" : "hidden";
                itemCheckBox.className = `chat-user-item-check absolute left-1 flex items-center justify-center text-blue-500 transition-opacity duration-200 ${checkVisibleClass}`;
                itemCheckBox.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-3" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                `;
                item.appendChild(itemCheckBox);

                // Crear el texto dentro del elemento
                const itemText = document.createElement("span");
                const textColorClass = isLinkedUser
                    ? textColorHighlight
                    : textColorNormal;
                const textWeightClass = isLinkedUser ? "font-medium" : "";
                itemText.className = `chat-user-item-text ml-4 text-xs ${textWeightClass} ${textColorClass}`;
                itemText.textContent = `${user.name}`;
                item.appendChild(itemText);

                // El click del elemento
                item.addEventListener("click", async () => {
                    // El elemento se debería seleccionar aquí, luego actualizar en base de datos
                    if (user.id != chat.user_id) {
                        // Usuario es diferente, hay que seleccionarlo
                        chat.user_id = user.id;

                        // Quitar check
                        document
                            .querySelectorAll(".chat-user-item-check")
                            .forEach((el) => {
                                if (!el.classList.contains("hidden"))
                                    el.classList.add("hidden");
                            });

                        // Quitar texto azul
                        document
                            .querySelectorAll(".chat-user-item-text")
                            .forEach((el) => {
                                if (!el.classList.contains(textColorNormal))
                                    el.classList.add(textColorNormal);
                                if (el.classList.contains(textColorHighlight))
                                    el.classList.remove(textColorHighlight);
                                if (el.classList.contains("font-medium"))
                                    el.classList.remove("font-medium");
                            });

                        // Seleccionar nuevo
                        if (itemCheckBox.classList.contains("hidden"))
                            itemCheckBox.classList.remove("hidden");
                        if (itemText.classList.contains(textColorNormal))
                            itemText.classList.remove(textColorNormal);
                        if (!itemText.classList.contains(textColorHighlight))
                            itemText.classList.add(textColorHighlight);
                        if (!itemText.classList.contains("font-medium"))
                            itemText.classList.add("font-medium");
                    } else {
                        // Usuario es el que ya está seleccionado, hay que deseleccionar
                        chat.user_id = null;

                        // Dejar de seleccionar
                        if (!itemCheckBox.classList.contains("hidden"))
                            itemCheckBox.classList.add("hidden");
                        if (!itemText.classList.contains(textColorNormal))
                            itemText.classList.add(textColorNormal);
                        if (itemText.classList.contains(textColorHighlight))
                            itemText.classList.remove(textColorHighlight);
                        if (itemText.classList.contains("font-medium"))
                            itemText.classList.remove("font-medium");
                    }

                    try {
                        const response = await axios.post(
                            "/chat/edit_chat_user",
                            {
                                id: chat.id,
                                user_id: chat.user_id,
                            }
                        );
                    } catch (error) {
                        console.error(
                            "Error al actualizar usuario de chat: ",
                            error
                        );
                    }
                });
                userList.appendChild(item);
            });

            setTimeout(() => {
                userList.scrollTop = 0;
            }, 0);
        };

        userSearcher.addEventListener("input", (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredUsers = chatUsers.filter((user) =>
                user.name.toLowerCase().includes(searchTerm)
            );
            renderUserList(filteredUsers);
        });
    }

    async function fetchChatUsers() {
        if (!renderUserList) return;
        userSearcher.value = "";

        if (!fillingUsers) {
            fillingUsers = true;
            userContent.classList.add("hidden");
            userLoading.classList.remove("hidden");

            try {
                const response = await axios.get("/panel/get_users");
                chatUsers = response.data;
                renderUserList(chatUsers); // Renderizar la lista
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
            }

            userContent.classList.remove("hidden");
            userLoading.classList.add("hidden");
            fillingUsers = false;
        }
    }

    // Cambio de tab
    function setupTabBtn(button) {
        button.addEventListener("click", () => {
            const targetTab = button.dataset.tab;
            if (targetTab != selectedTab) {
                selectedTab = targetTab;

                // Rellenar lista de usuarios si es la tab de user
                if (renderUserList) {
                    if (selectedTab == "user") {
                        fetchChatUsers();
                    }
                }

                // Remover estilo activo de los botones
                tabButtons.forEach((btn) => {
                    btn.classList.remove("bg-gray-600", "text-slate-300");
                    btn.classList.add(
                        "text-slate-300",
                        "hover:bg-gray-600",
                        "hover:text-slate-200"
                    );
                });

                // Esconder todos los tab
                tabContents.forEach((content) => {
                    content.classList.add("hidden");
                });

                // Añadir estilo activo al botón que se presionó
                button.classList.add("bg-gray-600", "text-slate-300");
                button.classList.remove(
                    "text-slate-300",
                    "hover:bg-gray-600",
                    "hover:text-slate-200"
                );

                // Mostrar la tab que corresponda
                const activeContent = document.getElementById(
                    `${selectedTab}-tab`
                );
                activeContent.classList.remove("hidden");
            }
        });
    }

    setupTabBtn(profileTabBtn);
    if (userTabBtn) setupTabBtn(userTabBtn);

    return chatWindow;
};

// Renderizar mensajes
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

    sendButton.addEventListener("click", () => {
        handleSendMessage();
    });
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    });
    backButton.addEventListener("click", handleBack);

    appContainer.classList.add("chat-active");

    highlightSelectedItem("[data-chat-id]", chatId);
    updateMenuButtonVisibility();
};

// Variable global para guardar el tiempo de inicio de la animación
let animationStartTime = null;

// Revisar si se envía mensaje o si se muestra modal
const handleSendMessage = async () => {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    if (!messageText || !window.selectedChatId) return;

    // Comprobar si está en modo manual
    const aiManualToggle = document.querySelector(".ai-manual-toggle");
    if (aiManualToggle.checked) {
        // No está en modo manual, mostrar modal
        /* aiManualToggle.dispatchEvent(
            new CustomEvent("click", {
                detail: {
                    message:
                        "Para enviar mensajes debes cambiar de modo. ¿Deseas cambiar a modo <strong>Manual</strong>?",
                },
            })
        ); */
        /* const customMessage = "Para enviar mensajes debes cambiar de modo. ¿Deseas cambiar a modo <strong>Manual</strong>?";
        window.openModal('changeStatusModal', { message: customMessage }); */
        window.openModal("changeStatusModal", {onOpenCallback: updateStatusModalTextBySendButton});
    } else {
        // Si está manual, enviar mensaje
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
                : "bg-gray-700 text-slate-300 rounded-bl-none"
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
        <p class="text-sm mb-2 break-words ">${msg.message}</p>
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
            item.className = `flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${
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

function validateAndFormatRut(rut) {
    if (!rut) return null;

    // Quitar espacios
    const trimmed = rut.trim();

    // Limpiar todo excepto números
    const clean = trimmed.replace(/[^0-9kK]/g, "");

    if (!/^[0-9]+[0-9kK]{1}$/.test(clean))
        // /^[0-9]+[-|‐]{1}[0-9kK]{1}$/
        return null;

    var body = clean.slice(0, -1);
    var digv = clean.slice(-1).toLowerCase();

    const allGood = dv(body) == digv;
    return allGood ? `${body}-${digv}` : null;
}

function dv(T) {
    var M = 0,
        S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? String(S - 1) : "k";
}

window.updateStatusModalTextBySendButton = (modal) => {
    const customMessage =
        "Para enviar mensajes debes cambiar de modo. ¿Deseas cambiar a modo <strong>Manual</strong>?";
    const modalTextElement = modal.querySelector("#changeStatusModalText");
    if (modalTextElement) {
        modalTextElement.innerHTML = customMessage;
    }
}

window.updateStatusModalText = (modal) => {
    const status = aiManualToggle.checked ?  "Agente IA" : "Manual";
    const customMessage =  `¿Deseas cambiar a modo <span id="statusName" class="font-bold">${status}</span>?`;
    const modalTextElement = modal.querySelector("#changeStatusModalText");
    if (modalTextElement) {
        modalTextElement.innerHTML = customMessage;
    }
}
