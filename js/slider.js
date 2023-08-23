
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const maxValue = 100000;

noUiSlider.create(sliderElement, {
  start: 0,
  step: 1000,
  range: {
    'min': 0,
    'max': maxValue,
  },
});
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = parseInt(sliderElement.noUiSlider.get(), 10);
});

const updateSlider = (value) => {
  sliderElement.noUiSlider.set([value]);
};

export { updateSlider };
