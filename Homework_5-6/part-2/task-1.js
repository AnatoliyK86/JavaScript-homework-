let number = prompt('Введіть число','');

switch (number) {
	case '1':
	case '2':
	case '12':
		alert( 'Це номер місяця, що відноситься до пори року: зима' );
		break;
	case '3':
	case '4':
	case '5':
		alert( 'Це номер місяця, що відноситься до пори року: весна' );
		break;
	case '6':
	case '7':
	case '8':
		alert( 'Це номер місяця, що відноситься до пори року: літо' );
		break;
	case '9':
	case '10':
	case '11':
		alert( 'Це номер місяця, що відноситься до пори року: осінь' );
		break;
	default:
		alert( "Неможливо!" );
}