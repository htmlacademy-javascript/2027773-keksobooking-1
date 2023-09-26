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
  any: () => true,
  middle: (value) => value >= LOW_PRICE && value <= HIGH_PRICE,
  low: (value) => value <= LOW_PRICE,
  high: (value) => value >= HIGH_PRICE,
};

const checkedFeatures = () => [...featuresFilter].filter((feature) => feature.checked);

const checkFeatures = (features, check) => features && check.every((element) => features.includes(element.value));

const filterOfferElement = (offer, housing) => offer === Number(housing.value) || housing.value === 'any';

const filterByType = (offer) => offer.type === housingType.value || housingType.value === 'any';
const filterByRooms = (offer) => filterOfferElement(offer.rooms, housingRoom);
const filterByGuests = (offer) => filterOfferElement(offer.guests, housingGuests);

const filterByFeatures = (offer) => checkFeatures(offer.features, checkedFeatures()) || checkedFeatures().length === 0;

const setOffersFilter = (offers) => {
  const checkPriceFn = price[housingPrice.value];
  const filterByPrice = (offer) => checkPriceFn(offer.price) || housingPrice.value === 'any';
  return offers.filter(({offer}) => filterByRooms(offer) &&
  filterByType(offer) &&
    filterByGuests(offer) &&
    filterByPrice(offer) &&
    filterByFeatures(offer));
};
const setFiltersOffers = (offers) => {
  clearMarkers();
  const filteredData = setOffersFilter(offers);
  renderMarkers(filteredData.slice(0, MAX_OFFERS));
};

const setFiltersListener = (offers) => mapFilters.addEventListener('change', () => setFiltersOffers(offers));

export { setFiltersListener };
