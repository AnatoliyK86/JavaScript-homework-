
function arrCopy(arr) {
	return arr.slice();
}

const arr = [1,2,3];

const arr1 = arrCopy(arr);
const arr2 = arrCopy([1,2,3,[10,20]]);
// alert(arr);
// alert(arr1);
// alert(arr2);
