// Ejercicio 1
debugger
import {situacionActual} from './aboutme.js';
debugger
console.log(situacionActual);
debugger
console.log("Ejercicio 1");

// Ejercicio 2
console.log("Se ejecuta primero el fichero aboutme.js")
console.log("Ejercicio 2");
// Ejercicio 3
console.log("1 - consola : su objetivo es mostrar mensajes de tipo informativo , logs y errores del codigo ejecutado del lado del navegador. su utilidad radica en la trazabilidad que brinda , ademas de permitir ejecutar codigo javascript\n" +
    "2 - networking o redes: su objetivo es visualizar las peticiones de red generadas por el navegador , su utilidad esta en poder ver en detalle los llamados a recursos externos permitiendo ademas de obtener peticiones y respuestas, realizar replicas de peticion , copiar peticiones en diferentes formatos(curl por ejemplo) lo cual ayuda mucho al momento de querer replicar llamados o verificarlos\n" +
    "3 - source o fuentes: su objetivo es visualizar el contenido statico disponible , su utilidad esta en poder realizar depuracion en caliente siempre que el codigo no este ofuscado")
console.log("Ejercicio 3");
// Ejercicio 4
import {isDivisible} from './mathematics.js';
for (let i=1; i<=100; i++) {
  if (isDivisible({num1: i, num2: 7})) {
    console.log(i);
  }
}
console.log("Ejercicio 4");
// Ejercicio 5
console.log('la diferencia radica en que en caso de usar "script" sin el type "module" , no podria importar modulos , pero si con el type "module" podria importar modulos.\n' +
    '                     existen otras diferencias tales como el scope en caso del "script" sin type el scope es global , pero con el type "module" el scope es local.\n' +
    '              ' )
console.log("Ejercicio 5");

// Ejercicio 6

import {Formatter} from "./utils.js";

var formatter = new Formatter();

console.log(formatter.append("World"));

Formatter.prototype.toLowerString = function(text) {
  return text.toLowerCase();
};

console.log(formatter.toLowerString("I’m Lucas"));
console.log("Ejercicio 6");