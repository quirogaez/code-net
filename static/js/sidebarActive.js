document.addEventListener("DOMContentLoaded", function() {
    var currentPageURL = window.location.href;
    var enlaces = document.querySelectorAll('.menu-item');
  
    console.log(currentPageURL)
    enlaces.forEach(function(enlace) {

      if (enlace.href === currentPageURL) {
        enlace.classList.add('active'); 
      }
    });
  });
  