// Завдання 3. Every
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.



let arr = [{name: 'Ivan', country: 'Ukraine'},
			{name: 'Petro', country: 'Ukraine'},
			{name: 'Miguel', country: 'Cuba'}
		]

function check(arr){
	let results = arr.every(key => key.country == 'Ukraine'); 
	console.log(results); 
}

check(arr);
