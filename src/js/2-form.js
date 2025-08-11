const textarea = document.getElementById('message');
  textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // сброс
    this.style.height = this.scrollHeight + 'px'; // новая высота по контенту
  });