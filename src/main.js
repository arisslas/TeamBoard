import Vue from 'vue'
import App from './App.vue'
import '@/styles'
import router from './router'
import { i18n, setI18nSetup } from '@/i18n'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
setI18nSetup()

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
