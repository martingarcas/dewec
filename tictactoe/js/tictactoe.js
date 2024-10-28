window.addEventListener("load", function () {
	
	// Seleccionamos el tablero y las celdas
	const tablero 	= document.getElementById('tablero');
	const celdas 	= tablero.getElementsByTagName('td');

	// Inicializamos el tablero como un array bidimensional
	let tableroJuego = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];

	// Variable para seguir el turno del jugador
	let turno 			= -1; // -1 para "X", 1 para "O"
	let juegoTerminado 	= false; // Estado para comprobar la victoria

	// Manejar los clics en el tablero
	tablero.addEventListener('click', function(e) {
		if (e.target.tagName === 'TD') {
			
			const celdaIndex = Array.prototype.indexOf.call(celdas, e.target);
			mover(celdaIndex);
		}
	});

	// Función para realizar el movimiento
	function mover(index) {

		if (juegoTerminado) {

			alert('El juego ha terminado. Reinicia para jugar de nuevo.');
			return;
		}

		if (tableroJuego[Math.floor(index / 3)][index % 3] === 0) {

			tableroJuego[Math.floor(index / 3)][index % 3] = turno;
			
			pintar(index);

			// Comprobamos la victoria después de un breve retraso
			setTimeout(() => {

				if (comprobarVictoria()) {

					alert(`¡Jugador ${turno === -1 ? 'X' : 'O'} gana!`);
					juegoTerminado = true; // Marcar el juego como terminado

				} else {

					turno *= -1; // Cambiar turno
				}

			}, 10);

		} else {

			alert('Esta celda ya está ocupada. Elige otra.');
		}
	}

	// Función para pintar el tablero
	function pintar(index) {

		celdas[index].textContent = (turno === -1) ? 'X' : 'O';
		// Comprobación de valores actuales
		console.log(tableroJuego);
	}

	// Función para comprobar la victoria
	function comprobarVictoria() {

		const combinacionesGanadoras = [
			// Filas
			[[0, 0], [0, 1], [0, 2]],
			[[1, 0], [1, 1], [1, 2]],
			[[2, 0], [2, 1], [2, 2]],
			// Columnas
			[[0, 0], [1, 0], [2, 0]],
			[[0, 1], [1, 1], [2, 1]],
			[[0, 2], [1, 2], [2, 2]],
			// Diagonales
			[[0, 0], [1, 1], [2, 2]],
			[[0, 2], [1, 1], [2, 0]]
		];
		
		return combinacionesGanadoras.some(combinacion => {

			const suma = combinacion.reduce((acc, [fila, col]) => acc + tableroJuego[fila][col], 0);
			return suma === -3 || suma === 3;
		});
	}

	// Seleccionar el botón de reiniciar
	const botonReiniciar = document.getElementById('reiniciar');

	// Manejar el clic en el botón de reiniciar
	botonReiniciar.addEventListener('click', reiniciarJuego);

	// Función para reiniciar el juego
	function reiniciarJuego() {

		tableroJuego = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		Array.from(celdas).forEach(celda => celda.textContent = '');
		turno = -1; // Reiniciar turno
		juegoTerminado = false; // Reiniciar estado del juego
	}

});