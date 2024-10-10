 // Método para gestionar la columna de acciones
 HTMLTableElement.prototype.toggleActionColumn = function () {

    const actionHeader      = "Acciones"; // Texto de la cabecera de acciones
    const existingHeader    = Array.from(buttonSection.getElementsByTagName("th")).find(th => th.innerText === actionHeader);

    if (existingHeader) {

        // Si existe, eliminar la cabecera y las celdas de acciones
        buttonSection.getElementsByTagName("tr")[0].removeChild(existingHeader); // Asegúrate de eliminar del <tr> correcto

        let tBody = this.getElementsByTagName("tbody")[0];
        let filas = tBody.getElementsByTagName("tr");

        Array.from(filas).forEach(function (fila) {

            fila.removeChild(fila.lastElementChild); // Eliminar la última celda (que debería ser la de acciones)
        });

    } else {

        // Si no existe, crear la nueva cabecera
        let th = document.createElement("th");
        th.innerText = actionHeader;
        buttonSection.getElementsByTagName("tr")[0].appendChild(th); // Añadir el nuevo th al <tr> del <thead>

        // Recorrer las filas del cuerpo de la tabla y agregar acciones
        let tBody = this.getElementsByTagName("tbody")[0];
        let filas = tBody.getElementsByTagName("tr");

        Array.from(filas).forEach(function (fila) {

            let td = document.createElement("td");

            // Crear botón Editar
            let editButton = document.createElement("button");
            editButton.innerText = "Editar";

            editButton.onclick = function () {
                editRow(fila); // Llamar a la función de edición
            };

            // Crear botón Borrar
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Borrar";

            deleteButton.onclick = function () {
                tBody.removeChild(fila); // Borrar la fila
            };

            // Añadir botones a la celda
            td.appendChild(editButton);
            td.appendChild(deleteButton);
            fila.appendChild(td);
        });
    }
};

// Función para editar una fila
function editRow(fila) {

    // Obtener valores actuales
    const originalDni       = fila.cells[0].innerText;
    const originalNombre    = fila.cells[1].innerText;

    // Reemplazar el contenido de las celdas por inputs
    fila.cells[0].innerHTML = `<input type="text" value="${originalDni}" />`;
    fila.cells[1].innerHTML = `<input type="text" value="${originalNombre}" />`;

    // Crear celda para botones "Guardar" y "Cancelar"
    const actionsCell       = fila.cells[2]; // Suponiendo que la celda de acciones es la tercera
    actionsCell.innerHTML   = ""; // Limpiar la celda de acciones

    // Crear botón Guardar
    const saveButton        = document.createElement("button");
    saveButton.innerText    = "Guardar";

    saveButton.onclick = function () {

        // Guardar los nuevos valores
        const newDni    = fila.cells[0].querySelector("input").value;
        const newNombre = fila.cells[1].querySelector("input").value;

        fila.cells[0].innerText = newDni;
        fila.cells[1].innerText = newNombre;

        // Volver a crear los botones de acciones
        createActionButtons(fila);
    };

    // Crear botón Cancelar
    const cancelButton      = document.createElement("button");
    cancelButton.innerText  = "Cancelar";

    cancelButton.onclick = function () {

        // Restaurar los valores originales
        fila.cells[0].innerText = originalDni;
        fila.cells[1].innerText = originalNombre;

        // Volver a crear los botones de acciones
        createActionButtons(fila);
    };

    // Añadir botones a la celda de acciones
    actionsCell.appendChild(saveButton);
    actionsCell.appendChild(cancelButton);
}

// Función para volver a crear los botones de acción en una fila
function createActionButtons(fila) {

    const actionsCell       = fila.cells[2]; // Suponiendo que la celda de acciones es la tercera
    actionsCell.innerHTML   = ""; // Limpiar la celda de acciones

    // Crear botón Editar
    const editButton        = document.createElement("button");
    editButton.innerText    = "Editar";

    editButton.onclick = function () {

        editRow(fila); // Llamar a la función de edición
    };

    // Crear botón Borrar
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Borrar";

    deleteButton.onclick = function () {

        const tBody = tableSection.getElementsByTagName("tbody")[0];
        tBody.removeChild(fila); // Borrar la fila
    };

    // Añadir botones a la celda de acciones
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
}


// Añadir evento de doble clic para gestionar la columna de acciones
tableSection.addEventListener('dblclick', function () {
    
    tableSection.toggleActionColumn(); // Llamar al método para alternar la columna de acciones
});