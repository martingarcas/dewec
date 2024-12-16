// /js/models/pala.js

export class Pala {
	constructor(x, y, ancho, alto) {
		this.x = x; // Coordenada X
		this.y = y; // Coordenada Y
		this.ancho = ancho; // Ancho de la pala
		this.alto = alto; // Alto de la pala
		this.velocidad = 15; // Velocidad de movimiento
	}

	// Método para mover la pala
	mover(direccion) {
		if (direccion === "up" && this.y > 0) {
			this.y -= this.velocidad;
		}
		if (direccion === "down" && this.y + this.alto < 768) {
			this.y += this.velocidad;
		}
	}

	// Método para pintar la pala como una barra en el canvas
	pintar(ctx) {
		ctx.fillStyle = "blue"; // Color de la pala
		ctx.fillRect(this.x, this.y, this.ancho, this.alto); // Dibujamos la pala como un rectángulo
	}
}
