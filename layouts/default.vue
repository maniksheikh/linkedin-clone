<template>
  <div>
    <AppHeaderVue> </AppHeaderVue>
    <nuxt></nuxt>
  </div>
</template>

<script>
import AppHeaderVue from "~/components/AppHeader.vue";
export default {
  name: "LinkedInDefault",

  components: {
    AppHeaderVue,
  },
};
</script>