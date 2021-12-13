// let email = prompt('Введіть Ваш email: ','');

// if (!(email.includes('@')) || email.startsWith('@') || email.endsWith('@'))
// alert('Email введено не вірно!');
// else alert('Email введено вірно! Вітаємо!');

let email = prompt('Введіть Ваш email: ','');

while (!(email.includes('@')) || email.startsWith('@') || email.endsWith('@')){
	alert('Email введено не вірно!');
	email = prompt('Введіть Ваш email: ','');
}
alert('Email введено вірно! Вітаємо!');