/**
 *  Clase con funciones del ejercicio 2
 */
class Exercise02 {

    constructor() {
        console.log("Eejercicio 2")
    }

    /**
     * Funcion encargada de sumar o concatenar dos valores.
     * @param x valor 1.
     * @param y valor 2.
     */
    sumOrConcatenate(x: string | number , y : string | number): string | number | undefined {
         try {
             // Caso 1 - La función devolverá una suma si los dos parámetros son números
             // Caso 2 - Una concatenación con el símbolo - si son los dos strings
             // Caso 3 - Una cadena concatenadad con : si uno es un number y el otro string

             if ( typeof x === 'number' && typeof y === 'number') {
                 return x + y;
             }
             else if ( typeof x === 'string' && typeof y === 'string') {
                 return x + '-' + y;
             }
             else if ( typeof x === 'number' && typeof y === 'string') {
                 return x + ':' + y;
             }

             return undefined

         } catch (e) {
             console.error(e);
             return undefined
         }
    }
}

export { Exercise02 };