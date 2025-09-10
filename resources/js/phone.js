document.addEventListener("DOMContentLoaded", () => {
    const phoneMockup = document.getElementById("phone-mockup");
    const screen = phoneMockup.querySelector(".screen");
    const chatBody = document.getElementById("chat-body");

    let allMessagesLoaded = false; // flag de control

    function disableBodyScroll() {
        document.body.style.overflow = "hidden";
    }

    function enableBodyScroll() {
        document.body.style.overflow = "";
    }

    function isPhoneVisible() {
        const rect = phoneMockup.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function handlePhoneScroll() {
        if (isPhoneVisible() && !allMessagesLoaded) {
            disableBodyScroll();
            screen.style.overflowY = "auto"; // scroll solo dentro de la pantalla
        } else {
            enableBodyScroll();
            screen.style.overflowY = "hidden"; // desactiva scroll interno
        }
    }

    // Escuchar scroll global
    window.addEventListener("scroll", handlePhoneScroll);

    // Llamar a esta función cuando termines de cargar todos los mensajes
    window.onAllMessagesLoaded = function () {
        allMessagesLoaded = true;
        enableBodyScroll(); // vuelve el scroll global
        screen.style.overflowY = "auto"; // mantiene scroll interno
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    const chatAnimationSection = document.getElementById('chat-animation-section');
    const chatBody = document.getElementById('chat-body');

    const showMessagesOnScroll = () => {
        const rect = chatAnimationSection.getBoundingClientRect();

        // The total scroll distance for the animation is the height of the section minus one viewport height
        const scrollableHeight = chatAnimationSection.offsetHeight - window.innerHeight;

        // We only want to calculate progress when the section is passing through the viewport.
        // rect.top will be negative as we scroll down past the section's top.
        let progress = 0;
        if (rect.top < 0) {
            progress = (-rect.top) / scrollableHeight;
        }

        // If we've scrolled past the section, ensure all messages are shown
        if (rect.bottom <= window.innerHeight) {
            progress = 1;
        }

        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));

        // Determine how many messages to show based on scroll progress
        const messagesToShow = Math.ceil(progress * messages.length);

        let visibleMessageCount = 0;
        messages.forEach((message, index) => {
            if (index < messagesToShow) {
                message.classList.add('visible');
                visibleMessageCount++;
            } else {
                // Optional: hide them again if scrolling up
                message.classList.remove('visible');
            }
        });

        // Auto-scroll the chat body to the last visible message
        if (visibleMessageCount > 0) {
            const lastVisibleMessage = messages[visibleMessageCount - 1];
            // Scroll the chat body so the last message is in view
            if (lastVisibleMessage) {
                chatBody.scrollTop = lastVisibleMessage.offsetTop - chatBody.offsetTop;
            }
        } else {
            chatBody.scrollTop = 0;
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', showMessagesOnScroll, { passive: true });

});