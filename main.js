var mymap = L
    .map('mapid')
    .setView([
        51.505, -0.09
    ], 13);

L
    .tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contr' +
            'ibutors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
            ' Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'mapbox-access-token'
})
    .addTo(mymap);

var marker = L
    .marker([51.5, -0.09])
    .addTo(mymap);

var circle = L.circle([
    51.508, -0.11
], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 900
}).addTo(mymap);
