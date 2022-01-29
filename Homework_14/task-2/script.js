// Завдання 2. Map
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.	
// let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.


let arr = [5, 6, 7, 8, 9];

function square(arr){
	if(!Array.isArray(arr)) return;
	
	let results = arr.map(function(element) {          //arr.map(element => { return element*element; ... });
		return element*element;
	});

	console.log(results); 
}

square(arr);