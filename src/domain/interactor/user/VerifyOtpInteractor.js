export default class VerifyOtpInteractor {

  constructor(client) {
    this.client = client
  }

  execute(otpParam) {

    this.client.setToken('authResp.token')
    return this.client.otp(otpParam)
      .do(authResp => {
        if (authResp) {
          this.client.setToken(authResp.token)
          this.client.setAccountToken(authResp.accountToken)
        }
      })
  }
}
