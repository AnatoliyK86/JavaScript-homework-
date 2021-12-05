
let sum = 0;
let count = 0;
let i = 0;

while (count <= 10) {
	if ((i % 2 == 0) && (i % 3 == 0)){
		sum = sum + i;
		count++;
	}
	i++;
}
alert (`Cумма первых 10 чётных чисел, которые делятся на 3 = ${sum}`);