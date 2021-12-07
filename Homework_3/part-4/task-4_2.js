

	let num = 9;
	let maxNum;
	
	for (let i = 2; i <= num; i++) { 
		if (checkPrime(i)) {
			maxNum = i;
		}
	}
		alert(`Наибольшее простое число, которое не больше числа ${num} это: ${maxNum}`); 
	
	
		function checkPrime(i) {
			for (let j = 2; j < i; j++) { 
				if (i % j == 0) {
					return false; 
				}
			}
			return true;
		}
	



// let num = 30;
// let maxNum;

// nextPrime:
// for (let i = 2; i <= num; i++) { 
// 	for (let j = 2; j < i; j++) { 
// 		if (i % j == 0) continue nextPrime; 
// 	}
// 	maxNum = i;
// }
// 	alert(`Наибольшее простое число, которое не больше числа ${num} это: ${maxNum}`); 



