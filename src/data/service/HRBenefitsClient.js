export default class HRBenefitsClient {

  constructor(service) {
    this.service = service
  }

  login(loginParam) {
    return this.service.login(loginParam)
  }
}
