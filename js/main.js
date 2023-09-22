import { setupValidation } from './form-validate.js';
import { disableMapFilters, disableForm, unlockMapFilters } from './form.js';
import { initMap, renderMarkers } from'./map.js';
import { getData } from './api.js';
import { setFiltersListener } from './filters.js';

const MAX_OFFERS = 10;

const onMapLoad = () => {
  getData()
    .then((offers) => {
      unlockMapFilters();
      renderMarkers(offers.slice(0,MAX_OFFERS));
      setFiltersListener(offers);
    });
};
disableForm();
initMap(onMapLoad);
disableMapFilters();
setupValidation();
