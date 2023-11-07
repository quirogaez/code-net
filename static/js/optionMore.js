let masOpcionesVisibles = false;

function showPlusOptions() {
    if (masOpcionesVisibles === false) {
        document.querySelector(".showPlus").style.display = "block";
        masOpcionesVisibles = true;

        document.addEventListener('click', closeIfClickedOutsideShowPlus);
    } else {
        document.querySelector(".showPlus").style.display = "none";
        masOpcionesVisibles = false;

        document.removeEventListener('click', closeIfClickedOutsideShowPlus);
    }
}

function closeIfClickedOutsideShowPlus(event) {
    const showPlusSection = document.querySelector(".showPlus");
    const plusButton = document.querySelector(".menu-item3");

    if (event.target !== showPlusSection && event.target !== plusButton) {
        showPlusSection.style.display = 'none';
        masOpcionesVisibles = false;

        document.removeEventListener('click', closeIfClickedOutsideShowPlus);
    }
}

const logout = document.querySelector(".logout");
logout.addEventListener("click", async (e)=> {
    e.preventDefault();
    await fetch(window.location.search + "/codenet/logout", {
        method: 'GET',
    }).then(response => {
        if (response.redirected) {
            // Si la respuesta es una redirección, navega a la nueva URL
            window.location.href = response.url;
        } else {
            return null;
        }
    })
})
