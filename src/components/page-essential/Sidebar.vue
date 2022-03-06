<template>
  <v-navigation-drawer expand-on-hover rail app v-model="drawerValue">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <div v-for="(item, id) in items" :key="id">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          link
        ></v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
})
export default class Sidebar extends Vue {
  public items = [
    {
      icon: "mdi:mdi-folder",
      title: "My Files",
      value: "myfiles",
      path: "/home",
    },
    {
      icon: "mdi:mdi-account-multiple",
      title: "Shared with me",
      value: "shared",
      path: "/home",
    },
    { icon: "mdi:mdi-star", title: "Starred", value: "starred", path: "/home" },
  ];
  public drawerValue = "";
}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";
.optionTitle {
  color: $color-dark-veri-peri;
  font-size: 12px;
  font-weight: bold;
}
</style>
