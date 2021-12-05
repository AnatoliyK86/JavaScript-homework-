let num = prompt('Введіть число', '');
let degree = prompt('Введіть степінь', '');

if (degree == 0) alert(`1`);

let result = 1;
let i = 1;

do {
	result *= num;
	i++;
}
while (i <= Math.abs(degree));

if (degree > 0) alert(`${result}`);
if (degree < 0) alert(`${1/result}`);