import {createTripInfoTemplate} from './components/trip-info.js';
import {createTripTabsTemplate} from './components/trip-tabs.js';
import {createFiltersTemplate} from './components/filters.js';
import {createSortingTemplate} from './components/sorting.js';
import {createEventEditTemplate} from './components/event-edit.js';
import {createTripDayTemplate} from './components/trip-day.js';
import {createEventTemplate} from './components/event.js';

const tripInfoElement = document.querySelector(`.trip-main__trip-info`);
const tripControlsElement = document.querySelector(`.trip-main__trip-controls`);
const tripControlsHeaderElement = tripControlsElement.querySelector(`h2`);
const tripEventsElement = document.querySelector(`.trip-events`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripInfoElement, createTripInfoTemplate(), `afterbegin`);
render(tripControlsHeaderElement, createTripTabsTemplate(), `afterend`);
render(tripControlsElement, createFiltersTemplate(), `beforeend`);
render(tripEventsElement, createSortingTemplate(), `beforeend`);
render(tripEventsElement, createEventEditTemplate(), `beforeend`);
render(tripEventsElement, createTripDayTemplate(), `beforeend`);

const tripEventsListElement = document.querySelector(`.trip-events__list`);
new Array(3).fill(``).forEach(() => render(tripEventsListElement, createEventTemplate(), `beforeend`));
