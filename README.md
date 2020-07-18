## Javscript API to create and add CSS property

	With this API we can create and add css property. This API works with pseudo selector as well.

## Source 

	- clone this repo
	- cd src/

## Syntax:

#### Method 

	 add_css_rule(rule_name, rule_property)

#### Arguments

    rule_name:
		
		This value should be a string representing css selector.
    
		Example:

			rule_name =  "#box_object1:before" 

	rule_property:

	 	This value is an Object in (key, value) format representing CSS property
		
		Example:
			
			rule_property = {bottom: "10px",  width: "90%"};
				

## Usage

	# include css_rule.js in your html or javascript file

	# call
	
		add_css_rule("#box_object1:before", {bottom: "10px"});


