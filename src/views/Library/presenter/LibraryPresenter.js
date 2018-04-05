import GetbooksInteractor from '../../../domain/interactor/library/GetbooksInteractor'


export default class LibraryPresenter {
  constructor (container) {
    this.GetbooksInteractor = new LibraryPresenter(container.get('HRBenefitsClient'))
  }

  setView(view) {
    this.view = view
  }

  getBooks() {
    this.view.showLoading()

    this.GetbooksInteractor.execute(getBooks())
    .subscribe(showBooks => {
        this.view.hideLoading()
        this.view.showBooks(showBooks)
      }, e => {
        this.view.hideLoading()
        //TODO prompt generic error
      })
  }
}