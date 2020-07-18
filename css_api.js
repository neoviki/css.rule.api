function frame_css_property_as_str(key, value) {
  var out = "";
  if (key === "content") {
    out = key + ":" + "'" + value + "'" + ";";
  } else {
    out = key + ":" + value + ";";
  }
  return out;
}

function add_css_rule(rule_name, rule_property) {
  property_str = "";
  style = document.createElement("style");
  var sheet = document.head.appendChild(style).sheet;

  if (typeof css === "string") {
    property_str = rule_property;
  } else {
    key_array = Object.keys(rule_property);
    for (var i = 0; i < key_array.length; i++) {
      k = key_array[i];
      v = rule_property[k];
      property_str += frame_css_property_as_str(k, v);
    }
  }

  sheet.insertRule(rule_name + "{" + property_str + "}", sheet.cssRules.length);
}

/*
add_css_rule("#box_object1:before", {
  content: "",
  position: "absolute",
  bottom: "10px",
  left: "10%",
  width: "90%",
  height: "50px",
});
*/


