import { state } from './state'
import actions from './actions'
import mutations from './mutations'

export const projects = {
  namespaced: true,
  state,
  actions,
  mutations
}
