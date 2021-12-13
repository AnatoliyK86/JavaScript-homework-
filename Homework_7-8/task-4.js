let webAdress = prompt('Введіть текст', ''); 

if (webAdress.includes('https')) console.log(webAdress.slice(7));
else 
if (webAdress.includes('http')) console.log(webAdress.slice(6));
else alert(`Неправильно введена адреса сторінки!`);