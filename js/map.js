import { disableForm, unlocksForm } from './form.js';

const inputAddress = document.querySelector('#address');
const defaultLat = 35.68951;
const defaultLng = 139.69212;

disableForm();

const map = L.map('map-canvas')
  .on('load', () => {
    unlocksForm();
  })
  .setView(
    {
      lat: defaultLat,
      lng: defaultLng,
    }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createInnerMarker = (offer, card) => {
  const {location} = offer;
  const innerMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: pinIcon,
    }
  );
  innerMarker
    .addTo(map)
    .bindPopup(card);
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

inputAddress.value = `${defaultLat}, ${defaultLng}`;


mainMarker.addTo(map);

mainMarker.on('move', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

export { createInnerMarker };
