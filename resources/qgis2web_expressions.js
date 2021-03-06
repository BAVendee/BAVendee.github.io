// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_PopulationMunicipale2018_2rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_119/793

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_119/793') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_119/793') ;
    }
}


function exp_PopulationMunicipale2018_2rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_793/1382

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_793/1382') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_793/1382') ;
    }
}


function exp_PopulationMunicipale2018_2rule2_eval_expression(context) {
    // aide_alimentaire_asso_maires_1382/2062

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_1382/2062') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_1382/2062') ;
    }
}


function exp_PopulationMunicipale2018_2rule3_eval_expression(context) {
    // aide_alimentaire_asso_maires_2062/2930

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_2062/2930') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_2062/2930') ;
    }
}


function exp_PopulationMunicipale2018_2rule4_eval_expression(context) {
    // aide_alimentaire_asso_maires_2930/4294

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_2930/4294') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_2930/4294') ;
    }
}


function exp_PopulationMunicipale2018_2rule5_eval_expression(context) {
    // aide_alimentaire_asso_maires_4294/6712

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_4294/6712') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_4294/6712') ;
    }
}


function exp_PopulationMunicipale2018_2rule6_eval_expression(context) {
    // aide_alimentaire_asso_maires_6712/9694

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_6712/9694') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_6712/9694') ;
    }
}


function exp_PopulationMunicipale2018_2rule7_eval_expression(context) {
    // aide_alimentaire_asso_maires_9694/16135

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_9694/16135') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_9694/16135') ;
    }
}


function exp_PopulationMunicipale2018_2rule8_eval_expression(context) {
    // aide_alimentaire_asso_maires_16135/44355

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_16135/44355') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_16135/44355') ;
    }
}


function exp_PopulationMunicipale2018_2rule9_eval_expression(context) {
    // aide_alimentaire_asso_maires_44355/54766

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_44355/54766') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_44355/54766') ;
    }
}


function exp_Evolution20082018_3rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_0.34/0.15

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_0.34/0.15') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_0.34/0.15') ;
    }
}


function exp_Evolution20082018_3rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_0.15/0

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_0.15/0') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_0.15/0') ;
    }
}


function exp_Evolution20082018_3rule2_eval_expression(context) {
    // aide_alimentaire_asso_maires_0/0.2

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_0/0.2') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_0/0.2') ;
    }
}


function exp_Evolution20082018_3rule3_eval_expression(context) {
    // aide_alimentaire_asso_maires_0.2/0.45

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_0.2/0.45') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_0.2/0.45') ;
    }
}


function exp_parEpiceriesdescommunes_5rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib9

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib9') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib9') ;
    }
}


function exp_parEpiceriesdescommunes_5rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par9

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par9') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par9') ;
    }
}


function exp_parEpiceriessolidaires_6rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib8

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib8') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib8') ;
    }
}


function exp_parEpiceriessolidaires_6rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par8

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par8') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par8') ;
    }
}


function exp_parHaltesduCoeur_7rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib6

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib6') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib6') ;
    }
}


function exp_parHaltesduCoeur_7rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par6

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par6') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par6') ;
    }
}


function exp_parCroixRouge_8rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib5

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib5') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib5') ;
    }
}


function exp_parCroixRouge_8rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par5

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par5') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par5') ;
    }
}


function exp_parStVincentdePaul_9rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib4

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib4') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib4') ;
    }
}


function exp_parStVincentdePaul_9rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par4

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par4') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par4') ;
    }
}


function exp_parSecoursPopulaire_10rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib3

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib3') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib3') ;
    }
}


function exp_parSecoursPopulaire_10rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par3

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par3') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par3') ;
    }
}


function exp_parSecoursCatholique_11rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib2

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib2') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib2') ;
    }
}


function exp_parSecoursCatholique_11rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par2

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par2') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par2') ;
    }
}


function exp_parRestosduCoeur_12rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib1

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib1') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib1') ;
    }
}


function exp_parRestosduCoeur_12rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par1

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par1') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par1') ;
    }
}


function exp_parBanqueAlimentaire_13rule0_eval_expression(context) {
    // aide_alimentaire_asso_maires_pt_distrib7

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib7') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_pt_distrib7') ;
    }
}


function exp_parBanqueAlimentaire_13rule1_eval_expression(context) {
    // aide_alimentaire_asso_maires_desservi_par7

    var feature = context.feature;
    
    if (feature.properties) {
        return feature.get('aide_alimentaire_asso_maires_desservi_par7') ;
    } else {
        return feature.get('aide_alimentaire_asso_maires_desservi_par7') ;
    }
}