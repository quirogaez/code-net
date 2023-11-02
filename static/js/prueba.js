document.addEventListener('DOMContentLoaded', function () {
    const selectTecnologias = document.querySelector('select[name="tecnologias"]');
    const tecnologiaImages = document.querySelectorAll('.img__tecnology');
    const openModal = document.querySelector ('.button_post');
    const selectedImages = new Set(); 

    tecnologiaImages.forEach((img) => {
        img.style.display = 'none';
    });

    selectTecnologias.addEventListener('change', (event) => {
        const selectedOption = selectTecnologias.value;
        const selectedImage = document.getElementById(selectedOption);

        if (selectedImage) {
            selectedImage.style.display = 'block';
            selectedImages.add(selectedImage);
        }
    });

    tecnologiaImages.forEach((img) => {
        const closeButtonDiv = document.createElement('div');
        closeButtonDiv.className = 'close-button-container';

        const closeButtonSpan = document.createElement('span');
        closeButtonSpan.textContent = 'X';
        closeButtonSpan.className = 'close-button'; 

        closeButtonDiv.appendChild(closeButtonSpan);
        img.appendChild(closeButtonDiv);

        closeButtonSpan.addEventListener('click', () => {
            img.style.display = 'none';
            selectedImages.delete(img);
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const urlProjectValue = document.querySelector('.url__project').value.trim();
        const urlGithubValue = document.querySelector('[name="url__github"]').value.trim();

        if (selectedImages.size === 0 || selectTecnologias.value === 'vacio' || urlProjectValue === '' || urlGithubValue === '') {
            alert('Por favor, complete todos los campos del formulario.');
        } else {
            const sure = document.querySelector('.sure');
            const closeSure = document.querySelector('.close__modalSure');
            const discardPublication = document.querySelector('.discard');
            
            openModal.addEventListener('click', (e)=>{
                e.preventDefault();
                sure.classList.add('sure--show');
            });
            closeSure.addEventListener('click', (e)=>{
                e.preventDefault();
                sure.classList.remove('sure--show');
            });
            discardPublication.addEventListener('click', (e) => {
                e.preventDefault();
                location.href = window.location.search + "/codenet/project"
            })
        }
    });
});