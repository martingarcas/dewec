window.addEventListener("load", function () {

	let bodyCnt = document.querySelector("body");
	let imgPuzzle = document.querySelector(".img-puzzle");
	
	let imgs = document.querySelectorAll(".img-puzzle");

	for (let i = 0; i < imgs.length; i++) {
		
		imgs[i].addEventListener("dblclick", programarPuzzle)
	}

	function programarPuzzle() {

		// Declara un array para guardar los divs
		let divs = [];
		
		// CREACIÓN DE DIV CONTENEDOR DE TABLA
		let divPuzzle 					= document.createElement("div");
		divPuzzle.style.position 		= "relative";
		divPuzzle.style.display 		= "inline-block";
		divPuzzle.style.width 			= "674px";
		divPuzzle.style.height 			= "337px";
		divPuzzle.style.boxSizing 		= "border-box";
		divPuzzle.style.borderRight 	= "2px solid green";
		divPuzzle.style.borderBottom 	= "1px solid green";
		//divPuzzle.style.backgroundImage = "url('img/gato.png')";
		//divPuzzle.style.backgroundColor = "blue";

		bodyCnt.appendChild(divPuzzle);

		// OCULTAMOS LA IMAGEN ORIGINAL
		imgPuzzle.style.display = "none";

		// CREAMOS LA TABLA QUE CONTENDRÁ LA DIVISIÓN DE LA IMAGEN
		let tablaPuzzle = document.createElement("table");
		tablaPuzzle.style.borderSpacing = 0;
		divPuzzle.appendChild(tablaPuzzle);

		for (let i = 0; i < 4; i++) {
			
			var tr = document.createElement("tr");

			for (let j = 0; j < 4; j++) {
				
				var td 				= document.createElement("td");
				td.position 		= i * 4 + j;
				let id 				= td.position;			
				td.style.width 		= "168px";
				td.style.height 	= "84px";
				td.style.padding 	= 0;

				let div 						= document.createElement("div");
				div.id 							= id;
				div.style.width 				= "168px";
				div.style.height 				= "84px";
				td.appendChild(div);

				divs.push(div);

				tr.appendChild(td);

				// Guarda cada div en el array
				//divs.push(div);
			}

			tablaPuzzle.appendChild(tr);
		}

		divs.pop();
		// Llama a la función para barajar el puzzle
		divs = barajar(divs);
		

		var positionX = 0;
		var positionY = 0;

		for (let i = 0; i < 4; i++) {

			for (let j = 0; j < 4; j++) {

				var div = divs[i * 4 + j];
				div.style.backgroundImage 		= "url('img/gato.png')";
				div.style.backgroundPosition 	= `${positionX}px ${positionY}px`;

				positionX -= 168;
			}		
			
			positionX = 0;
			positionY -= 84;
		}

	}

	function barajar(array) {
		// Mezcla el array divs usando el algoritmo de Fisher-Yates
		for (let i = array.length - 1; i > 0; i--) {

			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;

		
	}
});