$(document).ready(function(){
  $( window ).resize(placeLogo);
  placeLogo();
  makeMap();
});

function placeLogo() {
  var bodyWidth = $('body').width();
  var imgWidth = $('.logo img').width();
  imgWidth = 320;
  $('.logo').css('margin-left', (bodyWidth-imgWidth)/2);
}

function makeMap(){ 
  var map = new L.Map('map', {
    attributionControl: false,
    zoomControl: false
  });
  var us = new L.LatLng(34.813803317113155, -97.6904296875);

  map.setView(us, 4);

  //L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
  //L.tileLayer('http://{s}.tiles.mapbox.com/v3/fsrw.map-8diawj50/{z}/{x}/{y}.png').addTo(map);
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/fsrw.map-ckjf0e4p/{z}/{x}/{y}.png').addTo(map);

  map.on('moveend', function(){
    console.log(map.getCenter(), map.getZoom());
  })
}