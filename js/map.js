import { unlockForm, unlockMapFilters } from './form.js';
import { createCard } from './card.js';
import { getData } from './api.js';

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinInnerIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const inputAddress = document.querySelector('#address');
const DEFAULT_LAT = 35.68951;
const DEFAULT_LNG = 139.69212;
const ZOOM_DEFAULT = 12;
const TITLE_DEFAULT = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUT_TILE_DEFAULT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAX_OFFERS = 10;

const map = L.map('map-canvas');

const renderInnerMarker = (offer) => {
  const {location} = offer;
  const innerMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: pinInnerIcon,
    }
  );
  innerMarker
    .addTo(map)
    .bindPopup(createCard(offer));
};

const renderMarkers = (markers) => {

  markers.forEach ((marker) => {
    renderInnerMarker(marker);
  });
};

const mainMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const getDefaultInputAddress = () => {
  inputAddress.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;
};

const onMainMarkerMove = (evt) => {
  const coords = evt.target.getLatLng();
  inputAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
};

const defaultMainMarker = () => {
  mainMarker.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });
};

const initMap = () => {
  map.on('load', () => {
    unlockForm();
    getData()
      .then((offers) => {
        if (offers) {
          unlockMapFilters();
          renderMarkers(offers.slice(0,MAX_OFFERS));
        }
      });
  })
    .setView(
      {
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG,
      }, ZOOM_DEFAULT);

  mainMarker.on('move', (evt) => {
    inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  L.tileLayer(
    TITLE_DEFAULT,
    {
      attribution: ATTRIBUT_TILE_DEFAULT,
    },
  ).addTo(map);

  getDefaultInputAddress();
  mainMarker.addTo(map);
  mainMarker.on('move', onMainMarkerMove);
};


export { initMap, defaultMainMarker, getDefaultInputAddress };

