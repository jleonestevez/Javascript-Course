export interface Icar {

    tires: number;

    /**
     * Function encargada de encender el motor
     */
    turnOnEngine() : void;

    /**
     * Funcion encargada de pedar el motor
     */
    pressPedal() : void;

}