let fib = n => {
	let prev = 0, next = 1;
	for (let i = 0; i < n; i++){
		let temp = prev + next;
		next = prev;
		prev = temp;
		console.log(prev);
	}  	
}
	fib(10);
