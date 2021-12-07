
let sum = 0;
let count = 0;
let i = 0;

while (count < 10) {
	i++;
	if ((i % 2 !== 0) || (i % 3 !== 0)) continue;
		sum = sum + i;
		count++;
	console.log(sum);
	
}
alert (`Cумма первых 10 чётных чисел, которые делятся на 3 = ${sum}`);


// let sum = 0;
// let count = 0;
// let i = 0;

// while (count <= 10) {
// 	if ((i % 2 == 0) && (i % 3 == 0)){
// 		sum = sum + i;
// 		count++;
// 	}
// 	i++;
// }
// alert (`Cумма первых 10 чётных чисел, которые делятся на 3 = ${sum}`);





// ---------------------
// for (i=0, count=0; count <= 10; i++) {
// 	if (i%2 !== 0 && i%3 !== 0) continue;
// 		sum = sum + i;
// 		count++;

// }
// alert (`Cумма первых 10 чётных чисел, которые делятся на 3 = ${sum}`);


// --------------
// let sum = 0;
// let count = 0;
// let i = 0;

// while (count <= 10) {
// 	i++;
// 	if ((i % 2 !== 0) && (i % 3 !== 0)) continue;
// 		sum = sum + i;
// 		count++;

// }
// alert (`Cумма первых 10 чётных чисел, которые делятся на 3 = ${sum}`);


