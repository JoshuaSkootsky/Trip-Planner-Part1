const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoianNrb290c2t5IiwiYSI6ImNrNXdwY20wNTFoM2gzbXJ6ZTk4Z3RiZGoifQ.BCnA1KAwI_dzeV-bAoi0Pg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const eleMark = document.createElement("div");
// mapElement - set width and height
eleMark.style.width = "32px";
eleMark.style.height = "39px";
eleMark.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


//new mapboxgl.Marker(YOUR_DOM_ELEMENT).setLngLat(YOUR_COORDS_ARRAY).addTo(map);

// view local: file:///.... Trip-Planner-Part1/public/index.html
new mapboxgl.Marker(eleMark).setLngLat([-74.009, 40.705]).addTo(map);

/* var marker = new mapboxgl.Marker()
.setLngLat([30.5, 50.5])
.addTo(map); */