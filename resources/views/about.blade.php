@php
    use Carbon\Carbon;
    $edad = Carbon::parse('05-01-1999')->age;
@endphp

{{-- SE HA ELIMINADO EL style="background: #ffffff" DE LA ETIQUETA SECTION --}}
<section id="about" class="about py-5">
    <div class="container">
        <div class="section-title">
            <h2 class="text-dark">Sobre nosotroz</h2>
        </div>

        <!-- NUEVO CONTENIDO -->
        <div class="row text-dark align-items-center py-4">
            <!-- Imagen tipo carnet -->
            <div class="col-12 col-md-3 text-center mb-3 mb-md-0">
                <!-- <img src="{{ asset('img/logo3.svg') }}" class="img-fluid" alt="Logo" style="max-width: 150px;"> -->
                <img src="{{ asset('img/rata.png') }}" class="img-fluid" alt="Logo" style="max-width: 150px;">
            </div>

            <!-- Texto descriptivo -->
            <div class="col-12 col-md-9">
                <p class="text-dark">
                    Nuestra misión es posicionar a las automotoras del sur de Chile en el entorno digital con contenido auténtico y estrategias modernas. Creemos en el poder del video, la automatización y la estética para generar resultados reales. Somos un equipo multidisciplinario con una base sólida en tecnología, diseño y producción multimedia para ayudar al mundo automotriz a expandir su presencia en línea mediante la creación de contenido disruptivo, páginas web funcionales, personalizadas y campañas publicitarias que venden.
                </p>
            </div>
        </div>
    </div>
</section>
