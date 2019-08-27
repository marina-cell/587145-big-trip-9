export const createTripInfoTemplate = ({destinations, dates}) => {
  const dateFrom = new Date(dates.dateFrom);
  const dateTo = new Date(dates.dateTo);
  return `
  <div class="trip-info__main">
    <h1 class="trip-info__title">${destinations[0]} &mdash; ${(destinations.length > 3) ? ` ... ` : destinations[1]} &mdash; ${destinations[destinations.length - 1]} </h1>

    <p class="trip-info__dates">${dateFrom.toDateString()}&nbsp;&mdash;&nbsp;${dateTo.toDateString()}</p>
  </div>`;
};
