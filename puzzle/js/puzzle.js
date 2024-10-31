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
		var hueco = [3, 3];
		var tdHueco = null;

		for (let i = 0; i < 4; i++) {

			var tr = document.createElement("tr");

			for (let j = 0; j < 4; j++) {

				var td 				= document.createElement("td");
				td.style.cursor = "pointer";
				td.position 		= i * 4 + j;
				td.fila=i;
				td.columna=j;
				td.onclick=function(){
					// Si el clic es en el hueco, no hacemos nada
					if (hueco[0] === i && hueco[1] === j) return;
					var celda = [this.fila, this.columna]

					tds = document.querySelectorAll("td");

					tds.forEach(function(td) {

						if (td.fila === hueco[0] && td.columna === hueco[1]) {

							tdHueco = td;
						}
					});

					if (tdHueco && comprobarDistancia(celda, hueco)) {
						// Solo remueve el hijo si existe
						if (tdHueco.firstElementChild) {
							tdHueco.removeChild(tdHueco.firstElementChild); // Elimina la pieza del hueco
						}
						tdHueco.appendChild(this.firstElementChild);
						hueco = celda;
					}
				}

				td.style.width 		= "168px";
				td.style.height 	= "84px";
				td.style.padding 	= 0;

				let div 						= document.createElement("div");
				div.style.width 				= "168px";
				div.style.height 				= "84px";
				td.appendChild(div);

				divs.push(div);

				tr.appendChild(td);
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
		array.sort(function(a,b){return Math.random()-0.5})

		return array;
	}

	function comprobarDistancia(celda, hueco) {

		let distancia = Math.abs(celda[0] - hueco[0]) + Math.abs(celda[1] - hueco[1]);

		return distancia === 1;
	}
});