import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: true,
      },
      dts: "./src/types/auto-imports.d.ts",
    }),
    styleImport({
      resolves: [VantResolve()],
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle: name => `../es/${name}/style`
      }]
    }),
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true,

      }
    ]
  ],
});
