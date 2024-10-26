var size = 0;
var placement = 'point';
function categories_TEMPATKHAS_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'UNIVERSITI KUALA LUMPUR':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.199999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(31,120,180,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'POLITEKNIK TUANKU SULTANAH BAHIYAH':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.199999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KOLEJ KOMUNITI KULIM':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.199999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(255,69,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HOSPITAL KULIM':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.199999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BALAI POLIS':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.199999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(10,0,102,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BALAI BOMBA':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.199999999999999 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(255,242,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TEMPATKHAS_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMA TEMPAT DI KULIM");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Segoe UI Black\', sans-serif";
    var labelFill = "#91522d";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAMA TEMPAT DI KULIM") !== null) {
        labelText = String(feature.get("NAMA TEMPAT DI KULIM"));
    }
    
var style = categories_TEMPATKHAS_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
