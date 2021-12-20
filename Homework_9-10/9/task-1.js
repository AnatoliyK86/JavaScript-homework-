
let radius = prompt("Обчислимо площу круга радіуса R. Введіть число R: ", ' ');
getMath = {

}

function getArea(radius) {
	while (!(0 < radius || radius < 0)) {
		if (!isFinite(radius)) {
			alert(`Повинно бути числове значення.`);
		}
		if (radius == 0 || radius === null || radius === ' '){
			alert(`Будь ласка, введіть радіус!`);
		}
		radius = prompt("Введіть число R: ", ' ');
	}
	 alert(`Площа дорівнює ${(Math.PI * radius * radius).toFixed(2)} квадратних одиниць`);
}
getArea(radius);