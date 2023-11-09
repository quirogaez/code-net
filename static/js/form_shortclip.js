// Función para abrir el modal
function openModal() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
}

// Función para validar y mostrar el modal
async function submitForm() {
    const description = document.getElementById("videoDescription").value.trim();
    const url = document.getElementById("videoURL").value.trim();
    const fileInput = document.getElementById("img_button");

    if (description && url && fileInput.files.length > 0) {
        openModal();
        // Crear un objeto JSON para los datos
        const videoData = {
            video: fileInput.files[0].name,
            url: url,
            descripcion: description
        };

        // Convertir el objeto JSON a una cadena JSON
        const videoDataJSON = JSON.stringify(videoData);

        // Guardar los datos en el Local Storage
        localStorage.setItem("video", videoDataJSON);

        const formData = new FormData();

        formData.append('imageFile', fileInput.files[0]);
        formData.append('linkPublication', url);
        formData.append('message', description);

        const response = await fetch((window.location.search + '/codenet/short'), {
            method: 'POST',
            body: formData
        })
        const responseData = await response.json();
        console.log(responseData)




    } else {
        // Mostrar una alerta si algún campo no está lleno
       /*  alert("Por favor, complete todos los campos."); */
        Swal.fire({    
            icon: "error",
            title: "¡Error!",
            text: "Por favor, complete todos los campos del formulario.",
            customClass:{
                confirmButton: "custom-error-button"
            },
            confirmButtonClass: "custom-background-color",
            iconColor: "#801bea"    
        });
    }
}

// Eventos para abrir y cerrar el modal
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("gotoHTML").addEventListener("click", function() {
    window.location.href = window.location.search + '/codenet/structure'; // Reemplaza "nombre_de_tu_pagina.html" con la ruta de tu página HTML
});

// Evento para validar y mostrar el modal al enviar el formulario
document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar la recarga de la página
    submitForm();
});


