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
console.log("Eejercicio 1")


// Ejercicio 2

import {Exercise02} from "./exercise02.js";

const exercise02 = new Exercise02();

console.log(exercise02.sumOrConcatenate(4, 3)); // 7
console.log(exercise02.sumOrConcatenate(4, "hello")); // 4:hello
console.log(exercise02.sumOrConcatenate("hello", "world")); //hello-world

// Ejercicio 3

// Ejercicio 4
