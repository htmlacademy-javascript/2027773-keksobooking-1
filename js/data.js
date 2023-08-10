import { generationRandomNumber, getRandomArr, getArrayRandElement, getRandomNumber } from './util.js';

const OFFER_COUNT = 10;
const TITLE = 'Заголовок';
const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const NUMB_AFTER = 5;
const TYPE_HOUSING = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const DESC_HOUSE = 'помещение огонь';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const MAX_ROOMS = 10;
const MAX_GUESTS = 10;
const MAX_PRICE = 1000;

const arrNotRepeat = [];
const genAvatar = () => {
  let random;

  while (!random || arrNotRepeat.includes(random)) {
    random = generationRandomNumber(1, OFFER_COUNT);
  }

  arrNotRepeat.push(random);

  return {
    avatar: `img/avatars/user${random.toString().padStart(2, '0')}.png`
  };
};

const buildOffer = (location) => ({
  title: TITLE,
  address: `${location.lat} - ${location.lng}`,
  price: generationRandomNumber(1, MAX_PRICE),
  type: getArrayRandElement(TYPE_HOUSING),
  rooms:  generationRandomNumber(1, MAX_ROOMS),
  guests:  generationRandomNumber(1, MAX_GUESTS),
  checkin:getArrayRandElement(CHECKIN),
  checkout: getArrayRandElement(CHECKOUT),
  features: getRandomArr(FEATURES),
  description: DESC_HOUSE,
  photos: PHOTOS
});

const buildLocation = () => ({
  lat: getRandomNumber(LAT_MIN, LAT_MAX, NUMB_AFTER),
  lng: getRandomNumber(LNG_MIN, LNG_MAX, NUMB_AFTER)
});

const buildBookingOffer = () => {
  const location = buildLocation();

  return {
    author: genAvatar(),
    offer: buildOffer(location),
    location
  };
};

const offersBooking = () => Array.from ({length: OFFER_COUNT}, buildBookingOffer);

export { offersBooking };
