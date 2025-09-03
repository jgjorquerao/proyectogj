<header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

        <!-- Logo -->
        <a href="" class="logo">
            <img src="{{ asset('img/gylerai004.png') }}" alt="Logo Gyler Digital" class="img-fluid">
            <!-- <span class="logo-text">gyler.ai</span> -->
        </a>

        <!-- Menú de Navegación -->
        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto active" href="#hero">Inicio</a></li>
                <li><a class="nav-link scrollto" href="#about">Sobre nosotros</a></li>
                <li><a class="nav-link scrollto" href="#portfolio">Portafolio</a></li>
                <li><a class="nav-link scrollto" href="#services">Servicios</a></li>
                <li><a class="nav-link scrollto" href="#pricing">Planes</a></li>
                <li><a class="nav-link scrollto" href="#contact">Contacto</a></li>
            </ul>
        </nav>

        <!-- Redes Sociales (Opcional, puedes moverlas o quitarlas) -->
        <div class="header-social-links">
            <a href="https://github.com/josejorquerao?tab=repositories" class="github" target="_blank"><i
                    class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/jgjorquerao/" class="linkedin" target="_blank"><i
                    class="bx bxl-linkedin"></i></a>
            <a href="https://www.instagram.com/josefgyler" class="instagram" target="_blank"><i
                    class="bx bxl-instagram"></i></a>
        </div>

        <div class="ms-4">
            @guest
                @if (Route::has('login'))
                    <!-- <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a> -->
                    <a class="nav-link login-btn" href="{{ route('login') }}">
                        <i class="bi bi-person-fill" style="font-size: 24px;"></i>
                    </a>
                @endif
            @else
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {{ Auth::user()->name }}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li>
                            <a class="dropdown-item" href="{{ route('index') }}">
                                Dashboard
                            </a>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                Logout
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </li>
            @endguest
        </div>
    </div>
</header>