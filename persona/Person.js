function Person(name, surname, age) {

    this.name       = name      || "Desconocido";
    this.surname    = surname   || "Desconocido";
    this.age        = age       || 0;
    
}

Person.prototype.showPerson = function () {
    
    return [this.name, this.surname, this.age];
}