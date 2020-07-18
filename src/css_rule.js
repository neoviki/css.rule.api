/*
    rule_name => string => ""#box_object1:before"" => selectror can be a pseudo property
    rule_property => an Object in (key, value) format representing CSS property
*/

function add_css_rule(rule_name, rule_property) {
  property_str = "";
  style = document.createElement("style");
  var sheet = document.head.appendChild(style).sheet;

  key_array = Object.keys(rule_property);
  for (var i = 0; i < key_array.length; i++) {
    k = key_array[i];
    v = rule_property[k];
    property_str += frame_css_property_as_str(k, v);
  }

  sheet.insertRule(rule_name + "{" + property_str + "}", sheet.cssRules.length);
}

// Example 1:

add_css_rule("#box_object1:before", {bottom: "10px"});

// Example 2:

add_css_rule("#box_object1:before", {
  content: "",
  position: "absolute",
  left: "10%",
  width: "90%",
  height: "50px",
});

