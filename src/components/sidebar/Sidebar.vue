<template>
  <transition name="show">
    <div class="sidebar" v-if="open">
      <transition-group appear name="fade">
        <a
          href="#"
          class="sidebar-element"
          v-for="(item, index) in navElements"
          :key="item"
          :style="{ '--index': index }"
        >
          <fa-icon class="icon" :icon="['fas', item]" size="2x" />
        </a>
      </transition-group>
    </div>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { boolean } from "yup/lib/locale";

@Options({
  components: {},
  props: {
    open: boolean,
  },
})
export default class Sidebar extends Vue {
  public open!: boolean;
  public navElements = ["user", "cogs", "th", "share-alt", "star", "comment"];
}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";

.sidebar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 60px;
  height: calc(100vh - 50px);
  padding-top: 48px;
  background-color: rgba($color: #242424, $alpha: 0.6);
  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    cursor: pointer;
    color: #fefefe;
    background-color: #242424;
  }
}
.show {
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active,
  &-leave-active {
    transition: all 500ms;
  }
}
.fade {
  &-enter {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active {
    transition: all 500ms ease-in-out;
    transition-delay: calc(50ms * var(--index));
  }
}
</style>
