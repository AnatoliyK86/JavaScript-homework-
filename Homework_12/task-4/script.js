
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