/* Script encargado de adaptar las imagenes de los formularios de proeycto */



const buttonPost = document.querySelector(".button_post");

const imagesToPost = {};

const projectMedia = document.querySelectorAll('.input_img');
console.log(projectMedia)
projectMedia.forEach((image) => {
    image.addEventListener('change', function (e)  {
        console.log(e.target.files[0]);
        const fileContainer = e.target;
        const file = e.target.files[0];
        if (file) {
            // Obtiene una referencia al elemento que disparó el evento `change`
            const inputElement = e.target.id;
            
            // Verifica si ya hay una imagen asociada a ese elemento y elimínala
            if (imagesToPost[inputElement]) {
                delete imagesToPost[inputElement];
                /* console.log(`Imagen en ${inputElement} eliminada.`); */
            }
            
            // Asigna la nueva imagen al objeto imagesToPost con el contexto actual
            imagesToPost[inputElement] = file;
            /* console.log(`Imagen en ${inputElement} actualizada.`); */
        }
        imageCreate(file, fileContainer);
    });
});

buttonPost.addEventListener('click', e => {
    e.preventDefault();
    alert("Está seguro que quiere subir el proyecto con " +  Object.keys(imagesToPost).length + " imagenes")
    uploadImage(imagesToPost);
})


function imageCreate(imgData, fileContainer) {
    const imgText = fileContainer.nextElementSibling;
    console.log(imgText)
    const spanImage = document.createElement("span");
    imgText.textContent = " ";
    spanImage.className = "filedata";
    spanImage.style.display = 'block';
    spanImage.innerHTML = imgData.name;
    imgText.appendChild(spanImage)
}

