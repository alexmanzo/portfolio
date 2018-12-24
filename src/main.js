import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'

// ----- Global Components ----- //
Vue.component('app-header', Header)
Vue.component('app-nav', Nav)

// ----- Vue Configuration ----- //
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
