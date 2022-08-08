//REQUERIMIENTO 2 - Operaciones Aritméticas
// ENTRADA - Datos ingresados por usuario num1 y num2

var num1 = prompt("REQUERIMIENTO 2:\n  Ingrese numero mayor a cero", 0);
while(num1<=0){
   num1 = prompt("El número ingresado es negativo o igual a 0, por favor Ingrese numero mayor y diferente de cero", 0);
}
var num2 = prompt(`REQUERIMIENTO 2:\n  Ingrese numero mayor a cero y diferente a ${num1}`, 0);
while(num2<=0){
  num2 = prompt("Ingrese numero mayor a cero ydiferente a ${num1}", 0);
}
num1 = parseInt(num1);
num2 = parseInt(num2);

//PROCESO - Operaciones aritmeticas con num1 y num2
var suma1 = (num1+ num2);
var resta1 = (num1- num2);
var multi1 = (num1*num2);
var divi1 = (num1/num2);
var modulo1 = (num1%num2); //resto de la division de num1 y num2


// SALIDA - Mostrar Resultados operaciones aritmeticas //
document.write (`<h1>Resultados Operaciones Aritméticas</h1>`)

document.write (`
<p>Total Suma= ${num1}+${num2}= ${suma1}</p> 
<p>Total Resta= ${num1}-${num2}= ${resta1}</p>
<p>Total Multiplicación= ${num1}*${num2}= ${multi1}</p>
<p>Total División= ${num1}/${num2}= ${divi1}</p>
<p>Total Modulo= ${num1}%${num2}=${modulo1}</p>
   `)

//REQUERIMIENTO 3 - Temperaturas

// ENTRADA - Datos ingresados por usuario temperatura en grados Celsius

var temp1 = prompt("REQUERIMIENTO 3:\n Ingrese temperatura en grados Celsius (°C)", 0);

//Definición de Constantes
const k=273.15
const f=32
temp1 = parseInt(temp1);

//PROCESO - Operaciones aritmeticas con num1 y num2
var kelvin= (temp1 + k)
var fahren= (temp1 * 9/5) + f

// SALIDA - Mostrar Resultados Temperaturas grados Kelvin & Fahrenheit 
document.write (`<h1>Resultados Temperaturas</h1>`)

document.write (`
<p>grados Kelvin= ${kelvin} K</p> 
<p>grados Fahrenheit= ${fahren} °F</p>
`)

//REQUERIMIENTO 4 - Años, semanas y dias

// ENTRADA - Datos ingresados por usuario total dias
   var dias = prompt("REQUERIMIENTO 4:\n  Ingrese en total de días", 0);

   dias = parseInt(dias);
 
//PROCESO - Equivalente en Años, semanas y días

// Si la variable dias es mayor e igual que 365 ejecutar esto

if(dias>=365){
   var equivaño= Math.floor(dias/365) 
   var año= Math.floor(dias % 365) 
   var equivsem= Math.floor((dias-365)/7)
   var equivdia=Math.floor((dias-365)%7)

// SALIDA - Mostrar Resultados Años, semanas y días

document.write (`<h1>Resultados Años, semanas y días</h1>`)

document.write (`
<p> ${equivaño} año, ${equivsem} semana y ${equivdia} día</p> 
`)
}

// Si la variable dias es mayor e igual que 365 ejecutar esto
if(dias<365){
   var equivsem= Math.floor((dias)/7)
   var equivdia=Math.floor((dias)%7)

// SALIDA - Mostrar Resultados Años, semanas y días

document.write (`<h1>Resultados Años, semanas y días</h1>`)

document.write (`
<p> 0 año, ${equivsem} semana y ${equivdia} día</p> 
`)
}

//REQUERIMIENTO 5 - Suma y Promedio de 5 números

// ENTRADA - Datos ingresados por usuario n1, n2, n3, n4 & n5
    var n1 = prompt("REQUERIMIENTO 5:\n Ingrese numero 1", 0);
    var n2 = prompt("REQUERIMIENTO 5:\n  Ingrese numero 2", 0);
    var n3 = prompt("REQUERIMIENTO 5:\n  Ingrese numero 3", 0);
    var n4 = prompt("REQUERIMIENTO 5:\n  Ingrese numero 4", 0);
    var n5 = prompt("REQUERIMIENTO 5:\n  Ingrese numero 5", 0);

    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    n4 = parseInt(n4);
    n5 = parseInt(n5);

//PROCESO - Suma y Promedio de 5 números

var suma2 = (n1+ n2+n3+n4+n5);
var promedio = (suma2/5);

// SALIDA - Mostrar Resultados La suma de todos los números y el promedio

document.write (`<h1>Resultados Suma y Promedio</h1>`)

document.write (`
<p>Total Suma= ${n1}+${n2}+${n3}+${n4}+${n5}= ${suma2}</p>
<p>Promedio= ${suma2}/5= ${promedio}</p>
`)



