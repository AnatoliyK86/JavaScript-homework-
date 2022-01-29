// Завдання 6. Reduce

// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.
// ------------

let arr = [1, 2, 5, 0, 4, 5, 6];
function findSum(arr){
	let answer = 0;
	let result = arr.reduce(function(sum, element) {
		if (element == 0) {
			answer = sum;
		} 
		else {
			return sum + element;
		}
	});

	console.log(answer);
}

findSum(arr);

function findElement(arr){
	let count = 1;
	let result = arr.reduce(function(sum, element) {
		if (sum > 10) {
			console.log(count);
			return;
		} 
		else {
			count++;
			return sum + element;
		}
	}); 
}
	
findElement(arr);