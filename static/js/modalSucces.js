const openModal = document.querySelector ('.acceptButton');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});