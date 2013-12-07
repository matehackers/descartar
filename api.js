function load_page () {
  
  function format(state) {
    return '<button type="button" class="btn btn-default btn-sm go-away-right"><span class="glyphicon glyphicon-' + state.glyph + '"></span></button>' + state.text; 
  };

  $("#select_query").select2({
    width: "element",
    data: select_options(),
    formatResult: format,
    formatSelection: format,
    escapeMarkup: function(m) { return m; }
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
  obtemLatitudesERenderizaNoMapa('data/pneus.json');
}

function oil()
{
  obtemLatitudesERenderizaNoMapa('data/oleo.json');
}

function electronics()
{
  obtemLatitudesERenderizaNoMapa('data/eletronicos.json');
}

function batteries()
{
  obtemLatitudesERenderizaNoMapa('data/pilhas.json');
}

function where_bought()
{
}

function medicine()
{
  obtemLatitudesERenderizaNoMapa('data/remedios.json');
}

function ecopoint()
{
  obtemLatitudesERenderizaNoMapa('data/ecopontos.json');
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

residue_glyphs = {
  "Pilhas e Baterias" : "search",
  "Eletrônicos" : "search",
  "Óleo de Cozinha" : "search",
  "Remédios" : "search",
  "Lâmpadas" : "search",
  "Pneus" : "search",
  "Madeiras" : "search",
  "Latas com resto de Tinta" : "search",
  "Móveis" : "search",
  "Colchôes" : "search",
  "Terra" : "search",
  "Madeiras" : "search",
  "Entulhos" : "search",
  "Caliça" : "search",
  "Cerâmica" : "search",
  "Sucatas de ferro" : "search",
  "Eletrodomésticos" : "search",
  "Resíduos arbóreos" : "search"
}

function select_options() {
  var opt = [];
  var i = 0;

  for (o in residue_options) {
    opt.push( { id: i, text: o, glyph: residue_glyphs[o] } )
    i += 1;
  }

  return opt;
}
