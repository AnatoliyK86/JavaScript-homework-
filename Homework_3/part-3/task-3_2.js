let num = prompt('Введите число:','');
let sum = 0;

while (Math.abs(num) > 0){
	let i = num % 10;
	num = (num - i) / 10;
sum += i;
}
alert(`Сумма цифр числа = ${Math.abs(sum)}`);