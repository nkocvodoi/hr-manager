import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./assets/fontawesome-icons";
import router from "./router";
import store from "./store";

loadFonts();
const app = createApp(App);

app
  .use(router)
  .use(vuetify)
  .use(router)
  .use(store)
  .component("fa-icon", FontAwesomeIcon)
  .mount("#app");
