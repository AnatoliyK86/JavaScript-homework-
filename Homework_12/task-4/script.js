
document.querySelector('.list_items').addEventListener('click', e => {
	let palette = e.target.id;

	switch (palette) {
		case 'red':
			e.target.style.color = 'red';
			break;

		case 'yellow':
			e.target.style.color = 'yellow';
			break;

		case 'green':
			e.target.style.color = 'green';
			break;

		case 'blue':
			e.target.style.color = 'blue';
			break;

		case 'orange':
			e.target.style.color = 'orange';
			break;

		case 'gray':
			e.target.style.color = 'gray';
			break;
	}
});


// А вот как можно через полиморфизм и деструктуризацию:

const alternativeEventListener = ({ target: coloringItem }) => {
	const colors = ['red', 'yellow', 'green', 'blue', 'orange', 'gray'];

	if (!colors.includes(coloringItem.id)) return;

	coloringItem.style.color = coloringItem.id;
};

document.addEventListener('click', alternativeEventListener);