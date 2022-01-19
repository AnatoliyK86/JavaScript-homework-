
document.querySelector('.form').addEventListener('submit', (e) => {
	e.preventDefault();  
	document.querySelector('.form').style.display='none';
	document.querySelector('.profile').style.display='block';

	let username = document.querySelector('.username').value;
	let surename = document.querySelector('.surename').value;
	let resultuser = document.querySelector('.profile__main_user');
	resultuser.textContent = username + ' ' + surename;

	let email = document.querySelector('.email').value;
	document.querySelector('.profile__main_email').textContent = email;

	let position = document.querySelector('#position').value;
	document.querySelector('.profile__main_position').textContent = position;
	
	let sexwoman = document.querySelector('#woman');
	let avatar = document.querySelector('.profile__header_avatar');
	if (sexwoman.checked == true) {
		avatar.classList.toggle('woman');
	} 
});

document.querySelector('.signOut').addEventListener('click', (e) => {
	document.querySelector('.form').style.display='block';
	document.querySelector('.profile').style.display='none';
	
	document.querySelectorAll('input[type=text], input[type=email], input[type=checkbox], select').forEach(el=>el.value = '');
	document.querySelectorAll('input[type=radio],input[type=checkbox]').forEach(el=>el.checked = false);
	
	let man = document.querySelector('#man').checked = true;
	let avatar = document.querySelector('.profile__header_avatar');
	if (avatar.classList.contains('woman') == true) {
		avatar.classList.toggle('woman');
	} 
});