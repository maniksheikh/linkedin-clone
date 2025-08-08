export default {
  ssr: false,
  target: "static",
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

  plugins: [
    '~/plugins/firebase.js',
    { src: '~/plugins/auth.js', mode: 'client' }
  ],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios'],

  // Public runtime config for static assets
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  }
};
