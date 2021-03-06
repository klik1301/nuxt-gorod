const resolve = require('path').resolve

module.exports = {
  build: {
    vendor: [
      // 'bootstrap',
      // 'jquery'
      'axios',
    ]
  },
  router:{
    linkActiveClass: 'active-link',
    extendRoutes (routes) {
      routes.push({
        name: 'search',
        path: '/:city?/:category?',
        component: resolve(__dirname, 'pages/index')
      })
    }
  },
  // plugins: [
  //   '~plugins/vee-validate.js'
  // ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    'bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
}
