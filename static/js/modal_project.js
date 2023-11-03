const openModal = document.querySelector ('.button_post');
const sure = document.querySelector('.sure')
const closeSure = document.querySelector('.close__modalSure')
openSure.addEventListener ('click', (e)=> {
    e.preventDefault();
    sure.classList.add('sure--show')
});
closeSure.addEventListener('click', (e)=> {
    e.preventDefault();
    sure.classList.remove('sure--show')
})



/* const openModal = document.querySelector ('.button_post');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close__modalProject')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});
closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
}); */