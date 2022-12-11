export const state = {
  userActiveProject: null,
  startDate: null,
  endDate: null,
  role: getUserRole(),
  name: null,
  lastName: null,
  email: null,
  collaboratorNumber: null,
  errorUserActiveProject: false,
  enabledUserCode: null,
  errorCodeDetail: null,
  errorDetailLiteral: null,
  errorEnableCode: false,
  errorCommonPassword: false,
  errorValidatePassword: false,
  errorActivationCodeInvalid: false,
  userCurrentDepartment: { id: '', name: '' },
  userVisibleDepartments: [],
  language: null,
  loading: false
}

function getUserRole() {
  return localStorage.getItem('userRole')
    ? localStorage.getItem('userRole')
    : null
}
