
function interactuarCadenas(cadena1, cadena2) {
  let respuesta = "";
  let longitud = cadena1.length;
  for(let i = 0; i < longitud; i++) {
    if(cadena1[i] === "+" && cadena2[i] === "+") {
        respuesta += "+";
    } else if (cadena1[i] === "-" && cadena2[i] === "-") {
        respuesta += "-";
    } else {
      respuesta += "0";
    }
  }

  return respuesta;
}

function generarApodo(nombre) {
  let respuesta = "";
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  if(nombre.length < 4)
    throw new Error("Nombre muy corto");

  let terceraLetra = nombre[2];
  if(vocales.includes(terceraLetra)) {
    respuesta = nombre.substring(0, 4);
  } else {
    respuesta = nombre.substring(0, 3);
  }

  return respuesta;
}

function obtenerMarcador(texto) {
  let puntuaciones = ['cero', 'uno', 'dos', 'tres', 'cuatro','cinco', 'seis', 'siete', 'ocho', 'nueve'];
  let puntuacion1 = 0;
  let puntuacion2 = 0;
  let indicePuntuacion1 = -1;
  let indicePuntuacion2 = -1;

  for(let i = 0; i < puntuaciones.length; i++) {
    let nroVecesPuntuacionSeRepite = texto.split(puntuaciones[i]).length - 1;
    if(nroVecesPuntuacionSeRepite === 2) {
      puntuacion1 = i;
      puntuacion2 = i;
      indicePuntuacion1 = texto.indexOf(puntuaciones[i]);
      indicePuntuacion2 = indicePuntuacion1;
      break;
    }

    if(nroVecesPuntuacionSeRepite === 1) {
      let indice = texto.indexOf(puntuaciones[i]);
      if(indicePuntuacion1 === -1 || indice < indicePuntuacion1) {
        puntuacion2 = puntuacion1;
        indicePuntuacion2 = indicePuntuacion1;
        puntuacion1 = i;
        indicePuntuacion1 = indice;
      } else {
        puntuacion2 = i;
        indicePuntuacion2 = indice;
      }
    }
  }

  let respuesta = [puntuacion1, puntuacion2];
  return respuesta;
};

class Barco {
  calado;
  tripulacion;
  
  constructor(calado, tripulacion) {
    this.calado = calado;
    this.tripulacion = tripulacion;
  }

  valeLaPena() {
    let pesoTripulacion = this.tripulacion*1.5;
    let caladoSinPesoTripulacion = this.calado - pesoTripulacion;
    return caladoSinPesoTripulacion > 20;
  }
}
