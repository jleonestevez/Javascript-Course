/**
 *  Clase con funciones del ejercicio 4
 */
import {Icar} from "./iCar";
import {Imotorcycle} from "./Imotorcycle";

/**
 * Clase con funciones para el ejercicio 4
 */
class Exercise04 {

    constructor() {
        console.log("Ejercicio 4")
    }

    /**
     * Funcion encargada de quitar el primer elemento de un arreglo de tipo generico
     * @param array arreglo que acepta enteros o numeros)
     */
    removeFirstEntryGenericType <T>(array: T[]): T[]{
        try {
            return array.shift()!== undefined ? array : [] ;
        } catch (e) {
            console.error("Se genero un error", e);
            return [];
        }
    }
    /**
     * Funcion encargada de quitar el primer elemento de un arreglo de tipo generico
     * @param array arreglo que acepta enteros o numeros)
     */
    removeFirstEntry (array:  Array<string | number>):  Array<string | number>{
        try {
            return array.shift()!== undefined ? array : [] ;
        } catch (e) {
            console.error("Se genero un error", e);
            return [];
        }
    }
}

export {Exercise04};