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
  // Agrega más objetos para cada imagen que desees mostrar
];

const mainContainer = document.querySelector('.main-center');
const modal = document.getElementById('modal');
const messageAuthor = document.getElementById('messageAuthor');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');
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
                <div class="img-like" id="like-${image.name}">
                    <i class="fa-regular fa-heart icon-love" onclick="toggleLike('${image.name}')"></i>${image.like}
                </div>
                <div class="img-coment"><i class="fa-regular fa-message icon-comment" onclick="openModal('${image.name}')"></i>${image.comment}</div>
                <p class="img-rol">${image.description}</p>
            </div>
        </div>
    </div>
  `;
  mainContainer.innerHTML += imageHtml;
}

function openModal(name) {
modal.style.display = 'block';
messageAuthor.textContent = name;
}

function closeModal() {
modal.style.display = 'none';
messageAuthor.textContent = '';
messageInput.value = '';
}

function publishMessage() {
const author = messageAuthor.textContent;
const message = messageInput.value;

if (author && message) {
  const messageHtml = `<p><strong>${author}:</strong> ${message}</p>`;
  messageContainer.innerHTML += messageHtml;

  // Limpiar el input de mensaje después de publicar el mensaje
  messageInput.value = '';
}
}

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