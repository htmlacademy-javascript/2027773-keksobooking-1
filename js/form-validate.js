import { updateSlider } from './slider.js';
import { getNoun } from './util.js';

const minPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const errorMessageRoom = {
  1: ['для 1 гостя'],
  2: ['для 2 гостей', 'для 1 гостя'],
  3: ['для 3 гостей', 'для 2 гостей', ' для 1 гостя'],
  100: ['не для гостей']
};

const capacityOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2','3'],
  100: ['0']
};

const minValueTitle = 30;
const maxValueTitle = 100;
const maxValuePrice = 100000;

const adForm = document.querySelector ('.ad-form');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const type = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const validateTitle = (value) => value.length >= minValueTitle && value.length <= maxValueTitle;

const getErrorMessageTitle = () => `Не менее ${ minValueTitle } и не более ${ maxValueTitle } символов`;

const validatePrice = (value) => value && value >= minPrice[type.value] && value <= maxValuePrice;

const getErrorMessagePrice = () => `Цена от ${ minPrice[type.value] } до ${ maxValuePrice }`;

const onChangeType = () => {
  updateSlider(minPrice[type.value]);
  price.placeholder = minPrice[type.value];
  pristine.validate(price);
};

const onChangeTime = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
};

const validateRoom = () => capacityOption[roomNumber.value].includes(capacity.value);

const getErrorMessageRoom = () => `Условия: ${roomNumber.value} ${getNoun(roomNumber.value,'комната', 'комнаты', 'комнат')}
  ${errorMessageRoom[roomNumber.value]} `;

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

export const setupValidation = () => {
  pristine.addValidator(title, validateTitle, getErrorMessageTitle);
  pristine.addValidator(price, validatePrice, getErrorMessagePrice);
  pristine.addValidator(capacity, validateRoom, getErrorMessageRoom);

  type.addEventListener ('change', onChangeType);
  timeIn.addEventListener ('change', onChangeTime);
  timeOut.addEventListener ('change', onChangeTime);
  adForm.addEventListener('submit', onFormSubmit);
};
