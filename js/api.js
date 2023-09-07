import { createMessageErrorData, createErrorMessageForm } from './messages.js';

const BASE_URL = 'https://28.javascript.pages.academy/keksobooking';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ErrorText = {
  GET_DATA: createMessageErrorData,
  SEND_DATA: createErrorMessageForm,
};

const load = (route, errorText, method = 'GET', body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (response.ok) {
        return response.json();
      } throw new Error();

    })
    .catch(() => {
      errorText();
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA, 'GET');

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, 'POST', body);

export {getData, sendData};

// const load = (route, error, method = 'GET', body = null) => {
//   fetch(`${BASE_URL}${route}`, {method, body})
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       } return response.json();
//     })
//     .catch(() => error
//     );
// };

// const getData = () => load(Route.GET_DATA, createMessageErrorData());
// console.log(load(Route.GET_DATA, createMessageErrorData()));
// const sendData = (body) => {
//   fetch(
//     'https://28.javascript.pages.academy/keksobooking',
//     {
//       method: 'POST',
//       body,
//     })
//     .then((response) => {

//       if (response.ok){
//         switchSubmitButton(false);
//         createSuccessMessageForm();
//         resetForm();
//       } else {
//         switchSubmitButton(false);
//         createErrorMessageForm();
//       }
//     })
//     .catch(() => {
//       createErrorMessageForm();
//     });
// };

// export { getData, sendData };
