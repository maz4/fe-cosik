function initMap() {
  'use strict';
  var position = {
    lat: 34.8689738,
    lng: -111.7700938
  };

  var map = new google.maps.Map(document.querySelector('.js-google-map'), {
    zoom: 7,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
}
