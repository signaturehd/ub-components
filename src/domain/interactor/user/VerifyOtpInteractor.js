export default class VerifyOtpInteractor {

  constructor(client) {
    this.client = client
  }

  execute(otpParam) {
    return this.client.otp(otpParam)
  }
}
