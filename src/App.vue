<template>
  <v-app>
    <v-main>
      <Login />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "./views/Login.vue";

export default defineComponent({
  name: "App",

  components: {
    Login,
  },

  data() {
    return {
      //
    };
  },
});
</script>
