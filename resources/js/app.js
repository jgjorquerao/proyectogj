// --- 1. IMPORTAR ESTILOS ---
import '../css/style.css';
import '../css/custom.css';
//import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import * as THREE from 'three';

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
    // ... (tu código app.js existente) ...
    // ... (tu lógica principal existente de app.js) ...

    // --- Lógica para gráficos circulares de Habilidades (Chart.js) ---
    const skillData = {
        capcut: 100,
        premiere: 90,
        photoshop: 75,
        illustrator: 80,
        gimp: 90,
        metaAds: 75
    };

    function createPieChart(canvasId, percentage) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) {
            console.error(`Canvas element with ID '${canvasId}' not found.`);
            return;
        }

        // Forzar dimensiones del canvas en JS también, como respaldo al CSS
        ctx.width = 150;
        ctx.height = 150;

        const remaining = 100 - percentage;
        let mainColor = '#149ddd'; // Color principal del gráfico (para modo claro)
        let backgroundColor = '#f3f3f3'; // Color de fondo para el porcentaje restante (modo claro)

        // Adaptar colores para el modo oscuro
        if (document.body.classList.contains('dark-mode')) {
            mainColor = '#50C878'; // Nuevo verde principal para el modo oscuro
            backgroundColor = '#2B2E27'; // Fondo más oscuro para el porcentaje restante en modo oscuro
        }

        // Destruir gráficos existentes para evitar errores si se reinicia la función o la página no se recarga completamente
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [percentage, remaining],
                    backgroundColor: [mainColor, backgroundColor],
                    borderWidth: 0,
                    cutout: '70%', // Para crear un gráfico de dona
                    circumference: 360,
                    rotation: -90, // Inicia desde arriba
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });
        console.log(`Gráfico ${canvasId} inicializado. Dimensiones: ${ctx.width}x${ctx.height}`); // Log para depuración
    }

    // Inicializar los gráficos
    createPieChart('capcutChart', skillData.capcut);
    createPieChart('premiereChart', skillData.premiere);
    createPieChart('photoshopChart', skillData.photoshop);
    createPieChart('illustratorChart', skillData.illustrator);
    createPieChart('gimpChart', skillData.gimp);
    createPieChart('metaAdsChart', skillData.metaAds);

    // --- Lógica para la Animación 3D en el Hero ---
const canvas = document.getElementById('hero-animation-canvas');
if (!canvas) {
    console.error('Canvas element not found!');
    return;
}

// Crear la escena, la cámara y el renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });

// Configurar el renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Colocar la cámara
camera.position.z = 100;

// Configurar la luz
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const mouse = new THREE.Vector2();
const cubeGroup = new THREE.Group();
const cubes = [];

// Inicializar los cubos en una cuadrícula 3D
function initCubes() {
    cubeGroup.remove(...cubeGroup.children);
    cubes.length = 0;

    const gridSize = 6; // ¡CLAVE! Reducimos el tamaño de la cuadrícula a 7x7x7
    const cubeSize =1;
    const spacing = 10;

    // Crear la cuadrícula 3D de cubos
    for (let x = -gridSize; x <= gridSize; x++) {
        for (let y = -gridSize; y <= gridSize; y++) {
            for (let z = -gridSize; z <= gridSize; z++) {
                const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                const cube = new THREE.Mesh(geometry, material);

                cube.position.set(x * spacing, y * spacing, z * spacing);
                cubes.push(cube);
                cubeGroup.add(cube);
            }
        }
    }

    scene.add(cubeGroup);
    cubeGroup.position.set(0, 0, 0);
}

// Detección de mouse
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Bucle de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotación automática por defecto
    cubeGroup.rotation.x += 0.005;
    cubeGroup.rotation.y += 0.005;

    // Rotación adicional basada en el mouse
    const mouseRotationSpeed = 0.02;
    cubeGroup.rotation.x += mouse.y * mouseRotationSpeed;
    cubeGroup.rotation.y += mouse.x * mouseRotationSpeed;

    renderer.render(scene, camera);
}

// Evento de redimensionamiento de ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Inicio de la animación
camera.position.z = 200; // ¡CLAVE! Ajustamos la cámara para que el cubo se vea más pequeño
initCubes();
animate();
}); // Fin del DOMContentLoaded