import { saluda } from "./lib1.js";
import { despide } from "./lib2.js";

window.addEventListener("load",  function () {

    function validDNI() {
        
        var txtDNI      = document.getElementById("dni").value;
        var span        = document.getElementById("span_dni");
        span.innerHTML  = saluda(txtDNI) + " -> " + despide(txtDNI);
    }

    document.getElementById("button1").onclick = validDNI
});