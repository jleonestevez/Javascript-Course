/**
 * Funcion encargada de deterinar si un numero es divisible por otro.
 * @param num1 Numero a ser dividido.
 * @param num2 Numero que divide.
 * @returns {boolean} True si el numero es divisible, false en caso contrario.
 */
function isDivisible({num1, num2}) {
  return num1 % num2 === 0;
}

export {isDivisible};