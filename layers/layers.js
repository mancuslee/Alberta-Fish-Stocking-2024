ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-1132517.441146, 5293949.592011, 976001.945301, 6603221.954391]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Waterbodies_1 = new ol.format.GeoJSON();
var features_Waterbodies_1 = format_Waterbodies_1.readFeatures(json_Waterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Waterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_1.addFeatures(features_Waterbodies_1);
var lyr_Waterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_1, 
                style: style_Waterbodies_1,
                popuplayertitle: "Waterbodies",
                interactive: false,
                title: '<img src="styles/legend/Waterbodies_1.png" /> Waterbodies'
            });
var format_AlbertaBoundary_2 = new ol.format.GeoJSON();
var features_AlbertaBoundary_2 = format_AlbertaBoundary_2.readFeatures(json_AlbertaBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_2.addFeatures(features_AlbertaBoundary_2);
var lyr_AlbertaBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_2, 
                style: style_AlbertaBoundary_2,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_2.png" /> Alberta Boundary'
            });
var format_FishStocking2024_3 = new ol.format.GeoJSON();
var features_FishStocking2024_3 = format_FishStocking2024_3.readFeatures(json_FishStocking2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStocking2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStocking2024_3.addFeatures(features_FishStocking2024_3);
var lyr_FishStocking2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStocking2024_3, 
                style: style_FishStocking2024_3,
                popuplayertitle: "Fish Stocking (2024)",
                interactive: true,
    title: 'Fish Stocking (2024)<br />\
    <img src="styles/legend/FishStocking2024_3_0.png" /> 0 - 1807<br />\
    <img src="styles/legend/FishStocking2024_3_1.png" /> 1807 - 5600<br />\
    <img src="styles/legend/FishStocking2024_3_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/FishStocking2024_3_3.png" /> 11500 - 20000<br />\
    <img src="styles/legend/FishStocking2024_3_4.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStocking2024_3_5.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStocking2024_3_6.png" /> 110000 - 1613075<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Waterbodies_1.setVisible(true);lyr_AlbertaBoundary_2.setVisible(true);lyr_FishStocking2024_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Waterbodies_1,lyr_AlbertaBoundary_2,lyr_FishStocking2024_3];
lyr_Waterbodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_AlbertaBoundary_2.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStocking2024_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Author': 'Author', 'NumStock': 'NumStock', });
lyr_Waterbodies_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_AlbertaBoundary_2.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStocking2024_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Author': 'TextEdit', 'NumStock': 'Range', });
lyr_Waterbodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_AlbertaBoundary_2.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStocking2024_3.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Author': 'header label - always visible', 'NumStock': 'header label - always visible', });
lyr_FishStocking2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});