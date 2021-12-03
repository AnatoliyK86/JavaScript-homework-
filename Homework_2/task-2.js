
let isName = prompt('Ваше Ім’я?','');
if (isName == null) {alert('Вхід скасований!');}
if (isName == 0 || isName == undefined || isName == null || isName == '') {alert('Я вас не знаю!');}

else {
	let password = prompt('Введіть пароль', '');      //Logos
	if (password == 'Logos') {alert('Ласкаво просимо!');}
	else {alert('Пароль невірний!');}
}