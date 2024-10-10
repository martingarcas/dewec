// Módulo para el mantenimiento de Tablas
// Cremos una función al prototipo de Table dónde le pasamos
// como parámetros la columna a ordenar y la función que vayamos a necesitar.
// columna un número entre 0 y columna -1
// funcion ordenar parametro voluntario caso de pasarse
// function (a, b) {
// return (+-0)
// }
window.addEventListener("load", function () {

    let buttonSection   = document.querySelector("#button-section");
    let tableSection    = document.querySelector("#table-section");
    //let tBody           = document.querySelector("#body-table");

    /* Ordenar Nombres */
    HTMLTableElement.prototype.orderTable = function (colum, orden, orderFunction) {

        let tBody = this.getElementsByTagName("tbody")[0];
        let filas = tBody.getElementsByTagName("tr");

        //let longitud = filas.length;

        /*for (let i = 0; i < longitud; i++) {
            
            v.push(filas[i]);
        }*/

        let vector = Array.from(filas);

            if (orderFunction) {
                
                vector.sort(function (f1, f2) {
                                
                    return orden * orderFunction(f1.cells[colum].innerHTML, f2.cells[colum].innerHTML);
                });

            } else {

                vector.sort(function (f1, f2) {
                    
                    return orden * f1.cells[colum].innerHTML.localeCompare(f2.cells[colum].innerHTML);
                });
            }

            vector.forEach(function (v) {

               tBody.appendChild(v);
            });
    }
    
    // Aplico atributo orden a los botones/cabeceras
    let orden1 = tableSection.getElementsByTagName("th")[0].orden = 1;
    let orden2 = tableSection.getElementsByTagName("th")[1].orden = 1;

    buttonSection.addEventListener('click', function(e) {        
        
        if (e.target === document.querySelector("#button1")) {
    
            tableSection.orderTable(0, orden1);

            orden1 *= -1; 
        }
    
        if (e.target === document.querySelector("#button2")) {
            
            tableSection.orderTable(1, orden2);  
            
            orden2 *= -1;
        }
    
    });

    

    
});

//Al pulsar dobleClick sobre la tabla se le añadira otra columna-->
//Cabecera: Acciones
//Cuerpo: Editar Borrar
//Al pulsar dobleClick se va
//Al pulsar en borrar, se borra la fila entera
//Al pulsar en editar, saldran dos type text con sus valores y al lado dos botones para guardar o cancelar