function load_page () {

  function format(state) {
    return '<i class=" go-away-right fa fa-' + state.glyph + '"></i>' + state.text
  };

  $("#select_query").select2({
    width: "element",
    placeholder: "Selecione ou digite o tipo de resíduo",
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
    $('.info p').html(residue_text[e.added.text]); //utiliza texto no formato html
    $('.info #icone').attr('class', 'fa fa-' + residue_glyphs[e.added.text]+' fa-stack-1x fa-inverse');


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
  
  "Pilhas e Baterias" : "As pilhas e baterias de uso doméstico apresentam um grande perigo quando descartadas incorretamente. Na composição dessas pilhas são encontrados metais pesados como: cádmio, chumbo, mercúrio, que são extremamente perigosos à saúde humana. Dentre os males provocados pela contaminação com metais pesados está o câncer e mutações genéticas.\
                        Só para esclarecer, as pilhas e baterias em funcionamento não oferecem riscos, uma vez que o perigo está contido no interior delas. O problema é quando elas são descartadas e passam por deformações na cápsula que as envolvem: amassam, estouram, e deixam vazar o líquido tóxico de seus interiores. Esse líquido se acumula na natureza, ele representa o lixo não biodegradável, ou seja, não é consumido com o passar dos anos. A contaminação envolve o solo e lençóis freáticos prejudicando a agricultura e a hidrografia.\
                        <p>Fonte: <a href=\"http://www.mundoeducacao.com/quimica/descarte-correto-pilhas-baterias-usadas.htm\">Mundo Educação</a></p>",
  
  
  "Eletrônicos" : "<p>Se você  quer ser ambientalmente responsável no que se refere ao seu lixo eletrônico,  siga as orientações abaixo:</p><p>1. <font color=\"red\"><strong>Exercite o consumo consciente. </strong></font>Antes       de comprar um aparelho, verifique se: </p><p>a. você realmente\
precisa dele;</p><p>b. o aparelho possui sistema de economia de        energia (se não tiver, não compre)</p><p>c. a empresa produtora oferece \
sistema de        recolhimento e reciclagem, quando você quiser se desfazer do equipamento        (como são poucas as empresas que oferecem esse\
serviço, não dá para        descartar todas as outras. Mas dê preferência aos produtos de empresas        mais responsáveis).</p><p>2. <font color=\"red\"><strong>Preserve recursos naturais. </strong></font>Durante       o uso, siga as recomendações do fabricante para redução do uso de\
energia       e para aumentar a durabilidade do aparelho e/ou das baterias. Não deixe os       aparelhos ligados sem necessidade.</p><p>3. <font color=\"red\"><strong>Amplie a vida útil de seu       equipamento.</strong></font> Não se desfaça do aparelho       por “modismos”. Troque\
apenas quando realmente for impossível continuar       com o que você já tem.</p><p>4. <font color=\"red\"><strong>Responsabilize-se pelo destino\
de       seu lixo eletrônico.</strong></font> Para descartar o equipamento usado,       entre em contato preferencialmente com instituições que possam\
      reutilizá-lo. Veja no site a lista. Se não houver como reutilizar seus       equipamentos, garanta que a sucata eletrônica será reciclada\
adequadamente, doando seus resíduos preferencialmente para cooperativas de catadores capacitadas. </p>\
<p>Fonte: <a href=\"http://www.institutogea.org.br/elixo.html\">Instituto Gea</a></p>",


  "Óleo de Cozinha" : "<p>Ao ser descartado nos ralos de pias e esgotos, além de causar um mau cheiro, o óleo:</p><ul><li>Prejudica o funcionamento das estações de tratamento de água, entope canos, pode romper redes de coleta e encarece o processo de tratamento;</li>\
<li>Quando chega a rios e oceanos, cria uma barreira que dificulta a entrada de luz e bloqueia a oxigenação da água, o que compromete o equilíbrio ambiental;</li>\
<li>Exige uso de produtos químicos altamente tóxicos para limpeza de encanamentos contaminados;</li>\
<li>Impermeabiliza solos, dificulta o escoamento da água das chuvas, contamina o lençol freático e, em decomposição, emite grande quantidade de gases tóxicos na atmosfera.</li>\
</ul>\
<p>O que fazer?</p>\
Se você ainda tem o hábito de jogar o óleo de cozinha pela pia, dá para ajudar a mudar essa realidade. Armazene-o em garrafas e procure postos de coleta. O Instituto Akatu tem uma lista nacional de postos de coleta de óleo usado.\
<p>Fonte: <a href=\"http://super.abril.com.br/blogs/ideias-verdes/descarte-de-oleo-de-cozinha-e-coisa-seria-ja-pensou-nisso/\">Super Interessante</a></p>",


  "Remédios" : "<p><strong>Como fazer a separação</strong><br>\
      É necessário tratar medicamentos e objetos perfurocortantes de modo distinto dos demais resíduos em sua casa. Contudo, não se preocupe em colocar a pomada aqui, o frasco de pílulas acolá, a cartela de comprimidos em outro lugar. O importante, mesmo, é diferenciar o que pode machucar quem irá manusear seu lixo daquilo que está protegido por uma embalagem. Sendo assim, ampolas, seringas, agulhas e frascos de vidro danificados devem ser entregues à farmácia em uma sacola diferente daquela que contém os demais produtos, como restos de remédios e itens fora do prazo de validade. Se a loja não disponibilizar coletores com as devidas separações, informe a quem receber de suas mãos o que cada sacola contém.\
      </p><p><strong>E as embalagens? </strong><br>\
      Nada de usar potinhos de remédios para guardar moedas, temperos... \"As embalagens dos medicamentos não devem ser reaproveitadas para o armazenamento de outras substâncias de consumo devido à potencial contaminação residual. As embalagens secundárias (como caixas de papelão, por exemplo) podem ser recicladas\", alerta Dórea. Mas a reciclagem fica a cargo das empresas gestoras de resíduos. Na dúvida, leve tudo junto para a farmácia, sem fazer distinção entre o que é reciclável ou não. Especialistas farão isso por você.</p>\
      <p>Fonte: <a href=\"http://revistavivasaude.uol.com.br/saude-nutricao/116/como-descartar-medicamentos-corretamente-devolver-remedios-vencidos-ou-suas-274262-1.asp/\">Revista Viva Saúde</a></p>",
  

  "Lâmpadas" : "<p>Assim como o e-lixo as lâmpadas fluorescentes devem ser descartadas de forma correta, e o motivo é o mesmo em ambos os casos: existência de substâncias tóxicas que prejudicam o meio ambiente e trazem problemas de saúde à população.</p>\
                <p>No caso das lâmpadas fluorescentes, o protagonista da substância tóxica é o chamado mercúrio e fósforo. Infelizmente, muitas pessoas ainda não tem conhecimento dessa realidade e por isso, não sabem o quão perigoso é descartar esse tipo de lâmpada nos lixos comuns. A consequência é o descarte incorreto.</p>\
                <p>O certo é entregar as lâmpadas aos fabricantes, os quais, segundo lei já existente, são responsáveis em recolhê-las. Outra opção é levá-las aos centros de descarte, mas vale mencionar que alguns cobram uma taxa média de R$1 para recebê-la. A justificativa dessa cobrança é as lâmpadas passarão posteriormente por um processo de descontaminação.</p>\
                <p>Esse procedimento ocorre da seguinte forma:</p>\
                <ul>\
                    <li>As lâmpadas recebidas são separadas de acordo com seu tamanho</li>\
                    <li>Os elementos em metal são removidos e direcionados para o processo de fundição.</li>\
                    <li>Trituração da lâmpada</li>\
                    <li>O vidro, como sabemos, pode ser reciclado, por isso, no processo de descontaminação das lâmpadas fluorescentes eles são direcionados à indústria de cerâmica.</li>\
                    <li>Remoção do mercúrio e das demais substâncias tóxicas. Todas são encaminhadas aos institutos de pesquisas.</li></ul>\
                <p>Agora que você já sabe como funciona o descarte correto e a descontaminação das lâmpadas fluorescentes, faça a sua parte e ajude a conscientizar seus amigos e parentes</p>\
                <p>Fonte: <a href=\"http://www.dinamicambiental.com.br/blog/meio-ambiente/descarte-descontaminacao-lampadas-fluorescentes/\">Dinâmica Ambiental</a></p>",
  "Pneus" : "<p><strong>Como é o processo de reciclagem de pneus</strong></p>\
                <p>O processo de recuperação e regeneração dos pneus exige a separação da borracha vulcanizada de outros componentes (como metais e tecidos, por exemplo). Os pneus são cortados em lascas e purificados por um sistema de peneiras. As lascas são moídas e depois submetidas à digestão em vapor d'água e produtos químicos, como álcalis e óleos minerais, para desvulcanizá-las. O produto obtido pode ser então refinado em moinhos até a obtenção de uma manta uniforme ou extrudado para a obtenção de grânulos de borracha. Este material tem várias utilidades: cobrir áreas de lazer e quadras esportivas, fabricar tapetes para automóveis; passadeiras; saltos e solados de sapatos; colas e adesivos; câmaras de ar; rodos domésticos; tiras para indústrias de estofados; buchas para eixos de caminhões e ônibus, entre outros produtos.</p>\
                <p>Fonte: <a href=\"http://ambientes.ambientebrasil.com.br/residuos/reciclagem/reciclagem_de_pneus.html\">Ambiente Brasil</a></p>",
  
  "Madeiras" : "search",


  "Latas com resto de Tinta" : "<p><strong>Na hora de se desfazer destes produtos químicos é necessário ter cuidados especiais</strong></p>\
  <p>Depois que uma reforma acaba, você já se perguntou o que fazer com as tintas que sobram? E os vernizes, como destiná-los corretamente? E as embalagens desses produtos? Será que elas podem ser jogadas em lixo comum?</p>\
  <p>Antes de tudo é importante lembrar que tintas, vernizes e solventes pedem grande cuidado na hora do descarte.</p>\
  <p>Segundo Zilda Veloso, gerente de Resíduos Sólidos do Ministério do Meio Ambiente (MMA), o descarte indevido das sobras de alguns materiais químicos pode gerar sérios problemas. “Os restos de tintas, vernizes e solventes podem ser absorvidos pelo solo ou atingir as águas subterrâneas contaminando o lençol freático”, explica. Ainda segundo a especialista, o descarte em bueiros, pias e tanques pode levar para a rede fluvial a contaminação dos cursos d´água. “Se (o material tóxico) for transportado para uma estação de tratamento, ele pode, dependendo da toxicidade, reduzir a carga microbiana. Além disso, dependendo da quantidade de compostos voláteis descartada e se o ambiente for &nbsp;confinado, pode gerar gases ou provocar explosões, caso tenha uma fonte de calor”, completa.</p>\
  <p>Com relação às latas e embalagens, segundo a cartilha sobre resíduos da Associação Brasileira dos Fabricantes de Tintas (ABRAFATI), o correto é inutilizar as latas com furos, cortes ou prensagem para evitar outro uso já que elas possuem poluentes e não podem ser destinadas a coleta municipal de lixo.</p>\
  <p>Fonte: <a href=\"http://www.ecycle.com.br/component/content/article/35/437-saiba-informacoes-importantes-sobre-o-descarte-de-tintas-e-vernizes.html\">eCycle</a></p>",

  "Móveis" : "<p><strong>Saiba como ocorre a reciclagem da madeira:</strong></p>\
              <p>Os resíduos de madeira que estão inutilizados são encaminhados para unidades industriais, onde numa máquina de estilhamento a madeira é cortada em menores partes, que são lavadas e depois secas para a próxima parte do processo, a moagem que consiste em cortar os resíduos de madeira em pedacinhos menores e mais finos ainda. Após isso os pedacinhos são transferidos à outra máquina que os compacta, ou seja, deixam eles todos juntinhos e bem apertados, numa placa composta 3 camadas, é o processo chamada de formação de colchão que é prensado novamente e recebe uma camada de cola, após seco está pronto o aglomerado de madeira!</p>\
              <p><strong>Saiba porque é importante reciclar a madeira:</strong></p>\
              <ul>\
                <li>Tem baixo custo</li>\
                <li>Maior resistência às pragas (Por ex: Cupins)</li>\
                <li>Diminui o desmatamento</li>\
                <li>Menor extração de matéria- prima</li>\
                <li>Diminui o acúmulo de lixo proveniente de entulho</li>\
                <li>E você ajuda o meio ambiente.</li>\
              </ul>\
              <p>Fonte: <a href=\"http://blogdacasinhanaarvore.blogspot.com.br/2011/04/reciclando-madeira-sabe-como-fazer.html\">Blog da Casinha na Árvore</a></p>",
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
