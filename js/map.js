import { unlockForm } from './form.js';
import { createCard } from './card.js';

const DEFAULT_LAT = 35.68951;
const DEFAULT_LNG = 139.69212;
const ZOOM_DEFAULT = 12;
const TITLE_DEFAULT = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUT_TILE_DEFAULT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const inputAddress = document.querySelector('#address');


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

const map = L.map('map-canvas');

const markerGroup = L.layerGroup().addTo(map);

const clearMarkers = () => markerGroup.clearLayers();

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
    .addTo(markerGroup)
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

const setDefaultInputAddress = () => {
  inputAddress.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;
};

const onMainMarkerMove = (evt) => {
  const coords = evt.target.getLatLng();
  inputAddress.value = `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
};

const setMainMarkerDefault = () => {
  mainMarker.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });
};

const setViewMapDefault = () => {
  map.setView(
    {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    }, ZOOM_DEFAULT);
};

const resetMap = () => {
  setDefaultInputAddress();
  setMainMarkerDefault();
  setViewMapDefault();
};

const initMap = (cb) => {
  map.on('load', () => {
    unlockForm();
    cb();
  })
    .setView(
      {
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG,
      }, ZOOM_DEFAULT);

  L.tileLayer(
    TITLE_DEFAULT,
    {
      attribution: ATTRIBUT_TILE_DEFAULT,
    },
  ).addTo(map);

  setDefaultInputAddress();
  mainMarker.addTo(map);
  mainMarker.on('move', onMainMarkerMove);
};


export { initMap, resetMap, renderMarkers, clearMarkers };

