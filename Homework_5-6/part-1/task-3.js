
let num = prompt('Введите первое число','');
let maxNum = prompt('Введите второе число','');	

let range = function(num, maxNum) {
for (let i = num; i < maxNum; i++) { 
	if (checkPrime(i)) {
		console.log(i);
	}
}
};

function checkPrime(i) {
	for (let j = 2; j < i; j++) { 
		if (i % j == 0) {
			return false; 
		}
	}
	return true;
}

range(num, maxNum);