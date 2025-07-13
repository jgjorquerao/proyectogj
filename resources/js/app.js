/* ======================================================================= */
/* ARCHIVO: resources/js/app.js                                          */
/* Reemplaza todo el contenido de tu archivo con este código.              */
/* ======================================================================= */

// --- 1. IMPORTAR ESTILOS ---
import '../css/style.css';
import '../css/custom.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';

// --- 2. IMPORTAR LIBRERÍAS (JAVASCRIPT) ---
import AOS from 'aos';
import * as bootstrap from 'bootstrap';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
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
    // Este código SÓLO se aplica al botón con la clase '.mobile-nav-toggle'
    on('click', '.mobile-nav-toggle', function(e) {
        select('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });

    // --- Lógica del Menú para ESCRITORIO (Sidebar) ---
    // Esta es la lógica corregida y separada que NO entra en conflicto.
    const header = select('#header');
    const footer = select('#footer');
    const main = select('#main');

    on('click', '#hideSidebarButton', () => {
        const showButton = select('#toggleIconBody');
        if (header) header.classList.add('header-hidden');
        if (footer) footer.classList.add('footer-hidden');
        if (main) main.style.marginLeft = '0px';
        if (showButton) showButton.classList.remove('d-none');
    });

    on('click', '#toggleIconBody', () => {
        const showButton = select('#toggleIconBody');
        if (header) header.classList.remove('header-hidden');
        if (footer) footer.classList.remove('footer-hidden');
        if (main) main.style.marginLeft = '300px';
        if (showButton) showButton.classList.add('d-none');
    });

    // --- Inicialización de otras librerías ---
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

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
        speed: 600,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        slidesPerView: 'auto',
        pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }
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
});
