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
      if (!response.ok) {
        throw new Error();
      } return response.json();

    })
    .catch(() => {
      throw new Error(errorText());
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA, 'GET');

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, 'POST', body);

export {getData, sendData};
