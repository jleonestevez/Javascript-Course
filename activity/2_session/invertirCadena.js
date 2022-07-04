/**
 * Clase encargada de invertir cadenas.
 */
class InvertirCadena {
    /**
     * Constructor de la clase.
     * @param cadenaInvertir String a ser invertida.
     */
    constructor(cadenaInvertir) {
        this.cadenaInvertir = cadenaInvertir;
    }

    /**
     * Metodo encargado de invertir la cadena.
     * @returns {string} Cadena invertida.
     */
    reverseString = () => {
        // alternativa 1 para Cómo podemos hacer para que nuestro código no rompa al ejecutarse?
         try {
             if (this.cadenaInvertir.length === 0) {
                 throw new Error("La cadena no puede ser vacia");
             } else {
                 return this.cadenaInvertir.split("").reverse().join("");
             }
         } catch(ex){
                console.log(ex);
                return "";
         }

    }


}

export {InvertirCadena};