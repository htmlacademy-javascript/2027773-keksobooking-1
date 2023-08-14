import { generateOffers } from './data.js';
import { createCard } from './card.js';
import {} from './form.js';

const offers = generateOffers();
const card = createCard(offers[0]);
const cardContainer = document.querySelector ('#map-canvas');

cardContainer.appendChild(card);
