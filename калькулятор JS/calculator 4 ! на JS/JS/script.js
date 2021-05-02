function nextt() {
	var num1 = document.getElementById("num_1").value;
	var oper = document.getElementById("operator").value;
	var num2 = document.getElementById("num_2").value;

	if (oper == "+") {
		var res = Number(num1) + Number(num2);
		document.getElementById("result").innerHTML = res;
	}
	if (oper == "-") {
		var res = Number(num1) - Number(num2);
		document.getElementById("result").innerHTML = res;
	}
	if (oper == "*") {
		var res = Number(num1) * Number(num2);
		document.getElementById("result").innerHTML = res;
	}
	if (oper == "/") {
		var res = Number(num1) / Number(num2);
		document.getElementById("result").innerHTML = res;
	}
}