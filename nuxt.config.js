export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "linkedIn",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  sass: [`@import "@/styles/_variables.scss";`],

  plugins: [`~/plugins/firebase.js`],

  components: true,

  buildModules: [],

  modules: [],
  build: {},
};
