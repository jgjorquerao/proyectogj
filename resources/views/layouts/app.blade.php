<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Gyler AI</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicons -->
    <link href="{{ asset('img/gylerr.png') }}" rel="icon">
    {{-- Vite carga los estilos de las librerías --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    @vite(['resources/js/app.js', 'resources/js/phone.js', 'resources/sass/app.scss'])
</head>

{{-- AÑADIMOS LA CLASE 'dark-mode' PARA ACTIVAR LOS ESTILOS OSCUROS --}}

<body class="dark-mode">

    {{-- Botón flotante de WhatsApp --}}
    <a href="https://wa.me/56961607574?text=Hola!,%2C%20vi%20tu%20sitio%20web%20y%20me%20interesa%20tus%20servicios%20de%20edici%C3%B3n%20de%20video"
        class="whatsapp-float" target="_blank" title="Contáctame por WhatsApp">
        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp">
    </a>
    <main id="main">
        @yield(section: 'content')
    </main>
    <a href="#" class="back-to-top"></a>
    {{-- Script de Chart.js desde CDN --}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
</body>

</html>