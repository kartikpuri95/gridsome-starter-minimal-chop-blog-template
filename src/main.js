// Import main css


import '~/assets/bootstrap/css/bootstrap.min.css'
// import '~/assets/bootstrap/js/bootstrap.min.js'
import '~/assets/fontawesome-free/css/all.min.css'
import '~/assets/clean-blog.css'
import '~/assets/style/index.scss'




import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
  },{
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
  })


}