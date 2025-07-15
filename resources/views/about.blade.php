@php
    use Carbon\Carbon;
    $edad = Carbon::parse('05-01-1999')->age;
@endphp

<section id="about" class="about py-5" style="background: #ffffff">
    <div class="container">
        <div class="section-title">
            <h2 class="text-dark">Sobre nosotros</h2>
        </div>

        <!-- NUEVO CONTENIDO -->
        <div class="row text-dark align-items-center py-4">
            <!-- Imagen tipo carnet -->
            <div class="col-12 col-md-3 text-center mb-3 mb-md-0">
                <img src="assets/img/logo.png" class="img-fluid" alt="Logo" style="max-width: 150px;">
            </div>

            <!-- Texto descriptivo -->
            <div class="col-12 col-md-9">
                <p class="text-dark">
                    Nuestra misión es posicionar a las automotoras del sur de Chile en el entorno digital con contenido auténtico y estrategias modernas. Creemos en el poder del video, la automatización y la estética para generar resultados reales. Somos un equipo multidisciplinario con una base sólida en tecnología, diseño y producción multimedia para ayudar al mundo automotriz a expandir su presencia en línea mediante la creación de contenido disruptivo, páginas web funcionales, personalizadas y campañas publicitarias que venden.
                </p>
            </div>
        </div>

        <!-- Miembros del equipo 
        <div class="row text-center text-dark pt-4">
            <div class="col-12 col-md-4 mb-4">
                <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
                <h5 class="mb-0">Emir Reinado</h5>
                <small>Editor audiovisual</small>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
                <h5 class="mb-0">Guillermo Jorquera</h5>
                <small>Director estratégico</small>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
                <h5 class="mb-0">Leonardo Aros</h5>
                <small>Programador web</small>
            </div>
        </div>-->
        <!-- FIN NUEVO CONTENIDO -->
    </div>
</section>
