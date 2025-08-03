<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container">
        <!-- Video de fondo -->
        <video autoplay muted loop playsinline id="hero-video">
            <source src="{{ asset('videos/Background-Header4.mp4') }}" type="video/mp4">
            Tu navegador no soporta el tag de video.
        </video>

        <!-- Contenido -->
        <div class="hero-container" data-aos="fade-in">
            <h1>Potencia la imagen de tu Automotora, Rent a Car o Detailing</h1>
            <p><span class="typed" data-typed-items="Video Reels, Producción Audiovisual, Diseño Gráfico, Marketing Digital, Inteligencia Artificial, Desarrollo Web"></span></p>
            <div class="text-center">
                {{-- SE HAN QUITADO LOS ESTILOS EN LÍNEA PARA QUE LOS CONTROLE EL CSS --}}
                <a href="#pricing" class="btn btn-dark btn-lg">Cotizar planes</a>
            </div>
        </div>
    </div>
</section>
