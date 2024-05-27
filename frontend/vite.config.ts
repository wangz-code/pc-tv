import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { join } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': join(__dirname, "src"),
            "@wailsjs":join(__dirname, "wailsjs"),
        },
    },
    plugins: [
        vue(),
        AutoImport({
            imports: [
                "vue",
                "@vueuse/core",
                {
                    "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
                },
            ],
            dirs: ["./composables/**"],
            vueTemplate: true,
            dts: "autoImport/auto-imports.d.ts",
        }),
        Components({
            resolvers: [NaiveUiResolver()],
            dts: "autoImport/auto-components.d.ts",
        }),
    ],
});
