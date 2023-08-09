import { offersBooking } from './data.js';

const card = document.querySelector ('#card').content.querySelector('.popup');
const cardContainer = document.querySelector ('#map-canvas');

const createsCard = offersBooking ();

createsCard.forEach(()=>{
  const cloneCard = card.cloneNode(true);
  // cloneCard.querySelector('.popup__avatar').src = author.avatar;
  cardContainer.appendChild(cloneCard);
});

