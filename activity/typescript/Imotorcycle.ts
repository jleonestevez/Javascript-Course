export interface Imotorcycle {

    tires: number;

    /**
     * Function encargada de encender el motor
     */
    turnOnEngine() : void;

    /**
     * Funcion encargada de openThrottle el motor
     */
    openThrottle() : void;

}