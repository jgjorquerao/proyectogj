<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Guillermo Jorquera</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Favicons -->
    <link href="assets/img/favicon.ico" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
     <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link rel="stylesheet" href="style.css">
    <link href="assets/css/style.css?v=<?php echo rand(); ?>" rel="stylesheet">

    <!-- Scripts -->
    <!--vite(['resources/sass/app.scss', 'resources/js/app.js'])-->
</head>

<body>
    
    
<style>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 120px;
  right: 15px;
  z-index: 999;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}
.whatsapp-float:hover {
  transform: scale(1.1);
}
.whatsapp-float img {
  width: 35px;
  height: 35px;
}
.whatsapp-float {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.whatsapp-float:hover,
.whatsapp-float:focus {
  transform: scale(1.2);
}
.whatsapp-float:active {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
  .back-to-top {
    transition: transform 0.3s ease;
  }


  .back-to-top:hover {
    transform: scale(1.1);
  }
  .back-to-top:hover,
.back-to-top:focus {
  transform: scale(1.2);
}
.back-to-top:active {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
    <a href="https://wa.me/56961607574?text=Hola!,%2C%20vi%20tu%20sitio%20web%20y%20me%20interesa%20tus%20servicios%20de%20edici%C3%B3n%20de%20video" 
   class="whatsapp-float" 
   target="_blank" 
   title="Contáctame por WhatsApp">
   <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp">
</a>
    
    <!-- ======= Mobile nav toggle button ======= -->
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    @include('header')
    
    <main id="main">
        <i onclick="showHideSidebar('show')" id ="toggleIconBody" class="mobile-nav-toggle bi bi-arrow-right-short d-none" style="margin-top:10px;width:100px;height:50px;left:-35px;top:42%;padding-right: 10px;
    justify-content: right;"></i>
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
    @include('footer')
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/typed.js/typed.umd.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js?v=<?php echo rand(); ?>"></script>
</body>

</html>

