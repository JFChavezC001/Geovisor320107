var map = L.map('map').setView([24.03446056585369, -102.26239117383791], 4.5);

//Capa base Open Street Maps
var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Capa base satelital
var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
}).addTo(map);

//Capa base Topografica
var USGS_USTopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
}).addTo(map);

//Marcadores
var maq=L.marker([19.43069168153862, -99.12485142529707]).addTo(map);

//Capas d edistritos de riego
var distritos = L.tileLayer.wms('http://localhost:8080/geoserver/ne/wms',{
    layers:'ne:Distritos_riego_2019_2020',
    visible:true,
    format: 'image/png',
    transparent: true,
    opacity: 0.7,
    maxZoom: 18,
    version: '1.1.0',
    attribution:'CIME- JFChavez'
});


//Controlador de Capas


var overlays = {
    "Distritos de riego": distritos,
    "Marker": maq,
};

var baseLayers = {
    "openStreetmaps": OpenStreetMap_Mapnik,
    "Satelital": Stadia_AlidadeSatellite,
    "Topográfico":USGS_USTopo
};


L.control.layers(baseLayers,overlays).addTo(map);