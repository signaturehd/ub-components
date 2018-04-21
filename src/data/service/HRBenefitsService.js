import { Observable } from 'rxjs'

export default class HRBenefitsService {

  constructor(apiClient, accountClient) {
    this.apiClient = apiClient
    this.accountClient = accountClient
  }

  /* user */
  login (loginParam) {
    return this.apiClient.post('v1/login', loginParam)
  }

  otp (otpParam) {
    return this.apiClient.post('v1/otp', otpParam)
  }

  /* dental loa */
  validateDentalLoa (token) {
    return this.apiClient.get('v1/issuances/dental/loa/validate?type=1', {
      headers: { token }
    })
  }

  addDentalLoa (token, dentalLoaParam) {
    const formData = DentalLoaParam
    return this.apiClient.post('v1/issuances/dental/loa/submit', formData, {
      headers : { token }
    })
  }

  /* dental reimbursements */

  validateDentalReimbursement (token) {
    return this.apiClient.get('v1/reimbursements/dental/validate?type=1', {
      headers: { token }
    })
  }

  addDentalReimbursement (token, dentalLoaParam) {
    const formData = new FormData()
    return this.apiClient.post('v2/reimbursements/dental/submit', formData, {
      headers : { token }
    })
  }

  /* Optical */
  validateOptical (token) {
    return this.apiClient.get('v1/reimbursements/optical/validate', {
      headers : { token }
    })
  }

  addOptical (token, opticalParam) {
    const formData = new FormData()

    return this.apiClient.post('v2/reimbursements/optical/submit', formData, {
      headers : { token }
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
  getReleasingCenters (token) {
    return this.apiClient.get('v1/rds/centers', {
      headers: { token }
    })
  }

  /* library */
  getBooks (token) {
    return this.apiClient.get('v1/books', {
        headers: { token }
    })
  }

  /* library */
  getNews (token) {
    return this.apiClient.get('v1/news', {
        headers: {
          token : '5f1ae8a0a239bc16f89cc6d417872c8dab0e93222544fc44823c5b03f497f1edfe6a98c7f20c6e21b18b7ee7366aa960778cab6360cb79503b5b6c00d349c85d' 
        }
    })
  }
}