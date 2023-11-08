const images = [
  {
    imgSrc: "img/publicacionn.png",
    perfilImgSrc: "img/cesa.png",
    name: "CESA",
    description: "Lorem ipsum dolor sit amet...",
    tecnology1: "img/tecnologias/10.svg",
    tecnology2: "img/tecnologias/9.svg",
    tecnology3: "img/tecnologias/8.svg",
    tecnology4: "img/tecnologias/7.svg",
    tecnology5: "img/tecnologias/6.svg",
    like: 0,
    comment: 1,
  },
  {
    imgSrc: "img/publicacion2.jpg",
    perfilImgSrc: "img/perfilGeneration.jpeg",
    name: "Generation Colombia",
    description: "Lorem ipsum dolor sit amet...",
    tecnology1: "img/tecnologias/1.svg",
    tecnology2: "img/tecnologias/2.svg",
    tecnology3: "img/tecnologias/3.svg",
    tecnology4: "img/tecnologias/4.svg",
    tecnology5: "img/tecnologias/5.svg",
    like: 0,
    comment: 1,
  },
];
const mainContainer = document.getElementById('imageContainer');
const modalsContainer = document.getElementById('modals-container');
let currentIndex = -1;
function createModal(index) {
  const modalHtml = `
    <div id="modal-${index}" class="modal">
        <div class="modal-content">
            <div class="modal-top">
                <span class="close" onclick="closeModal(${index})">&times;</span>
                <span id="messageAuthor-${index}"></span>
            </div>
            <div class="modal-center">
                <input class="messageIn" type="text" id="messageInput-${index}" placeholder="Escribe un comentario...">
                <button id="publishButton" onclick="publishMessage(${index})">Publicar</button>
            </div>
            <div class="message-cont" id="messageContainer-${index}"></div>
        </div>
    </div>
  `;
  modalsContainer.innerHTML += modalHtml;
}
function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById(`modal-${index}`);
  modal.style.display = 'block';
  document.getElementById(`messageAuthor-${index}`).textContent = images[index].name;
}

function closeModal(index) {
  currentIndex = -1;
  const modal = document.getElementById(`modal-${index}`);
  modal.style.display = 'none';
  document.getElementById(`messageAuthor-${index}`).textContent = '';
  document.getElementById(`messageInput-${index}`).value = '';
}

function publishMessage(index) {
  const author = images[index].name;
  const messageInput = document.getElementById(`messageInput-${index}`);
  const messageContainer = document.getElementById(`messageContainer-${index}`);

  if (author && messageInput.value) {
    const messageHtml = `<p><strong>${author}:</strong> ${messageInput.value}</p>`;
    messageContainer.innerHTML += messageHtml;
    messageInput.value = '';
  }
}

function loadImages() {
  for (let i = 0; i < images.length; i++) {
    createModal(i);
    const imageHtml = `
    <div class="img-center-container">
        <div class="img-center">
            <img class="img-center-publication" src="${images[i].imgSrc}" />
            <div class="img-technology-prin">
                <img class="img-technology" src="${images[i].tecnology1}" />
                <img class="img-technology" src="${images[i].tecnology2}" />
                <img class "img-technology" src="${images[i].tecnology3}" />
                <img class="img-technology" src="${images[i].tecnology4}" />
                <img class="img-technology" src="${images[i].tecnology5}" />
            </div>
        </div>
        <div class="img-description">
            <div class="img-perfil-img">
                <div class="img-perfil"><img src="${images[i].perfilImgSrc}" alt=""></div>
                <div class="img-verified"></div>
            </div>
            <div class="img-description-top">
                <h3 class="img-name">${images[i].name}</h3>
                <div class="img-like" id="like-${images[i].name}">
                    <i class="fa-regular fa-heart icon-love" onclick="toggleLike('${images[i].name}')"></i>${images[i].like}
                </div>
                <div class="img-coment">
                    <i class="fa-regular fa-message icon-comment" onclick="openModal(${i})"></i>${images[i].comment}
                </div>
                <p class="img-rol">${images[i].description}</p>
            </div>
        </div>
    </div>
  `;
    mainContainer.innerHTML += imageHtml;
  }
}

loadImages();
function toggleLike(name) {
  const likeElement = document.getElementById(`like-${name}`);
  for (const image of images) {
    if (image.name === name) {
      image.like = image.like === 0 ? 1 : 0;
      likeElement.innerHTML = `<i class="fa-regular fa-heart icon-love" onclick="toggleLike('${image.name}')"></i>${image.like}`;
      break;
    }
  }
  storeImagesInLocalStorage(images);
}
function storeImagesInLocalStorage(images) {
  // Convierte el arreglo de imágenes a una cadena JSON
  const imagesJSON = JSON.stringify(images);
  // Almacena los datos en el Local Storage
  localStorage.setItem('imagesData', imagesJSON);
}

// Llama a la función para almacenar los datos en el Local Storage
storeImagesInLocalStorage(images);