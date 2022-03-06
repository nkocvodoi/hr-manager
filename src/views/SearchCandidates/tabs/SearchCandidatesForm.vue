<template>
  <v-app id="search-candidates-form">
    <v-main>
      <v-container fluid> Search Candidates Form </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class SearchCandidatesForm extends Vue {}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
