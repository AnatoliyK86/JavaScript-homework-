
let point = 0;

let answer = prompt('Сколько будет 1+1?', '');
	if (answer == 2) point++;
	answer = prompt('Сколько будет 1+2?', '');
	if (answer == 3) point++;
	answer = prompt('Сколько будет 1+3?', '');
	if (answer == 4) point++;
	answer = prompt('Сколько будет 1+4?', '');
	if (answer == 5) point++;
	answer = prompt('Сколько будет 1+5?', '');
	if (answer == 6) point++;
	answer = prompt('Сколько будет 1+6?', '');
	if (answer == 7) point++;
	answer = prompt('Сколько будет 1+7?', '');
	if (answer == 8) point++;
	answer = prompt('Сколько будет 1+8?', '');
	if (answer == 9) point++;
	answer = prompt('Сколько будет 1+9?', '');
	if (answer == 10) point++;
	answer = prompt('Сколько будет 1+11?', '');
	if (answer == 12) point++;

	if (point < 4) 
	{alert(`Ты набрал ${point} болов из 10. Твой уровень знаний LOW`);}

	else if (4 < point && point < 8) 
	{alert(`Ты набрал ${point} болов из 10. Твой уровень знаний MIDDLE`);}

	else if (8 < point) 
	{alert(`Ты набрал ${point} болов из 10. Твой уровень знаний HIGH`);}

	