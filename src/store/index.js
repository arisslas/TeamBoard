import Vuex from 'vuex'
import Vue from 'vue'
import { storeConfig } from './storeConfig'


Vue.use(Vuex)
Vue.config.devtools = true
export default new Vuex.Store(storeConfig)
