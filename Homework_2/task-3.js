let number = prompt('Введіть число','');
if (number == 0 || number > 12) {alert(`Неможливо!`);}
else if (number == 1 || number == 2 || number == 12) {alert(`Це номер місяця, що відноситься до пори року: зима`);}
else if (number == 3 || number == 4 || number == 5 ) {alert(`Це номер місяця, що відноситься до пори року: весна`);}
else if (number == 6 || number == 7 || number == 8 ) {alert(`Це номер місяця, що відноситься до пори року: літо`);}
else if (number == 9 || number == 10 || number == 11 ) {alert(`Це номер місяця, що відноситься до пори року: осінь`);}
