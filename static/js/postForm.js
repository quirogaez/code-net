const fileInput = document.getElementById('fileInput');
const filePreviewContainer = document.getElementById('filePreviewContainer');
const filePreview = document.getElementById('filePreview');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            filePreview.src = e.target.result;
            filePreviewContainer.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        filePreview.src = '#';
        filePreviewContainer.style.display = 'none';
    }
});