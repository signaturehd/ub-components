import AddBookRatingInteractor from '../../../domain/interactor/library/AddBookRatingInteractor'
import BookParam from '../../../domain/param/BookParam'

export default class BookListPresenter {
  constructor (container) {
    this.addBookInteractor = new AddBookRatingInteractor(container.get('HRBenefitsClient'))
  }

  setView (view) {
    this.view = view
  }

  rateBook (id, rating) {
    this.view.showLoading()
    this.addBookInteractor.execute(BookParam(id, rating))
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
