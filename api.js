
$(document).ready(function() {
  load_page();
});

function load_page () {

  map = new OpenLayers.Map("demoMap");
  map.addLayer(new OpenLayers.Layer.OSM());
  map.zoomToMaxExtent();

  // var data = {
  //     resource_id: '3076913f-38dd-4634-b26e-305c80d88576', // the resource id
  //     limit: 5,
  //   };
  //   $.ajax({
  //     url: 'http://datapoa.com.br/api/action/datastore_search',
  //     data: data,
  //     dataType: 'jsonp',
  //     success: function(data) {
  //       console.debug(data);
  //     }
  // }); 
 
}
