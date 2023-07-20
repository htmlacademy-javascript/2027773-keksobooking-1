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
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const MAX_ROOMS = 10;
const MAX_GUESTS = 10;
const MAX_PRICE = 1000;

const getRandomNumber = (min, max, numbAfter) => {

  if (min < 0 || max < 0) {

    return NaN;
  }

  const randomNumber = Math.random() * (max - min) + min;

  return Number(randomNumber.toFixed(numbAfter));
};

const generationRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return randomNumber;
};

const getArrayRandElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

const getRandomArr = (arr) => {
  const randomLength = generationRandomNumber(0, arr.length);
  const randomArr = [];

  for (let i = 0; i < randomLength; i++){
    randomArr.push(arr[i]);
  }

  return randomArr.sort();
};

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
  checkout: getArrayRandElement(CHECKOUT),
  features: getRandomArr(FEATURES),
  description: DESC_HOUSE,
  photos: getRandomArr(PHOTOS)
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

const offersBooking = Array.from ({length: OFFER_COUNT}, buildBookingOffer);

export { offersBooking };
