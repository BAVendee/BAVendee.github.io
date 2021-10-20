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
var format_NombredebnficiairesduRSA2019_1 = new ol.format.GeoJSON();
var features_NombredebnficiairesduRSA2019_1 = format_NombredebnficiairesduRSA2019_1.readFeatures(json_NombredebnficiairesduRSA2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NombredebnficiairesduRSA2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NombredebnficiairesduRSA2019_1.addFeatures(features_NombredebnficiairesduRSA2019_1);
var lyr_NombredebnficiairesduRSA2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NombredebnficiairesduRSA2019_1,
maxResolution:560.0893230452392,
 minResolution:0.28004466152261964,

                style: style_NombredebnficiairesduRSA2019_1,
                interactive: true,
    title: 'Nombre de bénéficiaires du RSA 2019<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_1_0.png" /> 0 - 19<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_1_1.png" /> 19 - 72<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_1_2.png" /> 72 - 154<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_1_3.png" /> 154 - 282<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_1_4.png" /> 282 - 615<br />\
    <img src="styles/legend/NombredebnficiairesduRSA2019_1_5.png" /> 615 - 1502<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_NombredebnficiairesduRSA2019_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NombredebnficiairesduRSA2019_1];
lyr_NombredebnficiairesduRSA2019_1.set('fieldAliases', {'insee': 'insee', 'commune': 'Commune', 'rsa': 'Nombre de bénéficiaires RSA', 'x': 'x', 'y': 'y', });
lyr_NombredebnficiairesduRSA2019_1.set('fieldImages', {'insee': 'Range', 'commune': 'TextEdit', 'rsa': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_NombredebnficiairesduRSA2019_1.set('fieldLabels', {'insee': 'no label', 'commune': 'inline label', 'rsa': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_NombredebnficiairesduRSA2019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});