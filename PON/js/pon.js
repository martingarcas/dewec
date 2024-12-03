
window.addEventListener('load', function () {

	let canvas 	= document.querySelector('#tablero');
	let ctx 	= canvas.getContext("2d");
	let pelota 	= [200, 200, 20];

	canvas.pelota 		= pelota;
	canvas.ctx 			= ctx;
	canvas.angulo 		= 210;
	canvas.velocidad 	= 15;


	canvas.temporizadorPelota = setInterval(function () {
		let canvas 	= document.querySelector('#tablero');
		canvas.img = document.createElement("img");
		canvas.img.src = "img/pelota.png";
		canvas.sonido = document.createElement("audio");
		canvas.sonido.src = "sonidos/pelotazo.mp3";

		let anguloRadianes = (2 * Math.PI * canvas.angulo)/360 //convertimos el angulo en radianes (no es necesario)

		canvas.pelota[0] += canvas.velocidad * Math.cos(anguloRadianes);
		canvas.pelota[1] -= canvas.velocidad * Math.sin(anguloRadianes);

		if (canvas.pelota[0] - canvas.pelota[2] <= 0 || (canvas.pelota[0] + canvas.pelota[2] >= 1024)) {
			canvas.angulo = 180 - canvas.angulo;
			canvas.sonido.play();
			// canvas.sonido.duration = 1;
		}

		if ((canvas.pelota[1] -canvas.pelota[2] <= 0 || (canvas.pelota[1] + canvas.pelota[2] >= 768))) {
			canvas.angulo = 360 - canvas.angulo;
			canvas.sonido.play();
		}

	}, 30);

	canvas.temporizador = setInterval(function () {

		let canvas 	= document.querySelector('#tablero');
		canvas.ctx.clearRect(0, 0, 1024, 768);
		pintarPelota(canvas.pelota, canvas.ctx, canvas.img);
	}, 30);

	window.addEventListener("keydown", function (e) {
		let canvas 	= document.querySelector('#tablero');

		let velocidad = 10;

		if (e.shiftKey) {
			velocidad = 15;
		}

		// console.log(e)
		switch (e.code) {
			case 'ArrowRight':
				if (pelota[0] + velocidad < 1004) {
					pelota[0] += velocidad;
				}
				break;
			case 'ArrowLeft':
				pelota[0] -= velocidad;
				break;
			case 'ArrowUp':
				pelota[1] -= velocidad;
				break;
			case 'ArrowDown':
				pelota[1] += velocidad;
				break;
		}
	});

});

function pintarPelota(pelota, ctx, img) {

	ctx.beginPath();
	ctx.drawImage(img, pelota[0] - 30, pelota[1] - 30);
	// ctx.arc(pelota[0], pelota[1], pelota[2], 0 , 2 * Math.PI);
	ctx.stroke();
}