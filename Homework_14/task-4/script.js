// Завдання 4. Some

// Заданий масив об’єктів. Перевірте, чи хоч один ключ country має значення 'Cuba'.
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
	let results = arr.some(key => key.country == 'Cuba'); 
	console.log(results); 
}

check(arr);
