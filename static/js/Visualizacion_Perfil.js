document.addEventListener("DOMContentLoaded", function () {
    // Obtener los datos del Local Storage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
        const userData = JSON.parse(storedData);
        document.getElementById("nombre").textContent = userData.nombre;
        document.getElementById("roles").textContent = userData.roles;
        document.getElementById("tecnologia").textContent = userData.tecnologia;
        document.getElementById("date").textContent = userData.date;
        document.getElementById("gender").textContent = userData.gender;
        document.getElementById("address").textContent = userData.address;
        document.getElementById("correo").textContent = userData.correo;
        document.getElementById("phone").textContent = userData.phone;

        // Mostrar la imagen de perfil si está presente
        if (userData.profileImage) {
            const profileImage = document.getElementById("profileImage");
            profileImage.src = userData.profileImage;
        }
    }
});

const editarPerfilButton = document.getElementById("editarPerfilButton");

editarPerfilButton.addEventListener("click", function() {
    // Redirige a la página HTML deseada
    window.location.href = "../templates/Setting_Perfil.html";
});

const editPortadaButton = document.getElementById("edit-portada-button");
const portadaImage = document.getElementById("portada-image");
const fileInput = document.getElementById("file-input");

editPortadaButton.addEventListener("click", function() {
    fileInput.click(); // Al hacer clic en el ícono, se activa el input de archivo oculto
});

fileInput.addEventListener("change", function() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        portadaImage.src = objectURL; // Muestra la imagen seleccionada por el usuario
    }
});

function modalVerificated(){
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
        customClass:{
            confirmButton: "custom-error-button"
        },
        confirmButtonClass: "custom-background-color",
    }).then(function(result) {
        if (result.value) {
            /* window.location.href = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
          */
           window.location.href="https://www.mercadopago.com.co/checkout/v1/payment/redirect/30acec69-5db4-4d45-908e-3185c4832731/payment-option-form/?preference-id=221553980-bcf16673-f94c-4e0b-bcc6-9274cc1b66ce&source=button&router-request-id=732b06d3-b335-4b01-b1e5-3d5e20cf348b&p=aa0bb6c47f9d8108c84945bd9914f2cf#/";
        } else if (result.dismiss === "cancel") {
          
        }
    });  
}