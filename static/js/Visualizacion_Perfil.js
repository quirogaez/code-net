document.addEventListener('DOMContentLoaded', function () {
    // Obtener datos del almacenamiento local (puedes cambiar esto según tu implementación)
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Rellenar los campos en la página de visualización
    if (userData) {
        document.getElementById('profileName').textContent = userData.name;
        document.getElementById('profileRole').textContent = userData.role;
        document.getElementById('profileDate').textContent = userData.date;
        document.getElementById('profileGender').textContent = userData.gender;
        document.getElementById('profileAddress').textContent = userData.address;
        document.getElementById('profileEmail').textContent = userData.email;
        document.getElementById('profilePhone').textContent = userData.phone;

        // Rellenar habilidades
        const skillsList = document.getElementById('profileSkills');
        userData.skills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });
    }
});
