function load_page () {

  function format(state) {
    return '<i class=" go-away-right fa fa-' + state.glyph + '"></i>' + state.text
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
    $('.info h3').text(e.added.text);
    $('.info p').text(residue_text[e.added.text]);
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
  "Latas com resto de Tinta" : ecopoint,
  "Móveis" : ecopoint,
  "Colchôes" : ecopoint,
  "Terra" : ecopoint,
  "Madeiras" : ecopoint,
  "Entulhos" : ecopoint,
  "Caliça" : ecopoint,
  "Cerâmica" : ecopoint,
  "Sucatas de ferro" : ecopoint,
  "Resíduos arbóreos" : ecopoint
}

residue_glyphs = {
  "Pilhas e Baterias" : "bolt",
  "Eletrônicos" : "laptop",
  "Óleo de Cozinha" : "tint",
  "Remédios" : "flask",
  "Lâmpadas" : "search",
  "Pneus" : "truck",
  "Madeiras" : "search",
  "Latas com resto de Tinta" : "search",
  "Móveis" : "search",
  "Colchôes" : "search",
  "Terra" : "search",
  "Entulhos" : "search",
  "Caliça" : "search",
  "Cerâmica" : "search",
  "Sucatas de ferro" : "wrench",
  "Resíduos arbóreos" : "leaf"
}

residue_text = {
  "Pilhas e Baterias" : "Para realizar o descarte de pilhas devemos, primeiramente, tomar cuidado ao manuseá-las: Caso haja vazamentos ou indícios de ferrugem, é necessário utilizar uma luva de proteção, um jornal, ou...",
  "Eletrônicos" : "Para descartar eletrônicos devemos",
  "Óleo de Cozinha" : "Para descartarmos óleos de cozinha ...",
  "Remédios" : "Para descartarmos Remédios",
  "Lâmpadas" : "Para descartarmos Lampadas...",
  "Pneus" : "truck",
  "Madeiras" : "search",
  "Latas com resto de Tinta" : "search",
  "Móveis" : "search",
  "Colchôes" : "search",
  "Terra" : "search",
  "Entulhos" : "search",
  "Caliça" : "search",
  "Cerâmica" : "search",
  "Sucatas de ferro" : "wrench",
  "Resíduos arbóreos" : "leaf"
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
