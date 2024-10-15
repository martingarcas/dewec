window.addEventListener("load", function () {

    let contenedor  = document.getElementById("contenedor");
    let auxiliar    = document.createElement("div");
    let auxTBody    = document.createElement("tbody");
    let tabla;
   
    //Traete la plantilla;
    fetch("./plantillas/tabla.html")
        .then(respuesta => respuesta.text())
        .then(texto => {

            auxiliar.innerHTML = texto;
            tabla = auxiliar.firstElementChild;
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