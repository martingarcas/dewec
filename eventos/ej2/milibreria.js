window.addEventListener("load", function () {

    const tabla = this.document.getElementById("table-section");
    tabla.editadaMartin = false;
    tabla.addEventListener("dblclick", editar);

    function editar() {

        let filaEncabezado = tabla.querySelector("thead tr");
        let filas = this.querySelectorAll("table#table-section tbody>tr");

        if (!this.editadaMartin) {

            let nuevoEncabezado = document.createElement("th");
            nuevoEncabezado.textContent = "Acciones";
            filaEncabezado.appendChild(nuevoEncabezado);

            for (let i = 0; i < filas.length; i++) {

                filas[i].editadaMartin = false;
                
                let td              = document.createElement("td");

                let botonBorrar     = document.createElement("button");
                let botonEditar     = document.createElement("button");
                let botonGuardar    = document.createElement("button");
                let botonCancelar   = document.createElement("button");
                let botonSubir      = document.createElement("button");
                let botonBajar      = document.createElement("button");

                botonBorrar.innerHTML = "Borrar";
                botonBorrar.addEventListener("click", borrarFila);
                td.appendChild(botonBorrar);

                botonEditar.innerHTML = "Editar";
                botonEditar.addEventListener("click", editarFila);
                td.appendChild(botonEditar);

                botonGuardar.innerHTML = "Guardar";
                botonGuardar.addEventListener("click", guardarFila);
                td.appendChild(botonGuardar);

                
                botonCancelar.innerHTML = "Cancelar";
                botonCancelar.addEventListener("click", cancelarFila);
                td.appendChild(botonCancelar);

                        
                botonSubir.innerHTML = "↑";
                botonSubir.addEventListener("click", subirFila);
                td.appendChild(botonSubir);

                botonBajar.innerHTML = "↓";
                botonBajar.addEventListener("click", bajarFila);
                td.appendChild(botonBajar);
                
                filas[i].appendChild(td);
            }

            let tFoot   = document.createElement("tfoot");
            let trFoot  = document.createElement("tr");
            let td1     = document.createElement("td");
            let td2     = document.createElement("td");
            let td3     = document.createElement("td");

            let inputDni    = document.createElement("input");
            let inputNombre = document.createElement("input");

            td1.appendChild(inputDni);
            td2.appendChild(inputNombre);


            let botonGuardar    = document.createElement("button");
            let botonCancelar   = document.createElement("button");

            botonGuardar.innerHTML = "Guardar";
            botonGuardar.addEventListener("click", guardarNuevo);
            td3.appendChild(botonGuardar);

            
            botonCancelar.innerHTML = "Cancelar";
            botonCancelar.addEventListener("click", cancelarNuevo);
            td3.appendChild(botonCancelar);

            trFoot.appendChild(td1);
            trFoot.appendChild(td2);
            trFoot.appendChild(td3);
            tFoot.appendChild(trFoot);

            tabla.appendChild(tFoot);
            
        } else {

            // Eliminar la columna acciones
            filaEncabezado.removeChild(filaEncabezado.lastChild);
            filas.forEach(fila => {
                fila.removeChild(fila.lastChild);
            });

            // Eliminar el tfoot
            var tFoot = tabla.querySelector("tfoot");
            if (tFoot) {
                
                tabla.removeChild(tFoot);
            }
        }

        this.editadaMartin =! this.editadaMartin;
    }

    function borrarFila() {
        
        this.parentNode.parentNode.remove();
    }

    function editarFila() {

        let fila = this.parentNode.parentNode;

        if (!fila.editadaMartin) {

            let valores = [];
            
            fila.editadaMartin =  true;

            let celdas  = fila.cells;
            let nCeldas = celdas.length;
    
            for (let i = 0; i < nCeldas - 1; i++) {
    
                let txtValor = document.createElement("input");
                txtValor.type = "text";
                txtValor.value = celdas[i].innerHTML;
                valores.push(txtValor.value);
                celdas[i].innerHTML = "";
                celdas[i].appendChild(txtValor);
            }

            fila.valoresOriginales = valores;
        }
    }

    function guardarFila() {

        let fila = this.parentNode.parentNode;

        if (fila.editadaMartin) {

            fila.editadaMartin =  false;

            let celdas  = fila.cells;
            let nCeldas = celdas.length;
            
            for (let i = 0; i < nCeldas - 1; i++) {
                
                let inputValue = celdas[i].firstElementChild.value;
                celdas[i].innerHTML = inputValue;
            }
        }

    }

    function cancelarFila() {
        
        let fila = this.parentNode.parentNode;

        if (fila.editadaMartin) {

            fila.editadaMartin =  false;

            let celdas  = fila.cells;
            let nCeldas = celdas.length;
            
            for (let i = 0; i < nCeldas - 1; i++) {
                
                celdas[i].innerHTML = fila.valoresOriginales[i];
            }
        }
    }

    //subir y bajarfilas

    function subirFila() {
        
        let fila = this.parentNode.parentNode;

        if (fila.previousElementSibling) {
            
            fila.parentNode.insertBefore(fila, fila.previousElementSibling);
        }
    }

    function bajarFila() {
        
        let fila = this.parentNode.parentNode;

        if (fila.nextElementSibling) {
            
            fila.parentNode.insertBefore(fila.nextElementSibling, fila);
        }
    }

    function guardarNuevo() {
        
                
    }

    function cancelarNuevo() {
        
        var inputs = tabla.querySelectorAll("tfoot input");
        inputs.forEach(input => {
            input.value = "";
        });
    }

});