import LoginInteractor from '../../../domain/user/interactor/LoginInteractor'
import LoginParam from '../../../domain/user/param/LoginParam'

export default class LoginPresenter {

  constructor(container) {
    this.loginInteractor = new LoginInteractor(container.get('UserRepository'))
  }

  setView(view) {
    this.view = view
  }

  login(username, password) {
    this.view.showLoading('')

    this.loginInteractor.execute(LoginParam(username, password))
      .subscribe(
        data => {
          this.view.hideLoading()
        },
        error => {
          this.view.hideLoading()
        }
      )
  }
}
