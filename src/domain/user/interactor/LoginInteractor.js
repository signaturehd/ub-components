export default class LoginInteractor {

  constructor(userRepository) {
    this.userRepository = userRepository
  }

  execute(loginParam) {
    return this.userRepository.login(loginParam)
  }
}
