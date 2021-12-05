let num = prompt('Введите число:','');
let sum = 0;

while (num > 0) {
	let i = num % 10;
	num = (num - i) / 10;
	sum += i;
}
alert(`Сумма цифр числа =${sum}`);