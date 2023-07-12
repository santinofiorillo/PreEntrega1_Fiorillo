// simular el lanzamiento de los dados con numeros randoms
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// avanzar de casillero
function avanzar(jugador, casillero) {
  jugador.posicion += casillero;
  console.log(jugador.nombre + " avanza " + casillero + " casilleros y está en la posición " + jugador.posicion);

  if (jugador.posicion === 20) {
    jugador.posicion -= 4;
    console.log("¡¡OH!! " + jugador.nombre + " se ha tropezado con esa piedra, por desgracia retrocede 4 casilleros. Ahora está en la posición: " + jugador.posicion);
  } else if (jugador.posicion === 45) {
    jugador.posicion -= 8;
    console.log("¡¡OUCH!!" + jugador.nombre + " se ha caido de la colina, retrocede 8 casilleros. Ahora está en la posición: " + jugador.posicion);
  }
  
  if (jugador.posicion > 50) {
    jugador.posicion = 50;
    console.log(jugador.nombre + " ha superado el número 50.");
  }
}

// jugar el juego 
function jugarJuego() {
  let tirada = 0;
  const jugador1 = { nombre: "", posicion: 0 }; // Esta manera la encontre buscando info por internet y me parecio interesante 
  const jugador2 = { nombre: "", posicion: 0 }; // ya que es mas rapido llamar a una variable

  jugador1.nombre = prompt("Ingrese el nombre del Jugador 1:");
  jugador2.nombre = prompt("Ingrese el nombre del Jugador 2:");

  console.log("¡Bienvenidos al Juego de los Dados!");
  console.log("Jugador 1: " + jugador1.nombre);
  console.log("Jugador 2: " + jugador2.nombre);
  console.log("------------------------");

  while (jugador1.posicion < 50 && jugador2.posicion < 50) {
    tirada +=1;
    console.log("------ Tirada " + tirada + "-------")
    prompt("Presione una tecla para lanzar el dado...");

    const dado1 = lanzarDado();
    const dado2 = lanzarDado();

    console.log(jugador1.nombre + " lanza el dado y obtiene: " + dado1);
    console.log(jugador2.nombre + " lanza el dado y obtiene: " + dado2);

    avanzar(jugador1, dado1);
    avanzar(jugador2, dado2);

  }


  if (jugador1.posicion === 50 && jugador2.posicion === 50) {
    console.log("¡Es un empate!");
  } else if (jugador1.posicion === 50) {
    console.log("¡" + jugador1.nombre + " ha ganado la carrera!");
  } else {
    console.log("¡" + jugador2.nombre + " ha ganado la carrera!");
  }
}

jugarJuego();