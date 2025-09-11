// vite.config.js
import { defineConfig } from "vite";
// ... 其他 import

export default defineConfig({
  // ...
  base: "/with_your_life/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./page/**/*.ejs", "./page/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin(),
  ],
  server: {
    // 這是最關鍵的修正：讓 dev server 在啟動時，就正確地導向到 base 路徑下的 index.html
    open: "/with_your_life/page/index.html",
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync("page/*.html") // 抓 page/ 資料夾裡的 html
          .map((file) => [
            path.relative(
              "page",
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    outDir: "dist",
  },
});
