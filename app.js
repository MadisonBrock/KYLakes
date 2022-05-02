
// var map;
// function initMap(){
//     map = new google.map.Map(document.getElementById('map'),{
//         center:{lat:36.854729,lng:-86.056221},
//         zoom:15
//     });
// }

function initMap() {
    const myLatLng = { lat: 36.85472, lng: -86.056221 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;

