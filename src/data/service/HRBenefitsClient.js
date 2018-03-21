import ServiceErrorOperator from '../common/operator/ServiceErrorOperator'

export default class HRBenefitsClient {

  constructor (service) {
    this.service = service
  }

  login (loginParam) {
    return this.service.login(loginParam)
      .pipe(ServiceErrorOperator())
  }

  otp (otpParam) {
    return this.service.otp(otpParam)
      .pipe(ServiceErrorOperator())
  }
}
