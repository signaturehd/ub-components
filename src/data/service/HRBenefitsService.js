export default class HRBenefitsService {

  constructor(apiClient, accountClient) {
    this.apiClient = apiClient
    this.accountClient = accountClient
  }

  /* user */
  login(loginParam) {
    return this.apiClient.post('v1/login', {
      body: loginParam,
      json: true,
    })
  }

  otp(otpParam) {
    return this.apiClient.post('v1/otp', {
      body: otpParam,
      json: true,
    })
  }

  /* account */
  validateAccountNumber (accountNumber) {
    return this.accountClient.get('accounts/v1/' + accountNumber, {
      headers: {
        referenceid: Math.random().toString(36).substring(7)
      },
      json: true,
    })
  }

  /* rds */
  getReleasingCenters () {
    return this.apiClient.get('v1/rds/centers', {
      json: true,
    })
  }
}
