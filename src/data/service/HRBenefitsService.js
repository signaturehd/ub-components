export default class HRBenefitsService {

  constructor(apiClient, accountClient) {
    this.apiClient = apiClient
    this.accountClient = accountClient
  }

  login(loginParam) {
    return this.apiClient.post('/v1/login', {
      body: loginParam,
      json: true,
    })
  }

  otp(otpParam) {
    return this.apiClient.post('/v1/otp', {
      body: otpParam,
      json: true,
    })
  }

  validateAccountNumber (accountNumber) {
    return this.accountClient.get('accounts/v1/' + accountNumber, {
      headers: {
        referenceid: Math.random().toString(36).substring(7)
      },
      json: true,
    })
  }
}
