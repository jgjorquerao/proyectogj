{{-- SE HA AÑADIDO LA CLASE 'section-bg' PARA RESTAURAR EL PATRÓN DE COLORES --}}
<section id="contact" class="contact section-bg">
    <div class="container">

        <div class="section-title">
            <h2>Contacto</h2>
            <p>Si estás interesado en nuestros servicios o tienes alguna consulta, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus objetivos digitales.</p>
        </div>

        <div class="row" data-aos="fade-in">

            <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                    <div class="address">
                        <i class="bi bi-geo-alt"></i>
                        <h4>Ubicación:</h4>
                        <p>Puerto Montt, CL</p>
                    </div>

                    <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>equipo@gyler.cl</p>
                    </div>

                    <div class="phone">
                        <i class="bi bi-phone"></i>
                        <h4>Llamar:</h4>
                        <p>+56 961607574</p>
                    </div>
                    
                    <div class="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47838.478148188486!2d-72.98921763857973!3d-41.462978250064054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183a4d6920f407%3A0x86a3f15a79a5c9df!2sPuerto%20Montt%2C%20Los%20Lagos!5e0!3m2!1ses!2scl!4v1747524509913!5m2!1ses!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                

            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="{{ route('contact.send') }}" method="post" role="form" class="php-email-form">
                    @csrf
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="name">Tu nombre o empresa</label>
                            <input type="text" name="name" class="form-control" id="name" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="name">Tu mejor Email</label>
                            <input type="email" class="form-control" name="email" id="email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">Tu requerimiento</label>
                        <input type="text" class="form-control" name="subject" id="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="name">Mensaje</label>
                        <textarea class="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div class="my-3">
                        <div class="loading">Cargando</div>
                        <div class="error-message" id="msg_error"></div>
                        <div class="sent-message" id="msg_success">Tu mensaje ha sido enviado, nos contactaremos en máximo 24 horas.</div>
                    </div>
                    <div class="text-center"><button type="submit" class="w-100">Enviar requerimiento <i class="bi bi-send-fill ms-2"></i></button></div>
                </form>
            </div>

        </div>

    </div>
</section><!-- End Contact Section -->
