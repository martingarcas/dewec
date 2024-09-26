/*class Car {

    constructor(type, marca, color, year) {
        this.type  = type;
        this.marca = marca;
        this.color = color;
        this.year  = year;
    }

    resumeCar() {
        return `${this.marca} ${this.type} del año ${this.year} y de color ${this.color}`;
    }
}

let audi = new Car("Deportivo", "Audi", "Negro mate", 2024)

console.log(audi.resumeCar());*/

function Person(firstName, lastName, year) {
    
    this.firstName  = firstName || "Desconocido";
    this.lastName   = lastName || "Desconocido";
    this.year       = year || 0;

}

Person.prototype.info=function () {
    
    return this.firstName + " " + this.lastName + " tiene " + this.year + " años.";
}

Person.prototype.country    =   "España";

