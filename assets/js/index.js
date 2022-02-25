let map;

function initMap() {
  const ubicacion = { lat: -34.326083, lng: -58.805222 };
  // The map, centered
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
  });
  // The marker
  const marker = new google.maps.Marker({
    position: ubicacion,
    map: map,
  });
}

