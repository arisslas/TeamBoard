
// import * as constants from '@components/common/constants'
import loginService from "@/services/loginService"

//hayun (funtion factory service)
function factory(service) {
  return {

    async getAllUsers() {
      try {
        const aplicationUsers = await service.getAllUsers()
        this.commit('user/setaplicationUsers', aplicationUsers.data)
      } catch (error) {
        return error
      }
    },

  }
}

export default factory(loginService)
// export default factory(userService)