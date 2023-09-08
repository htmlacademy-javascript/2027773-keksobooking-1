const successMessage = document.querySelector ('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);
const errorMessage = document.querySelector ('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);
const closeButton = errorMessage.querySelector ('.error__button');

const onEscClose = (evt) => {
  if (evt.code === 'Escape') {
    removeSuccessMessageForm();
    removeErrorMessageForm();
    document.removeEventListener('keydown',onEscClose);
  }
};

const onCloseButton = () => {
  removeErrorMessageForm();
  closeButton.removeEventListener('click', onCloseButton);
};

const onClickFree = () => {
  removeSuccessMessageForm();
  removeErrorMessageForm();
  document.removeEventListener('click', onClickFree);
};

const createSuccessMessageForm = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown',onEscClose);
  document.addEventListener('click', onClickFree);
};

function removeSuccessMessageForm () {
  successMessage.remove();
}

const createErrorMessageForm = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown',onEscClose);
  document.addEventListener('click', onClickFree);
  closeButton.addEventListener('click', onCloseButton);
};

function removeErrorMessageForm () {
  errorMessage.remove();
}

const createMessageErrorData = () => {
  const messageError = document.createElement('div');
  messageError.style.right = '0';
  messageError.style.left = '0';
  messageError.style.backgroundColor = '#dddddd';
  messageError.style.zIndex = '1000';
  messageError.style.padding = '10px';
  messageError.style.textAlign = 'center';
  messageError.style.color = '#ff6547';
  messageError.style.position = 'fixed';
  messageError.style.top = '0';
  messageError.textContent = 'Что-то пошло не так! Попробуйте обновить страницу!';
  document.body.appendChild(messageError);
};

export { createMessageErrorData, createSuccessMessageForm, createErrorMessageForm };
