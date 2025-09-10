import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import * as THREE from 'three';

// --- 2. IMPORTAR LIBRERÍAS (JAVASCRIPT) ---
/* import * as bootstrap from 'bootstrap'; */
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
import 'waypoints/lib/noframework.waypoints.js';

// --- 3. LÓGICA PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {


    const select = (el, all = false) => {
        el = el.trim();
        return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    }

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    }

    // --- Inicialización de otras librerías ---
    new PureCounter();

    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                filter: '.filter-videos'
            });
            let portfolioFilters = select('#portfolio-flters li', true);
            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(el => el.classList.remove('filter-active'));
                this.classList.add('filter-active');
                portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
            }, true);
        }
    });

    GLightbox({ selector: '.portfolio-lightbox' });

    new Swiper('.testimonials-slider', {
        modules: [Autoplay, Pagination], // Esta línea activa los módulos
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            }
        }
    });
    const typed = select('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items').split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    const backToTopButton = select('.back-to-top');
    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        }
        window.addEventListener('load', toggleBackToTop);
        document.addEventListener('scroll', toggleBackToTop);
    }


    // --- Lógica para desplegar características de los planes (Definitiva) ---
    document.querySelectorAll('.pricing-item').forEach(card => {
        const featureList = card.querySelector('.features-list');
        if (!featureList) return;

        const allFeatures = featureList.querySelectorAll('li');
        const toggleButton = card.querySelector('.toggle-features');

        if (allFeatures.length > 3) {
            toggleButton.classList.remove('d-none');
            for (let i = 3; i < allFeatures.length; i++) {
                allFeatures[i].classList.add('collapsible');
            }
            toggleButton.addEventListener('click', function (e) {
                e.preventDefault();
                this.classList.toggle('active');
                featureList.classList.toggle('expanded');
                if (this.classList.contains('active')) {
                    this.innerHTML = 'Ver menos <i class="bi bi-chevron-up"></i>';
                } else {
                    this.innerHTML = 'Ver más <i class="bi bi-chevron-down"></i>';
                }
            });
        }
    });

    // --- Lógica para efecto de perspectiva en tarjetas de planes ---
    /* const pricingCards = document.querySelectorAll('.pricing .pricing-item');
    pricingCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = card.offsetWidth / 2;
            const centerY = card.offsetHeight / 2;
            const rotateX = ((y - centerY) / centerY) * -7;
            const rotateY = ((x - centerX) / centerX) * 7;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    }); */

    // --- Lógica para controles de video del portafolio ---
    let currentlyPlayingVideo = null;

    document.querySelectorAll('.portfolio-item.filter-videos .portfolio-wrap').forEach(wrap => {
        const video = wrap.querySelector('video');
        if (!video) return;

        // Crear y añadir el botón de play
        const playButton = document.createElement('button');
        playButton.className = 'video-play-button';
        playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
        wrap.appendChild(playButton);

        const togglePlay = () => {
            if (video.paused) {
                // Si hay otro video reproduciéndose, páusalo
                if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
                    currentlyPlayingVideo.pause();
                }
                video.play();
                currentlyPlayingVideo = video;
            } else {
                video.pause();
                currentlyPlayingVideo = null;
            }
        };

        // Evento de clic en el botón
        playButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic se propague al contenedor
            togglePlay();
        });

        // Evento de clic en el video mismo (para pausar)
        video.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!video.paused) {
                togglePlay();
            }
        });

        // Actualizar el ícono y la clase del contenedor
        video.onplay = () => {
            playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
            wrap.classList.add('is-playing');
        };
        video.onpause = () => {
            playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
            wrap.classList.remove('is-playing');
        };
    });

    // --- Lógica para el formulario de contacto con AJAX ---
    const contactForm = select('.php-email-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que la página se recargue

            let thisForm = this;
            let loading = thisForm.querySelector('.loading');
            let errorMessage = thisForm.querySelector('.error-message');
            let sentMessage = thisForm.querySelector('.sent-message');

            // Muestra el mensaje de "Cargando" y oculta los otros
            loading.style.display = 'block';
            errorMessage.style.display = 'none';
            sentMessage.style.display = 'none';

            // Envía los datos del formulario en segundo plano
            fetch(thisForm.action, {
                method: 'POST',
                body: new FormData(thisForm),
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json',
                }
            })
                .then(response => {
                    // Si la respuesta del servidor es buena, la procesamos
                    if (response.ok) {
                        return response.json();
                    }
                    // Si hay un error de servidor, lo lanzamos para que lo capture el .catch()
                    throw new Error('Hubo un problema con el servidor.');
                })
                .then(data => {
                    loading.style.display = 'none';
                    if (data.success) {
                        // Si todo fue bien, muestra el mensaje de éxito
                        sentMessage.style.display = 'block';
                        thisForm.reset(); // Limpia los campos del formulario
                    } else {
                        // Si el servidor devolvió un error, muestra el mensaje de error
                        errorMessage.innerHTML = data.message || 'Ocurrió un error inesperado.';
                        errorMessage.style.display = 'block';
                    }
                })
                .catch((error) => {
                    // Si hubo un error de red o de servidor, muestra un mensaje genérico
                    loading.style.display = 'none';
                    errorMessage.innerHTML = 'No se pudo conectar con el servidor. Por favor, revisa tu conexión a internet.';
                    errorMessage.style.display = 'block';
                    console.error('Error en la solicitud Fetch:', error);
                });
        });
    }
    // --- Lógica para desplegar la sección de Resumen ---
    const toggleResumeButton = select('#toggle-resume-button');
    if (toggleResumeButton) {
        const resumeContent = select('#resume-content');
        if (resumeContent) {
            toggleResumeButton.addEventListener('click', function (e) {
                e.preventDefault();
                this.classList.toggle('active');
                resumeContent.classList.toggle('expanded');

                if (this.classList.contains('active')) {
                    this.innerHTML = 'Ocultar Experiencia <i class="bi bi-chevron-up"></i>';
                } else {
                    this.innerHTML = 'Ver Experiencia Detallada <i class="bi bi-chevron-down"></i>';
                }
            });
        }
    }
    // Selecciona el contenedor de los filtros del portafolio.
    const filtersContainer = document.querySelector('.portfolio #portfolio-flters');

    // Solo ejecuta el código si el contenedor existe.
    if (filtersContainer) {
        const maxTilt = 10; // Grados máximos de inclinación. Ajústalo para un efecto más o menos sutil.

        // Evento que se dispara cuando el mouse se mueve sobre el contenedor.
        filtersContainer.addEventListener('mousemove', (e) => {
            const rect = filtersContainer.getBoundingClientRect();

            // Calcula la posición del mouse (X, Y) dentro del elemento.
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calcula el centro del elemento.
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calcula la rotación en los ejes X e Y.
            // El valor se normaliza (-1 a 1) y se multiplica por la inclinación máxima.
            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            // Aplica la transformación 3D al estilo del elemento.
            filtersContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Evento que se dispara cuando el mouse sale del contenedor.
        filtersContainer.addEventListener('mouseleave', () => {
            // Resetea la transformación para que vuelva a su estado original.
            filtersContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }

    // ✅ LÍNEA PROBLEMÁTICA ELIMINADA DE AQUÍ
    initVideoCarousel();
    initFloatingButtons();

    // =======================================================================
    // ✅ INICIO: LÓGICA PARA CARRUSEL DE LOGOS (VERSIÓN FINAL)
    // =======================================================================
    const slider = document.querySelector('.logos-slider');

    if (slider) {
        const slideContainer = slider.querySelector('.logos-slide');

        let autoScrollID;
        const normalSpeed = 0.4; // Velocidad normal (45% más lento)
        const hoverSpeed = 0.16; // Velocidad en hover (60% más lento que la normal)
        let currentSpeed = normalSpeed;

        const autoScroll = () => {
            slider.scrollLeft += currentSpeed;

            // Lógica para el bucle infinito
            if (slider.scrollLeft >= slideContainer.offsetWidth / 2) {
                slider.scrollLeft -= slideContainer.offsetWidth / 2;
            }
            autoScrollID = requestAnimationFrame(autoScroll);
        };

        // Eventos para cambiar la velocidad al pasar el mouse
        slider.addEventListener('mouseenter', () => {
            currentSpeed = hoverSpeed;
        });

        slider.addEventListener('mouseleave', () => {
            currentSpeed = normalSpeed;
        });

        // Iniciar la animación
        autoScroll();
    }
    // =======================================================================
    // ✅ FIN: LÓGICA PARA CARRUSEL DE LOGOS
    // =======================================================================
    initVideoCarousel();
    initFloatingButtons();
    function initFloatingButtons() {
        const backToTopButton = document.querySelector('.back-to-top');
        const whatsappButton = document.querySelector('.whatsapp-float');
        const heroSection = document.getElementById('hero');

        // Si no se encuentran los elementos necesarios, no hace nada.
        if (!backToTopButton || !whatsappButton || !heroSection) {
            return;
        }

        const toggleButtons = () => {
            // Muestra los botones si el scroll ha pasado la altura de la sección hero.
            if (window.scrollY > heroSection.offsetHeight) {
                backToTopButton.classList.add('active');
                whatsappButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
                whatsappButton.classList.remove('active');
            }
        };

        // Ejecuta la función al cargar la página y al hacer scroll.
        window.addEventListener('load', toggleButtons);
        document.addEventListener('scroll', toggleButtons);
    }

    // AÑADIDO: Lógica para mostrar/ocultar los botones flotantes al hacer scroll
    function initFloatingButtons() {
        const whatsappButton = document.querySelector('.whatsapp-float');
        // Para este caso, no necesitamos la sección hero ni el botón de "volver arriba",
        // así que solo nos centramos en el botón de WhatsApp.
        if (!whatsappButton) {
            return;
        }

        const toggleButton = () => {
            if (window.scrollY > 150) { // Mostrar el botón después de 150px de scroll
                whatsappButton.classList.add('active');
            } else {
                whatsappButton.classList.remove('active');
            }
        };

        window.addEventListener('load', toggleButton);
        window.addEventListener('scroll', toggleButton);
    }
});
/**
 * Inicializa el carrusel de videos del portafolio con autoplay.
 */
function initVideoCarousel() {
    const container = document.querySelector('.video-carousel-container');
    if (!container) return;

    const slider = container.querySelector('.video-carousel-slider');
    const track = container.querySelector('.video-carousel-track');
    const prevButton = document.getElementById('prevVideo');
    const nextButton = document.getElementById('nextVideo');
    const slides = Array.from(track.children);

    if (!slider || !track || !prevButton || !nextButton || slides.length === 0) {
        console.error('Faltan elementos para inicializar el carrusel de videos.');
        return;
    }

    let currentIndex = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 segundos

    /* if (!window.heroSliderInitialized) {
        window.heroSliderInitialized = true;

        const words = ["Tu Marca", "Tus Servicios", "Tus Productos"]; // Ajusta tus palabras
        const wordContainer = document.querySelector("#hero-words");

        let currentIndex = 0;

        function showNextWord() {
            wordContainer.classList.remove("fade-in-up");
            void wordContainer.offsetWidth;

            wordContainer.textContent = words[currentIndex];
            wordContainer.classList.add("fade-in-up");

            currentIndex = (currentIndex + 1) % words.length;
        }

        showNextWord();
        setInterval(showNextWord, 1500);
    } */
    // --- Funciones del Carrusel ---

    function getSlideWidth() {
        return slides[0].getBoundingClientRect().width;
    }

    function setSliderPosition() {
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function updateArrows() {
        const slideWidth = getSlideWidth();
        const visibleSlides = Math.round(slider.offsetWidth / slideWidth);
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= slides.length - visibleSlides;
    }

    function moveTo(index) {
        const slideWidth = getSlideWidth();
        const visibleSlides = Math.round(slider.offsetWidth / slideWidth);

        // Lógica para el bucle del autoplay
        if (index >= slides.length - visibleSlides + 1) {
            index = 0;
        }
        if (index < 0) {
            index = slides.length - visibleSlides;
        }

        currentIndex = index;
        currentTranslate = currentIndex * -slideWidth;
        prevTranslate = currentTranslate;
        track.style.transition = 'transform 0.5s ease';
        setSliderPosition();
        updateArrows();
    }

    // --- Funciones de Autoplay ---
    function startAutoPlay() {
        stopAutoPlay(); // Limpia cualquier intervalo anterior
        autoPlayInterval = setInterval(() => {
            moveTo(currentIndex + 1);
        }, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }


    // --- Manejadores de Eventos ---

    function dragStart(e) {
        stopAutoPlay();
        isDragging = true;
        startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        track.style.transition = 'none';
        animationID = requestAnimationFrame(animationLoop);
    }

    function animationLoop() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animationLoop);
    }

    function dragMove(e) {
        if (!isDragging) return;
        const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100) moveTo(currentIndex + 1);
        else if (movedBy > 100) moveTo(currentIndex - 1);
        else moveTo(currentIndex);
    }

    // --- Asignación de Eventos ---

    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    prevButton.addEventListener('click', () => {
        stopAutoPlay();
        moveTo(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        stopAutoPlay();
        moveTo(currentIndex + 1);
    });

    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);
    slider.addEventListener('mousemove', dragMove);

    slider.addEventListener('touchstart', dragStart, { passive: true });
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('touchmove', dragMove, { passive: true });

    window.addEventListener('resize', () => {
        moveTo(currentIndex);
    });

    // Inicia todo
    moveTo(currentIndex);
    startAutoPlay();
}
