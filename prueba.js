/*

Historias de Usuario:

- Como invitado, debería poder establecer el número de listas con las que quiero jugar, para poder jugar con más de una lista.
- Como jugador, debería poder identificar las listas con letras, para que sea fácil para mí señalar los números a intercambiar.
- Como jugador, debería poder intercambiar números entre listas, para poder ordenar más de una lista a la vez.

*/
 

const prompt = require("prompt-sync")();

function generarLista(numerosDeLista) {
  let lista = [];
  
  for (let i = 0; i < numerosDeLista; i++) {
    lista.push(parseInt(Math.random() * 100));
  }
  return lista;
}

function listaATexto(lista) {
  let texto = [];
  for (let i = 0; i < lista.length; i++) {
    texto.push(`${i}-(${lista[i]})`);
  }
  return texto.join(", ");
}

function intercambiar(lista, indiceA, indiceB) {
  let temp = lista[indiceA];
  lista[indiceA] = lista[indiceB];
  lista[indiceB] = temp;

  return lista;
}

function estaOrdenada(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    if (lista[i] > lista[i + 1]) {
      return false;
    }
  }
  return true;
}

function pedirIndiceValido(maximo, mensaje) {
  let indice;
  do {
    indice = parseInt(prompt(mensaje));
    if (indice < 0 || indice > maximo) {
      console.log("El número ingresado no es válido");
    }
  } while (indice < 0 || indice > maximo);
  return indice;
}

function calcularPuntaje(lista, indiceA, indiceB) {
  let puntaje = 0;

  let numeroA = lista[indiceA];
  let numeroB = lista[indiceB];
  let numeroAnteriorA = lista[indiceA - 1];
  let numeroAnteriorB = lista[indiceB - 1];
  let numeroSiguienteA = lista[indiceA + 1];
  let numeroSiguienteB = lista[indiceB + 1];

  if (indiceA === 0) {
    puntaje++;
  } else {
    if (numeroAnteriorA < numeroA) {
      puntaje++;
    }
  }

  if (indiceA === lista.length - 1) {
    puntaje++;
  } else {
    if (numeroSiguienteA > numeroA) {
      puntaje++;
    }
  }

  if (indiceB === 0) {
    puntaje++;
  } else {
    if (numeroAnteriorB < numeroB) {
      puntaje++;
    }
  }

  if (indiceB === lista.length - 1) {
    puntaje++;
  } else {
    if (numeroSiguienteB > numeroB) {
      puntaje++;
    }
  }

  return puntaje;
}

function mostrarPuntajes(jugadores) {
  jugadores.sort((a, b) => b.puntaje - a.puntaje);

  console.log("==================");
  console.log("Puntajes:");
  for (let i = 0; i < jugadores.length; i++) {
    console.log(`${jugadores[i].nombre}: ${jugadores[i].puntaje}`);
  }
  console.log("==================");
}

function juego() {
  console.clear();
  let numerosDeLista = parseInt(prompt("Ingrese la cantidad de numeros: "));
  
  let jugadores = [];
  let nombreJugador;
 
  do {
    nombreJugador = prompt("Ingrese nombres de jugadores, o 'continuar' para jugar: ");

    if (nombreJugador === "continuar") {
      break;
    }

    jugadores.push({
      nombre: nombreJugador,
      puntaje: 0
    });
  } while (true);

  console.log(jugadores);

  let lista = generarLista(numerosDeLista);
  console.log(listaATexto(lista));
  // pedir 1 numero
  let indiceA, indiceB, jugadorDeEsteTurno, indiceJugador, puntajeASumar;

  let contador = 0;

  do {
    indiceJugador = contador % jugadores.length;
    jugadorDeEsteTurno = jugadores[indiceJugador];
    nombreJugador = jugadorDeEsteTurno.nombre;

    indiceA = pedirIndiceValido(lista.length - 1, "Ingrese el primer índice: ");
    // pedir otro numero
    indiceB = pedirIndiceValido(lista.length - 1, "Ingrese el segundo índice: ");
    // llamar funcion para intercambiar
    lista = intercambiar(lista, indiceA, indiceB);

    // llamamos a la funcion calcular puntaje
    puntajeASumar = calcularPuntaje(lista, indiceA, indiceB);

    jugadorDeEsteTurno.puntaje += puntajeASumar;

    // mostrar lista con valores ya intercambiados
    console.log(listaATexto(lista));
    mostrarPuntajes(jugadores);

    contador++;
  } while (estaOrdenada(lista) === false);

  console.clear();
  console.log("¡Felicidades! Has ordenado la lista.");
  mostrarPuntajes(jugadores);
}

const alert = console.log;

juego(); 