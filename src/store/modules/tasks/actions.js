

function factory() {
  return {
    // async getStatisticData({ commit }) {
    //   try {
    //     commit('setLoading', true)
    //     const statistic = await service.getStatisticData()
    //     this.commit('statistic/setSummaryStatistic', statistic)
    //   } catch (error) {
    //     localStorage.setItem('codeError', error.data.detail)
    //     return error
    //   } finally {
    //     commit('setLoading', false)
    //   }
    // },

    // async getAnalyticVotesSummary({ commit }, params) {
    //   try {
    //     const analyticVotes = await service.getAnalyticVotesSummary(params)
    //     commit('statistic/setAnalyticVotesSummary', analyticVotes, {
    //       root: true
    //     })
    //   } catch (error) {
    //     localStorage.setItem('codeError', error.data.detail)
    //     return error
    //   }
    // },
    // async getDepartmentProjectsList({ commit }, params) {
    //   try {
    //     const projects = await service.getDepartmentProjects(params)
    //     commit('statistic/setDepartmentProjects', projects, {
    //       root: true
    //     })
    //   } catch (error) {
    //     localStorage.setItem('codeError', error.data.detail)
    //     return error
    //   }
    // }
  }
}

export default factory()
