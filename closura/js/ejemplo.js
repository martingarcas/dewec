function programarPulsacion(fila) {
        
    alert(index + "->>>" + fila.innerHTML);
}

window.addEventListener("load", function () {

    var trs = this.document.getElementsByTagName("tr");
    for (let i = 0; i < trs.length; i++) {

        trs[i].addEventListener("click", function (fila, index) {
        
            return function () {

                alert(index + "->>>" + fila.innerHTML);
            }

        } (trs[i], i));
    }
});