// Завдання 5. Filter

// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
//     let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.


let arr = [1, 'string', [3, 4], 5, [6, 7]];

function check(arr){
	let results = arr.filter(element => Array.isArray(element)); 
	console.log(results); 
}

check(arr);
