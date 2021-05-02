function palindrom(str){
	// Нижний регистр
	str = str.toLowerCase();
	// Строку в массив
	var str2 = str.split("");
	// Развернуть в массив
	str2 = str2.reverse();
	// Обьединить в строку
	str2 = str2.join("");
	if (str == str2) return true;
	else return false;
	
	return str2;
}

console.log(palindrom("abba"))