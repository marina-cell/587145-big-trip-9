export const createFiltersTemplate = (filters) => {
  return `
  ${filters.map((filter) => `
    <form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}" ${filter.isSet ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${filter.type}">${filter.type.charAt(0).toUpperCase() + filter.type.slice(1)}</label>
      </div>`).join(``)}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
};
