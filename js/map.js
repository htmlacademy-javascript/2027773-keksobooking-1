import { unlocksForm } from './form.js';
import { createCard } from './card.js';

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
const defaultLat = 35.68951;
const defaultLng = 139.69212;
const zoomDefault = 12;
const tileDefault = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attributTileDefault = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

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
    lat: defaultLat,
    lng: defaultLng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const onMainMarkerMove = (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
};


const initMap = (markers) => {
  map.on('load', () => {
    unlocksForm();
  })
    .setView(
      {
        lat: defaultLat,
        lng: defaultLng,
      }, zoomDefault);

  L.tileLayer(
    tileDefault,
    {
      attribution: attributTileDefault,
    },
  ).addTo(map);

  inputAddress.value = `${defaultLat}, ${defaultLng}`;

  renderMarkers(markers);
  mainMarker.addTo(map);
  mainMarker.on('move', onMainMarkerMove);
};

export { initMap };
