function makeMap(){ 
  var map = new L.Map('map', {
    attributionControl: false,
    zoomControl: false
  })

  var us = new L.LatLng(40, -140)

  map.setView([0,0], 5)

  L.tileLayer('http://{s}.tiles.mapbox.com/v3/fsrw.mg9npd88/{z}/{x}/{y}.png', {
    detectRetina: true
  }).addTo(map)

  setTimeout(function() {
    map.setView(randomLatLng(), 5, { pan: { animate: true, duration: 2, easeLinearity: .1} } )
    setInterval(function() {
      map.setView(randomLatLng(), 5, { pan: { animate: true, duration: 2, easeLinearity: .1} } )
    }, 10000)
  }, 3000)
}

function randomLatLng() {
  var lat = Math.floor(Math.random() * 181) - 90
  var lng = Math.floor(Math.random() * 361) - 180
  return [lat, lng]
}

function randomZoom() {
  return Math.floor(Math.random() * 18) + 1
}

$(document).ready(function(){
  makeMap()
})

