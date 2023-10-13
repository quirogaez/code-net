/*---------------------------------inicio carousel story----------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    
  
    window.addEventListener("resize", ajustarProfilePerPage);

    const profileCarousel = document.querySelector(".carousel_profile_story");
   
    let profileImg = [
        "../img/foto1.png",
        "../img/foto2.png",
        "../img/foto3.png",
        "../img/foto4.png",
        "../img/foto5.png",
        "../img/foto6.png",
    ];
    const numProfile = profileImg.length;
    let lastWindowWidth = window.innerWidth;
    let profilePerPage = 6;
    let currentProfile = 0;
  
    function showProfile(profileIndex) {
      
      const startIndex = profileIndex;
      const endIndex = startIndex + profilePerPage;
  
      profileCarousel.innerHTML = "";
  
      for (let i = startIndex; i < endIndex; i++) {
        let index = i % numProfile;
  
        const divImag = document.createElement("div");
        divImag.className = "profile_story";
        const image = document.createElement("img");
        image.src = profileImg[index];
        divImag.append(image);
        profileCarousel.append(divImag);
      }
    }

    function ajustarProfilePerPage() {
      console.log("ajustarProfilePerPage")
      const width = window.innerWidth;
      if(width <= 480) {
        profilePerPage = 4;
        if(lastWindowWidth > 480) {
          showProfile(currentProfile);
          console.log("Actualizando carrusel 480 - lastWindowWidth: " + lastWindowWidth );
        }
      } else {
        profilePerPage = 6;
        if(lastWindowWidth <= 480) {
          showProfile(currentProfile);
          console.log("Actualizando carrusel 1280 - lastWindowWidth: " + lastWindowWidth );
        }
      }   

      lastWindowWidth = width;
    }

    ajustarProfilePerPage();
    showProfile(currentProfile);
  
    // Agregar eventos para navegar por el carrusel
    document.querySelector(".prev-btn").addEventListener("click", function () {
      currentProfile--;
      if (currentProfile < 0) {
        currentProfile = numProfile - 1;
      }
  
      showProfile(currentProfile);
    });
  
    document.querySelector(".next-btn").addEventListener("click", function () {
      currentProfile++;
      showProfile(currentProfile);
    });
  });
  /*-------------------------------final carousel story---------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    const profileCarousel = document.querySelector(".carousel_profile_life");
    
    let profileImg = [
        "../img/foto1.png",
        "../img/foto2.png",
        "../img/foto3.png",
        "../img/foto4.png",
        "../img/foto5.png",
        "../img/foto6.png",
    ];
    const numProfile = profileImg.length;
    const profilePerPage = 4;
    let currentProfile = 0;
  
    function showProfile(profileIndex) {
      
      const startIndex = profileIndex;
      const endIndex = startIndex + profilePerPage;
  
      profileCarousel.innerHTML = "";
  
      for (let i = startIndex; i < endIndex; i++) {
        let index = i % numProfile;
  
        const divImag = document.createElement("div");
        divImag.className = "profile_life";
        const image = document.createElement("img");
        image.src = profileImg[index];
        divImag.append(image);
        profileCarousel.append(divImag);
      }
    }
    showProfile(currentProfile);
  
     // Función para cambiar automáticamente las imágenes cada 25 segundos
  function autoChangeProfile() {
    currentProfile++;
    showProfile(currentProfile);
    if (currentProfile >= numProfile) {
      currentProfile = 0;
    }
  }


  showProfile(currentProfile);

  // Iniciar el cambio automático cada 25 segundos
  setInterval(autoChangeProfile, 5000);
  });
  /*-------------------------------final carousel life---------------------------- */

  /*-----------------------------------------------inicio boton de mas-------------------------------------------------------------------------- */

  let masOpcionesVisibles = false;
  function showPlusOptions() {
    if(masOpcionesVisibles = false) {

      document.querySelector("showPlus").style.display = "block";
      masOpcionesVisibles = true;
    } else {
      document.querySelector("showPlus").style.display = "none";
      masOpcionesVisibles=false;
    }
  
  


}