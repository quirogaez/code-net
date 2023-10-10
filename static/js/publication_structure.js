const images = [
    {
      imgSrc: "../img/publicacionn.png",
      perfilImgSrc: "../img/cesa.png",
      name: "CESA",
      description: "Lorem ipsum dolor sit amet...",
      tecnology1: "../img/tecnologias/10.png.svg",
      tecnology2: "../img/tecnologias/9.png.svg",
      tecnology3: "../img/tecnologias/8.png.svg",
      tecnology4: "../img/tecnologias/7.png.svg",
      tecnology5: "../img/tecnologias/6.png.svg",

    },


    {
    imgSrc: "../img/publicacion2.jpg",
    perfilImgSrc: "../img/perfilGeneration.jpeg",
    name: "Generation Colombia",
    description: "Lorem ipsum dolor sit amet...",
    tecnology1: "../img/tecnologias/1.svg",
    tecnology2: "../img/tecnologias/2.svg",
    tecnology3: "../img/tecnologias/3.png.svg",
    tecnology4: "../img/tecnologias/4.png.svg",
    tecnology5: "../img/tecnologias/5.png.svg",
    },
    {
        imgSrc: "../img/publiAWS.jpg",
        perfilImgSrc: "../img/perfilAWS.png",
        name: "Amazon Web Service",
        description: "Lorem ipsum dolor sit amet...",
        tecnology1: "../img/tecnologias/1.svg",
        tecnology2: "../img/tecnologias/2.svg",
        tecnology3: "../img/tecnologias/3.png.svg",
        tecnology4: "../img/tecnologias/4.png.svg",
        tecnology5: "../img/tecnologias/5.png.svg",
    },

    {
        imgSrc: "../img/publiNequi.jpg",
        perfilImgSrc: "../img/perfilNequi.jpeg",
        name: "Nequi",
        description: "Lorem ipsum dolor sit amet...",
        tecnology1: "../img/tecnologias/1.svg",
        tecnology2: "../img/tecnologias/2.svg",
        tecnology3: "../img/tecnologias/3.png.svg",
        tecnology4: "../img/tecnologias/4.png.svg",
        tecnology5: "../img/tecnologias/5.png.svg",
    },

    {
        imgSrc: "../img/publiGenerationperfil.jpg",
        perfilImgSrc: "../img/perfilGeneration.jpeg",
        name: "Generation Colombia",
        description: "Lorem ipsum dolor sit amet...",
        tecnology1: "../img/tecnologias/1.svg",
        tecnology2: "../img/tecnologias/2.svg",
        tecnology3: "../img/tecnologias/3.png.svg",
        tecnology4: "../img/tecnologias/4.png.svg",
        tecnology5: "../img/tecnologias/5.png.svg",
    },

    {
        imgSrc: "../img/publiHimalaya.jpg",
        perfilImgSrc: "../img/perfilHimalaya.png",
        name: "Himalaya Tecnologia",
        description: "Lorem ipsum dolor sit amet...",
        tecnology1: "../img/tecnologias/1.svg",
        tecnology2: "../img/tecnologias/2.svg",
        tecnology3: "../img/tecnologias/3.png.svg",
        tecnology4: "../img/tecnologias/4.png.svg",
        tecnology5: "../img/tecnologias/5.png.svg",
    },
       
        
        




    // Agrega más objetos para cada imagen que desees mostrar
  ];

  const mainContainer = document.querySelector('.main-center');
  for (const image of images) {
    const imageHtml = `
      <div class="img-center-container">
          <div class="img-center">
              <img class="img-center-publication" src="${image.imgSrc}" />
              <div class="img-technology-prin">
                    <img class="img-technology" src="${image.tecnology1}" />
                    <img class="img-technology" src="${image.tecnology2}" />
                    <img class="img-technology" src="${image.tecnology3}" />
                    <img class="img-technology" src="${image.tecnology4}" />
                    <img class="img-technology" src="${image.tecnology5}" />
                </div>

              <!-- Resto de tus elementos de imagen y tecnología aquí -->
          </div>
          <div class="img-description">
              <div class="img-perfil-img">
                  <div class="img-perfil"><img src="${image.perfilImgSrc}" alt=""></div>
                  <div class="img-verified"></div>
              </div>
              <div class="img-description-top">
                  <h3 class="img-name">${image.name}</h3>
                  <div><i class="fa-regular fa-heart icon-love"></i></div>
                  <div><i class="fa-regular fa-message icon-comment"></i></div>
                  <p class="img-rol">${image.description}</p>
              </div>
          </div>
      </div>
    `;
  
    mainContainer.innerHTML += imageHtml;
  }
  