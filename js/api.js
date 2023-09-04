import { createMessageErrorData, createSuccessMessageForm, createErrorMessageForm } from './messages.js';
import { unlockMapFilters, switchSubmitButton, resetForm } from './form.js';

const getData = (onSuccess) => {
  fetch('https://28.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      if(offers) {
        onSuccess(offers);
        unlockMapFilters();
      }
    })
    .catch(() => {
      createMessageErrorData();
    });
};

const sendData = (body) => {
  fetch(
    'https://28.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {

      if (response.ok){
        switchSubmitButton(false);
        createSuccessMessageForm();
        resetForm();
      } else {
        switchSubmitButton(false);
        createErrorMessageForm();
      }
    })
    .catch(() => {
      createErrorMessageForm();
    });
};

export { getData, sendData };
