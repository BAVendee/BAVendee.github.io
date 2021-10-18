ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_communes20210101_1 = new ol.format.GeoJSON();
var features_communes20210101_1 = format_communes20210101_1.readFeatures(json_communes20210101_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communes20210101_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communes20210101_1.addFeatures(features_communes20210101_1);
var lyr_communes20210101_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communes20210101_1, 
                style: style_communes20210101_1,
                interactive: true,
                title: 'communes-20210101'
            });
var format_NombredebnficiairesduRSA2019_2 = new ol.format.GeoJSON();
var features_NombredebnficiairesduRSA2019_2 = format_NombredebnficiairesduRSA2019_2.readFeatures(json_NombredebnficiairesduRSA2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NombredebnficiairesduRSA2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NombredebnficiairesduRSA2019_2.addFeatures(features_NombredebnficiairesduRSA2019_2);
var lyr_NombredebnficiairesduRSA2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NombredebnficiairesduRSA2019_2, 
                style: style_NombredebnficiairesduRSA2019_2,
                interactive: false,
    title: 'Nombre de bénéficiaires du RSA 2019<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_2_0.png" /> 0 - 19<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_2_1.png" /> 19 - 72<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_2_2.png" /> 72 - 154<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_2_3.png" /> 154 - 282<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_2_4.png" /> 282 - 615<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_2_5.png" /> 615 - 1502<br />'
        });
var format_Pointsdedistributiondaidealimentaire_3 = new ol.format.GeoJSON();
var features_Pointsdedistributiondaidealimentaire_3 = format_Pointsdedistributiondaidealimentaire_3.readFeatures(json_Pointsdedistributiondaidealimentaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdedistributiondaidealimentaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdedistributiondaidealimentaire_3.addFeatures(features_Pointsdedistributiondaidealimentaire_3);
var lyr_Pointsdedistributiondaidealimentaire_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointsdedistributiondaidealimentaire_3, 
                style: style_Pointsdedistributiondaidealimentaire_3,
                interactive: false,
                title: 'Points de distribution d'aide alimentaire'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_communes20210101_1.setVisible(true);lyr_NombredebnficiairesduRSA2019_2.setVisible(false);lyr_Pointsdedistributiondaidealimentaire_3.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_communes20210101_1,lyr_NombredebnficiairesduRSA2019_2,lyr_Pointsdedistributiondaidealimentaire_3];
lyr_communes20210101_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'Densité Population Vendée 2018_Population 
municipale 
2018': 'Densité Population Vendée 2018_Population 
municipale 
2018', });
lyr_NombredebnficiairesduRSA2019_2.set('fieldAliases', {'insee': 'insee', 'commune': 'commune', 'rsa': 'rsa', 'x': 'x', 'y': 'y', });
lyr_Pointsdedistributiondaidealimentaire_3.set('fieldAliases', {'code': 'code', 'nom': 'nom', 'x': 'x', 'y': 'y', 'RC': 'RC', 'desservi_par1': 'desservi_par1', 'SC': 'SC', 'desservi_par2': 'desservi_par2', 'SP': 'SP', 'desservi_par3': 'desservi_par3', 'SVP': 'SVP', 'desservi_par4': 'desservi_par4', 'CR': 'CR', 'desservi_par5': 'desservi_par5', 'HDC': 'HDC', 'desservi_par6': 'desservi_par6', 'BA': 'BA', 'desservi_par7': 'desservi_par7', 'ANDES': 'ANDES', 'desservi_par8': 'desservi_par8', 'nom_8': 'nom_8', 'EDC': 'EDC', 'desservi_par9': 'desservi_par9', 'nom_9': 'nom_9', });
lyr_communes20210101_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'Densité Population Vendée 2018_Population 
municipale 
2018': 'Range', });
lyr_NombredebnficiairesduRSA2019_2.set('fieldImages', {'insee': 'Range', 'commune': 'TextEdit', 'rsa': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Pointsdedistributiondaidealimentaire_3.set('fieldImages', {'code': 'Range', 'nom': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'RC': 'Range', 'desservi_par1': 'Range', 'SC': 'Range', 'desservi_par2': 'Range', 'SP': 'Range', 'desservi_par3': 'TextEdit', 'SVP': 'Range', 'desservi_par4': 'Range', 'CR': 'Range', 'desservi_par5': 'Range', 'HDC': 'Range', 'desservi_par6': 'Range', 'BA': 'Range', 'desservi_par7': 'Range', 'ANDES': 'Range', 'desservi_par8': 'TextEdit', 'nom_8': 'TextEdit', 'EDC': 'Range', 'desservi_par9': 'TextEdit', 'nom_9': 'TextEdit', });
lyr_communes20210101_1.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'Densité Population Vendée 2018_Population 
municipale 
2018': 'no label', });
lyr_NombredebnficiairesduRSA2019_2.set('fieldLabels', {'insee': 'no label', 'commune': 'no label', 'rsa': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Pointsdedistributiondaidealimentaire_3.set('fieldLabels', {'code': 'no label', 'nom': 'no label', 'x': 'no label', 'y': 'no label', 'RC': 'no label', 'desservi_par1': 'no label', 'SC': 'no label', 'desservi_par2': 'no label', 'SP': 'no label', 'desservi_par3': 'no label', 'SVP': 'no label', 'desservi_par4': 'no label', 'CR': 'no label', 'desservi_par5': 'no label', 'HDC': 'no label', 'desservi_par6': 'no label', 'BA': 'no label', 'desservi_par7': 'no label', 'ANDES': 'no label', 'desservi_par8': 'no label', 'nom_8': 'no label', 'EDC': 'no label', 'desservi_par9': 'no label', 'nom_9': 'no label', });
lyr_Pointsdedistributiondaidealimentaire_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});