<template>
  <v-app id="home">
    <Sidebar />
    <Appbar />
    <v-main>
      <v-container fluid> <router-view> </router-view> </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "@/components/page-essential/Sidebar.vue";
import Appbar from "@/components/page-essential/Appbar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { Sidebar, Appbar },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
