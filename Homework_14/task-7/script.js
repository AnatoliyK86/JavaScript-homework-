// Завдання 7. Любим методом

// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.


let arr = [1, -2, 3, 0, 4, -5, 6, -11];

function Multi(arr){

	let arrPositive = arr.filter(element => {
		if (element >= 0) {
			return true;
		} 
		else {
			return false;
		}
	});

	let result = arrPositive.map( element => {
		return Math.sqrt(element);
	});

	console.log(result); 
}

Multi(arr);
