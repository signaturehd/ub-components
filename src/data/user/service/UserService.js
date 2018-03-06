export default class UserService {

  constructor(apiClient) {
    this.apiClient = apiClient
  }

  login(loginParam) {
    return this.apiClient.post('/login', {
      body: loginParam,
      json: true,
    })
  }
}
