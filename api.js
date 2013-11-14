
$(document).ready(function() {
  load_page();
});

var residue_options = {
  "Pilhas e Baterias" : "",
  "Eletrônicos" : "",
  "Óleo de Cozinha" : "",
  "Remédios" : "",
  "Lâmpadas" : "",
  "Pneus" : "",
  "Madeiras" : "",
  "Latas com resto de Tinta" : "",
  "Móveis" : "",
  "Colchôes" : "",
  "Terra" : "",
  "Madeiras" : "",
  "Entulhos" : "",
  "Caliça" : "",
  "Cerâmica" : "",
  "Sucatas de ferro" : "",
  "Eletrodomésticos" : "",
  "Resíduos arbóreos" : ""
}

function select_options() {
  var opt = [];
  var i = 0;

  for (o in residue_options) {
    opt.push( {id: i, text: o} )
    i += 1;
  }

  return opt;
}

function load_page () {

  var map = new OpenLayers.Map("demoMap");
  map.addLayer(new OpenLayers.Layer.OSM());
  map.zoomToMaxExtent();

  $("#select_query").select2({
    width:"resolve",
    data: select_options()
  });
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

function bind_menu() {

}
