/* ======================================================================= */
/* ARCHIVO: resources/js/app.js                                          */
/* Reemplaza todo el contenido de tu app.js con este código.               */
/* ======================================================================= */

// --- 1. IMPORTAR ESTILOS ---
// Estilos de la plantilla y personalizados
import '../css/style.css';
import '../css/custom.css';

// Estilos de las librerías (importados desde los paquetes NPM)
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';

// --- 2. IMPORTAR LIBRERÍAS (JAVASCRIPT) ---
// Todas las librerías se importan como módulos desde los paquetes NPM
import AOS from 'aos';
import * as bootstrap from 'bootstrap';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
// CORRECCIÓN: Usamos 'import' para ejecutar el script de Waypoints
import 'waypoints/lib/noframework.waypoints.js';


// --- 3. LÓGICA PRINCIPAL (SE EJECUTA CUANDO LA PÁGINA ESTÁ LISTA) ---
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Selector fácil de elementos
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    }

    /**
     * Escucha de eventos fácil
     */
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

    /**
     * Escucha de scroll fácil
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    }

    /**
     * Resalta el enlace de la barra de navegación al hacer scroll
     */
    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    }
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scroll a una sección con desplazamiento de cabecera
     */
    const scrollto = (el) => {
        let header = select('#header');
        let offset = header.offsetHeight;
        let elementPos = select(el).offsetTop;
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        });
    }

    /**
     * Activa/desactiva el menú de navegación móvil
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });

    /**
     * Animación de escritura (Typed.js)
     */
    const typed = select('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    /**
     * Animación al hacer scroll (AOS)
     */
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    /**
     * Contador PureCounter
     */
    new PureCounter();

    /**
     * Inicialización de Isotope para el portafolio
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
            });
            let portfolioFilters = select('#portfolio-flters li', true);
            on('click', '#portfolio-flters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
            }, true);
        }
    });

    /**
     * Lightbox para el portafolio (GLightbox)
     */
    GLightbox({
        selector: '.portfolio-lightbox'
    });

    /**
     * Carrusel de testimonios (Swiper)
     */
    new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    /**
     * Lógica para Ocultar/Mostrar la Barra Lateral (Tu código)
     */
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const main = document.getElementById('main');
    const hideButton = document.getElementById('hideSidebarButton');
    const showButton = document.getElementById('toggleIconBody');

    const showHideSidebar = (action) => {
        if (!header || !showButton) return;
        if (action === 'hide') {
            header.classList.add('header-hidden');
            if (footer) footer.classList.add('footer-hidden');
            if (main) main.style.marginLeft = '0px';
            showButton.classList.remove('d-none');
        } else {
            header.classList.remove('header-hidden');
            if (footer) footer.classList.remove('footer-hidden');
            if (main) main.style.marginLeft = '300px';
            showButton.classList.add('d-none');
        }
    };

    if (hideButton) {
        hideButton.addEventListener('click', () => showHideSidebar('hide'));
    }
    if (showButton) {
        showButton.addEventListener('click', () => showHideSidebar('show'));
    }
});
