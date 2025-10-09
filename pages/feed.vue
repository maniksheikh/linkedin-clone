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

@media screen and (max-width: 768px) {
  .container {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  .grid {
    display: block !important;
    grid-template-columns: none !important;
    grid-gap: 0 !important;
    width: 100% !important;
    padding: 0;
    margin: 0;
  }

  .sidebar {
    display: none !important;
  }

  .midlebar {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    top: 4rem !important;
    margin: 0 !important;
    padding: 0 1.5% !important;
    position: relative !important;
    overflow-y: visible !important;
    box-sizing: border-box;
  }
  .rightbar {
    display: none !important;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 100% !important;
    margin: 0;
    padding: 0;
  } 
  .midlebar {
    width: 100% !important;
    padding: 0 1.5% !important;
    top: 3.5rem !important;
  }
}

@media screen and (max-width: 375px) {
  .midlebar {
    padding: 0 1.5% !important;
    top: 3.5rem !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    width: 97% !important;
    max-width: 97% !important;
  }
  .grid {
    grid-template-columns: 250px 1fr 280px !important;
    grid-gap: 1rem !important;
  }
  .sidebar {
    width: 100%;
  } 
  .midlebar {
    width: 100% !important;
    margin: 0 !important;
  }
  .rightbar {
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .sidebar {
    display: none;
    height: 100%;
    width: 100% !important;
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
    width: 100% !important;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}

@media screen and (max-width: 414px) {
  .midlebar {
    height: 100%;
    width: 100% !important;
    padding: 0 1.5%;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}

@media screen and (max-width: 375px) {
  .midlebar {
    height: 100%;
    width: 100% !important;
    padding: 0 1.5%;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
    width: 100% !important;
  }
}
</style>
