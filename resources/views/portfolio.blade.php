{{-- ======================================================================= --}}
{{-- ARCHIVO: resources/views/portfolio.blade.php                          --}}
{{-- ======================================================================= --}}

<section id="portfolio" class="portfolio section-bg">
    <div class="container">

        {{-- SECCIÓN DE LOGOS DE CLIENTES --}}
        <div class="section-title">
            <h2>Nuestra experiencia nos avala</h2>
        </div>
        <div class="row text-center pb-3" style="align-items: center;">
            <div class="col"><img src="{{ asset('img/l1.png') }}" class="img-fluid" alt="Logo Cliente 1" style="width: 130px; height: auto;"></div>
            <div class="col"><img src="{{ asset('img/l3.png') }}" class="img-fluid" alt="Logo Cliente 2" style="width: 150px; height: auto;"></div>
            <div class="col"><img src="{{ asset('img/l4.png') }}" class="img-fluid" alt="Logo Cliente 3" style="width: 150px; height: auto;"></div>
            <div class="col"><img src="{{ asset('img/l6.png') }}" class="img-fluid" alt="Logo Cliente 4" style="width: 150px; height: auto;"></div>
            <div class="col"><img src="{{ asset('img/l9.png') }}" class="img-fluid" alt="Logo Cliente 5" style="width: 150px; height: auto;"></div>
            <div class="col"><img src="{{ asset('img/l10.png') }}" class="img-fluid" alt="Logo Cliente 6" style="width: 150px; height: auto;"></div>
        </div>

        {{-- SECCIÓN DE PORTAFOLIO --}}
        <div class="section-title">
            <p>Revisa algunos de los proyectos que hemos desarrollado, desde videos promocionales hasta piezas gráficas diseñadas para destacar la identidad de cada cliente. Cada trabajo refleja nuestro enfoque profesional, creativo y orientado a resultados. Inspírate y descubre cómo podemos ayudarte a potenciar la imagen de tu automotora.</p>
        </div>

        {{-- BOTONES DE FILTRO --}}
        <div class="row" data-aos="fade-up">
            <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                    <li data-filter="*">Todo</li>
                    <li data-filter=".filter-videos" class="filter-active">Videos</li>
                    <li data-filter=".filter-logos">Logotipos</li>
                    <li data-filter=".filter-card">Cartas de presentación</li>
                    <li data-filter=".filter-web">Diseño gráfico</li>
                </ul>
            </div>
        </div>

        {{-- CONTENEDOR DE PROYECTOS --}}
        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

            {{-- VIDEOS (AHORA SIN AUTOPLAY) --}}
            <div class="col-lg-4 col-md-6 portfolio-item filter-videos">
                <div class="portfolio-wrap">
                    <video playsinline loop muted><source src="{{ asset('videos/video-6.mp4') }}" type="video/mp4"></video>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-videos">
                <div class="portfolio-wrap">
                    <video playsinline loop muted><source src="{{ asset('videos/video-4.mp4') }}" type="video/mp4"></video>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-videos">
                <div class="portfolio-wrap">
                    <video playsinline loop muted><source src="{{ asset('videos/video-5.mp4') }}" type="video/mp4"></video>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-videos">
                <div class="portfolio-wrap">
                    <video playsinline loop muted><source src="{{ asset('videos/video-11.mp4') }}" type="video/mp4"></video>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-videos">
                <div class="portfolio-wrap">
                    <video playsinline loop muted><source src="{{ asset('videos/video-9.mp4') }}" type="video/mp4"></video>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-videos">
                <div class="portfolio-wrap">
                    <video playsinline loop muted><source src="{{ asset('videos/video-10.mp4') }}" type="video/mp4"></video>
                </div>
            </div>

            {{-- DISEÑO GRÁFICO (WEB) --}}
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-1.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-1.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Diseño 1"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-2.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-2.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Diseño 2"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-3.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-3.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Diseño 3"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>

            {{-- CARTAS DE PRESENTACIÓN --}}
            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-4.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-4.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Carta 1"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-11.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-11.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Carta 2"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-12.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-12.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Carta 3"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>

            {{-- LOGOTIPOS --}}
            <div class="col-lg-4 col-md-6 portfolio-item filter-logos">
                <div class="portfolio-wrap">
                    <img src="{{ asset('img/portfolio/portfolio-8.jpg') }}" class="img-fluid" alt="">
                    <div class="portfolio-links"><a href="{{ asset('img/portfolio/portfolio-8.jpg') }}" data-gallery="portfolioGallery" class="portfolio-lightbox w-100" title="Logo 1"><i class="bx bx-plus"></i></a></div>
                </div>
            </div>

        </div>
    </div>
</section>
