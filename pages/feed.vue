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
    RightSite
  }
};
</script>

<style scoped>
.container {
  width: 1200px !important;
  margin: auto;
  margin-top: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr) !important;
  grid-gap: 1.5rem !important;
}
.sidebar {
  width: 220px;
  /* margin-left: 10px; */
}
.midlebar {
  width: 550px !important;
  margin-right: 20px;
}
.rightbar {
  width: 300px;
  /* margin-right: 20px; */
}
</style>
