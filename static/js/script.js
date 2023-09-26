document.addEventListener("DOMContentLoaded", function () {
    const profileCarousel = document.querySelector(".carousel_profile");
    let profileImg = [
      "./static/img/foto1.png",
      "./static/img/foto2.png",
      "./static/img/foto3.png",
      "./static/img/foto4.png",
      "./static/img/foto5.png",
      "./static/img/foto6.png",
    ];
    const numProfile = profileImg.length;
    const profilePerPage = 3;
    let currentProfile = 0;
  
    function showProfile(profileIndex) {
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
    //setInterval(autoChangeProfile, 5000);
  });