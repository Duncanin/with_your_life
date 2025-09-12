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
  console.log("Navbar script loaded");

  const dropdownItems = document.querySelectorAll(".nav-user .dropdown-item");
  console.log("Found dropdown items:", dropdownItems.length);

  dropdownItems.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      console.log(`Clicked item ${index}:`, this.getAttribute("href"));

      const href = this.getAttribute("href");

      // 跳過沒有 href、href 為 # 或沒有 hash 的項目
      if (!href || href === "#" || !href.includes("#")) {
        console.log("Skipping item without valid hash");
        return;
      }

      const targetId = href.split("#")[1];
      console.log("Extracted targetId:", targetId);

      if (targetId) {
        localStorage.setItem("activeTabId", targetId);
        console.log("Saved to localStorage:", targetId);
      }
    });
  });
});
