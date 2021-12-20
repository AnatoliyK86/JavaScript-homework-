
getMath = {

	PI: function() {
		let seriesSum = 0;
		for (i = 1; i <= 10000000; i += 4){  
			seriesSum +=  1 / i - 1 / (i + 2); 
		}
		console.log(4 * seriesSum);
	},
	
	pow: function(number, degree) {
		let result = number;
		for (let i = 1; i < degree; i++) {
		  result *= number;
		}
		console.log(result);
	},
	
	abs: function(number) {
		let result = (number < 0) ? number/-1 : number;
		console.log(result);
	},

	max: function(arr){
		let max = arr[0];
		for(let i=1; i<arr.length; i++){
			if(arr[i] > max){
				max = arr[i];   
			}
		}
		console.log(max);
	},

	min: function(arr){
		let min = arr[0];
		for(let i=1; i<arr.length; i++){
			if(arr[i] < min){
				min = arr[i];   
			}
		}
		console.log(min);
    }
	

}



// getMath.PI();
// getMath.pow(3,3);
// getMath.abs((-76));
// getMath.max([5,6,7,10,8])
// getMath.min([5,6,7,10,8])