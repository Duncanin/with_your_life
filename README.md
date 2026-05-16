# 🏠 With Your Life 伴你在日常

<p align="center">
  <strong>讓安心成為日常，陪你走過每一段照護旅程</strong>
</p>

<p align="center">
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/vite_6-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/bootstrap_5.3-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"></a>
  <a href="https://sass-lang.com/"><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass"></a>
  <a href="https://ejs.co/"><img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS"></a>
  <a href="https://greensock.com/gsap/"><img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP"></a>
  <a href="https://leafletjs.com/"><img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet"></a>
</p>

---

## 📖 專案簡介

**「With Your Life 伴你在日常」** 是一個以「居家照護輔具」為主題的電商形象網站，針對照顧者、長輩與外籍看護等不同族群，提供清晰易懂的輔具資訊、分類選購、政府補助指南與陪診服務介紹。

本專案為 **六角學院 2025 切版專題班** 的實作作品，從設計稿到前端切版全程獨立完成，著重於 **響應式設計 (RWD)**、**互動動畫** 與 **完整的多頁面架構**。

## 🌐 線上預覽

👉 **[點此瀏覽網站 Live Demo](https://Duncanin.github.io/with_your_life/)**

---

## 🎨 設計資源

| 資源 | 連結 |
| --- | --- |
| 📐 **Wireframe 線框稿** | [Miro Board](https://miro.com/app/board/uXjVJf63dD0=/) |
| 🖌️ **UI 設計稿** | [Figma Design](https://www.figma.com/design/ewdYsnmVv3m5O82L71iuBj/%E3%80%90-%E5%85%AD%E8%A7%92-%E3%80%91-C-2-%E4%BC%B4%E4%BD%A0%E5%9C%A8%E6%97%A5%E5%B8%B8?t=kvXeEfqrYfFpZJPL-0) |

---

## ✨ 網站功能與頁面

| 頁面 | 檔案 | 說明 |
| --- | --- | --- |
| 🏠 **首頁** | `index.html` | 品牌形象 Banner、GSAP 滾動動畫、服務亮點、分類快捷入口、Leaflet 地圖搜尋輔具中心、用戶回饋輪播 |
| 📝 **關於我們** | `about.html` | 品牌理念、團隊介紹與服務宗旨 |
| 🛒 **商品列表** | `product.html` | 產品分類瀏覽（行動協助、用餐照護、如廁便利、洗浴安全、補助專區）、收藏愛心切換 |
| 🛍️ **購物車** | `cart.html` | 購物車頁面、訂單資訊填寫流程 |
| 👤 **會員中心** | `user.html` | 個人資料管理、多 Tab 分頁切換（透過 localStorage 記憶分頁狀態） |

### 互動亮點

- 🎬 **GSAP + ScrollTrigger** — 首頁 Banner 滾動視差動畫、卡片彈性進場
- 🗺️ **Leaflet 互動地圖** — 搜尋全台輔具中心，支援北/中/南/東/離島區域切換
- ❤️ **收藏愛心切換** — 商品列表中的即時 UI 互動回饋
- 📱 **響應式設計** — 完整支援桌機、平板、手機等各尺寸裝置

---

## 🛠️ 技術棧

| 類別 | 技術 |
| --- | --- |
| **建置工具** | [Vite 6](https://vitejs.dev/) |
| **CSS 框架** | [Bootstrap 5.3.7](https://getbootstrap.com/) |
| **CSS 預處理器** | [Sass (SCSS)](https://sass-lang.com/) |
| **樣板引擎** | [EJS](https://ejs.co/)（透過 `vite-plugin-ejs` 整合） |
| **動畫效果** | [GSAP 3](https://greensock.com/gsap/) + ScrollTrigger |
| **互動地圖** | [Leaflet 1.9](https://leafletjs.com/) + OpenStreetMap |
| **CSS 後處理** | [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) |
| **開發體驗** | `vite-plugin-live-reload`（EJS 變更即時刷新） |
| **部署平台** | [GitHub Pages](https://pages.github.com/)（透過 `gh-pages` 套件） |

---

## 📂 專案結構

```text
with_your_life/
├── assets/
│   ├── photo/               # 圖片資源（依頁面分類）
│   │   ├── index/           #   首頁用圖
│   │   ├── about/           #   關於頁用圖
│   │   ├── product/         #   商品頁用圖
│   │   ├── cart/            #   購物車頁用圖
│   │   ├── user/            #   會員頁用圖
│   │   ├── header/          #   Header 用圖
│   │   ├── footer/          #   Footer 用圖
│   │   └── logo-icon/       #   Logo 與 favicon
│   └── scss/                # SCSS 樣式檔
│       ├── all.scss          #   主入口，匯入所有模組
│       ├── base/             #   基礎樣式 (reset, typography)
│       ├── util/             #   變數、自定義 utilities
│       ├── layout/           #   Header / Footer 樣式
│       ├── pages/            #   各頁面專屬樣式
│       └── Component/        #   共用元件樣式
├── layout/                  # EJS 共用樣板
│   ├── header-loginIn.ejs    #   已登入狀態 Header
│   ├── header-loginOut.ejs   #   未登入狀態 Header
│   ├── footer.ejs            #   共用 Footer
│   └── link-icon.ejs         #   外部字體圖標引入
├── page/                    # 各頁面 HTML
│   ├── index.html            #   首頁
│   ├── about.html            #   關於我們
│   ├── product.html          #   商品列表
│   ├── cart.html             #   購物車
│   └── user.html             #   會員中心
├── main.js                  # 全域 JS 進入點
├── index.html               # Vite 根 HTML
├── vite.config.js           # Vite 設定檔
├── package.json             # 套件依賴與腳本
└── .gitignore               # Git 忽略規則
```

---

## 🚀 本地開發

### 環境需求

- [Node.js](https://nodejs.org/) >= 18.x
- npm >= 9.x

### 快速開始

```bash
# 1. 克隆專案
git clone https://github.com/Duncanin/with_your_life.git
cd with_your_life

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev
```

啟動後瀏覽器將自動開啟 `http://localhost:5173/page/index.html`。

### 可用指令

| 指令 | 說明 |
| --- | --- |
| `npm run dev` | 啟動 Vite 開發伺服器（支援 HMR 熱更新） |
| `npm run build` | 編譯生產版本至 `dist/` 資料夾 |
| `npm run preview` | 本地預覽生產版本 |
| `npm run deploy` | 一鍵建置並部署至 GitHub Pages |

---

## 📦 部署

本專案使用 **GitHub Pages** 部署，已整合自動化腳本：

```bash
npm run deploy
```

此指令會依序執行：
1. `vite build` — 編譯生產版本至 `dist/`
2. `gh-pages -d dist` — 將 `dist/` 推送至 `gh-pages` 分支

> **注意**：`vite.config.js` 中的 `base` 需與 GitHub 倉庫名稱一致（目前為 `/with_your_life/`）。

---

## 🎨 設計特色

- **7-1 Pattern SCSS 架構** — 模組化的 SCSS 組織方式，搭配 Bootstrap 自定義變數覆寫，維護性與擴充性兼具
- **EJS 模板復用** — Header / Footer 等共用區塊獨立為 EJS 樣板，避免重複代碼
- **GSAP 動態視覺** — 首頁 Banner 搭配 ScrollTrigger 呈現品牌故事的沈浸式滾動體驗
- **Leaflet 地圖整合** — 結合 OpenStreetMap 提供全台輔具中心的地理位置查詢
- **Bootstrap 5 客製化** — 深度自定義色彩系統、間距、圓角等設計 Token

---

## 📄 授權

本專案僅作為六角學院切版專題班學習用途。
