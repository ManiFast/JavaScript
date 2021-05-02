jQuery("document").ready(function() {

	jQuery("#b-1").on("click", function() {
		var value_1, value_2, value_3;
		value_1 = jQuery("#i-1").val();
		value_2 = jQuery("#i-2").val();
		
		value_1 = parseInt(value_1);
		value_2 = parseInt(value_2);

		value_3 = value_1+value_2;

		alert(value_3);
	});
})