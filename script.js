window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
 return [
     {
         name: 'Box',
         location: {
             lat: -33.88002,
             lng: 151.19643,
         }
     },
 ];
}

function renderPlaces(places) {
 let scene = document.querySelector('a-scene');

 places.forEach((place) => {
     let latitude = place.location.lat;
     let longitude = place.location.lng;

     let model = document.createElement('a-box');
     model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
     model.setAttribute('material', 'color: yellow');

     model.addEventListener('loaded', () => {
         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
     });

     scene.appendChild(model);
 });
}
