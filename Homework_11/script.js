
// let elem;
// const getSpecFunc = (elem) => {
// 	for (let elem of document.querySelectorAll('#link')) {
// 		elem.href = `http://${prompt(setting.message)}`;
// 		elem.innerHTML = prompt(setting.message);
// 		return elem;
// 	}
// }

// const settings = [
// 	{
// 		message:  'виберіть фон для сторінки:',
// 		action: val => document.body.style.backgroundColor = val
// 	},
// 	{
// 		message:  'виберіть тип шрифта на сторінці:',
// 		action: val => document.body.style.fontFamily = val
// 	},
// 	{
// 		message:  'виберіть вирівнювання для заголовка h1:',
// 		action: val => document.querySelector('#title').style.textAlign = val
// 	},
// 	{
// 		message:  'виберіть фон для параграфа зі зсилками:',
// 		action: val => document.querySelector('#text_sites').style.backgroundColor = val
// 	},
// 	{
// 		message:  'виберіть колір тексту у параграфі зі зсилками:',
// 		action: val => document.querySelector('#text_sites').style.color = val
// 	},
// 	{
// 		message:  'виберіть колір тексту у параграфі зі зсилками, для самих зсилок:',
// 		action: val => document.querySelectorAll('.link').style.color = val
// 	},
// 	{
// 		message:  'виберіть колір тексту у елементі div:',
// 		action: val => document.querySelector('#text_block').style.color = val
// 	},
// 	{
// 		message:  'виберіть розмір тексту у елементі div:',
// 		action: val => document.querySelector('#text_block').style.fontSize = val
// 	},
// 	{
// 		message:  'виберіть товщину тексту у елементі div:',
// 		action: val => document.querySelector('#text_block').style.fontWeight = val
// 	},
// 	{
// 		message:  'виберіть тип маркера для маркованого списку на сторінці:',
// 		action: val => document.querySelectorAll('#list_item').style.listStyleType = val
// 	},
// 	{
// 		message:  'введіть адресу сайту:',
// 		action: val => {document.querySelector('#link-1').style.listStyleType = val; 
// 						elem.href = `http://${prompt(setting.message)}`;
// 						elem.innerHTML = prompt(setting.message);
// 						}
// 	}
// ]

// for (let setting of settings) {
// 	const value = prompt(setting.message);
// 	setting.action(value);
// }

//-------------
let bgcB = prompt('виберіть фон для сторінки:', 'yellow');
document.body.style.backgroundColor = bgcB;

let fontFam = prompt('виберіть тип шрифта на сторінці:', 'Arial');
document.body.style.fontFamily = fontFam;

let align = prompt('виберіть вирівнювання для заголовка h1:', 'center');
document.querySelector('#title').style.textAlign = align;
	

let bgcP = prompt('виберіть фон для параграфа зі зсилками:', 'pink');
document.querySelector('#text_sites').style.backgroundColor = bgcP;
	
let colorP = prompt('виберіть колір тексту у параграфі зі зсилками:', 'red');
document.querySelector('#text_sites').style.color = colorP;

let colorA = prompt('виберіть колір тексту у параграфі зі зсилками, для самих зсилок:', 'black');
let A_all = document.querySelectorAll('.link');
	for (let elem of A_all) {
		elem.style.color = colorA;
		let adress = prompt('введіть адресу сайту:','');
		elem.href = 'http://${adress}'; 
		elem.innerHTML = adress;
	}

let colorDiv = prompt('виберіть колір тексту у елементі div:', 'green');
document.querySelector('#text_block').style.color = colorDiv;
	

let fsizeDiv = prompt('виберіть розмір тексту у елементі div:', '18px');
document.querySelector('#text_block').style.fontSize = fsizeDiv;

let fweightDiv = prompt('виберіть товщину тексту у елементі div:', '600');
document.querySelector('#text_block').style.fontWeight = fweightDiv;

let liStyle = prompt('виберіть тип маркера для маркованого списку на сторінці:', 'square');
let li_Items = document.querySelectorAll('#list_item');
	for (let elem of li_Items) {
		elem.style.listStyleType = liStyle;
	}


