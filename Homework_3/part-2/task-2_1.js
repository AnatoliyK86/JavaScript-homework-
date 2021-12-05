
let number = prompt('Input number', '');
let factorial = 1;
let i = 1;

do{
	factorial = factorial*i;
	i++;
}
while (i <= number);
alert(`factorial of number ${number}! =  ${factorial}`);

