/**
 * Interface para obtencao do json, e renderizacao das latitudes no mapa
 * 
 */


function criaSmpPosition(latitude,longitude){
	//dada uma latitude/longitude WGS, converte para SMP
	
	var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transforma de WGS 1984
    var toProjection   = new OpenLayers.Projection("EPSG:900913"); // para Spherical Mercator Projection
    return new OpenLayers.LonLat(longitude, latitude).transform( fromProjection, toProjection);	
	
}

function obtemPosicaoCentro(dadosJson){

	//dado um conjunto de dados no formato json, retorna um unico ponto (no formato SMP)
	//representando o centro das latitudes/longitudes desses dados.
	//<Media aritimetica>
	
	var latMedia=0;
	var longiMedia=0;
	
	
	for(var i=0;i<dadosJson.length;i++){
		latMedia+=dadosJson[i].latitude;
		longiMedia+=dadosJson[i].longitude;
	}
	
	latMedia=latMedia/dadosJson.length;
	longiMedia=longiMedia/dadosJson.length;
	
	return criaSmpPosition(latMedia,longiMedia);
	
}

function adicionaSmpPositions(dadosJson){	
	//Dado o array que representa o json, adiciona mais um atributo (posicao Smp) em cada campo do json.    
    for(var i=0;i<dadosJson.length;i++)
        dadosJson[i].smpPosition = criaSmpPosition(dadosJson[i].latitude,dadosJson[i].longitude);
    
}

function obtemConteudoDialogoApartirFormatoJson(pathJson,dados){
	
	dadosFormatados='';

	if(dados.endereco && dados.endereco != '')
		dadosFormatados += '<b>Endereço:</b> '+dados.endereco
	else if(dados.rua && dados.rua != '' )
		dadosFormatados += '<b>Endereço:</b> '+dados.rua
	else if(dados.endereço && dados.endereço != '')
		dadosFormatados += '<b>Endereço:</b> '+dados.endereço

	if(dados.cep && dados.cep != '')
		dadosFormatados += '<br><b>Cep:</b> '+dados.cep
	if(dados.bairro && dados.bairro != '')
		dadosFormatados += '<br><b>Bairro:</b> '+dados.bairro
	if(dados.telefone && dados.telefone != '')
		dadosFormatados += '<br><b>Telefone:</b> '+dados.telefone
	if(dados.horario && dados.horario != '')
		dadosFormatados += '<br><b>Horários:</b> '+dados.horario
	if(dados.residuos && dados.residuo != '')
		dadosFormatados += '<br><b>Residuos:</b> '+dados.residuos
	if(dados.empresa_coletora && dados.empresa_coletora != '')
		dadosFormatados += '<br><b>Empresa coletora:</b> '+dados.empresa_coletora
	return dadosFormatados;
	
}

function adicionaMarcadoresNaLayer(layerMarcadores,dadosJson,pathJson){

    var size = new OpenLayers.Size(21,25); 
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon;

    for(var i=0;i<dadosJson.length;i++) {
        icon = new OpenLayers.Icon('img/marker.png', size, offset);
        //console.debug(dadosJson[i]);
        var marker =new OpenLayers.Marker(dadosJson[i].smpPosition,icon);
        icon.imageDiv.dados=dadosJson[i]; //salva dados no proprio objeto
        $(icon.imageDiv).click(function(){

          tituloDialogo=this.dados.nome;
          conteudoDialogo=obtemConteudoDialogoApartirFormatoJson(pathJson,this.dados);

          //seta conteudo da modal
          $('#_modal_info .modal-title').html(tituloDialogo);
          $('#_modal_info .info-local').html(conteudoDialogo);

          $('#_modal_info').modal('show'); //exibe modal (dados restantes ja foram preenchidos pela select)

        });
        layerMarcadores.addMarker(marker);
        
    }
}


function resetaMapa(){
	map.destroy();
    map = new OpenLayers.Map("tour");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);	
}

function obtemDadosJsonERenderizaNoMapa(pathJson){
	//antiga obtemLatitudesCsvERenderizaNoMapa(..)
	    
	var pontos = new Array();
    var dadosJson = new Array();
    
    resetaMapa();
    
    //layer para marcadores(pontos)
    var layerMarcadores = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(layerMarcadores);      
    
    
    $.getJSON(pathJson,function(result){
        $.each(result, function(key, field){        	
        	//console.debug(field);
        	//adiciona cada entrada do json no array de dados        	
        	dadosJson.push(field);
        	
        	
        });
        
        adicionaSmpPositions(dadosJson);        
        adicionaMarcadoresNaLayer(layerMarcadores,dadosJson,pathJson); //passo o path, para sabermos o formato dos dados 
        var limitesDoMapa = layerMarcadores.getDataExtent();
   		map.zoomToExtent(limitesDoMapa);        
        
        
     });   
	       
}

function alteraCartilha(pathJson){

  if (pathJson.toLowerCase().indexOf("pilha") != -1){
    return;
  }




  if (pathJson.toLowerCase().indexOf("oleo") != -1){
    return;
  }


  if (pathJson.toLowerCase().indexOf("eletronicos") != -1){
    return;
  }


  if (pathJson.toLowerCase().indexOf("pilha") != -1){
    return;
  }


  if (pathJson.toLowerCase().indexOf("pneu") != -1){
    return;
  }

}

//manter a portabilidade com o html atual
function obtemLatitudesERenderizaNoMapa(pathJson){
	obtemDadosJsonERenderizaNoMapa(pathJson);  
}

function posicionaMapaPoa(){
	var latPoa=-30.0331;
	var longiPoa=-51.2300;
	var posicaoPoa=criaSmpPosition(latPoa,longiPoa);
	map.setCenter(posicaoPoa,12);
	
}
	
$(document).ready(function(){	

    map = new OpenLayers.Map("tour");
    mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    posicionaMapaPoa();


    $('#_modal_info').hide();


    
});
