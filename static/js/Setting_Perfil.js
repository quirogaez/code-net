
const GOOGLE_MAPS_API_KEY = 'TU_API_KEY';

const defaultFile = '/static/img/perfilsinfoto.jpg';

const file = document.getElementById('profile-picture');
const img = document.getElementById ('profile-image');

file.addEventListener( 'change', e => {
    if ( e.target.files[0] ) {
        const reader = new FileReader ();
        reader.onload = function ( e ) {
            img.src = e.target.result;
        }
        reader.readAsDataURL (e.target.files[0])
    } else {
        img.src = defaultFile;
    }
});

const tecnologySelect = document.getElementById("tecnologys");
const tecnologyImage = document.getElementById("tecnology-image");


tecnologySelect.addEventListener("change", function () {
    const selectedTecnology = tecnologySelect.value;
    const imageSources = {
        figma: "/static/img/10.png",
        html: "/static/img/9.png",
        css: "/static/img/8.png"
        
    };

    if (imageSources[selectedTecnology]) {
        tecnologyImage.src = imageSources[selectedTecnology];
    } else {
        
        tecnologyImage.src = "/static/img/code.png";
    }
});


tecnologySelect.dispatchEvent(new Event("change"));

function loadMap() {
    const initialCoordinates = { lat: 0, lng: 0 }; 
    const mapOptions = {
        center: initialCoordinates,
        zoom: 2, 
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
document.addEventListener('DOMContentLoaded', function () {
    loadMap();
});



