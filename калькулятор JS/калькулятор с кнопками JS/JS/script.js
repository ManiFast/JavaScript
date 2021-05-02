function plus(){
	var inputIn, inputIn_2, outport, result;
	inputIn = document.getElementById('inputIn').value;
	inputIn_2 = document.getElementById('inputIn_2').value;
	inputIn = parseInt(inputIn);
	inputIn_2 = parseInt(inputIn_2);
	
  result = inputIn + inputIn_2;
  outport = document.getElementById('outport').innerHTML = result;
}

function minus(){
	var inputIn, inputIn_2, outport, result;
	inputIn = document.getElementById('inputIn').value;
	inputIn_2 = document.getElementById('inputIn_2').value;
	inputIn = parseInt(inputIn);
	inputIn_2 = parseInt(inputIn_2);
	
  result = inputIn - inputIn_2;
  outport = document.getElementById('outport').innerHTML = result;
}

function multiply(){
	var inputIn, inputIn_2, outport, result;
	inputIn = document.getElementById('inputIn').value;
	inputIn_2 = document.getElementById('inputIn_2').value;
	inputIn = parseInt(inputIn);
	inputIn_2 = parseInt(inputIn_2);
	
  result = inputIn * inputIn_2;
  outport = document.getElementById('outport').innerHTML = result;
}

function split(){
	var inputIn, inputIn_2, outport, result;
	inputIn = document.getElementById('inputIn').value;
	inputIn_2 = document.getElementById('inputIn_2').value;
	inputIn = parseInt(inputIn);
	inputIn_2 = parseInt(inputIn_2);
	
  result = inputIn / inputIn_2;
  outport = document.getElementById('outport').innerHTML = result;
}


// =========================================================

// var inputIn = document.getElementById("inputIn").value;
// inputIn = parseInt(inputIn);
// var inputIn_2 = document.getElementById("inputIn_2").value;
// inputIn_2 = parseInt(inputIn_2);
// var outport = document.getElementById("outport");
// var result;

// var inputIn = Number(document.getElementById("inputIn").value);
// inputIn = parseInt(inputIn);
// var inputIn_2 = Number(document.getElementById("inputIn_2").value);
// inputIn_2 = parseInt(inputIn_2);
// var outport = document.getElementById("outport");
// var result;

// function plus(){
// 	result = inputIn + inputIn_2;
// 	outport.innerHTML = result;
// }

//==========================================================

// var inputIn = Number(document.getElementById("inputIn").value);
// var inputIn_2 = Number(document.getElementById("inputIn_2").value);
// var outport = document.getElementById("outport");

// console.log("test");

// var btn = document.getElementById("button");
// var btn_2 = document.getElementById("button_2");
// var btn_3 = document.getElementById("button_3");
// var btn_4 = document.getElementById("button_4");

// function plus(){
// 	var result = parseInt(inputIn) + parseInt(inputIn_2);
// 	outport.innerHTML = result;

// 	inputIn.value = "";
// 	inputIn_2.value = "";
// 	console.log("test_1");
// }