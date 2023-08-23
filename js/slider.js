
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  start: 0,
  step: 1000,
  range: {
    'min': 0,
    'max': 100000,
  },
});
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = parseInt(sliderElement.noUiSlider.get(), 10);
});

const createSlider = (value) => {
  sliderElement.noUiSlider.set([value]);
};

export { createSlider };
