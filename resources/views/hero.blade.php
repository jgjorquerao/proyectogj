<!-- <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
        <h1>Potencia las ventas de tu negocio</h1>
        <p><span class="typed" data-typed-items="Video Reels, Producción Audiovisual, Diseño Gráfico, Marketing Digital, Desarrollo Web"></span></p>
        <div class="text-center">
            <a href="#portfolio" class="btn btn-dark btn-lg" style="background:#149ddd;">Ver portafolio</a>
        </div>
    </div>
</section> --> <!-- End Hero -->
<style>
    #hero {
    position: relative;
    overflow: hidden;
    height: 100vh; /* o el alto que quieras */
    background: none;
    }
    
    #hero-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1; /* para que el video esté detrás del contenido */
    }

</style>

<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container">
        <!-- Video de fondo -->
        <video autoplay muted loop playsinline id="hero-video">
            <source src="assets/videos/Background-Header4.mp4" type="video/mp4">
            Tu navegador no soporta el tag de video.
        </video>
    
        <!-- Contenido -->
        <div class="hero-container" data-aos="fade-in">
            <h1>Potencia la imagen de tu Automotora, Rent a Car o Detailing</h1>
            <p><span class="typed" data-typed-items="Video Reels, Producción Audiovisual, Diseño Gráfico, Marketing Digital, Inteligencia Artificial, Desarrollo Web"></span></p>
            <div class="text-center">
                <a href="#portfolio" class="btn btn-dark btn-lg" style="background:#149ddd; font-size: 20px; padding: 12px 24px;">Cotizar planes</a>
            </div>
        </div>
    </div>
</section>
