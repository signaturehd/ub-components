const TOKEN = 'TOKEN'

export default class SessionProvider {

  constructor () {
    this.storage = window.localStorage
  }

  setToken (token = '') {
    return this.storage.setItem(TOKEN, token)
  }

  getToken () {
    return this.storage.getItem(TOKEN) || ''
  }
}
