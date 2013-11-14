/**
 * Script para execucao das funcoes javascript após todos os componentes html
 * já estarem carregados.
 * 
 * 
 */

function coordenada(lat,lon){
    this.latitude=lat;
    this.longitude=lon;
}

function obtemLatitudesCsv(){

    
    pontos = new Array();
  
    //pontos para teste. Remover quando json estiver ok
    pontos[0]= new coordenada(-30.047009708,-51.2172603422);
    pontos[1]= new coordenada(-30.0494363151,-51.213368848);
    pontos[2]= new coordenada(-30.028117645,-51.168128152);
    pontos[3]= new coordenada(-30.2060986637,-51.1793673208);
    pontos[4]= new coordenada(-30.1157345234,-51.1788731001);
    pontos[5]= new coordenada(-30.0345027779,-51.2110262746);
    pontos[6]= new coordenada(-30.0477696456,-51.1549648444);
    
    path = "/home/mario/githubrepos/descartar/data/oleo.json";
    
    jSon= $.getJSON(path);

    //coletar latitudes do json, retornando em 'pontos'
    return pontos;
}






function pontosToPositions(pontos){

    var positions=new Array();
    
    for(var i=0;i<pontos.length;i++){
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection

        positions[i] = new OpenLayers.LonLat(pontos[i].longitude, pontos[i].latitude).transform( fromProjection, toProjection);

    }

    return positions;
}



function adicionaMarcadoresNaLayer(layerMarcadores,positions){
    
    size = new OpenLayers.Size(21,25);
 

    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    for(var i=0;i<positions.length;i++){
   
        var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);


        layerMarcadores.addMarker(new OpenLayers.Marker(positions[i],icon)); 
    }
}

//evento da jQuery
$(document).ready(function(){

    

    var longitude=-51.213368848;
    var latitude=-30.0494363151;

    var zoom           = 13;
    map = new OpenLayers.Map("map1");
    var mapnik         = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);

    //layer para marcadores(pontos)
    var layerMarcadores = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(layerMarcadores);

    pontos=obtemLatitudesCsv();
    positions=pontosToPositions(pontos);
    adicionaMarcadoresNaLayer(layerMarcadores,positions);

    map.setCenter(positions[0], zoom);
});
