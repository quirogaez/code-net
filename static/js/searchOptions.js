let myFetch = [];

async function mostrarContenido(contenido, elemento) {
    const elementos = document.querySelectorAll('.container__options > a');

    elementos.forEach(el => {
        el.classList.remove('selected');
    });

    const contenidoAMostrar = document.getElementById(contenido);
    if (contenidoAMostrar) {
        // Ocultar todos los elementos
        const todosLosElementos = document.querySelectorAll('.containerSearch > div');
        todosLosElementos.forEach(el => {
            el.style.display = 'none';
        });

        // Mostrar el contenido correspondiente
        contenidoAMostrar.style.display = 'flex';

        // Agregar la clase 'selected' al elemento clicado
        elemento.classList.add('selected');
    }
    
    if (contenido === "people" && !myFetch.includes("people")) {
        const portadaDefault = "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/images%2F0191eb0a-5949-434f-867a-52b0ef2d2910?alt=media&token=60bae283-fa6d-4a26-8d8c-c2fe6b377a0c&_gl=1*1v31yz0*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTUyNDcwOS4zOS4xLjE2OTk1MjQ3MTUuNTQuMC4w";


        const response = await fetch(window.location.search + "/codenet/friends/users", {
            method: 'GET'
        });
        const responseData = await response.json();
        const peopleContainer = document.querySelector("#people");
        for (let user of responseData.data) {
            if (user.email !== responseData.user) {
                peopleContainer.innerHTML += 
                `
                <div class="container__objects">
                    <div class="coverProfile">
                        <img class="portada" src="${user.linkPortada ?? portadaDefault}"
                    </div>
                    <div class="infoProfile">
                        <div class="containerPhoto__profile">
                            <img src="${user.linkFotoPerfil[0].fotoperfil}"
                                id="profilePhoto">
                        </div>
                        <div class="containerText">
                            <p class="nameProfile"><span id="nombre">${user.name + " " + user.lastname}</span></p>
                            <p class="rol" id="roles">frontend</p>
                        </div>
                        <div class="addFriend">
                            <a href="" id="editarPerfilButton"><i class="fa-solid fa-user-plus"></i></a>
                        </div>
                    </div>
                </div>
                `;
                
            }
        }
        myFetch.push("people");

    }



}

document.addEventListener('DOMContentLoaded', function() {
    const btnCategorias = document.getElementById('btnCategorias');
    if (btnCategorias) {
        btnCategorias.click();
    }
});
