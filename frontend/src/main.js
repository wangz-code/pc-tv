import { createApp } from "vue";
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import "@arco-design/web-vue/es/message/style/css.js";
import "@arco-design/web-vue/es/modal/style/css.js";


import "./style.css";

import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(ArcoVueIcon).mount("#app");
