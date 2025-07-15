// --- 1. IMPORTAR ESTILOS ---
import '../css/style.css';
import '../css/custom.css';
//import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';

// --- 2. IMPORTAR LIBRERÍAS (JAVASCRIPT) ---
//import AOS from 'aos';
import * as bootstrap from 'bootstrap';
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

    // --- Lógica del Menú para MÓVILES (Original de la plantilla) ---
    on('click', '.mobile-nav-toggle', function(e) {
        select('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });

    // --- Lógica del Menú para ESCRITORIO (Sidebar) ---
    const header = select('#header');
    const footer = select('#footer');
    const main = select('#main');
    const hideButton = select('#hideSidebarButton');
    const showButton = select('#toggleIconBody');

    // --- ESTADO INICIAL: Sidebar oculto por defecto en escritorio ---
    if (window.innerWidth >= 1200) { // Solo se aplica en vistas de escritorio
        if (header) header.classList.add('header-hidden');
        if (footer) footer.classList.add('footer-hidden');
        if (main) main.style.marginLeft = '0px';
        if (hideButton) hideButton.classList.add('d-none');
        if (showButton) showButton.classList.remove('d-none');
    }

    // --- Eventos de Clic para mostrar/ocultar ---
    on('click', '#hideSidebarButton', () => {
        if (header) header.classList.add('header-hidden');
        if (footer) footer.classList.add('footer-hidden');
        if (main) main.style.marginLeft = '0px';
        if (hideButton) hideButton.classList.add('d-none');
        if (showButton) showButton.classList.remove('d-none');
    });

    on('click', '#toggleIconBody', () => {
        if (header) header.classList.remove('header-hidden');
        if (footer) footer.classList.remove('footer-hidden');
        if (main) main.style.marginLeft = '300px';
        if (showButton) showButton.classList.add('d-none');
        if (hideButton) hideButton.classList.remove('d-none');
    });

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
            on('click', '#portfolio-flters li', function(e) {
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

    const skillsContent = select('.skills-content');
    if (skillsContent) {
        new Waypoint({
            element: skillsContent,
            offset: '25%',
            handler: function(direction) {
                let progress = select('.progress .progress-bar', true);
                progress.forEach((el) => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%';
                });
            }
        });
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
            toggleButton.addEventListener('click', function(e) {
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
    const pricingCards = document.querySelectorAll('.pricing .pricing-item');
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
    });

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
        contactForm.addEventListener('submit', function(e) {
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
            toggleResumeButton.addEventListener('click', function(e) {
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


}); // Fin del DOMContentLoaded