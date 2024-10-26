ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11190674.200358, 597420.818550, 11201238.648964, 603683.858551]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_KULIM_1 = new ol.format.GeoJSON();
var features_KULIM_1 = format_KULIM_1.readFeatures(json_KULIM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KULIM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KULIM_1.addFeatures(features_KULIM_1);
var lyr_KULIM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KULIM_1, 
                style: style_KULIM_1,
                popuplayertitle: "KULIM",
                interactive: false,
                title: '<img src="styles/legend/KULIM_1.png" /> KULIM'
            });
var format_JALANUTAMA_2 = new ol.format.GeoJSON();
var features_JALANUTAMA_2 = format_JALANUTAMA_2.readFeatures(json_JALANUTAMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANUTAMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANUTAMA_2.addFeatures(features_JALANUTAMA_2);
var lyr_JALANUTAMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANUTAMA_2, 
                style: style_JALANUTAMA_2,
                popuplayertitle: "JALAN UTAMA",
                interactive: true,
                title: '<img src="styles/legend/JALANUTAMA_2.png" /> JALAN UTAMA'
            });
var format_JALANNEGERI_3 = new ol.format.GeoJSON();
var features_JALANNEGERI_3 = format_JALANNEGERI_3.readFeatures(json_JALANNEGERI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANNEGERI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANNEGERI_3.addFeatures(features_JALANNEGERI_3);
var lyr_JALANNEGERI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANNEGERI_3, 
                style: style_JALANNEGERI_3,
                popuplayertitle: "JALAN NEGERI",
                interactive: true,
                title: '<img src="styles/legend/JALANNEGERI_3.png" /> JALAN NEGERI'
            });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: "SUNGAI",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_TEMPATKHAS_5 = new ol.format.GeoJSON();
var features_TEMPATKHAS_5 = format_TEMPATKHAS_5.readFeatures(json_TEMPATKHAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATKHAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATKHAS_5.addFeatures(features_TEMPATKHAS_5);
var lyr_TEMPATKHAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATKHAS_5, 
                style: style_TEMPATKHAS_5,
                popuplayertitle: "TEMPAT KHAS",
                interactive: true,
    title: 'TEMPAT KHAS<br />\
    <img src="styles/legend/TEMPATKHAS_5_0.png" /> UNIVERSITI KUALA LUMPUR<br />\
    <img src="styles/legend/TEMPATKHAS_5_1.png" /> POLITEKNIK TUANKU SULTANAH BAHIYAH<br />\
    <img src="styles/legend/TEMPATKHAS_5_2.png" /> KOLEJ KOMUNITI KULIM<br />\
    <img src="styles/legend/TEMPATKHAS_5_3.png" /> HOSPITAL KULIM<br />\
    <img src="styles/legend/TEMPATKHAS_5_4.png" /> BALAI POLIS<br />\
    <img src="styles/legend/TEMPATKHAS_5_5.png" /> BALAI BOMBA<br />'
        });
var format_NAMAKEDAIMAKAN_6 = new ol.format.GeoJSON();
var features_NAMAKEDAIMAKAN_6 = format_NAMAKEDAIMAKAN_6.readFeatures(json_NAMAKEDAIMAKAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAMAKEDAIMAKAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAMAKEDAIMAKAN_6.addFeatures(features_NAMAKEDAIMAKAN_6);
var lyr_NAMAKEDAIMAKAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAMAKEDAIMAKAN_6, 
                style: style_NAMAKEDAIMAKAN_6,
                popuplayertitle: "NAMA KEDAI MAKAN",
                interactive: true,
    title: 'NAMA KEDAI MAKAN<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_0.png" /> Kedai Makan Bayan<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_1.png" /> Warung Bunga Kertas<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_2.png" /> Selera TokTeh<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_3.png" /> Kedai Makan Abang Mat<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_4.png" /> Marinee Tomyam<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_5.png" /> Warong Roti Canai Simpang Sungai Ular<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_6.png" /> Cendol Pak Din<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_7.png" /> Nasi Ayam Golek Resipi Ibunda Sungai Ular<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_8.png" /> Warung Cengkih<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_9.png" /> Nasi Kandar Yasmeen Kulim<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_10.png" /> Bahsyam Tomyam<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_11.png" /> Jamal Roti Canai Dudok<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_12.png" /> Dapur Bakar Kulim Avenue Hi-Tech<br />\
    <img src="styles/legend/NAMAKEDAIMAKAN_6_13.png" /> Restoran Nasi Kandar Dinas<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_KULIM_1.setVisible(true);lyr_JALANUTAMA_2.setVisible(true);lyr_JALANNEGERI_3.setVisible(true);lyr_SUNGAI_4.setVisible(true);lyr_TEMPATKHAS_5.setVisible(true);lyr_NAMAKEDAIMAKAN_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_KULIM_1,lyr_JALANUTAMA_2,lyr_JALANNEGERI_3,lyr_SUNGAI_4,lyr_TEMPATKHAS_5,lyr_NAMAKEDAIMAKAN_6];
lyr_KULIM_1.set('fieldAliases', {'DAERAH': 'DAERAH', });
lyr_JALANUTAMA_2.set('fieldAliases', {'JALAN': 'JALAN', });
lyr_JALANNEGERI_3.set('fieldAliases', {'JALAN': 'JALAN', });
lyr_SUNGAI_4.set('fieldAliases', {'SUNGAI': 'SUNGAI', });
lyr_TEMPATKHAS_5.set('fieldAliases', {'NAMA TEMPAT DI KULIM': 'NAMA TEMPAT DI KULIM', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALAMAT': 'ALAMAT', 'GAMBAR TEMPAT': 'GAMBAR TEMPAT', });
lyr_NAMAKEDAIMAKAN_6.set('fieldAliases', {'NAMA TEMPAT KEDAI MAKAN': 'NAMA TEMPAT KEDAI MAKAN', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALAMAT': 'ALAMAT', 'HARI OPERASI': 'HARI OPERASI', 'WAKTU OPERASI': 'WAKTU OPERASI', 'WAKTU MAKAN': 'WAKTU MAKAN', 'NO TELEFON': 'NO TELEFON', 'MENU UTAMA': 'MENU UTAMA', 'MENU KEGEMARAN': 'MENU KEGEMARAN', 'ANGGARAN HARGA': 'ANGGARAN HARGA', 'GAMBAR KEDAI': 'GAMBAR KEDAI', });
lyr_KULIM_1.set('fieldImages', {'DAERAH': 'TextEdit', });
lyr_JALANUTAMA_2.set('fieldImages', {'JALAN': 'TextEdit', });
lyr_JALANNEGERI_3.set('fieldImages', {'JALAN': 'TextEdit', });
lyr_SUNGAI_4.set('fieldImages', {'SUNGAI': 'TextEdit', });
lyr_TEMPATKHAS_5.set('fieldImages', {'NAMA TEMPAT DI KULIM': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'ALAMAT': 'TextEdit', 'GAMBAR TEMPAT': 'ExternalResource', });
lyr_NAMAKEDAIMAKAN_6.set('fieldImages', {'NAMA TEMPAT KEDAI MAKAN': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'ALAMAT': 'TextEdit', 'HARI OPERASI': 'TextEdit', 'WAKTU OPERASI': 'TextEdit', 'WAKTU MAKAN': 'TextEdit', 'NO TELEFON': 'TextEdit', 'MENU UTAMA': 'TextEdit', 'MENU KEGEMARAN': 'TextEdit', 'ANGGARAN HARGA': 'TextEdit', 'GAMBAR KEDAI': 'ExternalResource', });
lyr_KULIM_1.set('fieldLabels', {'DAERAH': 'hidden field', });
lyr_JALANUTAMA_2.set('fieldLabels', {'JALAN': 'inline label - always visible', });
lyr_JALANNEGERI_3.set('fieldLabels', {'JALAN': 'inline label - always visible', });
lyr_SUNGAI_4.set('fieldLabels', {'SUNGAI': 'inline label - always visible', });
lyr_TEMPATKHAS_5.set('fieldLabels', {'NAMA TEMPAT DI KULIM': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'GAMBAR TEMPAT': 'inline label - always visible', });
lyr_NAMAKEDAIMAKAN_6.set('fieldLabels', {'NAMA TEMPAT KEDAI MAKAN': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'HARI OPERASI': 'inline label - visible with data', 'WAKTU OPERASI': 'inline label - always visible', 'WAKTU MAKAN': 'inline label - always visible', 'NO TELEFON': 'inline label - always visible', 'MENU UTAMA': 'inline label - always visible', 'MENU KEGEMARAN': 'inline label - always visible', 'ANGGARAN HARGA': 'inline label - always visible', 'GAMBAR KEDAI': 'inline label - always visible', });
lyr_NAMAKEDAIMAKAN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});