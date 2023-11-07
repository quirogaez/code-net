let optionAdd = false;

function showAddOption() {
    if (optionAdd === false) {
        document.querySelector(".showPublication").style.display = "block";
        optionAdd = true;

        document.addEventListener('click', closeIfClickedOutside);
    } else {
        document.querySelector(".showPublication").style.display = "none";
        optionAdd = false;

        document.removeEventListener('click', closeIfClickedOutside);
    }
}

function closeIfClickedOutside(event) {
    const publication = document.querySelector(".showPublication");
    const buttonPlus = document.querySelector(".buttonPlus");

    if (event.target !== publication && event.target !== buttonPlus) {
        publication.style.display = 'none';
        optionAdd = false;

        document.removeEventListener('click', closeIfClickedOutside);
    }
}
