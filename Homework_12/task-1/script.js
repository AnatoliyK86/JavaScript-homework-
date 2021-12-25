let square = document.querySelector('.square');
const colors = ['red', 'yellow', 'green'];
let counter = 0;

square.onmouseover = function() {
	square.style.backgroundColor = colors[counter++];
	if (counter == colors.length) {
		counter = 0;
	}
};

square.onmouseout = function() {
	square.style.backgroundColor = '';
};

