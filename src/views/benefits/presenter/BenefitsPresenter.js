import ValidateAccountNumberInteractor from '../../../domain/interactor/account/ValidateAccountNumberInteractor'

export default class BenefitsPresenter {

  constructor(container) {
    this.validateAccountNumberInteractor =
      new ValidateAccountNumberInteractor(container.get('HRBenefitsClient'))
  }

  setView(view) {
    this.view = view
  }

  validateAccountNumber(accountNumber) {
    this.view.showLoading()

    this.validateAccountNumberInteractor.execute(accountNumber)
      .subscribe(resp => {
        this.view.hideLoading()
        this.view.onValidAccountNumber()
      }, error => {
        this.view.hideLoading()
        //TODO prompt generic error
      })
  }
}
