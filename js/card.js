import { offersBooking } from './data.js';

const card = document.querySelector ('#card').content.querySelector('.popup');
const cardContainer = document.querySelector ('#map-canvas');
const cloneCard = card.cloneNode(true);
const arrayCards = offersBooking ();

const createPhotoList = (element)=> {
  const photo = cloneCard.querySelector('.popup__photo');
  const photoContainer = cloneCard.querySelector ('.popup__photos');
  const arrayPhoto = element.offer.photos;
  photoContainer.innerHTML = '';

  for (let i = 0; i < arrayPhoto.length; i++) {
    const cloneImg = photo.cloneNode(true);
    cloneImg.src = element.offer.photos[i];
    photoContainer.append(cloneImg);
  }

};

const createTypeHousing = (element) => {
  const objTypeHousingRu = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель'
  };
  const typeHousingEng = element.offer.type;
  cloneCard.querySelector('.popup__type').textContent = objTypeHousingRu[typeHousingEng];
};

const createFeatureList = (element) => {
  const arrayFeatures = element.offer.features;
  const featureList = cloneCard.querySelectorAll('.popup__feature');
  const modifiers = arrayFeatures.map((arrayFeature) => `popup__feature--${ arrayFeature}`);

  featureList.forEach((featureListItem) => {
    const modifier = featureListItem.classList[1];

    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });
};

const createCard = (element) => {
  cloneCard.querySelector('.popup__avatar').src = element.author.avatar;
  cloneCard.querySelector('.popup__title').textContent = element.offer.title;
  cloneCard.querySelector('.popup__text--address').textContent = element.offer.address;
  cloneCard.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  cloneCard.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  cloneCard.querySelector('.popup__description').textContent = element.offer.description;
  createTypeHousing(element);
  createPhotoList(element);
  createFeatureList(element);
  cardContainer.appendChild(cloneCard);
};
createCard(arrayCards[0]);
