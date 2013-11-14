
$(document).ready(function() {

  load_page();

  $("#select_query").on("change", function(e){
    residue_options[e.added.text]();
  });

});

function tires()
{
  alert("Pneus");
}

function oil()
{
  alert("oil");
}

function electronics()
{
  alert("Eletrônicos");
}

function batteries()
{
  alert("Batteries");
}

function where_bought()
{
  alert("Where bought");
}

function medicine()
{
  alert("Medicine");
}

function ecopoint()
{
  alert("Ecopoint");
}

residue_options = {
  "Pilhas e Baterias" : batteries,
  "Eletrônicos" : electronics,
  "Óleo de Cozinha" : oil,
  "Remédios" : medicine,
  "Lâmpadas" : where_bought,
  "Pneus" : tires,
  "Madeiras" : ecopoint,
  "Latas com resto de Tinta" : ecopoint,
  "Móveis" : ecopoint,
  "Colchôes" : ecopoint,
  "Terra" : ecopoint,
  "Madeiras" : ecopoint,
  "Entulhos" : ecopoint,
  "Caliça" : ecopoint,
  "Cerâmica" : ecopoint,
  "Sucatas de ferro" : ecopoint,
  "Eletrodomésticos" : ecopoint,
  "Resíduos arbóreos" : ecopoint
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
