// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { charset: 'utf-8' }
  head.htmlAttrs = { lang: 'en' }
  head.htmlAttrs = { name: 'author', content: 'Beto Costa'}
  head.htmlAttrs = { name: 'description', content: 'Learn about Computer Science' }
  head.htmlAttrs = { name: 'viewport', content: 'width=device-width, initial-scale=1' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
}
