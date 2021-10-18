var size = 0;
var placement = 'point';

var style_Pointsdedistributiondaidealimentaire_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    var clusteredFeatures = feature.get("features");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    size = clusteredFeatures.length;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    if (size == 1) {
        textAlign = "left"
        offsetX = 8
        offsetY = 3
        var feature = clusteredFeatures[0];
        if ("" !== null) {
            labelText = String("");
        }
        key = value + "_" + labelText
    } else {
        labelText = size.toString()
        size = 2*(Math.log(size)/ Math.log(2))
    }
    
        function rules_Pointsdedistributiondaidealimentaire_3(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Pointsdedistributiondaidealimentaire_3rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.999999999999998 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.4545454545454533 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,176,124,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(196,60,213,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(38,27,183,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.46154 + size,
            stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(247,225,55,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(250,255,57,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(225,89,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_Pointsdedistributiondaidealimentaire_3rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 5,
            radius2: 3.0, stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Pointsdedistributiondaidealimentaire_3(feature, value);
        ;

    return style;
};
