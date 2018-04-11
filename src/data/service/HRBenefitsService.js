import { Observable } from 'rxjs'
export default class HRBenefitsService {
  constructor (apiClient, accountClient) {
    this.apiClient = apiClient
    this.accountClient = accountClient
  }

  /* user */
  login (loginParam) {
    return this.apiClient.post('v1/login', {
      body: loginParam,
      json: true,
    })
  }

  otp (otpParam) {
    return this.apiClient.post('v1/otp', {
      body: otpParam,
      json: true,
    })
  }

  /* account */
  validateAccountNumber (accountNumber) {
    return this.accountClient.get(`accounts/v1/${accountNumber}`, {
      headers: {
        referenceid: Math.random().toString(36)
        .substring(7)
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

   /* Library */
   getBooks () {
    return  Observable.create(observer => {
      observer.next({
        response: {
            statusCode: 200,
            body: [
              {
                id : 1007,
                author: 'Pen Kilmaster',
                name : 'Senior Cost Accountant',
                title: 'The Origin',
                image : 'https://i.pinimg.com/564x/fc/b7/47/fcb74721dca0c66312d59b7258740f15.jpg',
                description : 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
                rating: 5,
              },
              {
                id : 1007,
                author: 'Pen Kilmaster',
                name : 'Senior Cost Accountant',
                title: 'The Origin',
                image : 'https://i.pinimg.com/564x/e5/86/e0/e586e0b818a324d077cd98e8627188ab.jpg',
                description : 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
                rating: 5,              },
              {
                id : 1007,
                author: 'Pen Kilmaster',
                name : 'Senior Cost Accountant',
                title: 'The Origin',
                image : 'https://i.pinimg.com/564x/e5/86/e0/e586e0b818a324d077cd98e8627188ab.jpg',
                description : 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
                rating: 5,
              }
            ]
         }
      })

       observer.complete()
      })
  }
}
