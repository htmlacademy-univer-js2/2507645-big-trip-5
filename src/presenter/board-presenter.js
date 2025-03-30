 import EdirFormView from '../view/edit-form-view.js';
 import EmptyPageView from '../view/empty-page-view.js';
 import FiltersView from '../view/filters-view.js';
 import LoaderView from '../view/loader-view.js';
 import SortView from '../view/sort-view.js';
 import TripEventView from '../view/trip-event-view.js';
 import TripInfoView from '../view/trip-info-view.js';
 import {render} from '../render.js';

 export default class BoardPresenter {
  tripInfoComponent = new TripInfoView();
  filtersComponent = new FiltersView();
  sortComponent = new SortView();
  loaderComponent = new LoaderView();
  emptyPageComponent = new EmptyPageView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.tripInfoComponent, this.boardContainer);
    render(this.filtersComponent, this.boardContainer);
    render(this.sortComponent, this.boardContainer);
    render(this.loaderComponent, this.boardContainer);

    setTimeout(() => {
      this.loaderComponent.getElement().remove();
      render(this.emptyPageComponent, this.boardContainer);
    }, 2000);

    for (let i = 0; i < 3; i++) {
      render(new TripEventView(), this.boardContainer);
    }

    render(new EdirFormView(), this.boardContainer);
  }
}
