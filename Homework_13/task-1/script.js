
document.querySelector('.trans_button').addEventListener('click', function(e){
	e.preventDefault();
	let tempValue = document.querySelector('.start_text').value;
	if( tempValue != '' ){
		document.querySelector('.trans_text').value = tempValue;
		document.querySelector('.start_text').value = '';
	}
});


let inputPlaceh = document.querySelector('.placeh');
inputPlaceh.onblur = function() {
	let valuePlaceh = document.querySelector('.placeh').value;
	if( valuePlaceh != ''){
		inputPlaceh.placeholder = valuePlaceh;
		document.querySelector('.placeh').value = '';
	}
};
