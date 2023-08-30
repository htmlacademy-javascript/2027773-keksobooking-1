import { generateOffers } from './data.js';
import { setupValidation } from './form-validate.js';
import { initMap } from'./map.js';
import { disableForm } from './form.js';

const offers = generateOffers();
disableForm();
initMap(offers);

setupValidation();
