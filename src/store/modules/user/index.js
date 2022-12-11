import actions from './actions'
import mutations from './mutations'
import { state } from './state'

export const user = {
  namespaced: true,
  state,
  mutations,
  actions
}
