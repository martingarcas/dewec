window.addEventListener("load", function () {
   
    let cnt             = document.querySelector('.cnt');
    let buttonAdd       = cnt.querySelector('.button-add');
    let buttonDelete    = cnt.querySelector('.button-delete');
    let newOptionInput  = document.querySelector("#new-option");
    let select1         = document.querySelector("#select1");

    buttonAdd.addEventListener("click", function () {
        
        let p           = document.createElement("p");
        p.innerHTML     = "Hola Martín";
        p.style.cursor  = "pointer";
        p.addEventListener("dblclick", function () {            
           
            this.parentElement.removeChild(this);
        });

        cnt.appendChild(p);
    });

    buttonDelete.addEventListener("click", function () {
        
        cnt.removeChild(cnt.lastElementChild);
    });

    document.addEventListener("keydown",  function (e) {
        
        if (e.ctrlKey && e.key == "p") {
            e.preventDefault();
            crear();
        }
    })

    
    newOptionInput.addEventListener("keypress",  function (e) {
    
        if (e.key === "Enter") {
            e.preventDefault();
            
            let newOption       = document.createElement("option");
            newOption.innerHTML = newOptionInput.value;
            select1.appendChild(newOption);
        }
    });

    //buttonAdd.addEventListener("mouseover", crear);

    function crear() {
        let p           = document.createElement("p");
        p.innerHTML     = "Hola Martín";
        p.style.cursor  = "pointer";
        p.addEventListener("dblclick", function () {            
           
            this.parentElement.removeChild(this);
        });

        cnt.appendChild(p);
    }


    //Mover elementos de un select a otro
    HTMLSelectElement.prototype.pasarTodosA = function (select) {
        
        let elementos = this.options.length;

        for (let i = 0; i < elementos; i++) {

            const element = this.options[0];
            element.selected = false;
            select.appendChild(element);
        }
    }

    HTMLSelectElement.prototype.pasarSeleccionadosA = function (select) {
        
        while (this.options.selectedIndex>-1) {
            
            const element = this.options[this.options.selectedIndex];
            element.selected = false;
            select.appendChild(element);
        }
    }
        
});

/*
let izq = document.getElementById("select1")
let drc = document.getElementById("select2")
izq.pasarTodosA(drc)
drc.pasarSeleccionadosA(izq)
hacer input donde al escribir y pulsar intro se mete en el primer select
 */