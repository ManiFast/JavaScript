var inputIn   = $("#input-in");
var inputIn_2 = $("#input-in-2");
var inputIn_3 = $("#input-in-3");
var inputIn_4 = $("#input-in-4");

var inputIn_5 = $("#input-in-5");
var inputIn_6 = $("#input-in-6");
var inputIn_7 = $("#input-in-7");
var inputIn_8 = $("#input-in-8");

var inputIn_9 = $("#input-in-9");
var inputIn_10 = $("#input-in-10");
var inputIn_11 = $("#input-in-11");
var inputIn_12 = $("#input-in-12");

var inputIn_13 = $("#input-in-13");
var inputIn_14 = $("#input-in-14");
var inputIn_15 = $("#input-in-15");
var inputIn_16 = $("#input-in-16");


var outport   = $("#outport");
var outport_2 = $("#outport-2");
var outport_3 = $("#outport-3");
var outport_4 = $("#outport-4");

var outport_5 = $("#outport-5");
var outport_6 = $("#outport-6");
var outport_7 = $("#outport-7");
var outport_8 = $("#outport-8");

var outport_9  = $("#outport-9");
var outport_10 = $("#outport-10");
var outport_11 = $("#outport-11");
var outport_12 = $("#outport-12");

var outport_13 = $("#outport-13");
var outport_14 = $("#outport-14");
var outport_15 = $("#outport-15");
var outport_16 = $("#outport-16");

//var button = $("button");

// input + css(border: none;)
$('input[data-name="input-second"]').css({"border":"none"});

// button = onclik + function
$("#button").on("click", function() {
	var inputText   = $(inputIn).val();
	var inputText_2 = $(inputIn_2).val();
	var inputText_3 = $(inputIn_3).val();
	var inputText_4 = $(inputIn_4).val();
	//$("#outport").val(inputText);
	
	$(outport).val(inputText);
	$(outport_2).val(inputText_2);
	$(outport_3).val(inputText_3);
	$(outport_4).val(inputText_4);
});

$("#button_2").on("click", function() {
	var inputText_5 = $(inputIn_5).val();
	var inputText_6 = $(inputIn_6).val();
	var inputText_7 = $(inputIn_6).val();
	var inputText_8 = $(inputIn_8).val();
	
	$(outport_5).val(inputText_5);
	$(outport_6).val(inputText_6);
	$(outport_7).val(inputText_7);
	$(outport_8).val(inputText_8);
});

$("#button_3").on("click", function() {
	var inputText_9  = $(inputIn_9).val();
	var inputText_10 = $(inputIn_10).val();
	var inputText_11 = $(inputIn_11).val();
	var inputText_12 = $(inputIn_12).val();
	
	$(outport_9).val(inputText_9);
	$(outport_10).val(inputText_10);
	$(outport_11).val(inputText_11);
	$(outport_12).val(inputText_12);
});

$("#button_4").on("click", function() {
	var inputText_13 = $(inputIn_13).val();
	var inputText_14 = $(inputIn_14).val();
	var inputText_15 = $(inputIn_15).val();
	var inputText_16 = $(inputIn_16).val();
	
	$(outport_13).val(inputText_13);
	$(outport_14).val(inputText_14);
	$(outport_15).val(inputText_15);
	$(outport_16).val(inputText_16);
});

$("#button_all").on("click", function() {
	var inputText   = $(inputIn).val();
	var inputText_2 = $(inputIn_2).val();
	var inputText_3 = $(inputIn_3).val();
	var inputText_4 = $(inputIn_4).val();
	
	var inputText_5 = $(inputIn_5).val();
	var inputText_6 = $(inputIn_6).val();
	var inputText_7 = $(inputIn_6).val();
	var inputText_8 = $(inputIn_8).val();
	
	var inputText_9  = $(inputIn_9).val();
	var inputText_10 = $(inputIn_10).val();
	var inputText_11 = $(inputIn_11).val();
	var inputText_12 = $(inputIn_12).val();
	
	var inputText_13 = $(inputIn_13).val();
	var inputText_14 = $(inputIn_14).val();
	var inputText_15 = $(inputIn_15).val();
	var inputText_16 = $(inputIn_16).val();
	//$("#outport").val(inputText);
	
	$(outport).val(inputText);
	$(outport_2).val(inputText_2);
	$(outport_3).val(inputText_3);
	$(outport_4).val(inputText_4);
	
	$(outport_5).val(inputText_5);
	$(outport_6).val(inputText_6);
	$(outport_7).val(inputText_7);
	$(outport_8).val(inputText_8);
	
	$(outport_9).val(inputText_9);
	$(outport_10).val(inputText_10);
	$(outport_11).val(inputText_11);
	$(outport_12).val(inputText_12);
	
	$(outport_13).val(inputText_13);
	$(outport_14).val(inputText_14);
	$(outport_15).val(inputText_15);
	$(outport_16).val(inputText_16);
});

// =============Таблетка====================

//var inputIn = $("#input-in");
//var inputIn_2 = $("#input-in-2");
//var inputIn_3 = $("#input-in-3");
//var inputIn_4 = $("#input-in-4");
//
//var outport = $("#outport");
//var outport_2 = $("#outport-2");
//var outport_3 = $("#outport-3");
//var outport_4 = $("#outport-4");
//
//var button = $("button");
//
//$("button").on("click", function() {
//	var inputText = $("#input-in").val();
//	$("#outport").innerHTML = inputText;
//	$("#input-in-2").val(inputText);
//	alert("TTT");
//	alert(inputText);
//});