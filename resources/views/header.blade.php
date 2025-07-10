<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Guillermo Jorquera - Portafolio</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="{{ asset('img/favicon.png') }}" rel="icon">
  <link href="{{ asset('img/apple-touch-icon.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  {{-- Esta única línea carga todo el CSS y JS compilado por Vite --}}
  @vite(['resources/js/app.js'])

</head>
<body>

  <!-- ======= Botón para mostrar la barra lateral (inicialmente oculto en escritorio) ======= -->
  <i id="toggleIconBody" class="bi bi-arrow-right-short zoom-button d-none" style="position: fixed; top: 50%; left: 10px; font-size: 40px; z-index: 1000; cursor: pointer;"></i>

  <!-- ======= Header / Barra Lateral ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        {{-- Botón para ocultar la barra lateral --}}
        <i id="hideSidebarButton" class="mobile-nav-toggle bi bi-arrow-left-short zoom-button d-none d-xl-flex" style="margin-top:10px;float: right; width:50px;height:50px;left:275px;top:42%;"></i>
        
        {{-- Usamos asset() para la ruta de la imagen en 'public/img/' --}}
        <img src="{{ asset('img/profile-img4.jpg') }}" alt="Foto de Guillermo Jorquera" class="img-fluid rounded-circle">
        
        <h1 class="text-light"><a href="index.html">Guillermo Jorquera</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://github.com/josejorquerao?tab=repositories" class="github" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/jgjorquerao/" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
          <a href="http://www.instagram.com/josefgyler" class="instagram" target="_blank"><i class="bx bxl-instagram"></i></a>
          <a href="https://wa.me/56961607574" class="whatsapp" target="_blank"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Inicio</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Sobre nosotros</span></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portafolio</span></a></li>
          <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Servicios</span></a></li>
          <li><a href="#pricing" class="nav-link scrollto"><i class="bi-briefcase"></i> <span>Planes</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resumen</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contacto</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->

{{-- El resto de tu HTML, como el <body> y <html>, se cierran en el archivo footer.blade.php --}}