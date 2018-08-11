var mymap = L
    .map('mapid')
    .setView([
        41.05, 29
    ], 11);

L
    .tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contr' +
            'ibutors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
            ' Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXBpbWFzdGVyIiwiYSI6ImNqYm5sMTVscDJvNGYzM29mbHd5ZHM1a3AifQ.euPNykwbEh' +
            'nYNk3uVyeIEg'
})
    .addTo(mymap);

// Map Marker
var marker = L
    .marker([41.1, 29.2])
    .addTo(mymap);

// Map Circle
var circle = L.circle([
    41.09, 29.0001
], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 900
}).addTo(mymap);

// Map Polygon
var polygon = L.polygon([
    [
        41, 29.08
    ],
    [
        41, 29.06
    ],
    [41.1, 29.047]
]).addTo(mymap);

/* // Map Popup
var popup = L
    .popup()
    .setLatLng([41.5, 29.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
    */

/*  // Map Click
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
*/