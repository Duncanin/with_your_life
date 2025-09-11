import "./assets/scss/all.scss";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// 商品列表─收藏愛心按鈕切換
document.addEventListener("click", function (e) {
  if (e.target.closest('.icon-btn[aria-label="加入收藏"]')) {
    const icon = e.target.closest("button").querySelector("i");
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
    icon.classList.toggle("text-danger");
  }
});

//navbar 會員中心連接到各個tab的頁面
document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".nav-user .dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href").split("#")[1];
      if (targetId) {
        localStorage.setItem("activeTabId", targetId);
      }
    });
  });
});
