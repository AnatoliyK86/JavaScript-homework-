let number = prompt("Обчислимо корінь числа. Введіть число: ", ' ');

function getSqrt(number) {
	while (!(0 < number)) {
		if (!isFinite(number)) {
			alert(`Повинно бути числове значення.`);
		}
		if (number == 0 || number === null || number === ' '){
			alert(`Будь ласка, введіть число!`);
		}
		if (number < 0) {
			alert(`Введіть додатнє число.`);
		}
		number = prompt("Введіть число: ", ' ');
	}
	alert(`Квадратний корінь з ${(number)} дорівнює ${(Math.sqrt(number)).toFixed(2)} `);
}
getSqrt(number);