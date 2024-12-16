// /js/main.js

import { Pelota } from './models/pelota.js';
import { Juego } from './models/juego.js';

window.addEventListener('load', function () {
	const pelota = new Pelota(200, 200, 30, 15, 210); // Creamos una pelota
	const juego = new Juego(pelota); // Iniciamos el juego pasándole la pelota
});
