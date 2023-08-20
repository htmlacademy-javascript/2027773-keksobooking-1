import { disableForm, unlocksForm } from './form.js';

disableForm ();

const map = L.map('map-canvas')
  .on('load', () => {
    unlocksForm();
  })
  .setView(
    {
      lat: 35.6895,
      lng: 139.692,
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

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  document.querySelector('#address').value = evt.target.getLatLng();
});

export { createInnerMarker };
