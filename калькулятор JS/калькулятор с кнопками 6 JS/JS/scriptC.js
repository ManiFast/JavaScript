function num_7() {
	 document.getElementById("inputIn").value += 7;
}

function num_8() {
	document.getElementById("inputIn").value += 8;
}

function num_9() {
	document.getElementById("inputIn").value += 9;
}

function num_4() {
	document.getElementById("inputIn").value += 4;
}

function num_5() {
	document.getElementById("inputIn").value += 5;
}

function num_6() {
 document.getElementById("inputIn").value += 6;
}

function num_1() {
 document.getElementById("inputIn").value += 1;
}

function num_2() {
	document.getElementById("inputIn").value += 2;
}

function num_3() {
	document.getElementById("inputIn").value += 3;
}

function point() {
	document.getElementById("inputIn").value += ".";
}

function num_0() {
	document.getElementById("inputIn").value += 0;
}

// ===============================================

function clearr() {
	document.getElementById("inputIn").value = " ";
}

// Global
var num1;
var num2;
var operator;
var res;
var inputIn;

function plus() {
	num1 = document.getElementById("inputIn").value;
	operator = "+";
	document.getElementById("inputIn").value = " ";
}

function minuss() {
	num1 = document.getElementById("inputIn").value;
	operator = "-";
	document.getElementById("inputIn").value = " ";
}

function multiply() {
	num1 = document.getElementById("inputIn").value;
	operator = "*";
	document.getElementById("inputIn").value = " ";
}

function split() {
	num1 = document.getElementById("inputIn").value;
	operator = "/";
	document.getElementById("inputIn").value = " ";
}

function result() {
	num2 = document.getElementById("inputIn").value;
	if (operator == "+") {
		res = parseFloat(num1) + parseFloat(num2);
		document.getElementById("inputIn").value = res;
	}
	if (operator == "-") {
		res = parseFloat(num1) - parseFloat(num2);
		document.getElementById("inputIn").value = res;
	}
	if (operator == "*") {
		res = parseFloat(num1) * parseFloat(num2);
		document.getElementById("inputIn").value = res;
		if (document.getElementById("inputIn").value == "0") {
			alert("на 0 нельзя");
		}
	}
	if (operator == "/") {
		res = parseFloat(num1) / parseFloat(num2);
		document.getElementById("inputIn").value = res;
	}
}