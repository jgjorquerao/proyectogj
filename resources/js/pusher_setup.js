import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    authEndpoint: '/broadcasting/auth'
});

const subscribedChatIds = new Set();

window.subscribeToChats = (chats) => {
    chats.forEach((chat) => {
        if (!subscribedChatIds.has(chat.id)) {
            console.log(`Suscribiendo a chat con ID: ${chat.id}`);
            window.Echo.private(`chat.${chat.id}`)
                .listen(".NewMessage", (e) => {
                    const newMessage = e.messages;
                    
                    // 1. Encontrar el chat actualizado en el array global
                    const updatedChatIndex = chats.findIndex(c => c.id === newMessage.conversation_id);
                    if (updatedChatIndex > -1) {
                        const updatedChat = chats[updatedChatIndex];
                        
                        // 2. Actualizar el "lastMessage" y la fecha
                        updatedChat.lastMessage = newMessage.message;
                        updatedChat.currentdate = newMessage.currentdate;

                        // Marcar como no leído
                        if (window.selectedChatId !== updatedChat.id) {
                            updatedChat.isUnread = true;
                        }
                        
                        // 3. Reordenar el chat para que aparezca al principio de la lista
                        // (Esto es opcional pero es una UX común en apps de chat)
                        const [movedChat] = chats.splice(updatedChatIndex, 1);
                        chats.unshift(movedChat);

                        // 4. Llama a una función para actualizar la lista de chats en el DOM
                        // sin borrarla y volverla a crear.
                        window.updateChatListDOM();

                        // Cambiar titulo con contador de chats no leidos
                        window.updateDocumentTitle();
                    }

                    // 5. Agregar el nuevo mensaje a la ventana de chat si está abierta
                    if (window.addMessageToChat) window.addMessageToChat(newMessage);
                });
            subscribedChatIds.add(chat.id);
        }
    });
};