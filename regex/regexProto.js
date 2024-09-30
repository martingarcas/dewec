
String.prototype.esDni = function(){

    var regex = /^(\d{7,8})([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
    var partes=regex.exec(this);
    var respuesta=false;

    if (partes){

        if ("TRWAGMYFPDXBNJZSQVHLCKE"[partes[1]%23]==partes[2].toUpperCase()){

            respuesta=true;
        }
    }
    return respuesta;
}

String.prototype.esIp = function(){
    
    var regex = /(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/i;
    return regex.test(this);
}

String.prototype.esN_cuenta = function(){

    var regex = /([A-Z]{2}\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{2})\s?(\d{10})$/i;
    return regex.test(this);
}

String.prototype.esTelefono = function(){

    var regex = /^(\+34|0034)?[6-9]\d{8}$/i;
    return regex.test(this);
}

String.prototype.esMatricula = function(){

    var regex = /^(\d{4})([B-DF-HJ-NP-TV-Z]{3})$/i;
    return regex.test(this);
}

String.prototype.esCod_barras = function() {

    var regex = /^\d{13}$/i;

    if (!regex.test(this)) {

        return false;
    }

    var numeros = this.split('').map(Number); // Convierte la cadena en un array de dígitos

    var inpares = numeros[0] + numeros[2] + numeros[4] + numeros[6] + numeros[8] + numeros[10];
    var pares = (numeros[1] + numeros[3] + numeros[5] + numeros[7] + numeros[9] + numeros[11]) * 3;

    var totalSum = pares + inpares;
    var final = (10 - (totalSum % 10)) % 10; 

    return final === numeros[12]; 
};

String.prototype.esFecha = function() {

    var regex = /^(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/-?\d{1,4}$/;
    return regex.test(this);
};


String.prototype.esHora = function(){

    var regex = /^(0?[0-9]|1[0-9]|2[0-3])\:(0[0-9]|[1-5][0-9])$/;
    return regex.test(this);
}

window.addEventListener("load", function(){

    var botonDni        = document.querySelector('#button1');
    var botonIp         = document.querySelector('#button2');
    var botonN_cuenta   = document.querySelector('#button3');
    var botonTel        = document.querySelector('#button4');
    var botonMatricula  = document.querySelector('#button5');
    var botonCod_barras = document.querySelector('#button6');
    var botonFecha      = document.querySelector('#button7');
    var botonHora       = document.querySelector('#button8');

    botonDni.onclick = function(){

        var dni         = document.getElementById("dni");
        var span        = document.getElementById("span_dni");
        span.innerHTML  = dni.value.esDni();
    }

    botonIp.onclick = function(){

        var ip          = document.getElementById("ip");
        var span        = document.getElementById("span_ip");
        span.innerHTML  = ip.value.esIp();
    }

    botonN_cuenta.onclick = function(){

        var numero      = document.getElementById("cuenta");
        var span        = document.getElementById("span_cuenta");
        span.innerHTML  = numero.value.esN_cuenta();
    }

    botonTel.onclick = function(){

        var telefono    = document.getElementById("telefono");
        var span        = document.getElementById("span_telefono");
        span.innerHTML  = telefono.value.esTelefono();
    }

    botonMatricula.onclick = function(){

        var matricula   = document.getElementById("matricula");
        var span        = document.getElementById("span_matricula");
        span.innerHTML  = matricula.value.esMatricula();
    }

    botonCod_barras.onclick = function(){

        var cod_barras  = document.getElementById("cod_barras");
        var span        = document.getElementById("span_cod_barras");
        span.innerHTML  = cod_barras.value.esCod_barras();
    }

    botonFecha.onclick = function(){

        var fecha       = document.getElementById("fecha");
        var span        = document.getElementById("span_fecha");
        span.innerHTML  = fecha.value.esFecha();
    }

    botonHora.onclick = function(){

        var hora        = document.getElementById("hora");
        var span        = document.getElementById("span_hora");
        span.innerHTML  = hora.value.esHora();
    }
    
});