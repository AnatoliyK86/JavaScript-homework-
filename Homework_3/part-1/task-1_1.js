let factorial = 1n;
// factorial = BigInt;
let number = prompt('Input number', '');
for (let i = 1n; i <= number; i++) {
	factorial = factorial*i;
}
alert(`factorial of number ${number}! =  ${factorial}`);