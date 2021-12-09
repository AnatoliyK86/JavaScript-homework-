let num = prompt('Введите число','');

checkPrime(num);

function checkPrime(num) {
	for (let j = 2; j < num; j++) { 
		if (num % j == 0) {
			alert('Это число не является простым'); 
      return;
		}
	}
	alert('Это число является простым'); ;
}