// ENTRADA - Input tabla de multiplicar y factorial
let numero = prompt("Ingresa un numero del 1 al 20", 0);
numero = parseInt(numero);
while (numero <= 0 || numero > 20 || isNaN(numero)) {
    numero = prompt("Número fuera del rango, Ingrese numero del 1 al 20, no texto", 0);
}

for (i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " " + " x " + " " + i + " = " + resultado); //SALIDA: Resultado multiplicacón
}

for (i = 1; i <numero; i++) {
    let factorial_numero =(numero)=> {
        if (numero > 1) {
            return factorial= numero * factorial_numero(numero - 1)
        }
        else {
            return numero
        }
    }
    console.log(`Factorial de ${numero} es ${factorial_numero(numero)}`); //SALIDA: Factorial de numero ingresado
}

for (let i = 1; i <= numero; i++) { 
    let res = 1; 
    for (let j = 1; j <= i; j++) 
    { res = res * j; } 
    console.log("Factorial de " + i + " es: " + res); }