import { createStore } from "vuex";

const store = createStore({
  state: {
    theme: "light",
  },
  getters: {},
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme == "light" ? "dark" : "light";
      console.log(state.theme);
    },
  },
  actions: {},
});

export default store;
