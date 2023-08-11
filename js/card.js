import {getNoun} from './util.js';

const card = document.querySelector ('#card').content.querySelector('.popup');

const typeHouseDict = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const hidesBlock = (block, content) => {

  if (!content || content.length === 0) {
    block.style.display = 'none';

  }

};


const createPhotoList = (element, photos)=> {
  const imgItem = element.querySelector('.popup__photo');
  const photoContainer = element.querySelector ('.popup__photos');
  hidesBlock(photoContainer, photos);
  photoContainer.innerHTML = '';

  photos.forEach ((photo) => {
    const cloneImg = imgItem.cloneNode(true);
    cloneImg.src = photo;
    photoContainer.append(cloneImg);
  }
  );

};


const createFeatureList = (element, features) => {
  const featureContainer = element.querySelector('.popup__features');
  const featureItem = element.querySelector('.popup__feature');
  hidesBlock(featureContainer, features);
  featureContainer.innerHTML = '';

  features.forEach ((feature) => {
    const cloneFeature = featureItem.cloneNode(true);
    cloneFeature.classList = `popup__feature popup__feature--${ feature}`;
    featureContainer.append(cloneFeature);
  });

};

const createCard = (advert) => {
  const {offer, author} = advert;

  const cloneCard = card.cloneNode(true);
  cloneCard.querySelector('.popup__avatar').src = author.avatar;
  cloneCard.querySelector('.popup__title').textContent = offer.title;
  cloneCard.querySelector('.popup__text--address').textContent = offer.address;
  cloneCard.querySelector('.popup__type').textContent = typeHouseDict[offer.type];
  cloneCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cloneCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getNoun(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} ${getNoun(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cloneCard.querySelector('.popup__description').textContent = offer.description;
  const description = cloneCard.querySelector('.popup__description');
  hidesBlock(description, offer.description);

  createPhotoList(cloneCard, offer.photos);
  createFeatureList(cloneCard, offer.features);

  return cloneCard;
};

export {createCard};
