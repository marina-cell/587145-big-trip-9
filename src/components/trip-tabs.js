export const createTripTabsTemplate = (menu) => {
  return `
  <nav class="trip-controls__trip-tabs  trip-tabs">
    ${menu.map((tab) => `
      <a class="trip-tabs__btn  ${tab.isSet ? `trip-tabs__btn--active` : ``}" href="#">${tab.title}</a>`).join(``)}
    `;
};
