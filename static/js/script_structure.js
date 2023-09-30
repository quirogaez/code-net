/*---------------------------------inicio carousel story----------------------------- */
document.addEventListener("DOMContentLoaded", function () {
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
    const profilePerPage = 5;
    let currentProfile = 0;
  
    function showProfile(profileIndex) {
      //const startIndex = slideIndex * testimonialsPerPage;
      const startIndex = profileIndex;
      const endIndex = startIndex + profilePerPage;
  
      profileCarousel.innerHTML = "";
  
      for (let i = startIndex; i < endIndex; i++) {
        let index = i % numProfile;
  
        const divImag = document.createElement("div");
        divImag.className = "profile";
        const image = document.createElement("img");
        image.src = profileImg[index];
        divImag.append(image);
        profileCarousel.append(divImag);
      }
    }
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
  
  
  /*-------------------------------inicio carousel life-------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    const profileCarousel = document.querySelector(".carousel_profile_life");
    
    let profileImg = [
      "fotos/foto1.jpg",
      "fotos/foto2.jpg",
      "fotos/foto3.jpg",
      "fotos/foto4.jpg",
      "fotos/foto5.jpg",
      "fotos/foto6.jpg",
    ];
    const numProfile = profileImg.length;
    const profilePerPage = 4;
    let currentProfile = 0;
  
    function showProfile(profileIndex) {
      //const startIndex = slideIndex * testimonialsPerPage;
      const startIndex = profileIndex;
      const endIndex = startIndex + profilePerPage;
  
      profileCarousel.innerHTML = "";
  
      for (let i = startIndex; i < endIndex; i++) {
        let index = i % numProfile;
  
        const divImag = document.createElement("div");
        divImag.className = "profile";
        const image = document.createElement("img");
        image.src = profileImg[index];
        divImag.append(image);
        profileCarousel.append(divImag);
      }
    }
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
  /*-------------------------------final carousel life---------------------------- */
