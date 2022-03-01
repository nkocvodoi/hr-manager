import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./assets/fontawesome-icons";
import router from "./router";

loadFonts();

createApp(App)
  .use(vuetify)
  .use(router)
  .component("fa-icon", FontAwesomeIcon)
  .mount("#app");
