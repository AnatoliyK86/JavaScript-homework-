
let gallary = document.querySelector('.wrapper');

gallary.addEventListener('click', e => {
	let adress = prompt('Input url of image:',' ');
	let target = e.target.closest('.square');

	if (!gallary.contains(target)) {
		alert('Click on one os squares, please!');
		return;
	}
	e.target.style.backgroundImage = 'url("' + adress + '")';
});