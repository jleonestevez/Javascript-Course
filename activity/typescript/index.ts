// Ejercicio 1

import {Iperson} from "./iPerson";

let arrowFunc = (x: Iperson ): Array<string | number> => {
    return  Object.keys(x).map( (key : string ) => x[key as keyof Iperson]);
}

const person: Iperson = {
    name: "Juan",
    age: 30,
    profession: "Developer"
}
console.log(arrowFunc(person));
console.log("Ejercicio 1")


// Ejercicio 2

import {Exercise02} from "./exercise02.js";


const exercise02 = new Exercise02();

console.log(exercise02.sumOrConcatenate(4, 3)); // 7
console.log(exercise02.sumOrConcatenate(4, "hello")); // 4:hello
console.log(exercise02.sumOrConcatenate("hello", "world")); //hello-world
console.log("Ejercicio 2")

// Ejercicio 3
import {Exercise03} from "./exercise03.js";
import {Icar} from "./iCar";
import {Imotorcycle} from "./Imotorcycle";
const exercise03 = new Exercise03();

const car: Icar = {
    tires: 4,
    turnOnEngine: () => {
        console.log("Turning on  car engine");
        return "Turning on  car engine";
    },
    pressPedal: () => {
        console.log("Pressing car pedal");
        return "Pressing car pedal";
    }
}
const motorcycle: Imotorcycle = {
    tires: 2,
    turnOnEngine: () => {
        console.log("Turning on motorcycle engine");
        return "Turning on motorcycle engine";
    },
    openThrottle() {
        console.log("Opening motorcycle throttle");
        return "Opening motorcycle throttle";
    }
}
exercise03.startMartch(car);
exercise03.startMartch(motorcycle);
console.log("Ejercicio 3")

// Ejercicio 4

import {Exercise04} from "./exercise04.js";
const exercise04 = new Exercise04();
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = exercise04.removeFirstEntry(strArray);
const newNumArray = exercise04.removeFirstEntry(numArray);
const newMixedArray = exercise04.removeFirstEntry(mixedArray);

//const newUnsupportedArray = exercise04.removeFirstEntry(unsupportedArray); //--> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
console.log("Ejercicio 4")