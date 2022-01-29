// Завдання 1. forEach
// Заданий масив з числами. Знайдіть суму цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

let arr = [5, 6, 7, 8, 9];

function sum(arr) {
	if(!Array.isArray(arr)) return;

	let count = 0;
	arr.forEach (element => {    //arr.forEach (function(element) {count += element;})
		count += element;
	});
	console.log(count);
};

sum(arr);