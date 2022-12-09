import Vue from 'vue'
import App from './App.vue'
import '@/styles'
import router from './router'
import { i18n, setI18nSetup } from '@/i18n'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { toastConfiguration } from '@/components/Toast/toast.configuration.js'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


Vue.config.productionTip = false
library.add(faTrashCan,faPencil)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.use(Toast, toastConfiguration)
setI18nSetup()
document.title='TeamBoard'

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
