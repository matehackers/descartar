function load_page () {

  $("#select_query").select2({
    width: "element",
    data: select_options()
  });
}

$(document).ready(function() {

  load_page();

  $("#select_query").on("change", function(e){
    residue_options[e.added.text]();
  });

});

function tires()
{
  obtemLatitudesERenderizaNoMapa('data/pneus.json', 13);
}

function oil()
{
  obtemLatitudesERenderizaNoMapa('data/oleo.json', 13);
}

function electronics()
{
  obtemLatitudesERenderizaNoMapa('data/eletronicos.json', 13);
}

function batteries()
{
  obtemLatitudesERenderizaNoMapa('data/pilhas.json', 13);
}

function where_bought()
{
}

function medicine()
{
  obtemLatitudesERenderizaNoMapa('data/remedios.json', 13);
}

function ecopoint()
{
  obtemLatitudesERenderizaNoMapa('data/ecopontos.json', 13);
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
