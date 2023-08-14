import { generateOffers } from './data.js';
import { createCard } from './card.js';

const offers = generateOffers();
const card = createCard(offers[0]);
const cardContainer = document.querySelector ('#map-canvas');

cardContainer.appendChild(card);
