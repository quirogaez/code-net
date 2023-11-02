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