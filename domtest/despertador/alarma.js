window.addEventListener('load', function () {
    
    let buttonDespertador = document.getElementById("despertador");

    let timer = document.getElementById("hora");

    function getTimer() {
        
        time.get
    }

    buttonDespertador.onclick = function(){

        let date            = new Date();
        let currentHour     = date.getHours();
        let currentMinute   = date.getMinutes();
        let currentSeconds  = date.getSeconds();

        let alarma = timer.value;

        console.log(currentHour + ":" + currentMinute + ":" + currentSeconds);
        

        console.log(alarma);
        

        //span.innerHTML  = dni.value.esDni();
    }
    
    
})

//https://codepen.io/EcxalCar12/pen/LJooXJ