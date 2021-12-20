function arrToString(arr) {
	return arr.toString().split(",");
}

const arr1 = arrToString([1,2,3]);
const arr2 = arrToString([10,200,3333]);
console.log(arr1);
console.log(arr2);

