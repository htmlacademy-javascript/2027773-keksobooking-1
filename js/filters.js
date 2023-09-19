const housingType = document.querySelector('#housing-type');
const housingRoom = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingPrice = document.querySelector('#housing-price');
const features = document.querySelectorAll('[name=features]');

const price = {
  any:(value) => !value,
  middle: (value) => value >= 10000 && value <= 50000,
  low: (value) => value <= 10000,
  high: (value) => value >= 50000,
};

function setOffersFilter(offers) {
  const checkFn = price[housingPrice.value];

  const featureCheck = [...features].filter((feature) => feature.checked);

  const featureCheckValue = [];
  featureCheck.forEach((element) => {
    featureCheckValue.push(element.value);

    return featureCheckValue;

  });

  const checkFeatures = (feature) => {

    if(feature) {
      let lengthFeature = 0;

      for(let i = 0; i < featureCheckValue.length; i++) {

        for(let j = 0; j < feature.length; j++) {

          if(feature[j] === featureCheckValue[i]){
            lengthFeature++;
          }
        }

        if(featureCheckValue.length === lengthFeature){

          return true;
        }
      }
    }
  };
  const filterOfferElement = (offer, housing) => offer === Number(housing.value) || housing.value === 'any';

  const filterOffers = offers
    .filter(({offer}) => offer.type === housingType.value || housingType.value === 'any')
    .filter(({offer}) => filterOfferElement(offer.rooms, housingRoom))
    .filter(({offer}) => filterOfferElement(offer.guests, housingGuests))
    .filter(({offer}) => checkFn (offer.price) || housingPrice.value === 'any')
    .filter(({offer}) => checkFeatures(offer.features) || featureCheckValue.length === 0);

  return filterOffers;

}

export {setOffersFilter};
