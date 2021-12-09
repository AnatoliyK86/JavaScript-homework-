
let progress = function(n, q) {
	let sum = 1;
	let number = 1;
	for(let i = 1; i < n; i++) {
	  number *= q;
	  sum += number;
	}
	return sum;
  }

  console.log(progress(5,2))
