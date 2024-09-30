//let inputDate       = document.querySelector('.field-date>input').value;
//let inputDate;
let buttonSection   = document.querySelector('#buttonSection');
let button1         = document.querySelector('#button1');
let button2         = document.querySelector('#button2');
let button3         = document.querySelector('#button3');
let button4         = document.querySelector('#button4');
let button5         = document.querySelector('#button5');
let button6         = document.querySelector('#button6');
let button7         = document.querySelector('#button7');
let result          = document.querySelector('.result');
//Dates
let currentDate     = new Date();
let enteredDate;
let error           = 'La fecha introducida no es válida.';
let myDate;


//Función para formatear fecha
Date.prototype.toString = function () {

    let currentDay      = this.getDate();
    let currentMonth    = this.getMonth() + 1;
    let currentYear     = this.getFullYear();

    return ((currentDay < 10) ? "0" : "") + currentDay + "/" +
            ((currentMonth < 10) ? "0" : "") + currentMonth + "/" + 
            currentYear;
}

//Función que pasa una cadena devuelve TRUE o FALSE
//Indicando si es una fecha válida formato dd/mm/yyyy
function validDate() {

    enteredDate         = inputObject.split('/');
    let responseDate    = 'false';

    // Comprobar formato
       if (enteredDate.length == 3 && enteredDate.every(comp)) {

        // Comprobar fecha
        let newDate     = new Date(enteredDate[2], enteredDate[1] - 1, enteredDate[0]);
        responseDate    = (enteredDate[0] - newDate.getDate() == 0) &&
                          (enteredDate[1] - newDate.getMonth() == 1) &&
                          (enteredDate[2] - newDate.getFullYear() == 0);
        }

        
        //console.log(responseDate);
        result.innerHTML = responseDate;
        return responseDate;
}

//Función que compara que el dato introducido sea número y entero
function comp(a) {
    
    return parseInt(a) == a;
}

//Función para validar Matrícula de coche
function validCar() {

    let regex = "/^(\d{4})\s?[B-DF-HJ-NP-TV-Z]{3}$/i";

    //let validate = inputObject.test(regex);

    console.log(inputObject);
    

    console.log(inputObject.match(regex));    
}

buttonSection.addEventListener('click', function(e) {

    //llevar dentro de las funciones
    inputObject   = document.querySelector('.field-cnt>input').value;
    
    if (e.target === button1) {        

        validDNI();
    }

    if (e.target === button2) {
        
        validDate(); 
    }

    if (e.target === button3) {
        
        validIp();
    }

    if (e.target === button4) {
        
        validBank();
    }

    if (e.target === button5) {
        
        validPhone();
    }

    if (e.target === button6) {
        
        validCar();
    }

    if (e.target === button7) {
        
        validHour();
    }
});
/*
    /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/i para validar codigo postal
    dos primeros dígitos  si empieza en 0 va de 1-9 si de 1-4 / el segundo
    regex101

numero telefono: 
        ^(0034|\+34)?[6-9]\d[8]$

Aula que nopuede empezar por 0 y que la maxima es 39, y letra a b c d e
    ^([1-9]|[1-3]\d)([A-E])$

    \d = [0-9]

nombre de fichero con extensiones:   /^([a-z0-9ñüáéíóú_\-*]+)[.](png|jpeg|jpg|gif|ico|svg])$/i

    \w letras

IBAN BANCO: ES12 1245 4567 21 1039876574
    ^([A-Z]{2}\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{2})\s?(\d{10})$

Tarjeta  crédito: 4603 3210 4532 8914
    ^(\d{4}\s?){3}(\d{4})$
    ^(\d{4})\s?(\d{4})\s?(\d{4})\s?(\d{4})$

Matrícula de coche:
    ^(\d{4})\s?[B-DF-HJ-NP-TV-Z]{3}

Dirección IP:

    ^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[.](\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[.](\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[.](\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$
    ^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[.]{3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))

Métodos exec(string)

VALIDACIONES:


*/