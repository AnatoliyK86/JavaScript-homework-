
function removeDuplicates(arr) {
	let result = [];
	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}
	return result;
}

const arr1 = removeDuplicates(['html','css','html','js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);
console.log(arr1); 
console.log(arr2);