let num = prompt('Введіть число', '');
let degree = prompt('Введіть степінь', '');

if (degree == 0) alert(`1`);
let result = 1;

for (i = 1; i <= Math.abs(degree); i++ ) {
	result *= num;
}
if (degree > 0) alert(`${result}`);
if (degree < 0) alert(`${1/result}`);



