import { setupValidation } from './form-validate.js';
import { disableMapFilters, disableForm, unlockMapFilters } from './form.js';
import { initMap, renderMarkers, markerGroup } from'./map.js';
import { getData } from './api.js';
import { setOffersFilter } from './filters.js';

const MAX_OFFERS = 10;

const mapFilters = document.querySelector('.map__filters');


const onMapLoad = () => {
  getData()
    .then((offers) => {
      unlockMapFilters();
      mapFilters.addEventListener('change', () => {
        markerGroup.clearLayers();
        renderMarkers(setOffersFilter(offers).slice(0,MAX_OFFERS));
      });
    });
};

disableForm();
initMap(onMapLoad);
disableMapFilters();
setupValidation();
