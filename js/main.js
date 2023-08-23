import { generateOffers } from './data.js';
import { createCard } from './card.js';
import { setupValidation } from './form-validate.js';
import { createInnerMarker } from'./map.js';

const offers = generateOffers();

offers.forEach ((offer) => {
  createInnerMarker(offer, createCard(offer));
});

setupValidation();
