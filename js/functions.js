const checksStringLength = (string, length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

checksStringLength('проверяемая строка', 55);

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

const getRandomNumb = (min, max, numbAfter) => {
  if(min >= 0 && max >= 0) {
    const randomNumb = Math.random() * (max - min + 1) + min;
    Number(randomNumb.toFixed(numbAfter));
  } else {
    return NaN;
  }
};
getRandomNumb(90,50,40);
