
import loginService from "@/services/loginService"


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
