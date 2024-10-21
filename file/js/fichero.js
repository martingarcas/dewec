window.addEventListener("load", function () {
   
    const btnSubmit     = document.getElementById("enviar");
    const formulario    = btnSubmit.form;
    const inputFile     = formulario["fichero"];
    // Programo botón enviar
    btnSubmit.addEventListener("click", function (e) {

        e.preventDefault();
        if (inputFile.files.length > 0) {
            
            let Lector = new FileReader();
            Lector.onload = function (e) {

                var filas = this.result.split("\r\n");
                var cabeceras = filas[0].split(";");
                
                var filaDatos = filas.slice(1);
                var datos = filaDatos.map(function(v) { return v.split(";")})
                
                // Creamos la tabla
                var tabla = document.createElement("table");
                tabla.border = 1;
                document.body.appendChild(tabla);

                // Crear filas para las cabeceras
                var tr = document.createElement("tr");
                cabeceras.forEach(cabecera => {
                    var th = document.createElement("th");
                    th.textContent = cabecera;
                    tr.appendChild(th);
                });

                // Añadir cabeceras a la tabla
                tabla.appendChild(tr);


                // Recorrer los datos para generar las filas
                datos.forEach(fila => {
                    
                    var row = document.createElement("tr");

                    // Recorro las filas para crear las celdas
                    fila.forEach(celda => {
                        
                        var td = document.createElement("td");
                        td.textContent = celda;
                        row.appendChild(td);
                    });

                    // Añadir las filas a la tabla
                    tabla.appendChild(row);
                });
            }

            Lector.readAsText(inputFile.files[0]);

        } else {

            alert("Seleccione un fichero");
        }
    });

});

/*
if (inputFile.files.length > 0) {
leerFichero(inputFile.files[0]).then((datos) =>  {console.log(datos)}, (error) => {console.log(error)}) ;
} else {
 alert ("Selecciona un fichero");
 }
 */