import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "glob";

import liveReload from "vite-plugin-live-reload";

function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("page/")) {
          const newFileName = fileName.slice("page/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig({
  // base: 必須跟 repo 名稱相同
  base: "/with_your_life/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./page/**/*.ejs", "./page/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin(),
  ],
  server: {
    open: "page/index.html",
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
