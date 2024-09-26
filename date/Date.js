//let inputDate       = document.querySelector('.field-date>input').value;
let inputDate;
let buttonSection   = document.querySelector('#buttonSection');
let button1         = document.querySelector('#button1');
let button2         = document.querySelector('#button2');
let button3         = document.querySelector('#button3');
let button4         = document.querySelector('#button4');
let button5         = document.querySelector('#button5');
let button6         = document.querySelector('#button6');
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
function validDate(date) {

    enteredDate         = inputDate.split('/');
    let responseDate    = 'false';

    // Comprobar formato
       if (enteredDate.length == 3 && enteredDate.every(comp)) {

        // Comprobar fecha
        let newDate     = new Date(enteredDate[2], enteredDate[1] - 1, enteredDate[0]);
        responseDate    = (enteredDate[0] - newDate.getDate() == 0) &&
                          (enteredDate[1] - newDate.getMonth() == 1) &&
                          (enteredDate[2] - newDate.getFullYear() == 0);
        }

        
        console.log(responseDate);
        result.innerHTML = responseDate;
        return responseDate;
}

//Función que compara que el dato introducido sea número y entero
function comp(a) {
    
    return parseInt(a) == a;
}

//     result.style.backgroundColor = 'red';
//      result.innerHTML = error;

buttonSection.addEventListener('click', function(e) {

    inputDate = document.querySelector('.field-date>input').value;
    
    if (e.target === button1) {        

        validDate();
    }

    if (e.target === button2) {
        
        console.log('hola');   
    }

    if (e.target === button3) {
        
        console.log('hola'); 
    }

    if (e.target === button4) {
        
        console.log('hola'); 
    }

    if (e.target === button5) {
        
        console.log('hola');
    }

    if (e.target === button6) {
        
        console.log('hola');
    }
});

