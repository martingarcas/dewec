// /js/models/juego.js

import { Pelota } from './pelota.js';
import { Pala } from './pala.js';

export class Juego {
	constructor(pelota) {
		this.canvas = document.querySelector('#tablero');
		this.ctx = this.canvas.getContext("2d");
		this.pelota = pelota;
		this.palaIzquierda = new Pala(10, 300, 20, 100); // Pala izquierda
		this.palaDerecha = new Pala(994, 300, 20, 100); // Pala derecha
		this.velocidad = 20; // Velocidad de las palas
		this.puntajeJugador1 = 0;
		this.puntajeJugador2 = 0;
		this.marcador = document.querySelector("#marcador");
		this.iniciarBtn = document.querySelector("#iniciar-btn");
		this.reiniciarBtn = document.querySelector("#reiniciar-btn");
		this.iniciarBtn.addEventListener("click", () => this.iniciarJuego());
		this.reiniciarBtn.addEventListener("click", () => this.reiniciarJuego());
		this.juegoIniciado = false;
		this.teclasPresionadas = {};
		this.mensajeGol = "";
		this.mensajeGolAlpha = 0;
		this.mensajeGolPosY = 384;
		this.pausaGol = false;
	}

	iniciarJuego() {
		this.iniciarBtn.style.display = "none";
		this.reiniciarBtn.style.display = "inline-block";
		this.juegoIniciado = true;
		this.temporizadorPelota = setInterval(() => {
			if (!this.pausaGol) {
				this.pelota.mover();
				this.rebotarConPala();
				this.comprobarGol();
			}
		}, 30);
		this.temporizador = setInterval(() => {
			this.ctx.clearRect(0, 0, 1024, 768);
			this.pelota.pintar(this.ctx);
			this.palaIzquierda.pintar(this.ctx);
			this.palaDerecha.pintar(this.ctx);
			if (this.mensajeGolAlpha > 0) {
				this.ctx.fillStyle = "rgba(255, 0, 0, " + this.mensajeGolAlpha + ")";
				this.ctx.font = "50px Arial";
				this.ctx.textAlign = "center";
				this.ctx.fillText(this.mensajeGol, 512, this.mensajeGolPosY);
				this.mensajeGolAlpha -= 0.05;
			}
		}, 30);
		window.addEventListener("keydown", this.controlarTeclas.bind(this));
	}

	reiniciarJuego() {
		this.puntajeJugador1 = 0;
		this.puntajeJugador2 = 0;
		this.pelota.x = 512;
		this.pelota.y = 384;
		this.pelota.angulo = 210;
		this.actualizarMarcador();
		this.reiniciarBtn.style.display = "none";
		this.iniciarBtn.style.display = "inline-block";
		this.juegoIniciado = false;
		this.palaIzquierda.y = 300;
		this.palaDerecha.y = 300;
		window.addEventListener("keydown", this.controlarTeclas.bind(this));
	}

	actualizarMarcador() {
		document.getElementById('puntosJugador1').textContent = this.puntajeJugador1;
		document.getElementById('puntosJugador2').textContent = this.puntajeJugador2;
	}

	comprobarGol() {
		if (this.pelota.x - this.pelota.radio <= 0) {
			this.puntajeJugador2++;
			this.mostrarMensajeGol('Daniel');
		}
		if (this.pelota.x + this.pelota.radio >= 1024) {
			this.puntajeJugador1++;
			this.mostrarMensajeGol('Martín');
		}
	}

	mostrarMensajeGol(jugador) {
		this.mensajeGol = `¡¡¡GOOOL del jugador ${jugador}!!!`;
		this.mensajeGolAlpha = 1;
		this.mensajeGolPosY = 384;
		this.pausaGol = true;

		// Cambiar la pelota a la posición donde se encuentra actualmente, no en la posición inicial
		if (jugador === 'Martín') {
			// Martín anotó, entonces Daniel (jugador 2) debe sacar, coloca la pelota cerca de la pala de Daniel (jugador 2)
			this.pelota.x = this.palaDerecha.x - this.pelota.radio;
			this.pelota.angulo = 135;  // La pelota debe ir hacia la izquierda
		} else {
			// Daniel anotó, entonces Martín (jugador 1) debe sacar, coloca la pelota cerca de la pala de Martín (jugador 1)
			this.pelota.x = this.palaIzquierda.x + this.palaIzquierda.ancho + this.pelota.radio;
			this.pelota.angulo = 45;   // La pelota debe ir hacia la derecha
		}

		// Reiniciar la velocidad de la pelota a 0
		this.pelota.velocidad = 0;

		this.pelota.y = 384;

		this.actualizarMarcador();

		// Esperamos que el jugador presione la tecla Espacio para disparar la pelota
		window.addEventListener("keydown", this.dispararPelota.bind(this));
	}

	dispararPelota(e) {
		if (e.code === "Space") {
			if (this.pelota.velocidad === 0) {
				if (this.pelota.x < 512) {
					this.pelota.angulo = 45;
				} else {
					this.pelota.angulo = 135;
				}
				this.pelota.velocidad = 10;
			}
			this.mensajeGolAlpha = 0;
			this.pausaGol = false;
		}
	}

	rebotarConPala() {
		if (this.pelota.x - this.pelota.radio <= this.palaIzquierda.x + this.palaIzquierda.ancho &&
			this.pelota.y > this.palaIzquierda.y &&
			this.pelota.y < this.palaIzquierda.y + this.palaIzquierda.alto) {
			this.pelota.angulo = 180 - this.pelota.angulo;
		}
		if (this.pelota.x + this.pelota.radio >= this.palaDerecha.x &&
			this.pelota.y > this.palaDerecha.y &&
			this.pelota.y < this.palaDerecha.y + this.palaDerecha.alto) {
			this.pelota.angulo = 180 - this.pelota.angulo;
		}
	}

	controlarTeclas(e) {
		let velocidad = this.velocidad;
		if (e.shiftKey) velocidad = 25;

		switch (e.code) {
			case 'ArrowUp':
				if (this.palaDerecha.y > 0) this.palaDerecha.y -= velocidad;
				break;
			case 'ArrowDown':
				if (this.palaDerecha.y + this.palaDerecha.alto < this.canvas.height) this.palaDerecha.y += velocidad;
				break;
			case 'KeyW':
				if (this.palaIzquierda.y > 0) this.palaIzquierda.y -= velocidad;
				break;
			case 'KeyS':
				if (this.palaIzquierda.y + this.palaIzquierda.alto < this.canvas.height) this.palaIzquierda.y += velocidad;
				break;
		}
	}
}
