addEventListener("DOMContentLoaded", async (e) => {
    const miJson = {genero: "project"}
    const response = await fetch(window.location.search + "/codenet/projects/type", {
        method: 'POST',
        body: JSON.stringify(miJson),
        headers: {
            'content-type': 'application/json'
        }
    })
    const responseData = await response.json();
    console.log("la data de carrousel", responseData.data)
    const carrouselData = responseData.data
    let i = 0;
    const imagesContaier = document.querySelector(".img-center-container");

   for (let project of carrouselData) {
    console.log(project)
        imagesContaier.innerHTML += `<div class= "img-center">
            <img class="img-center-publication" src="${project.linkPublication[0]}" />
            <div class="img-technology-prin">
                <img class="img-technology" src="${project.tecnologias[i]}" />
                <img class="img-technology" src="${project.tecnologias[i+1]??0}" />
                <img class "img-technology" src="${project.tecnologias[i+2]??0}" />
                <img class="img-technology" src="${project.tecnologias[i+3]??0}" />
                <img class="img-technology" src="${project.tecnologias[i+4]??0}" />
            </div>
        </div>
        <div class="img-description">
            <div class="img-description-top">
                <h3 class="img-name">${images[i].name}</h3>
                <div class="img-like" id="like-${images[i].name}">
                    <i class="fa-regular fa-heart icon-love" onclick="toggleLike('${images[i].name}')"></i>${images[i].like}
                </div>
                <div class="img-coment">
                    <i class="fa-regular fa-message icon-comment" onclick="openModal(${i})"></i>${images[i].comment}
                </div>
                <p class="img-rol">${images[i].description}</p>
            </div>
        </div>
        ` 
   }

    
})