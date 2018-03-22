import LoginInteractor from '../../../domain/interactor/user/LoginInteractor'

export default class BenefitsPresenter {

  constructor(container) {
    this.loginInteractor = new LoginInteractor(container.get('HRBenefitsClient'))
  }

  setView(view) {
    this.view = view
  }
}
