const openModal = document.querySelector ('.button_post');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close__modalProject')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});
closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
