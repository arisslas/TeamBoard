export const state = {
  summaryStatistic: {
    total_users: 0,
    active_users: 0,
    votes_last_week: 0,
    mood_count: {
      great: 0,
      good: 0,
      neutral: 0,
      regular: 0,
      bad: 0
    },
    saddest_project: {
      project_id: '',
      project_name: '',
      average: 5
    },
    happiest_project: {
      project_id: '',
      project_name: '',
      average: 5
    }
  },
  analyticVotesSummary: {
    detailed_votes: []
  },
  departmentProjects: {
    projects: []
  },
  loading: false
}
