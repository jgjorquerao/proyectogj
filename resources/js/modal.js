document.addEventListener("DOMContentLoaded", () => {
    let isMouseDownOnBackdrop = false;

    function openModal(modalId, options = {}) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Modal con ID "${modalId}" no encontrado.`);
            return;
        }

        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Ejecutar callback pasado por options
        if (options.onOpenCallback && typeof options.onOpenCallback === "function") {
            options.onOpenCallback(modal);
            return
        }

        // Ejecutar callback pasado por dataset
        if (modal.dataset.onOpen &&typeof window[modal.dataset.onOpen] === "function") {
            window[modal.dataset.onOpen](modal);
        }
    }

    function closeModal(modalElement, options = {}) {
        if (modalElement) {
            modalElement.classList.add("hidden");
            modalElement.classList.remove("flex");
        }

        // Ejecutar callback pasado por options
        if (options.onCloseCallback && typeof options.onCloseCallback === "function") {
            options.onCloseCallback(modal);
        }

        // Ejecutar callback pasado por dataset
        if (modalElement.dataset.onClose && typeof window[modalElement.dataset.onClose] === "function") {
            window[modalElement.dataset.onClose](modalElement);
        }
    }

    // Hacemos las funciones accesibles globalmente
    window.openModal = openModal;
    window.closeModal = closeModal;

    // --- Tus listeners delegados ---
    document.body.addEventListener("mousedown", function (event) {
        if (event.target.matches(".fixed.inset-0")) {
            isMouseDownOnBackdrop = true;
        }
    });

    document.body.addEventListener("click", function (event) {
        const target = event.target;

        // Caso 1: Abrir un modal (usando el atributo data)
        const openBtn = target.closest("[data-modal-open]");
        if (openBtn) {
            const modalId = openBtn.getAttribute("data-modal-open");
            openModal(modalId); // Usamos nuestra nueva función
            isMouseDownOnBackdrop = false;
            return;
        }

        // Caso 2: Cerrar un modal con un botón específico
        const closeBtn = target.closest("[data-modal-close]");
        if (closeBtn) {
            const modal = closeBtn.closest(".fixed.inset-0");
            closeModal(modal); // Usamos nuestra nueva función
            isMouseDownOnBackdrop = false;
            return;
        }

        // Caso 3: Cerrar haciendo click fuera
        if (isMouseDownOnBackdrop && target.matches(".fixed.inset-0")) {
            closeModal(target); // Usamos nuestra nueva función
        }

        isMouseDownOnBackdrop = false;
    });
});
