function factory() {
  return {
    setUserActiveProject(state, userActiveProject) {
      state.userActiveProject = userActiveProject
    },
    setStartDate(state, date) {
      state.startDate = date
    },
    setEndDate(state, date) {
      state.endDate = date
    },
    setRole(state, role) {
      state.role = role
    },
    setName(state, name) {
      state.name = name
    },
    setLastName(state, lastname) {
      state.lastName = lastname
    },
    setEmail(state, email) {
      state.email = email
    },
    setCollaboratorNumber(state, number) {
      state.collaboratorNumber = number
    },
    setErrorUserActiveProject(state, errorUserActiveProject) {
      state.errorUserActiveProject = errorUserActiveProject
    },
    setEnabledUserCode(state, code) {
      state.enabledUserCode = code
    },
    setErrorCodeDetail(state, detail) {
      state.errorCodeDetail = detail
    },
    setErrorDetailLiteral(state, literal) {
      state.errorDetailLiteral = literal
    },
    setErrorEnableCode(state, boolean) {
      state.errorEnableCode = boolean
    },
    setErrorValidatePassword(state, passwordResponse) {
      state.errorValidatePassword = passwordResponse
    },
    setErrorCommonPassword(state, errorPasswordResponse) {
      state.errorCommonPassword = errorPasswordResponse
    },
    setErrorActivationCodeInvalid(state, errorPasswordResponse) {
      state.errorActivationCodeInvalid = errorPasswordResponse
    },
    setUserCurrentDepartment(state, userCurrentDepartment) {
      state.userCurrentDepartment = userCurrentDepartment
    },
    setUserVisibleDepartments(state, userVisibleDepartments) {
      state.userVisibleDepartments = userVisibleDepartments
    },
    setLanguage(state, language) {
      state.language = language
    },
    setLoading(state, loading) {
      state.loading = loading
    }
  }
}

export default factory()
