<template>
  <div class="container">
    <div class="grid">
      <div class="sidebar">
        <SidebarVue></SidebarVue>
      </div>
      <div class="midlebar">
        <MidlebarVue></MidlebarVue>
      </div>
      <div class="rightbar">
        <RightSite></RightSite>
      </div>

      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import SidebarVue from "~/components/Sidebar.vue";
import MidlebarVue from "~/components/Midlebar.vue";
import RightSite from "~/components/RightSite.vue";

export default {
  components: {
    SidebarVue,
    MidlebarVue,
    RightSite,
  },
};
</script>

<style>
.container {
  width: 1200px !important;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr) !important;
  grid-gap: 2rem;
}
.sidebar {
  width:200px;
}
.midlebar {
  width:550px !important;
}
.rightbar {
  width: 300px;
}
</style>
