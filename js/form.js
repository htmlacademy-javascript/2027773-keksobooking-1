import { defaultMainMarker, getDefaultInputAddress } from './map.js';

const mapFilter = document.querySelector ('.map__filters');
const adForm = document.querySelector ('.ad-form');
const fieldsetSelectsForm = adForm.querySelectorAll('fieldset, select');
const fieldsetSelectsFilter = mapFilter.querySelectorAll('fieldset, select');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

const switchSubmitButton = (state) => {
  submitButton.disabled = state;
};

const resetForm = () => {
  adForm.reset();
  getDefaultInputAddress();
  defaultMainMarker();
};

resetButton.addEventListener('click',resetForm);

const switchElementState = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

const disableForm = () => {
  adForm.classList.add ('ad-form--disabled');
  switchElementState(fieldsetSelectsForm, true);
};

const disableMapFilters = () => {
  mapFilter.classList.add ('map__filters--disabled');
  switchElementState(fieldsetSelectsFilter, true);
};

const unlockForm = () => {
  adForm.classList.remove ('ad-form--disabled');
  switchElementState(fieldsetSelectsForm, false);
};

const unlockMapFilters = () => {
  mapFilter.classList.remove ('map__filters--disabled');
  switchElementState(fieldsetSelectsFilter, false);

};

export { disableForm, unlockForm, disableMapFilters, unlockMapFilters, switchSubmitButton, resetForm };
