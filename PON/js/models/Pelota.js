// /js/models/pelota.js

// let sonidoHabilitado = false;

export class Pelota {
	constructor(x, y, radio, velocidad, angulo) {
		this.x = x; // Coordenada X
		this.y = y; // Coordenada Y
		this.radio = radio; // Radio de la pelota
		this.velocidad = velocidad; // Velocidad de movimiento
		this.angulo = angulo; // Ángulo de movimiento en grados
		this.img = new Image(); // Imagen de la pelota
		// this.sonido = new Audio('sonidos/pelotazo.mp3'); // Sonido de rebote
		this.img.src = 'img/pelota.png';
	}

	// Método para mover la pelota
	mover() {
		// Convertimos el ángulo en radianes
		let anguloRadianes = (2 * Math.PI * this.angulo) / 360;

		// Calculamos las nuevas coordenadas
		this.x += this.velocidad * Math.cos(anguloRadianes);
		this.y -= this.velocidad * Math.sin(anguloRadianes); // El eje Y va hacia abajo

		// Rebote en los bordes (horizontal)
		if (this.x - this.radio <= 0 || this.x + this.radio >= 1024) {
			this.angulo = 180 - this.angulo;  // Rebote horizontal
			// this.reproducirSonido(); // Reproducir sonido de rebote
		}

		// Rebote en los bordes (vertical)
		if (this.y - this.radio <= 0 || this.y + this.radio >= 768) {
			this.angulo = 360 - this.angulo;  // Rebote vertical
			// this.reproducirSonido(); // Reproducir sonido de rebote
		}
	}

	// Método para pintar la pelota en el contexto del canvas
	pintar(ctx) {
		ctx.beginPath();
		ctx.drawImage(this.img, this.x - this.radio, this.y - this.radio); // Pintamos la pelota
		ctx.stroke();
	}

	// Método para reproducir el sonido si está habilitado
	// reproducirSonido() {
	// 	if (sonidoHabilitado && this.sonido) {
	// 		this.sonido.play().catch(error => {
	// 			console.error('Error al reproducir el sonido:', error);
	// 		});
	// 	}
	// }
}
