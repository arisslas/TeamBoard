function factory() {
  return {
    setAccessToken(state, token) {
      state.accessToken = token
    }
  }
}

export default factory()
