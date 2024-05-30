import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// arco按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import path from "path";
const nodeResolve = (dir: any) => path.resolve(__dirname, ".", dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  server: {
    proxy: {
      // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
      "/hls_videos": "http://127.0.0.1:6600", // 访问本机不能用localhost会500错误
    },
  },
  base: "/",
  resolve: {
    alias: {
      "/@": nodeResolve("src"),
    },
  },
});
