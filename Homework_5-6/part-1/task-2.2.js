
let progress = function(n, q) {
	let b1=1;
	return b1 * (1 - Math.pow(q, n)) / (1 - q) ;
};

console.log(progress(5, 2))

