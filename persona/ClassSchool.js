//Clase
function ClassSchool() {
    
    this.persons = [];
}

//Métodos
/* Añadir un alumno a la clase */
ClassSchool.prototype.addPerson = function (person) {
    
    this.persons[this.persons.length] = person;
}

/* Ordenar Nombres */
ClassSchool.prototype.orderName = function () {

    /*let methodOrder = function(a, b) {

        return (a.name).localeCompare(b.name);
    }

    this.persons.sort(methodOrder);*/

    this.persons.sort(methodOrder('name', 'texto'));

}

/* Ordenar Apellidos */
ClassSchool.prototype.orderSurname = function () {

    /*let methodOrder = function(a, b) {

        return (a.surname).localeCompare(b.surname);
    }

    this.persons.sort(methodOrder);*/

    this.persons.sort(methodOrder('surname', 'texto'));
}

/* Ordenar edad */
ClassSchool.prototype.orderAge = function () {

    /*let methodOrder = function(a, b) {

        return (a.age).localeCompare(b.age);
    }*/

    this.persons.sort(methodOrder('edad', 'numero'));
}

//Método generalizado para comparar dos cosas.
let methodOrder = function(field, type) {

    if (type == "texto") {
        
        return function (a, b) {
            return (a[field]).localeCompare(b[field]);
        }

    } else if (type == "numero") {
        
        return a[field]-b[field];

    } else {

        return function (a, b) {
            
            if (a[field]<b[field]) {
                
                return -1;

            } else {

                return 1;
            }
        }
    }

}

//Método para imprimir en un array las personas de cada clase.
ClassSchool.prototype.showClass = function () {
    
    let response    = [];
    let limit       = this.persons.length;

    for (let i = 0; i < limit; i++) {

        response[response.length] = this.persons[i].showPerson();
        
    }

    return response;
}