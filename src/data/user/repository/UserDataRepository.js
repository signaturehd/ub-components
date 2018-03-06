import UserRepository from '../../../domain/user/repository/UserRepository'

class UserDataRepository {

  constructor(userService) {
    this.userService = userService
  }
}

UserDataRepository.prototype = Object.create(UserRepository)

UserDataRepository.prototype.login = function(loginParam) {
  return this.userService.login(loginParam)
}

export default UserDataRepository
