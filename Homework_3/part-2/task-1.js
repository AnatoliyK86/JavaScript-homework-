// Пароль і 4 спроби. Завдання виконуємо через while або do while.

let ask = prompt('Введіть пароль');
let password = '5';
let i = 4;
do {
	if (ask == password) {
		alert('Запрошуємо на сайт!');
		i = 0;
		}

	if (ask !== password) {
		if (i === 1) {
			alert('Будь ласка, спробуйте пізніше!');
			i = 0;
		}
		else {
			ask = prompt(`Спробуйте ще раз. У вас залишилось ${i - 1} спроби`);
			i--;
		}
	}
} while (i > 0);