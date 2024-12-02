window.addEventListener('load', function () {

	const form 		= document.querySelector('.formulario_register');
	const inputs 	= form.querySelectorAll('input');
	
	form.addEventListener('submit', function(e) {

		e.preventDefault();

		if (inputs[0].value.esCadena()) {
			inputs[0].classList.add("valido");
			inputs[0].classList.remove("no-valido");

		} else {
			inputs[0].classList.add("no-valido");
			inputs[0].classList.remove("valido");
		}

		if (inputs[1].value.esCadena()) {
			inputs[1].classList.add("valido");
			inputs[1].classList.remove("no-valido");

		} else {
			inputs[1].classList.add("no-valido");
			inputs[1].classList.remove("valido");
		}

		if (inputs[2].value.esDni()) {
			inputs[2].classList.add("valido");
			inputs[2].classList.remove("no-valido");

		} else {
			inputs[2].classList.add("no-valido");
			inputs[2].classList.remove("valido");
		}

		if (inputs[3].value.esFecha()) {
			inputs[3].classList.add("valido");
			inputs[3].classList.remove("no-valido");

		} else {
			inputs[3].classList.add("no-valido");
			inputs[3].classList.remove("valido");
		}
		
	});
	
});