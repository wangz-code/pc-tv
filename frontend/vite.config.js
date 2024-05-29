import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// arco按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import path from "path";
const nodeResolve = (dir) => path.resolve(__dirname, ".", dir);
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
			"/static": {
				target: "http://localhost:6600", // Nginx 服务器的地址
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/static/, ""),
			},
		},
	},
	base: "/",
	resolve: {
		alias: {
			"@": nodeResolve("src"),
		},
	},
});
