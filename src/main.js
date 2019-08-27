import {createTripInfoTemplate} from './components/trip-info.js';
import {createTripTabsTemplate} from './components/trip-tabs.js';
import {createFiltersTemplate} from './components/filters.js';
import {createSortingTemplate} from './components/sorting.js';
import {createEventEditTemplate} from './components/event-edit.js';
import {createTripDayTemplate} from './components/trip-day.js';
import {createEventTemplate} from './components/event.js';
import {getEvent, getMenu, getFilters, getTripInfo} from './data.js';

const tripInfoElement = document.querySelector(`.trip-main__trip-info`);
const tripControlsElement = document.querySelector(`.trip-main__trip-controls`);
const tripControlsHeaderElement = tripControlsElement.querySelector(`h2`);
const tripEventsElement = document.querySelector(`.trip-events`);
const tripTotalCostElement = document.querySelector(`.trip-info__cost-value`);

const EVENTS_COUNT = 4;
const events = new Array(EVENTS_COUNT).fill(``).map(() => getEvent());

// Общая стоимость путешествия
const offers = [].concat(...events.map((event) => event.offers.filter((offer) => offer.isSet)));
const offersCost = offers.reduce(((accumulator, currentValue) => accumulator + Number(currentValue.price)), 0);
tripTotalCostElement.textContent = events.reduce(((accumulator, currentValue) => accumulator + currentValue.price), offersCost);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripInfoElement, createTripInfoTemplate(getTripInfo()), `afterbegin`);
render(tripControlsHeaderElement, createTripTabsTemplate(getMenu()), `afterend`);
render(tripControlsElement, createFiltersTemplate(getFilters()), `beforeend`);
render(tripEventsElement, createSortingTemplate(), `beforeend`);
render(tripEventsElement, createEventEditTemplate(events[0]), `beforeend`);
render(tripEventsElement, createTripDayTemplate(), `beforeend`);

const tripEventsListElement = document.querySelector(`.trip-events__list`);
for (const event of events) {
  render(tripEventsListElement, createEventTemplate(event), `beforeend`);
}
