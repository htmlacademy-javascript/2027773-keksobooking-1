const OFFER_COUNT = 10;
const TITLE = 'Заголовок';
const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const NUMB_AFTER = 5;
const TYPE_HOUSING_ARR = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKOUT_ARR = ['12:00', '13:00', '14:00'];
const FEATURES_ARR = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESC_HOUSE = 'помещение огонь';
const PHOTOS_ARR = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',' https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',' https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const MAX_ROOMS = 10;
const MAX_GUESTS = 10;
const MAX_PRICE = 1000;

const getRandomNumb = (min, max, numbAfter) => {
  if(min < 0 || max < 0) {
    return NaN;
  }

  const randomNumb = Math.random() * (max - min) + min;
  return Number(randomNumb.toFixed(numbAfter));
};

const genRandomNumb = (min, max) => {

  const randomNumb = Math.random() * (max - min + 1) + min;
  const randomN = Math.floor(randomNumb);
  return String(randomN).padStart(2, '0');
};

const arrayRandElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
const arrNotRepeat = [];
const genAvatar = () => {
  let random;
  while (!random || arrNotRepeat.includes(random)) {
    random = genRandomNumb(1, OFFER_COUNT);
  }
  arrNotRepeat.push(random);
  return {
    avatar: `img/avatars/user${random}.png`
  };
};


const buildOffer = (location) => ({
  title: TITLE,
  address: `${location.lat} - ${location.lng}`,
  price:+genRandomNumb(1,MAX_PRICE),
  type: arrayRandElement(TYPE_HOUSING_ARR),
  rooms:  +genRandomNumb(1,MAX_ROOMS),
  guests:  +genRandomNumb(1,MAX_GUESTS),
  checkout: arrayRandElement(CHECKOUT_ARR),
  features: arrayRandElement(FEATURES_ARR),
  description: DESC_HOUSE,
  photos: arrayRandElement(PHOTOS_ARR)
});

const buildLocation = () => ({
  lat: getRandomNumb(LAT_MIN,LAT_MAX,NUMB_AFTER),
  lng: getRandomNumb(LNG_MIN,LNG_MAX,NUMB_AFTER)
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
export{offersBooking};
