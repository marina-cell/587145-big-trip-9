export const createEventTemplate = ({type, place, dueDates, price, offers}) => {
  const dateFrom = new Date(dueDates.dateFrom);
  const dateTo = new Date(dueDates.dateTo);
  return `
  <li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type.charAt(0).toUpperCase() + type.slice(1)} to ${place}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time">${dateFrom.getHours()}:${dateFrom.getMinutes()}</time>
          &mdash;
          <time class="event__end-time">${dateTo.getHours()}:${dateTo.getMinutes()}</time>
        </p>
        <p class="event__duration">1H 30M</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers.filter((offer) => offer.isSet).map((offer) => `
          <li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
         </li>`).join(``)}
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};
