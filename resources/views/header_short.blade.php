<header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

        <!-- Logo -->
        <a href="/" class="logo" id="logo">
            <img src="{{ asset('img/gylerdigital1.png') }}" alt="Logo Gyler Digital" class="img-fluid">
        </a>

        <!-- Redes Sociales (Opcional, puedes moverlas o quitarlas) -->
        <div class="header-social-links">
            <a href="https://github.com/josejorquerao?tab=repositories" class="github" target="_blank"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/jgjorquerao/" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
            <a href="https://www.instagram.com/josefgyler" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
        </div>

    </div>
</header>

<script>
    const logo = document.getElementById('logo');

    if (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone
    ) {
        // App instalada → quitamos el href
        logo.removeAttribute('href');
    } else {
        // Navegador normal → dejamos el href
        logo.setAttribute('href', '/');
    }
</script>