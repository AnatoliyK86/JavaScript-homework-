let bgcB = prompt('виберіть фон для сторінки:', 'yellow');
let backgroundColorBoby = document.body.style.backgroundColor = bgcB;

let fontFam = prompt('виберіть тип шрифта на сторінці:', 'Arial');
let font_Family = document.body.style.fontFamily = fontFam;

let align = prompt('виберіть вирівнювання для заголовка h1:', 'center');
let text_Align = document.querySelector('h1');
	text_Align.style.textAlign = align;

let bgcP = prompt('виберіть фон для параграфа зі зсилками:', 'pink');
let backgroundColorP = document.querySelector('p');
	backgroundColorP.style.backgroundColor = bgcP;

let colorP = prompt('виберіть колір тексту у параграфі зі зсилками:', 'red');
let Color_P = document.querySelector('p');
	Color_P.style.color = colorP;

let colorA = prompt('виберіть колір тексту у параграфі зі зсилками, для самих зсилок:', 'black');
let A_all = document.querySelectorAll('p > a');
	for (let elem of A_all) {
		elem.style.color = colorA;
	}

let colorDiv = prompt('виберіть колір тексту у елементі div:', 'green');
let divT = document.querySelector('div');
	divT.style.color = colorDiv;

let fsizeDiv = prompt('виберіть розмір тексту у елементі div:', '18px');
	divT.style.fontSize = fsizeDiv;

let fweightDiv = prompt('виберіть товщину тексту у елементі div:', '600');
	divT.style.fontWeight = fweightDiv;

let liStyle = prompt('виберіть тип маркера для маркованого списку на сторінці:', 'square');
let li_Items = document.querySelectorAll('ul > li');
	for (let elem of li_Items) {
		elem.style.listStyleType = liStyle;
	}

	for (let elem of A_all) {
		let adress = prompt('введіть адресу сайту:','');
		elem.setAttribute('href', `http://${adress}`);
		elem.innerHTML = adress;
	}

