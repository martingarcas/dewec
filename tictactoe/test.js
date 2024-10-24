	// Función para reiniciar el juego
	function reiniciarJuego() {

		tableroJuego = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];

		Array.from(celdas).forEach(celda => celda.textContent = '');
		turno = -1; // Reiniciar turno
	}