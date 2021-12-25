let square = document.querySelector('.square');
let text = document.querySelector('.text');

square.addEventListener('mouseover', e => {
	e.target.classList.add('ask');
    text.textContent = 'Хочеш знати який?';
});

square.addEventListener('mouseout', e => {
	e.target.classList.remove('ask');
    text.textContent = 'У мене є секрет!';
});


square.addEventListener('mousedown', (e) => {
	e.target.classList.add('statement');
	text.textContent = 'А я тобі не скажу!';
});

square.addEventListener('mouseup', (e) => {
	e.target.classList.remove('statement');
	text.textContent = 'Хочеш знати який?';
});
