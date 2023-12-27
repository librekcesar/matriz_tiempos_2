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
var format_isocronas_2_1 = new ol.format.GeoJSON();
var features_isocronas_2_1 = format_isocronas_2_1.readFeatures(json_isocronas_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isocronas_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isocronas_2_1.addFeatures(features_isocronas_2_1);
var lyr_isocronas_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isocronas_2_1, 
                style: style_isocronas_2_1,
                interactive: true,
    title: 'isocronas_2<br />\
    <img src="styles/legend/isocronas_2_1_0.png" /> 20<br />\
    <img src="styles/legend/isocronas_2_1_1.png" /> 35<br />\
    <img src="styles/legend/isocronas_2_1_2.png" /> 50<br />\
    <img src="styles/legend/isocronas_2_1_3.png" /> <br />'
        });
var format_estacion_cv1_2 = new ol.format.GeoJSON();
var features_estacion_cv1_2 = format_estacion_cv1_2.readFeatures(json_estacion_cv1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estacion_cv1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estacion_cv1_2.addFeatures(features_estacion_cv1_2);
var lyr_estacion_cv1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estacion_cv1_2, 
                style: style_estacion_cv1_2,
                interactive: false,
                title: '<img src="styles/legend/estacion_cv1_2.png" /> estacion_cv1'
            });
var format_centro_cps_validacion_3 = new ol.format.GeoJSON();
var features_centro_cps_validacion_3 = format_centro_cps_validacion_3.readFeatures(json_centro_cps_validacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centro_cps_validacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centro_cps_validacion_3.addFeatures(features_centro_cps_validacion_3);
var lyr_centro_cps_validacion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centro_cps_validacion_3, 
                style: style_centro_cps_validacion_3,
                interactive: true,
                title: '<img src="styles/legend/centro_cps_validacion_3.png" /> centro_cps_validacion'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_isocronas_2_1.setVisible(true);lyr_estacion_cv1_2.setVisible(true);lyr_centro_cps_validacion_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_isocronas_2_1,lyr_estacion_cv1_2,lyr_centro_cps_validacion_3];
lyr_isocronas_2_1.set('fieldAliases', {'TOTAL_POP': 'TOTAL_POP', 'tiempo_traslado_min': 'tiempo_traslado_min', 'modo_traslado': 'modo_traslado', });
lyr_estacion_cv1_2.set('fieldAliases', {'estacion': 'estacion', 'lat': 'lat', 'long': 'long', });
lyr_centro_cps_validacion_3.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'zipcode': 'zipcode', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'distancia_km': 'distancia_km', });
lyr_isocronas_2_1.set('fieldImages', {'TOTAL_POP': 'TextEdit', 'tiempo_traslado_min': 'Range', 'modo_traslado': 'TextEdit', });
lyr_estacion_cv1_2.set('fieldImages', {'estacion': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_centro_cps_validacion_3.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'distancia_km': 'TextEdit', });
lyr_isocronas_2_1.set('fieldLabels', {'TOTAL_POP': 'header label', 'tiempo_traslado_min': 'header label', 'modo_traslado': 'header label', });
lyr_estacion_cv1_2.set('fieldLabels', {'estacion': 'header label', 'lat': 'header label', 'long': 'header label', });
lyr_centro_cps_validacion_3.set('fieldLabels', {'locality': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'zipcode': 'header label', 'coverage_type': 'header label', 'cobertura_diferenciada': 'header label', 'distancia_km': 'header label', });
lyr_centro_cps_validacion_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});