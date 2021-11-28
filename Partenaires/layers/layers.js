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
var format_CommunesdeVende_1 = new ol.format.GeoJSON();
var features_CommunesdeVende_1 = format_CommunesdeVende_1.readFeatures(json_CommunesdeVende_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesdeVende_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesdeVende_1.addFeatures(features_CommunesdeVende_1);
var lyr_CommunesdeVende_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunesdeVende_1, 
                style: style_CommunesdeVende_1,
                interactive: true,
                title: '<img src="styles/legend/CommunesdeVende_1.png" /> Communes de Vendée'
            });
var format_PartenairesBA_2 = new ol.format.GeoJSON();
var features_PartenairesBA_2 = format_PartenairesBA_2.readFeatures(json_PartenairesBA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartenairesBA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartenairesBA_2.addFeatures(features_PartenairesBA_2);
var lyr_PartenairesBA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PartenairesBA_2, 
                style: style_PartenairesBA_2,
                interactive: true,
    title: 'Partenaires BA<br />\
    <img src="styles/legend/PartenairesBA_2_0.png" /> Charcuterie<br />\
    <img src="styles/legend/PartenairesBA_2_1.png" /> Plats Cuisinés<br />\
    <img src="styles/legend/PartenairesBA_2_2.png" /> Pain Brioche Viennoiseries<br />\
    <img src="styles/legend/PartenairesBA_2_3.png" /> Produits Laitiers<br />\
    <img src="styles/legend/PartenairesBA_2_4.png" /> Viande<br />\
    <img src="styles/legend/PartenairesBA_2_5.png" /> Divers<br />\
    <img src="styles/legend/PartenairesBA_2_6.png" /> Surgelés<br />\
    <img src="styles/legend/PartenairesBA_2_7.png" /> Oeufs<br />\
    <img src="styles/legend/PartenairesBA_2_8.png" /> Fruits et Légumes<br />\
    <img src="styles/legend/PartenairesBA_2_9.png" /> Conserves de Poisson<br />\
    <img src="styles/legend/PartenairesBA_2_10.png" /> Conserves de Légumes<br />\
    <img src="styles/legend/PartenairesBA_2_11.png" /> Grandes et Moyennes Surfaces<br />'
        });
var format_PartenairesBAVolumes2020_3 = new ol.format.GeoJSON();
var features_PartenairesBAVolumes2020_3 = format_PartenairesBAVolumes2020_3.readFeatures(json_PartenairesBAVolumes2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartenairesBAVolumes2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartenairesBAVolumes2020_3.addFeatures(features_PartenairesBAVolumes2020_3);
var lyr_PartenairesBAVolumes2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PartenairesBAVolumes2020_3, 
                style: style_PartenairesBAVolumes2020_3,
                interactive: true,
                title: 'Partenaires BA Volumes 2020'
            });
var group_Cartes = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_CommunesdeVende_1,],
                                title: "Cartes"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CommunesdeVende_1.setVisible(true);lyr_PartenairesBA_2.setVisible(false);lyr_PartenairesBAVolumes2020_3.setVisible(false);
var layersList = [group_Cartes,lyr_PartenairesBA_2,lyr_PartenairesBAVolumes2020_3];
lyr_CommunesdeVende_1.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_PartenairesBA_2.set('fieldAliases', {'libell�': 'libell�', 'field_2': 'field_2', 'Adresse/email/tel': 'Adresse/email/tel', 'Activit�': 'Activit�', 'Produits': 'Produits', 'Volume 2020': 'Volume 2020', 'x': 'x', 'y': 'y', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_PartenairesBAVolumes2020_3.set('fieldAliases', {'x': 'x', 'y': 'y', 'Volume 2020': 'Volume 2020', 'libell�': 'libell�', '0-100': '0-100', '100-500': '100-500', '500-1000': '500-1000', '1000-2500': '1000-2500', '2500-5000': '2500-5000', '5000-10000': '5000-10000', '10000-60000': '10000-60000', });
lyr_CommunesdeVende_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_PartenairesBA_2.set('fieldImages', {'libell�': 'TextEdit', 'field_2': 'TextEdit', 'Adresse/email/tel': 'TextEdit', 'Activit�': 'TextEdit', 'Produits': 'TextEdit', 'Volume 2020': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', });
lyr_PartenairesBAVolumes2020_3.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'Volume 2020': 'TextEdit', 'libell�': 'TextEdit', '0-100': 'TextEdit', '100-500': 'TextEdit', '500-1000': 'TextEdit', '1000-2500': 'TextEdit', '2500-5000': 'TextEdit', '5000-10000': 'TextEdit', '10000-60000': 'TextEdit', });
lyr_CommunesdeVende_1.set('fieldLabels', {});
lyr_PartenairesBA_2.set('fieldLabels', {'libell�': 'no label', 'field_2': 'no label', 'Adresse/email/tel': 'no label', 'Activit�': 'no label', 'Produits': 'no label', 'Volume 2020': 'no label', 'x': 'no label', 'y': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_PartenairesBAVolumes2020_3.set('fieldLabels', {'x': 'no label', 'y': 'no label', 'Volume 2020': 'no label', 'libell�': 'no label', '0-100': 'no label', '100-500': 'no label', '500-1000': 'no label', '1000-2500': 'no label', '2500-5000': 'no label', '5000-10000': 'no label', '10000-60000': 'no label', });
lyr_PartenairesBAVolumes2020_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});