export default class UserService {

  constructor(apiClient) {
    this.apiClient = apiClient
  }

  login(loginParam) {
    return this.apiClient.post('/v1/login', {
      body: loginParam,
      json: true,
    })
  }
}
