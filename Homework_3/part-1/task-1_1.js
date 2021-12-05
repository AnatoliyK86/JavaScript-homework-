let factorial = 1;
let number = prompt('Input number', '');
for (let i = 1; i <= number; i++) {
	factorial = factorial*i;
}
alert(`factorial of number ${number}! =  ${factorial}`);