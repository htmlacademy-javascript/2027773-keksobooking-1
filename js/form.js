import { resetMap } from './map.js';
import { resetSlider } from './slider.js';
import { resetPreviews } from './photo.js';
import { resetFilters } from './filters.js';

const mapFilter = document.querySelector ('.map__filters');
const adForm = document.querySelector ('.ad-form');
const fieldsetSelectsForm = adForm.querySelectorAll('fieldset, select');
const fieldsetSelectsFilter = mapFilter.querySelectorAll('fieldset, select');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

const setDisableState = (state) => {
  submitButton.disabled = state;
};

const resetForm = () => {
  resetSlider();
  adForm.reset();
  resetMap();
  resetPreviews();
  resetFilters();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

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

export { disableForm, unlockForm, disableMapFilters, unlockMapFilters, setDisableState, resetForm };
