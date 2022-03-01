<template>
  <div>
    <!-- <TheTopbar @togglenav="navOpen = !navOpen" /> -->
    <Sidebar :open="navOpen" />
  </div>
</template>

<script lang="ts">
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { Sidebar },
})
export default class Home extends Vue {
  navOpen = false;
}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
</style>
