import {createSlider} from './slider.js';

const adForm = document.querySelector ('.ad-form');
const title = adForm.querySelector('#title');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(title, validateTitle, 'Не менне 30 и не более 100 символов');

const price = adForm.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const validatePrice = (value) => {
  const type = adForm.querySelector('#type');

  return value && value >= minPrice[type.value] && value <= 100000;

};

const getErrorMessage = () => {
  const type = adForm.querySelector('#type');

  return `Цена от ${minPrice[type.value]} до 100000`;
};

pristine.addValidator(price, validatePrice, getErrorMessage);

const onChangeType = () => {
  const type = adForm.querySelector('#type');
  createSlider(minPrice[type.value]);
  price.placeholder = minPrice[type.value];
  pristine.validate(price);
};

// createSlider(price.placeholder);

adForm.querySelector('#type').addEventListener ('change', onChangeType);

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const onChangeTime = () => {
  timeIn.addEventListener ('change', ()=> {
    timeOut.value = timeIn.value;
  });
  timeOut.addEventListener ('change', ()=> {
    timeIn.value = timeOut.value;
  });
};

onChangeTime();


const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const capacityOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат': ['не для гостей']
};

const validateRoom = () => capacityOption[roomNumber.value].includes(capacity.value);

const getErrorMessageRoom = () => `Условия: ${roomNumber.value}
  ${capacityOption[roomNumber.value]} `;

pristine.addValidator(capacity, validateRoom, getErrorMessageRoom);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


