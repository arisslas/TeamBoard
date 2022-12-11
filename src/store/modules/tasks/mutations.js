function factory() {
  return {
    setSummaryStatistic(state, summaryStatistic) {
      state.summaryStatistic = summaryStatistic
    },
    setAnalyticVotesSummary(state, analyticVotesSummary) {
      state.analyticVotesSummary = analyticVotesSummary
    },
    setDepartmentProjects(state, departmentProjects) {
      state.departmentProjects = departmentProjects
    },
    setLoading(state, loading) {
      state.loading = loading
    }
  }
}

export default factory()
