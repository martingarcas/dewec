window.addEventListener("load", function () {
    
    let contaniner  = document.getElementById("contenedor");
    let enlace      = document.createElement("a");
    let formulario  = document.forms["alumno"];
    let button      = formulario.elements["grabar"];

    button.onclick  = crearParrafos;
    

    enlace.href         = "https://www.google.es";
    enlace.innerHTML    = "GOOGLE";
    enlace.style.color  = "red";
    enlace.target       = "_blank";

    contaniner.appendChild(enlace);
    //contaniner.innerHTML += "<a href='https://www.uja.es' target='_blank'>UJA</a>"; 

    function crearParrafos() {
        
        for (let i = 0; i < 10; i++) {
        
            let parrafo =  document.createElement("p");
            parrafo.innerHTML = "Párrafo " + (i + 1);
            
            contaniner.appendChild(parrafo);
        }
    }
})