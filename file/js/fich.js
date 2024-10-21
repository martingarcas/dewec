function leerFichero(file) {
    
    return new Promise(( resolve, reject ) => {

        let lector = new FileReader();
        
        lector.onload = function () {
            resolve(this.result);
        }

        lector.onError = function () {
            
            reject(this.error);
        }

        lector.readAsText(file);
    });
}