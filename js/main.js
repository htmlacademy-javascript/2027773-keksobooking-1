import { setupValidation } from './form-validate.js';
import { disableMapFilters, disableForm } from './form.js';
import { initMap } from'./map.js';

disableForm();
initMap();
disableMapFilters();
setupValidation();
