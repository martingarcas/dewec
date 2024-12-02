// Función para validar el DNI
String.prototype.esDni = function(){

    var regex = /^(\d{7,8})([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
    var partes=regex.exec(this);
    var respuesta = false;

    if (partes){

        if ("TRWAGMYFPDXBNJZSQVHLCKE"[partes[1]%23]==partes[2].toUpperCase()){

            respuesta = true;
        }
    }
    return respuesta;
}

String.prototype.esCadena = function () {
	
	var expr = /^\w+( \w+)*$/i;

	return expr.test(this);
}

String.prototype.esFecha = function () {
	
	var expr = /\d{2}\/\d{2}\/\d{4}/i;

	return expr.test(this);
}
