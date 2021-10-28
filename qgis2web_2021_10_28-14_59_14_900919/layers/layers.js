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
var format_parEpiceriesdescommunes_2 = new ol.format.GeoJSON();
var features_parEpiceriesdescommunes_2 = format_parEpiceriesdescommunes_2.readFeatures(json_parEpiceriesdescommunes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parEpiceriesdescommunes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parEpiceriesdescommunes_2.addFeatures(features_parEpiceriesdescommunes_2);
var lyr_parEpiceriesdescommunes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parEpiceriesdescommunes_2, 
                style: style_parEpiceriesdescommunes_2,
                interactive: true,
                title: 'par Epiceries des communes'
            });
var format_parEpiceriessolidaires_3 = new ol.format.GeoJSON();
var features_parEpiceriessolidaires_3 = format_parEpiceriessolidaires_3.readFeatures(json_parEpiceriessolidaires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parEpiceriessolidaires_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parEpiceriessolidaires_3.addFeatures(features_parEpiceriessolidaires_3);
var lyr_parEpiceriessolidaires_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parEpiceriessolidaires_3, 
                style: style_parEpiceriessolidaires_3,
                interactive: true,
                title: 'par Epiceries solidaires'
            });
var format_parHaltesduCoeur_4 = new ol.format.GeoJSON();
var features_parHaltesduCoeur_4 = format_parHaltesduCoeur_4.readFeatures(json_parHaltesduCoeur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parHaltesduCoeur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parHaltesduCoeur_4.addFeatures(features_parHaltesduCoeur_4);
var lyr_parHaltesduCoeur_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parHaltesduCoeur_4, 
                style: style_parHaltesduCoeur_4,
                interactive: true,
                title: 'par Haltes du Coeur'
            });
var format_parCroixRouge_5 = new ol.format.GeoJSON();
var features_parCroixRouge_5 = format_parCroixRouge_5.readFeatures(json_parCroixRouge_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parCroixRouge_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parCroixRouge_5.addFeatures(features_parCroixRouge_5);
var lyr_parCroixRouge_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parCroixRouge_5, 
                style: style_parCroixRouge_5,
                interactive: true,
                title: 'par Croix Rouge'
            });
var format_parStVincentdePaul_6 = new ol.format.GeoJSON();
var features_parStVincentdePaul_6 = format_parStVincentdePaul_6.readFeatures(json_parStVincentdePaul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parStVincentdePaul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parStVincentdePaul_6.addFeatures(features_parStVincentdePaul_6);
var lyr_parStVincentdePaul_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parStVincentdePaul_6, 
                style: style_parStVincentdePaul_6,
                interactive: true,
                title: 'par St Vincent de Paul'
            });
var format_parSecoursPopulaire_7 = new ol.format.GeoJSON();
var features_parSecoursPopulaire_7 = format_parSecoursPopulaire_7.readFeatures(json_parSecoursPopulaire_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parSecoursPopulaire_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parSecoursPopulaire_7.addFeatures(features_parSecoursPopulaire_7);
var lyr_parSecoursPopulaire_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parSecoursPopulaire_7, 
                style: style_parSecoursPopulaire_7,
                interactive: true,
                title: 'par Secours Populaire'
            });
var format_parSecoursCatholique_8 = new ol.format.GeoJSON();
var features_parSecoursCatholique_8 = format_parSecoursCatholique_8.readFeatures(json_parSecoursCatholique_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parSecoursCatholique_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parSecoursCatholique_8.addFeatures(features_parSecoursCatholique_8);
var lyr_parSecoursCatholique_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parSecoursCatholique_8, 
                style: style_parSecoursCatholique_8,
                interactive: true,
                title: 'par Secours Catholique'
            });
var format_parRestosduCoeur_9 = new ol.format.GeoJSON();
var features_parRestosduCoeur_9 = format_parRestosduCoeur_9.readFeatures(json_parRestosduCoeur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parRestosduCoeur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parRestosduCoeur_9.addFeatures(features_parRestosduCoeur_9);
var lyr_parRestosduCoeur_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parRestosduCoeur_9, 
                style: style_parRestosduCoeur_9,
                interactive: true,
                title: 'par Restos du Coeur'
            });
var format_parBanqueAlimentaire_10 = new ol.format.GeoJSON();
var features_parBanqueAlimentaire_10 = format_parBanqueAlimentaire_10.readFeatures(json_parBanqueAlimentaire_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parBanqueAlimentaire_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parBanqueAlimentaire_10.addFeatures(features_parBanqueAlimentaire_10);
var lyr_parBanqueAlimentaire_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parBanqueAlimentaire_10, 
                style: style_parBanqueAlimentaire_10,
                interactive: true,
                title: 'par Banque Alimentaire'
            });
var format_BnficiairesBA2021_11 = new ol.format.GeoJSON();
var features_BnficiairesBA2021_11 = format_BnficiairesBA2021_11.readFeatures(json_BnficiairesBA2021_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BnficiairesBA2021_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BnficiairesBA2021_11.addFeatures(features_BnficiairesBA2021_11);
var lyr_BnficiairesBA2021_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BnficiairesBA2021_11, 
                style: style_BnficiairesBA2021_11,
                interactive: true,
    title: 'Bénéficiaires BA 2021<br />\
    <img src="styles/legend/BnficiairesBA2021_11_0.png" /> 1 - 5<br />\
    <img src="styles/legend/BnficiairesBA2021_11_1.png" /> 5 - 10<br />\
    <img src="styles/legend/BnficiairesBA2021_11_2.png" /> 10 - 20<br />\
    <img src="styles/legend/BnficiairesBA2021_11_3.png" /> 20 - 40<br />\
    <img src="styles/legend/BnficiairesBA2021_11_4.png" /> 40 - 60<br />\
    <img src="styles/legend/BnficiairesBA2021_11_5.png" /> 60 - 80<br />\
    <img src="styles/legend/BnficiairesBA2021_11_6.png" /> 80 - 100<br />\
    <img src="styles/legend/BnficiairesBA2021_11_7.png" /> 100 - 500<br />\
    <img src="styles/legend/BnficiairesBA2021_11_8.png" /> 500 - 1000<br />\
    <img src="styles/legend/BnficiairesBA2021_11_9.png" /> 1000 - 3650<br />'
        });
var group_Communesdsservies = new ol.layer.Group({
                                layers: [lyr_parEpiceriesdescommunes_2,lyr_parEpiceriessolidaires_3,lyr_parHaltesduCoeur_4,lyr_parCroixRouge_5,lyr_parStVincentdePaul_6,lyr_parSecoursPopulaire_7,lyr_parSecoursCatholique_8,lyr_parRestosduCoeur_9,lyr_parBanqueAlimentaire_10,lyr_BnficiairesBA2021_11,],
                                title: "Communes désservies"});
var group_Cartes = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_CommunesdeVende_1,],
                                title: "Cartes"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CommunesdeVende_1.setVisible(true);lyr_parEpiceriesdescommunes_2.setVisible(false);lyr_parEpiceriessolidaires_3.setVisible(false);lyr_parHaltesduCoeur_4.setVisible(false);lyr_parCroixRouge_5.setVisible(false);lyr_parStVincentdePaul_6.setVisible(false);lyr_parSecoursPopulaire_7.setVisible(false);lyr_parSecoursCatholique_8.setVisible(false);lyr_parRestosduCoeur_9.setVisible(false);lyr_parBanqueAlimentaire_10.setVisible(false);lyr_BnficiairesBA2021_11.setVisible(false);
var layersList = [group_Cartes,group_Communesdsservies];
lyr_CommunesdeVende_1.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_parEpiceriesdescommunes_2.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parEpiceriessolidaires_3.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parHaltesduCoeur_4.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parCroixRouge_5.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parStVincentdePaul_6.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parSecoursPopulaire_7.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parSecoursCatholique_8.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parRestosduCoeur_9.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_parBanqueAlimentaire_10.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom des Communes', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'aide_alimentaire_asso_maires_nom': 'aide_alimentaire_asso_maires_nom', 'aide_alimentaire_asso_maires_pt_distrib1': 'aide_alimentaire_asso_maires_pt_distrib1', 'aide_alimentaire_asso_maires_desservi_par1': 'aide_alimentaire_asso_maires_desservi_par1', 'aide_alimentaire_asso_maires_pt_distrib2': 'aide_alimentaire_asso_maires_pt_distrib2', 'aide_alimentaire_asso_maires_desservi_par2': 'aide_alimentaire_asso_maires_desservi_par2', 'aide_alimentaire_asso_maires_pt_distrib3': 'aide_alimentaire_asso_maires_pt_distrib3', 'aide_alimentaire_asso_maires_desservi_par3': 'aide_alimentaire_asso_maires_desservi_par3', 'aide_alimentaire_asso_maires_pt_distrib4': 'aide_alimentaire_asso_maires_pt_distrib4', 'aide_alimentaire_asso_maires_desservi_par4': 'aide_alimentaire_asso_maires_desservi_par4', 'aide_alimentaire_asso_maires_pt_distrib5': 'aide_alimentaire_asso_maires_pt_distrib5', 'aide_alimentaire_asso_maires_desservi_par5': 'aide_alimentaire_asso_maires_desservi_par5', 'aide_alimentaire_asso_maires_pt_distrib6': 'aide_alimentaire_asso_maires_pt_distrib6', 'aide_alimentaire_asso_maires_desservi_par6': 'aide_alimentaire_asso_maires_desservi_par6', 'aide_alimentaire_asso_maires_pt_distrib7': 'aide_alimentaire_asso_maires_pt_distrib7', 'aide_alimentaire_asso_maires_desservi_par7': 'aide_alimentaire_asso_maires_desservi_par7', 'aide_alimentaire_asso_maires_pt_distrib8': 'aide_alimentaire_asso_maires_pt_distrib8', 'aide_alimentaire_asso_maires_desservi_par8': 'aide_alimentaire_asso_maires_desservi_par8', 'aide_alimentaire_asso_maires_nom_8': 'aide_alimentaire_asso_maires_nom_8', 'aide_alimentaire_asso_maires_pt_distrib9': 'aide_alimentaire_asso_maires_pt_distrib9', 'aide_alimentaire_asso_maires_desservi_par9': 'aide_alimentaire_asso_maires_desservi_par9', 'aide_alimentaire_asso_maires_nom_9': 'aide_alimentaire_asso_maires_nom_9', 'aide_alimentaire_asso_maires_pt_distrib10': 'aide_alimentaire_asso_maires_pt_distrib10', 'aide_alimentaire_asso_maires_desservi_par10': 'aide_alimentaire_asso_maires_desservi_par10', });
lyr_BnficiairesBA2021_11.set('fieldAliases', {'insee': 'Code INSEE', 'nom': 'Nom de la commune', 'Nbre d\'Habitants': 'Nombre d\'habitants 2021', 'B�n�ficiaires': 'Nombre de bénéficiaires 2021', 'x': 'Latitude', 'y': 'Longitude', });
lyr_CommunesdeVende_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_parEpiceriesdescommunes_2.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parEpiceriessolidaires_3.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parHaltesduCoeur_4.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parCroixRouge_5.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parStVincentdePaul_6.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parSecoursPopulaire_7.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parSecoursCatholique_8.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parRestosduCoeur_9.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_parBanqueAlimentaire_10.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'aide_alimentaire_asso_maires_nom': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib1': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par1': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib2': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par2': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib3': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par3': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib4': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par4': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib5': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par5': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib6': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par6': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib7': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par7': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib8': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par8': 'TextEdit', 'aide_alimentaire_asso_maires_nom_8': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib9': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par9': 'TextEdit', 'aide_alimentaire_asso_maires_nom_9': 'TextEdit', 'aide_alimentaire_asso_maires_pt_distrib10': 'TextEdit', 'aide_alimentaire_asso_maires_desservi_par10': 'TextEdit', });
lyr_BnficiairesBA2021_11.set('fieldImages', {'insee': 'Range', 'nom': 'TextEdit', 'Nbre d\'Habitants': 'Range', 'B�n�ficiaires': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_CommunesdeVende_1.set('fieldLabels', {});
lyr_parEpiceriesdescommunes_2.set('fieldLabels', {});
lyr_parEpiceriessolidaires_3.set('fieldLabels', {});
lyr_parHaltesduCoeur_4.set('fieldLabels', {});
lyr_parCroixRouge_5.set('fieldLabels', {});
lyr_parStVincentdePaul_6.set('fieldLabels', {});
lyr_parSecoursPopulaire_7.set('fieldLabels', {});
lyr_parSecoursCatholique_8.set('fieldLabels', {});
lyr_parRestosduCoeur_9.set('fieldLabels', {});
lyr_parBanqueAlimentaire_10.set('fieldLabels', {});
lyr_BnficiairesBA2021_11.set('fieldLabels', {});
lyr_BnficiairesBA2021_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});