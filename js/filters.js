import { clearMarkers, renderMarkers } from'./map.js';
import { debounce } from './util.js';

const MAX_OFFERS = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const DEFAULT_VALUE = 'any';
const TIMEOUT_DELAY = 500;

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

const isDefault = (selectValue) => selectValue.value === DEFAULT_VALUE;

const filterOfferElement = (offer, housing) => offer === Number(housing.value) || isDefault(housing);

const filterByType = (offer) => offer.type === housingType.value || isDefault(housingType);
const filterByRooms = (offer) => filterOfferElement(offer.rooms, housingRoom);
const filterByGuests = (offer) => filterOfferElement(offer.guests, housingGuests);
const filterByPrice = (offer, checkPriceFn) => checkPriceFn(offer.price) || isDefault(housingPrice);

const filterByFeatures = ({features}, checkedFeatures) => {
  if (!checkedFeatures.length) {
    return true;
  }

  return features && checkedFeatures.every((element) => features.includes(element.value));
};

const setOffersFilter = (offers) => {
  const checkPriceFn = price[housingPrice.value];
  const checkedFeatures = [...featuresFilter].filter((feature) => feature.checked);

  return offers.filter(({offer}) => (
    filterByRooms(offer) &&
    filterByType(offer) &&
    filterByGuests(offer) &&
    filterByPrice(offer, checkPriceFn) &&
    filterByFeatures(offer, checkedFeatures)
  ));
};

const setFiltersOffers = (offers) => {
  clearMarkers();
  const filteredData = setOffersFilter(offers);
  renderMarkers(filteredData.slice(0, MAX_OFFERS));
};

const resetFilters = () => mapFilters.reset();

const setFiltersListener = (offers) => {
  mapFilters.addEventListener('change', debounce(() => setFiltersOffers(offers), TIMEOUT_DELAY));
  mapFilters.addEventListener('reset', debounce(() => setFiltersOffers(offers), TIMEOUT_DELAY));
};
export { setFiltersListener, resetFilters };
