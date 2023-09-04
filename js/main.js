import { createCard } from './card.js';
import { setupValidation } from './form-validate.js';
import { createInnerMarker } from'./map.js';
import { getData } from './api.js';
import { disableMapFilters } from './form.js';

const MAX_OFFERS = 10;

disableMapFilters();

getData((offers) => {
  offers.slice(0, MAX_OFFERS).forEach ((offer) => {
    createInnerMarker(offer, createCard(offer));
  });
});

setupValidation();
