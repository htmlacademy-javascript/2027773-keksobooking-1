import { generateOffers } from './data.js';
import { createCard } from './card.js';
import './slider.js';
import './form-validate.js';
import { createInnerMarker } from'./map.js';

const offers = generateOffers();
const card = createCard(offers[0]);
const cardContainer = document.querySelector ('#map-canvas');
cardContainer.appendChild(card);

offers.forEach ((offer) => {
  createInnerMarker(offer, createCard(offer));
});

