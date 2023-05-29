import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

import "./assets/style/main.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
});

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
