
getMath = {

	PI: function() {     
		let seriesSum = 0;
		for (let i = 0; i <= 1000000; i++){  
			seriesSum +=  (1 / (4*i + 1) - 1 / (4*i + 3)); 
		}
		return (4 * seriesSum);
	},
	
	pow: function(number, degree) {
		let result = 1;
		if (degree > 0) {
			for (let i = 0; i < degree; i++) {
		  		result *= number;
			}
			return result;
		}
		else
		if (degree < 0) {
			for (let i = 0; i > degree; i--) {
				result *= number;
		}
			return 1/result;
		}
		else
		if (degree == 0) {
			return result;
		}
	},
	
	abs: function(number) {
		let result = (number < 0) ? number/-1 : number;
		return result;
	},

	max: function(...arr){
		let max = arr[0];
		for(let i=1; i<arr.length; i++){
			if(arr[i] > max){
				max = arr[i];   
			}
		}
		return max;
	},

	min: function(...arr){
		let min = arr[0];
		for(let i=1; i<arr.length; i++){
			if(arr[i] < min){
				min = arr[i];   
			}
		}
		return min;
    }
	

}



// console. log(getMath.PI());
// console. log(getMath.pow(3,3));
// console. log(getMath.abs((-76)));
// console. log(getMath.max(5,6,7,10,8))
// console. log(getMath.min(5,6,7,10,8))