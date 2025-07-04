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
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

.container {
  width: 1200px !important;
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr) !important;
  grid-gap: 1.5rem !important;
}

.sidebar {
  width: 230px;
  position: sticky;
  top:0;
  left: 0;
  height: 100vh;
}

@media screen and (max-width: 650px) {
  .sidebar {
    display: none;
    height: 100%;
  }
}


.midlebar {
  position: relative;
  width: 560px !important;
  height: 100vh;
  top: 5.5rem;
  margin: auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

@media screen and (max-width: 650px) {
  .midlebar {
    height: 100%;
  }
}

.midlebar::-webkit-scrollbar {
  display: none;
}

.rightbar {
  width: 300px;
  position: sticky;
  top:0;
  height: 100vh;
}

@media screen and (max-width: 650px) {
  .rightbar {
    display: none;
    height: 100%;
  }
}
</style>
