/*
A) Calcular el factorial de un número dado.
El factorial de un número entero n es una operación matemática que 
consiste en multiplicar todos los factores n x (n-1) x (n-2)
x ... x 1. Así, el factorial de 9 es igual a:
9! = 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 362880

*/
let n = prompt("Ingresa un número entero");
parseInt(n, 10);

const n_parsed = Number.parseInt(n, 10);

if (Number.isNaN(n_parsed) || n_parsed < 0) {
    document.write('El valor ingresado no es un un número o es negativo');
} else {
    function factorial(n) {
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado = resultado * i;
        } return document.write(`Factorial de ${n}! es ${resultado}`);
    }
    factorial(n_parsed);
}



