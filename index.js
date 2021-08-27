"use strict";
function sumar(valor1, valor2) {
    return valor1 + valor2;
}
function multiplicar(valor3, valor4) {
    return valor3 * valor4;
}
function restar(valor1, valor3) {
    return valor1 - valor3;
}
function preciofinal(pb, tasad, tasaiva) {
    return pb + (tasad / 100) + (tasaiva / 100);
}
console.log(sumar(3, 5));
console.log(multiplicar(3, 5));
console.log(restar(3, 3));
console.log(preciofinal(100, 28, 45));
