{{-- ======================================================================= --}}
{{-- ARCHIVO: resources/views/layouts/app.blade.php                      --}}
{{-- Reemplaza todo el contenido de tu archivo con este código.              --}}
{{-- ======================================================================= --}}

<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Guillermo Jorquera</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicons -->
    <link href="{{ asset('img/favicon.ico') }}" rel="icon">
    <link href="{{ asset('img/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    {{-- Vite carga los estilos de las librerías --}}
    @vite(['resources/js/app.js'])
</head>

<body>

    {{-- Botón flotante de WhatsApp --}}
    <a href="https://wa.me/56961607574?text=Hola!,%2C%20vi%20tu%20sitio%20web%20y%20me%20interesa%20tus%20servicios%20de%20edici%C3%B3n%20de%20video"
       class="whatsapp-float"
       target="_blank"
       title="Contáctame por WhatsApp">
        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp">
    </a>

    {{-- Incluimos el header/sidebar --}}
    @include('header')

    <main id="main">
        {{-- Botón para MOSTRAR el menú (flecha derecha) --}}
        <i onclick="showHideSidebar('show')" id="toggleIconBody" class="mobile-nav-toggle bi bi-arrow-right-short d-none" style="margin-top:10px;width:100px;height:50px;left:-35px;top:42%;padding-right: 10px; justify-content: right;"></i>

        {{-- Incluimos todas las secciones de la página --}}
        @include('hero')
        @include('about')
        @include('portfolio')
        @include('services')
        @include('pricing')
        @include('facts')
        @include('skills')
        @include('resume')
        @include('testimonials')
        @include('contact')
    </main>

    {{-- Incluimos el footer --}}
    @include('footer')

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    
</body>
</html>
