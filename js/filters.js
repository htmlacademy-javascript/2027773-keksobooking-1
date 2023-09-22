import { clearMarkers, renderMarkers } from'./map.js';

const MAX_OFFERS = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const housingType = document.querySelector('#housing-type');
const housingRoom = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingPrice = document.querySelector('#housing-price');
const featuresFilter = document.querySelectorAll('[name=features]');
const mapFilters = document.querySelector('.map__filters');

const price = {
  any: (value) => !value,
  middle: (value) => value >= LOW_PRICE && value <= HIGH_PRICE,
  low: (value) => value <= LOW_PRICE,
  high: (value) => value >= HIGH_PRICE,
};

const onFilterChange = (offers) => {
  clearMarkers();
  const filteredData = setOffersFilter(offers);
  renderMarkers(filteredData.slice(0, MAX_OFFERS));
};

const setFiltersListener = (offers) => mapFilters.addEventListener('change', () => onFilterChange(offers));

function setOffersFilter(offers) {
  const checkPriceFn = price[housingPrice.value];

  const checkedFeatures = [...featuresFilter].filter((feature) => feature.checked);

  const checkFeatures = (features) => features && checkedFeatures.every((element) => features.includes(element.value));

  const filterOfferElement = (offer, housing) => offer === Number(housing.value) || housing.value === 'any';
  const filterByType = (offer) => offer.type === housingType.value || housingType.value === 'any';
  const filterByRooms = (offer) => filterOfferElement(offer.rooms, housingRoom);
  const filterByGuests = (offer) => filterOfferElement(offer.guests, housingGuests);
  const filterByPrice = (offer) => checkPriceFn(offer.price) || housingPrice.value === 'any';
  const filterByFeatures = (offer) => checkFeatures(offer.features) || checkedFeatures.length === 0;

  const filterOffers = offers
    .filter(({offer}) => filterByType(offer) &&
    filterByRooms(offer) &&
    filterByGuests(offer) &&
    filterByPrice(offer) &&
    filterByFeatures(offer));

  return filterOffers;

}

export { setFiltersListener };
