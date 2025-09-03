import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    authEndpoint: "/broadcasting/auth",
});

const subscribedChatIds = new Set();

window.subscribeToChats = (chats) => {
    chats.forEach((chat) => {
        if (!subscribedChatIds.has(chat.id)) {
            window.Echo.private(`chat.${chat.id}`).listen(
                ".NewMessage",
                (e) => {
                    const newMessage = e.messages;

                    const messageToArray = {
                        id: newMessage.id,
                        text: newMessage.message,
                        sender: newMessage.client_message === 0 ? "user" : "contact",
                        date: newMessage.currentdate
                    };

                    // 🔹 Actualizar listado de chats
                    const updatedChatIndex = chats.findIndex(
                        (c) => c.id === newMessage.conversation_id
                    );
                    if (updatedChatIndex > -1) {
                        const updatedChat = chats[updatedChatIndex];
                        updatedChat.messages.push(messageToArray);
                        updatedChat.lastMessage = newMessage.message;
                        updatedChat.currentdate = newMessage.currentdate;

                        if (window.selectedChatId !== updatedChat.id) {
                            updatedChat.isUnread = true;
                        }

                        // Reordenar chat al principio
                        const [movedChat] = chats.splice(updatedChatIndex, 1);
                        chats.unshift(movedChat);

                        // Actualizar DOM
                        window.updateChatListDOM();
                        window.updateDocumentTitle();
                    }

                    // 🔹 Reemplazar mensaje temporal o agregar normal
                    if (
                        window.replaceTempMessage &&
                        window.replaceTempMessage(newMessage)
                    )
                        return;
                    if (window.addMessageToChat)
                        window.addMessageToChat(newMessage);
                }
            );
            subscribedChatIds.add(chat.id);
        }
    });
};
