
// import * as constants from '@components/common/constants'

//hayun (funtion factory service)
function factory() {
  return {
    // async getUserProject({ commit }) {
    //   try {
    //     commit('setLoading', true)
    //     const project = await service.getActiveProject()
    //     this.commit('user/setUserActiveProject', project.name)
    //     this.commit('user/setErrorUserActiveProject', false)
    //   } catch (error) {
    //     error.status === 400
    //       ? this.commit('user/setErrorUserActiveProject', true)
    //       : error
    //   } finally {
    //     commit('setLoading', false)
    //   }
    // },

    // async getUserProfileData() {
    //   try {
    //     this.commit('setLoading', true)
    //     const profile = await service.getProfileData()
    //     if (!profile) {
    //       return
    //     }
    //     this.commit('user/setLanguage', profile.language)
    //     localStorage.setItem('profileName', profile.first_name)
    //     localStorage.setItem('profileLastName', profile.last_name)
    //     localStorage.setItem(
    //       'profileCollaboratorNumber',
    //       profile.collaborator_number
    //     ),
    //       localStorage.setItem('profileLanguage', profile.language)
    //   } catch (error) {
    //     return error
    //   } finally {
    //     this.commit('setLoading', false)
    //   }
    // },

    // async getUserEnableCode(...code) {
    //   this.commit('user/setErrorEnableCode', false)
    //   try {
    //     const userCode = code[1]
    //     await this.commit('user/setEnabledUserCode', userCode)
    //     await service.getActivationCode()
    //   } catch (error) {
    //     if (error.status === 400 || error.status === 401) {
    //       await this.commit('user/setErrorEnableCode', true)
    //     }
    //     return error
    //   }
    // },

    // async sendUserPassword(...params) {
    //   this.commit('user/setErrorValidatePassword', false)
    //   this.commit('user/setErrorCommonPassword', false)
    //   this.commit('user/setErrorActivationCodeInvalid', false)
    //   const { password, activation_code, onVoteSuccess } = params[1]
    //   let response
    //   try {
    //     response = await service.postActivatePassword({
    //       password,
    //       activation_code
    //     })
    //   } catch (error) {
    //     if (
    //       error.data.detail === 'password_too_similar' ||
    //       error.data.detail === 'password_too_short'
    //     ) {
    //       this.commit('user/setErrorValidatePassword', true)
    //     } else if (error.data.detail === 'password_too_common') {
    //       this.commit('user/setErrorCommonPassword', true)
    //     } else if (error.data.code === constants.ACTIVATION_CODE_INVALID) {
    //       this.commit('user/setErrorActivationCodeInvalid', true)
    //     }

    //     return error
    //   }
    //   if (response.status === 204) {
    //     onVoteSuccess()
    //     setTimeout(() => {
    //       location.assign(constants.LOGIN_ROUTE)
    //     }, 1500)
    //   }
    // },

    // async getUserCurrentDepartment() {
    //   try {
    //     const department = await service.getUserCurrentDepartment()
    //     this.commit('user/setUserCurrentDepartment', department)
    //   } catch (error) {
    //     localStorage.setItem('codeError', error.data.code)
    //     return error
    //   }
    // },

    // async getUserVisibleDepartments() {
    //   try {
    //     const userVisibleDepartments = await service.getUserVisibleDepartments()
    //     this.commit('user/setUserVisibleDepartments', userVisibleDepartments)
    //   } catch (error) {
    //     return error
    //   }
    // },
    // async setLanguage({ commit }, language) {
    //   try {
    //     const response = await service.setLanguage({ language })
    //     if (response.status === 200) {
    //       const profile = await service.getProfileData()
    //       const userLanguage = profile.language
    //       localStorage.setItem('profileLanguage', userLanguage)
    //       commit('user/setLanguage', userLanguage)
    //     }
    //     location.reload()
    //   } catch (error) {
    //     localStorage.setItem('codeError', error.data.code)
    //     return error
    //   }
    // }
  }
}

export default factory()
// export default factory(userService)