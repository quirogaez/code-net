addEventListener("DOMContentLoaded", async (e) => {
    const imgProfileMobile = document.querySelector(".profile-photos").childNodes[1];
    const imgProfile = document.querySelector(".profile-photos").childNodes[1];
    const response = await fetch(window.location.search + "/codenet/profile/img", {
        method: 'GET'
    })
   const responseData = await response.json();
   console.log("Response imagen: ", responseData )
   console.log(imgProfileMobile);
   imgProfileMobile.src = "";
   imgProfile.src = "";
   imgProfileMobile.src = responseData.imgUrl;
   imgProfile.src = responseData.imgUrl;
})


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
