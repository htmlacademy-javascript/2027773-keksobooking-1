const mapFilter = document.querySelector ('.map__filters');
const adForm = document.querySelector ('.ad-form');

const disabledForm = (form) => {
  form.classList.add (`${form.className}--disabled`);

  for(let i = 0; i < form.children.length; i++){
    form[i].disabled = true;
  }
};

disabledForm(mapFilter);
disabledForm(adForm);

export { disabledForm };
