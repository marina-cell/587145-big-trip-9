import {getRandomBoolean} from './utils.js';

const getDueDates = () => {
  const dateFrom = Date.now() + Math.floor(Math.random() * 31 * 24 * 60) * 60 * 1000; // дата начала: в пределах месяца с текущей
  return {
    dateFrom,
    dateTo: dateFrom + Math.floor(Math.random() * 7 * 24 * 60) * 60 * 1000 // дата окончания: в пределах недели после даты начала
  };
};

const DESTINATIONS = [
  `Amsterdam`,
  `Geneva`,
  `Chamonix`,
  `Natural History Museum`,
  `Saint Petersburg`
];

export const getEvent = () => ({
  type: [
    `bus`,
    `check-in`,
    `drive`,
    `flight`,
    `restaurant`,
    `ship`,
    `sightseeing`,
    `taxi`,
    `train`,
    `transport`,
    `trip`
  ][Math.floor(Math.random() * 11)],
  place: DESTINATIONS[Math.floor(Math.random() * 5)],
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`
  ].sort(() => Math.random() - 0.5).slice(0, Math.round(Math.random() * 3)).join(` `),
  dueDates: getDueDates(),
  price: Math.floor(Math.random() / 10 * 500) * 10,
  offers: [
    {
      value: `luggage`,
      title: `Add luggage`,
      price: `10`,
      isSet: getRandomBoolean()
    },
    {
      value: `comfort`,
      title: `Switch to comfort`,
      price: `150`,
      isSet: getRandomBoolean()
    },
    {
      value: `meal`,
      title: `Add meal`,
      price: `2`,
      isSet: false
    },
    {
      value: `seats`,
      title: `Choose seats`,
      price: `9`,
      isSet: false
    }
  ],
});

export const getMenu = () => ([
  {
    title: `Table`,
    isSet: true
  },
  {
    title: `Stats`,
    isSet: false
  }
]);

export const getFilters = () => ([
  {
    type: `everything`,
    isSet: true
  },
  {
    type: `future`,
    isSet: false
  },
  {
    type: `past`,
    isSet: false
  }
]);

export const getTripInfo = () => ({
  destinations: DESTINATIONS,
  dates: getDueDates()
});
