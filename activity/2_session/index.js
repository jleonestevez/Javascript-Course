// Ejercicio 1
import {Utils} from './utils.js';
const utils = new Utils();
const person = {
    name: "Lucas",
    age: 27,
    profession:"Developer",
}
console.log(utils.getProperties(person));
console.log("Ejercicio 1");
// Ejercicio 2


// Ejercicio 3
import {InvertirCadena} from './invertirCadena.js';
const invertirCadena = new InvertirCadena("cadenaInvertir");
console.log(invertirCadena.reverseString())
// Alternativa 1
InvertirCadena.prototype.nuevoMetodo = function() {
    return "Esto es un nuevo metodo agregado por prototype"
};
console.log(invertirCadena.nuevoMetodo());
console.log("Ejercicio 3");
// Ejercicio 4
import {Autenticacion} from './autenticacion.js';
const autenticacion = new Autenticacion();
autenticacion.login("admin", "passwd");
autenticacion.login("pepe", "bad");
console.log("Ejercicio 4");
// Ejercicio 5
const buttonLoginSuccess = document.getElementById("loginSuccess");
buttonLoginSuccess.addEventListener('click', event => {
    autenticacion.login("admin", "passwd")
});
const buttonLoginFailure = document.getElementById("loginFailure");
buttonLoginFailure.addEventListener('click', event => {
    autenticacion.login("pepe", "bad");
});
console.log("Ejercicio 5");
// Ejercicio 6
const buttonLoginAsyncSuccess = document.getElementById("loginSuccessAsync");
buttonLoginAsyncSuccess.addEventListener('click', async event => {
    console.log("Ejercicio 6 - buttonLoginAsyncSuccess");
    await loginWitUsername("admin", "passwd").then(function(result) {
        alert(result);
    }).catch(function(error) {
        alert(error);
    });
});
const buttonLoginAsyncFailure = document.getElementById("loginFailureAsync");
buttonLoginAsyncFailure.addEventListener('click', async event => {
    console.log("Ejercicio 6 - buttonLoginAsyncFailure");
     await loginWitUsername("admin2", "passwd2").then(function(result) {
        alert(result);
    }).catch(function(error) {
         alert(error);
     });
});
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
console.log("Ejercicio 6");
