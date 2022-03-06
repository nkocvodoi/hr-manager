<template>
  <v-app id="search-candidates">
    <v-main>
      <v-container fluid> <router-view> </router-view> </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class SearchCandidates extends Vue {}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
