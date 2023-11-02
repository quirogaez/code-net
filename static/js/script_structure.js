/*---------------------------------inicio carousel story----------------------------- */
document.addEventListener("DOMContentLoaded",  function() {
    
  
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
  
  document.addEventListener("DOMContentLoaded", async function () {
    /* Twitch params */
   // Realiza una solicitud Fetch POST al servidor para subir las imágenes
  let streams; // Variable para almacenar la información de los streams
  let userInfo; // Variable para almacenar la información de los usuarios
  let profileImg = []; // Un array para almacenar las URL de imágenes de perfil
  let users = []; // Un array para almacenar los IDs de usuarios de Twitch

  // Realiza una solicitud GET para obtener información de streams desde el servidor local
  let responseStreams = await fetch(window.location.search + '/codenet/streamsTwitch', {
    method: 'GET'
  })
    .then(async response => {
      if (response.ok) {
        // Si la respuesta es exitosa, almacena la información de streams en la variable 'streams'
        streams = await response.json();
        console.log(response);
      } else {
        console.error('Error al recuperar streams');
      }
    })
    .catch(error => {
      console.error('Error al recuperar streams', error);
    });

  console.log(streams); // Muestra la información de streams en la consola
  console.log(streams.data.data[0]); // Muestra el primer elemento de la información de streams

  const profileCarousel = document.querySelector(".carousel_profile_life");

  // Comprueba si se obtuvo información de streams
  if (streams.data.data) {
    for (let stream of streams.data.data) {
      console.log(stream.thumbnail_url);
      console.log(stream.user_id);
      users.push(stream.user_id); // Agrega los IDs de usuarios al array 'users'
      profileImg.push(stream.thumbnail_url.replace("{width}x{height}", "296x335")); // Agrega las URLs de imágenes de perfil al array 'profileImg'
    }

    // Realiza una solicitud POST para obtener información de usuarios desde el servidor local
    let responseUsers = await fetch(window.location.search + "/codenet/usersTwitch", {
      method: 'POST',
      body: JSON.stringify({ users: users }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(async response => {
        if (response.ok) {
          // Si la respuesta es exitosa, almacena la información de usuarios en la variable 'userInfo'
          userInfo = await response.json();
          console.log(userInfo.data);
        } else {
          console.error('Error al recuperar informacion de usuarios');
        }
      })
      .catch(error => {
        console.error('Error al recuperar informacion de usuarios', error);
      });
  } else {
    // Si no se obtuvo información de streams, se establecen imágenes de perfil predeterminadas
    profileImg = [
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_strager-500x500.jpg",
      "../img/foto2.png",
      "../img/foto3.png",
      "../img/foto4.png",
      "../img/foto5.png",
      "../img/foto6.png"
    ];
  }

    const numProfile = profileImg.length -1 ;
    const profilePerPage = 4;
    let currentProfile = 0;
    let imgDataCount = 0;
    function showProfile(profileIndex) {
      
      const startIndex = profileIndex;
      const endIndex = startIndex + profilePerPage;
      profileCarousel.innerHTML = "";
  
      for (let i = startIndex; i < endIndex; i++) {
        let index = i % numProfile;
        const divImag = document.createElement("div");
        const anchorImag = document.createElement("a");
        anchorImag.href = `https://www.twitch.tv/${streams.data.data[index].user_name}`;
        anchorImag.target = "_blank";
        divImag.className = "profile_life";
        const image = document.createElement("img");
        image.src = profileImg[index];
        anchorImag.append(image)
        divImag.append(anchorImag);
        profileCarousel.append(divImag);
        imgDataCount++;
        imgDataCount = imgDataCount === profileImg.length
                    ? 0
                    : imgDataCount;
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
    if(masOpcionesVisibles === false) {

      document.querySelector(".showPlus").style.display = "block";
      masOpcionesVisibles = true;
     
    } else {
      document.querySelector(".showPlus").style.display = "none";
      masOpcionesVisibles=false;
      
    }
    /*-----------------------------------------------inicio boton de cerrar seccion-------------------------------------------------------------------------- */
    function signOff() {
      
    }
}
/*-----------------------------------------------fin boton de mas-------------------------------------------------------------------------- */
