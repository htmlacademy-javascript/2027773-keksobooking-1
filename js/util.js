const generationRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return randomNumber;
};

const getRandomArr = (arr) => {
  const randomLength = generationRandomNumber(0, arr.length);
  const randomArr = [];

  for (let i = 0; i < randomLength; i++){
    randomArr.push(arr[i]);
  }

  return randomArr.sort();
};

const getArrayRandElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

const getRandomNumber = (min, max, numbAfter) => {

  if (min < 0 || max < 0) {

    return NaN;
  }

  const randomNumber = Math.random() * (max - min) + min;

  return Number(randomNumber.toFixed(numbAfter));
};

const checksStringLength = (string, length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

checksStringLength('проверяемая строка', 5);

const definesPolydrome = (string) => {
  const stringNormal = string.replaceAll(' ','').toLowerCase();
  let resultString = '';
  for (let i = stringNormal.length - 1; i >= 0; i--){
    resultString += stringNormal[i];
  }

  if (stringNormal === resultString) {
    return 'верно';
  } else {
    return 'нет';
  }
};

definesPolydrome('Топот');

const re = /\d/g;
const nNumb = NaN;

const extractsNumb = (string) => {
  const typeStr = String(string);
  const stringNormal = typeStr.replaceAll(' ','');
  const numbArr = stringNormal.match(re);
  const numbStr = numbArr ? numbArr.join('') : nNumb;
  const result = Number(numbStr);
  return result;
};

extractsNumb('dvwvv333');

const getString = function (string, minLength, addStr) {
  const addStrLength = minLength - string.length;
  if (addStrLength <= 0) {
    return string;
  }
  const result = addStr.slice(0, addStrLength % addStr.length) + addStr.repeat(addStrLength / addStr.length) + string;
  return result;
};
getString('1', 4, '0333');

const getNoun = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export { generationRandomNumber, getRandomArr, getArrayRandElement, getRandomNumber, getNoun, debounce };
