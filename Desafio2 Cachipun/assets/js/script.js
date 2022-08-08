// ENTRADA - Input Jugador
let repetir = prompt("¿Cuantas veces quiere Jugar Cachipun?", 0); //Cantidad de veces que se jugará el Cachipun
repetir = parseInt(repetir);
while (repetir <= 0 || isNaN(repetir) ) {
    repetir = prompt("Ingrese numero mayor a 0, no texto", 0);
}

for (var i = 0; i < repetir; i++) {
    //ciclo para repetir la cantidad de jugadas

    let jugador = prompt("¿Que Jugará Piedra (1), Papel(2) ó Tijera(3)?", 0); // Input Usuario -Seleccionar Piedra, Papel ó Tijera
    while (jugador > 2 || jugador < 0 || isNaN(repetir)) {
        jugador = prompt("Para jugar Cachipun ingrese 0, 1 ó 2, no texto", 0);
    }
   

    //PROCESO - Jugadas

let maquina = Math.floor(Math.random() * 3); //jugada aleatoria de la máquina

    if (jugador == maquina) {
        alert(`Empataste con la máquina (${jugador} igual a ${maquina})`);
    } else if (
        (jugador === 0 && maquina === 2) ||
        (jugador === 1 && maquina === 0) ||
        (jugador === 2 && maquina === 1)
    )
        alert(`Felicidades!Has ganado (${jugador} gana a ${maquina}) `);
    else {
        alert(`Perdiste! Ganó la máquina (${maquina} gana a ${jugador})`);
    }
}




for(i = 0; i <=10; i++) {

    let resultado= numero * i;

document.write(`${numero} + " " + " x " + " " + ${i} + " = "  ${resultado} 
    <br>`);

}    