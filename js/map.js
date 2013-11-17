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


function adicionaMarcadoresNaLayer(layerMarcadores,dadosJson){
    
    var size = new OpenLayers.Size(21,25); 
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon;
    
    
    for(var i=0;i<dadosJson.length;i++){   
        icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);
        //console.debug(dadosJson[i]);
        var marker =new OpenLayers.Marker(dadosJson[i].smpPosition,icon);        
        icon.imageDiv.dados=dadosJson[i]; //salva dados no proprio objeto
        $(icon.imageDiv).click(function(){
        	
        	tituloDialogo=this.dados.nome;
        	conteudoDialogo='Endereco: '+this.dados.rua+'<br>Bairro: '+this.dados.bairro;
        	
        	bootStrapModal='<div class="modal fade" id="_modal_info">\
          	  <div class="modal-dialog">\
          	    <div class="modal-content">\
          	      <div class="modal-header">\
          	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
          	        <h4 class="modal-title">'+tituloDialogo+'</h4>\
          	      </div>\
          	      <div class="modal-body">\
          	        <p>'+conteudoDialogo+'</p>\
          	      </div>\
          	      <div class="modal-footer">\
          	        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>\
        		 </div>\
          	    </div>\
          	  </div>\
          	</div>';

        	$('body').append(bootStrapModal);//adiciona DOM da modal
        	
        	$('#_modal_info').modal('show'); //exibe-a
        	
        	//vincula evento que remove o DOM criado ao fecharmos a modal
        	$('#_modal_info').on('hidden.bs.modal', function () {
        		this.remove(); //remove dom desse elemento
        		
        	});
        	
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

function obtemDadosJsonERenderizaNoMapa(pathJson,zoom){
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
        adicionaMarcadoresNaLayer(layerMarcadores,dadosJson);        
        posicaoCentro=obtemPosicaoCentro(dadosJson);        
        map.setCenter(posicaoCentro, zoom);        
        
     });   
	       
}

//manter a portabilidade com o html atual
function obtemLatitudesERenderizaNoMapa(pathJson, zoom){
	obtemDadosJsonERenderizaNoMapa(pathJson,zoom);	
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
        
    
});
