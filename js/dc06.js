//base layer 
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});


var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});


//declare red icon
var redIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//add red color to the marker and red marker layer
var red1 = L.marker([41.79332488660367, -87.58768701170196], {icon: redIcon}).bindPopup('Train Station 55th - 56th - 57th St'),
    red2    = L.marker([41.78777173674993, -87.58889480110366], {icon: redIcon}).bindPopup('Train Station Univ. of Chicago/59th St');
var redIcons = L.layerGroup([red1, red2]);

// Initialize the map, define start point and zoom, add base layer and red icons
var map = L.map('map', {
    center: [41.79167400041029, -87.59375471560098],
    zoom: 10,
    layers: [osm, redIcons]
});


// Marker
var marker = L.marker([41.79405383580597, -87.58331596434346]).addTo(map);
// Circle at specified coordinates
var circle = L.circle([41.79676375074049, -87.5882387739507], {
    color: 'red',
    fillColor:'#30f',
    fillOpacity: 0.3, //transparency
    radius: 100

}).addTo(map);
// Polygon: boundaries
var polygon = L.polygon([
    [41.79073260286023, -87.583153305691],
    [41.79565994912727, -87.58195167606002],
    [41.79958500373512, -87.58923988378986]


]).addTo(map);
//pop-up to the marker, circle, polygon
marker.bindPopup("<b>Hello!</b><br>Here is Solstice");
circle.bindPopup("Trader Joes's Area").openPopup();
polygon.bindPopup("<b>Area near lake</b>");


//Pop-up with 'click' event
var popup = L.popup(); //declare a popup
function onMapClick(e) //create a listener fucntion
{
    popup.setLatLng(e.latlng)
         .setContent("You clicked the map at" + e.latlng.toString())
         .openOn(map);
}

map.on('click', onMapClick);



// layer control setup
var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "RedIcons": redIcons
};

// layer control
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);