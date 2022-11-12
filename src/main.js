import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'

import components from '@/components/ui/index'

Vue.config.productionTip = false

components.forEach(component => {
  Vue.component(component.name, component)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
