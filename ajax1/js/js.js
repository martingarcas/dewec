window.addEventListener("load", function () {

    //Traete la plantilla;
    let contenedor  = document.getElementById("contenedor");
    let auxiliar    = document.createElement("div");
    let auxTBody    = document.createElement("tbody");
    let tabla;
   
    fetch("./plantillas/tabla.html")
        .then(respuesta => respuesta.text())
        .then(texto => {

            auxiliar.innerHTML = texto;
            // Capturo la tabla
            tabla = auxiliar.firstElementChild;
            tabla.addEventListener("dblclick", function (e) {
                
                if (!e.ctrlKey) {

                    tabla.classList.toggle("ACTIVADO");

                } else {

                    tabla.classList.toggle("IMPORTANTE");
                }
            });
            
            let tBody = tabla.tBodies[0];
            auxTBody.appendChild(tBody.firstElementChild);
            let modelo = auxTBody.firstElementChild;

            fetch("datos/alumnos.json")
            .then(respuesta => respuesta.json())
            .then(datos => {
                
                datos.forEach(element => {
                    
                    let fila = modelo.cloneNode(true)
                    fila.children[0].innerHTML = element.dni;
                    fila.children[1].innerHTML = element.nombre;

                    tBody.appendChild(fila);
                });

                contenedor.appendChild(tabla);
            })
        })
});

/*
          // Capturo la tabla
            var t = contenedor.firstElementChild;
            t.addEventListener("dblclick", function (e) {
                
                if (!e.ctrlKey) {

                    t.classList.toggle("ACTIVADO");

                } else {

                    t.classList.toggle("IMPORTANTE");
                }
            });
 */