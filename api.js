$(document).ready(function() {
  load_page();
});

function load_page () {

  map = new OpenLayers.Map("tour");
  map.addLayer(new OpenLayers.Layer.OSM());
  map.zoomToMaxExtent();

  $("#select_query").select2({width:"element"});
}
