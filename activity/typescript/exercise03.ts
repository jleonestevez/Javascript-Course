/**
 *  Clase con funciones del ejercicio 3
 */
import {Icar} from "./iCar";
import {Imotorcycle} from "./Imotorcycle";

class Exercise03 {

    constructor() {
        console.log("Ejercicio 3")
    }

    /**
     * Funcion encargada de validar si el vehiculo es un carro.
     * @param vehiculo
     */
    isCar(vehiculo: Icar | Imotorcycle): vehiculo is Icar {
        const vehiculoInterno = (vehiculo as Icar);
        return vehiculoInterno.pressPedal !== undefined;
    }

    /**
     * Funcion encargada de validar si el vehiculo es una moto.
     * @param vehiculo
     */
    isMotorcycle(vehiculo: Icar | Imotorcycle): vehiculo is Imotorcycle {
        const vehiculoInterno = (vehiculo as Imotorcycle);
        return vehiculoInterno.openThrottle !== undefined;
    }

    /**
     * Funcion encargada de sumar o concatenar dos valores.
     * @param vehiculo
     */
    startMartch(vehiculo: Icar | Imotorcycle): void {
        try {
            // 1 - Llamar a turnOnEngine()
               vehiculo.turnOnEngine();
            if (this.isCar(vehiculo)) {
                console.log("is a car");
                // 2 - si es Car llame a pressPedal()
                vehiculo.pressPedal();
            } else
                if(this.isMotorcycle(vehiculo))  {
                console.log("is a motorcycle");
                // 3 - o si es Motorcycle llame a openThrottle().
                vehiculo.openThrottle();
            }

        } catch (e) {
            console.error(e);
        }
    }
}

export {Exercise03};