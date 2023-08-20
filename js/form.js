const mapFilter = document.querySelector ('.map__filters');
const adForm = document.querySelector ('.ad-form');
const fieldsetSelects = document.querySelectorAll('fieldset, select');

const disableForm = () => {
  adForm.classList.add ('ad-form--disabled');
  mapFilter.classList.add ('map__filters--disabled');

  fieldsetSelects.forEach((fieldsetSelect) => {
    fieldsetSelect.disabled = true;
  });

};

const unlocksForm = () => {
  adForm.classList.remove ('ad-form--disabled');
  mapFilter.classList.remove ('map__filters--disabled');

  fieldsetSelects.forEach((fieldsetSelect) => {
    fieldsetSelect.disabled = false;
  });

};

export { disableForm, unlocksForm };
