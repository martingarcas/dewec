

HTMLTableElement.prototype.tablaToJSON = function () {
    
    var respuesta = {};
    // Capturo 1º fila tabla
    var tr = this.tHead.firstElementChild;
    // Genero array con los valores de la cabecera
    respuesta.cabecera = Array.from(tr.cells, function (v) {
        
        return v.innerText;
    });

    // Genero array con los valores de la tabla
    var filas = this.tBodies[0].rows;

    respuesta.cuerpo = Array.from(filas, function (f) {

        return Array.from(f.cells, function (c) {
            return c.innerText;
        });
    });

    return JSON.stringify(respuesta);
}


HTMLTableElement.prototype.JSONToTabla = function (jsonText) {
    
    var objeto = JSON.parse(jsonText);

    this.tHead.innerHTML = (Array.from(objeto.cabecera, function (valor) {

        return "<th>" + valor + "</th>";
    })).join("");

    //this.
}

/*
t = document.querySelector("table");
jsonTable = tablaToJSON();

 */