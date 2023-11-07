let settingOptionsShow = false;

function settingShow() {
    const showSettingSection = document.querySelector(".showSettings");
    const plusButton = document.querySelector('.optionCenter');
    const closeBtn = document.querySelector('.close__modalSure');

    if (!settingOptionsShow) {
        showSettingSection.style.display = "block";
        settingOptionsShow = true;

        document.addEventListener('click', closeIfClickedOutsideShowSettings);
    } else {
        showSettingSection.style.display = 'none';
        settingOptionsShow = false;

        document.removeEventListener('click', closeIfClickedOutsideShowSettings);
    }

    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic se propague y cierre la ventana modal
        showSettingSection.style.display = 'none';
        settingOptionsShow = false;

        document.removeEventListener('click', closeIfClickedOutsideShowSettings);
    });
}

function closeIfClickedOutsideShowSettings(event) {
    const showSettingSection = document.querySelector(".showSettings");
    const plusButton = document.querySelector('.optionCenter');

    if (!event.path.includes(showSettingSection) && event.target !== plusButton) {
        showSettingSection.style.display = 'none';
        settingOptionsShow = false;

        document.removeEventListener('click', closeIfClickedOutsideShowSettings);
    }
}

/* -------------- Dark Mode -------------------*/

const switchButton = document.getElementById('mySwitch');
const resultado = document.getElementById('resultado');

switchButton.addEventListener('change', function() {
  if (this.checked) {
    alert.innerHTML = 'dark mode desctavido';
  } else {
    alert.innerHTML = 'dark mode activo';
  }
});
