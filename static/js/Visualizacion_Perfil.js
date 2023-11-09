document.addEventListener("DOMContentLoaded", async function () {
    // Obtener los datos del Local Storage
    const response = await fetch(window.location.search + "/codenet/profile/data", {
        method: 'GET'
    })
    const responseData = await response.json()
    document.getElementById("nombre").textContent = responseData.data.name + " ";
    document.getElementById("nombre").textContent += responseData.data.lastname;
    document.getElementById("roles").textContent = responseData.data.linkFotoPerfil[1].rol;
    document.getElementById("date").textContent = new Date(responseData.data.dateBirth).toISOString().split('T')[0];
    document.getElementById("gender").textContent = responseData.data.genero;
    document.getElementById("address").textContent = responseData.data.address;
    document.getElementById("correo").textContent = responseData.data.email;
    document.getElementById("phone").textContent = responseData.data.phoneNumber;
    document.getElementById("profileImage").src = responseData.data.linkFotoPerfil[0].fotoperfil;
    const dataTechnologies = JSON.parse(responseData.data.linkFotoPerfil[2].tecnologias);

    const technologiesContainer = document.querySelector(".tecnologies-mostrar");
    if (dataTechnologies.technologiesProfile) {
        for (let tech of dataTechnologies.technologiesProfile) {
            technologiesContainer.innerHTML += `
            <img class="technology" id="tecnologia" src="${Object.values(tech)[0]}">
            `;
            console.log(Object.values(tech)[0])
            console.log(tech)
        }
    }

});

const editarPerfilButton = document.getElementById("editarPerfilButton");
let listFriends = false;
editarPerfilButton.addEventListener("click", function () {
    // Redirige a la página HTML deseada
    window.location.href = "../templates/Setting_Perfil.html";
});

const editPortadaButton = document.getElementById("edit-portada-button");
const portadaImage = document.getElementById("portada-image");
const fileInput = document.getElementById("file-input");

editPortadaButton.addEventListener("click", function () {
    fileInput.click(); // Al hacer clic en el ícono, se activa el input de archivo oculto
});

fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        portadaImage.src = objectURL; // Muestra la imagen seleccionada por el usuario
    }
});

async function showFriends() {
    const friendsContainer = document.querySelector(".friendList")
    var friendsModal = document.querySelector('.friends');
    friendsModal.classList.add('showFriends');
    if(!listFriends) {
        const responseFriends = await fetch(window.location.search + "/codenet/profile/myfriends", {
            method: 'GET'
        })
        const responseFriendsData =  await responseFriends.json();
        const friendsData = responseFriendsData.data;
        console.log(responseFriendsData);
        for (let friend of friendsData) {
            friendsContainer.innerHTML += 
            `
            <div class="userFriend">
                <img class="" src="${friend.profilePicture}">
                <p class="nameContain">${friend.nombre}</p>
            </div>
            `;
        }
    }
    listFriends = true

    // Agregar evento para cerrar la ventana modal haciendo clic en el botón 'x'
    var closeButton = friendsModal.querySelector('.close__friends button');
    closeButton.addEventListener('click', function() {
        friendsModal.classList.remove('showFriends');
    });
}

function modalVerificated() {
    Swal.fire({
        title: "¡Quiero ser Premium!",
        text: "$ 25.00 USD",
        imageUrl: "../img/modal/verificatedazul.png",
        imageWidth: 130,
        imageHeight: 130,
        showCancelButton: true,
        confirmButtonText: "Pagar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
        customClass: {
            confirmButton: "custom-error-button"
        },
        confirmButtonClass: "custom-background-color",
    }).then(function (result) {
        if (result.value) {
            /* window.location.href = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
          */
            window.location.href = "https://www.mercadopago.com.co/checkout/v1/payment/redirect/30acec69-5db4-4d45-908e-3185c4832731/payment-option-form/?preference-id=221553980-bcf16673-f94c-4e0b-bcc6-9274cc1b66ce&source=button&router-request-id=732b06d3-b335-4b01-b1e5-3d5e20cf348b&p=aa0bb6c47f9d8108c84945bd9914f2cf#/";
        } else if (result.dismiss === "cancel") {

        }
    });
    
    /* Datos para subir en el body y actualizar */
const formData = new FormData();
if (projectMediaFiles) {
    console.log("APPENDFILE")
    formData.append('imageFile', projectMediaFiles);
}
Swal.fire({
    title: "¿Está seguro que quiere actualizar?",
    icon: "warning",
    iconColor: "#801bea",
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#801bea",
}).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        const response = await fetch(window.location.search + "/codenet/profile/edit", {
            method: 'POST',
            body: formData,
        })
        const responseData = response;
        console.log("nueva data", responseData)
    }
});



}