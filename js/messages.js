const successMessage = document.querySelector ('#success').content.querySelector('.success');
const errorMessage = document.querySelector ('#error').content.querySelector('.error');
const closeButton = errorMessage.querySelector ('.error__button');

const onEscClose = (message) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      message.remove();
    }
  });
};

const onCloseButton = (message) => {
  closeButton.addEventListener('click', () => {
    message.remove();
  });
};

const onClickFree = (message) => {
  document.addEventListener('click', () => {
    message.remove();
  });
};

const createSuccessMessageForm = () => {
  const message = successMessage.cloneNode(true);
  document.body.appendChild(message);
  onClickFree(message);
  onEscClose(message);
};

const createErrorMessageForm = () => {
  const message = errorMessage.cloneNode(true);
  document.body.appendChild(message);
  onClickFree(message);
  onEscClose(message);
  onCloseButton(message);
};

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
