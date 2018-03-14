const TOKEN = 'TOKEN'

export default class SessionProvider {

  constructor () {
    this.storage = window.localStorage
  }

  getToken () {
    return this.storage.getItem(TOKEN) || ''
  }
}
