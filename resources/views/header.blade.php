<style>
  @media (min-width: 1200px) {
    #header, #footer {
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    #main {
      transition: margin-left 0.3s ease;
    }

    /* Estado oculto */
    .header-hidden, .footer-hidden {
      opacity: 0;
      visibility: hidden;
    }
  }
  
  .zoom-button {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.zoom-button:hover,
.zoom-button:focus {
  transform: scale(1.2);
}
.zoom-button:active {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>

      <header id="header">
          <div class="d-flex flex-column">

              <div class="profile">
                  <i onclick="showHideSidebar('hide')" class="mobile-nav-toggle bi bi-arrow-left-short zoom-button d-none d-xl-flex" style="margin-top:10px;float: right; width:50px;height:50px;left:275px;top:42%;"></i>
                  <img src="assets/img/profile-img4.jpg?v=3" alt="" class="img-fluid rounded-circle">
                  <h1 class="text-light"><a href="index.html">Guillermo Jorquera</a></h1>
                  <div class="social-links mt-3 text-center">
                      <a href="https://github.com/josejorquerao?tab=repositories" class="facebook"><i
                              class="bi bi-github"></i></a>
                      <a href="https://www.linkedin.com/in/jgjorquerao/" class="linkedin"><i
                              class="bx bxl-linkedin"></i></a>
                      <a href="http://www.instagram.com/josefgyler" class="instagram"><i
                              class="bx bxl-instagram"></i></a>
                      <a href="https://wa.me/56961607574" class="instagram"><i class="bi bi-whatsapp"></i></a>
                  </div>
              </div>

              <nav id="navbar" class="nav-menu navbar">
                  <ul>
                      <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i>
                              <span>Inicio</span></a></li>
                      <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Sobre
                                  nosotros</span></a>
                      </li>
                      <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i>
                              <span>Portafolio</span></a></li>
                      <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i>
                              <span>Servicios</span></a></li>
                      <li><a href="#pricing" class="nav-link scrollto"><i class="bi-briefcase"></i>
                              <span>Planes</span></a></li>        
                      <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i>
                              <span>Resumen</span></a></li>
                      <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i>
                              <span>Contacto</span></a></li>
                  </ul>
              </nav><!-- .nav-menu -->
          </div>
      </header><!-- End Header -->
      
        <script>
            const showHideSidebar = (action) => {
                const header = document.getElementById('header');
                const footer = document.getElementById('footer');
                const main   = document.getElementById('main');
                const toggleIconBody = document.getElementById('toggleIconBody');
            
                if (action == 'hide') {
                    header.classList.add('header-hidden');
                    footer.classList.add('footer-hidden');
                    main.style.marginLeft = '0px';
                    toggleIconBody.classList.add('d-xl-flex');
                } else {
                    header.classList.remove('header-hidden');
                    footer.classList.remove('footer-hidden');
                    main.style.marginLeft = '300px';
                    toggleIconBody.classList.remove('d-xl-flex');
                }
            }
        </script>
