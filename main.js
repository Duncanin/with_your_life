import "./assets/scss/all.scss";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.js";


document.addEventListener('click', function(e) {
  if (e.target.closest('.icon-btn[aria-label="加入收藏"]')) {
    const icon = e.target.closest('button').querySelector('i');
    icon.classList.toggle('bi-heart');
    icon.classList.toggle('bi-heart-fill');
    icon.classList.toggle('text-danger');
  }
});