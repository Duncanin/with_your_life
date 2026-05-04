# With your life 伴你在日常

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

「With your life 伴你在日常」是一個切版專題專案，提供包含首頁、商品展示、購物車、會員中心等完整的前端頁面。專案採用 Vite 作為建置工具，結合 Bootstrap 5 進行響應式網頁設計，並使用 EJS 樣板引擎來管理共用的 HTML 結構（如 Header、Footer）。

## 🌐 線上預覽 (Live Demo)

👉 [點此瀏覽網站](https://Duncanin.github.io/with_your_life/)

## 📂 專案結構 (Project Structure)

```text
├── assets/         # 靜態資源 (圖片, SCSS 樣式檔等)
├── layout/         # EJS 共用樣板 (Header, Footer, 共用元件等)
├── page/           # 網頁主要視圖 (HTML 檔案)
│   ├── index.html   # 首頁
│   ├── about.html   # 關於我們
│   ├── product.html # 產品列表與介紹
│   ├── cart.html    # 購物車
│   └── user.html    # 會員中心
├── main.js         # 全域 JavaScript 進入點
├── vite.config.js  # Vite 設定檔
└── package.json    # 專案套件依賴與腳本
```

## 🛠️ 使用技術 (Tech Stack)

* **核心技術**: HTML5, CSS3, JavaScript
* **建置工具**: [Vite 6](https://vitejs.dev/)
* **CSS 框架**: [Bootstrap 5.3.7](https://getbootstrap.com/)
* **CSS 預處理器**: [Sass](https://sass-lang.com/)
* **樣板引擎**: [EJS](https://ejs.co/) (透過 `vite-plugin-ejs` 整合)
* **部署**: GitHub Pages (透過 `gh-pages` 套件)

## 🚀 本地開發指南 (Local Development)

### 先決條件
請確保您的電腦已安裝 [Node.js](https://nodejs.org/)。

### 1. 安裝依賴套件 (Install dependencies)

```bash
npm install
```

### 2. 啟動開發伺服器 (Start Dev Server)

```bash
npm run dev
```
啟動後，專案將開啟預設瀏覽器並導向至開發環境網址 (預設為 `http://localhost:5173/page/index.html`)。

### 3. 編譯專案 (Build for Production)

```bash
npm run build
```
編譯完成的靜態檔案將輸出到 `dist` 資料夾中。

### 4. 預覽編譯結果 (Preview Production Build)

```bash
npm run preview
```

## 📦 部署 (Deployment)

專案已設定自動部署至 GitHub Pages 的腳本。執行以下指令即可將目前代碼建置並發布：

```bash
npm run deploy
```
此指令會自動執行打包 (`npm run build`)，並將 `dist` 資料夾的內容推送到 `gh-pages` 分支完成更新。
