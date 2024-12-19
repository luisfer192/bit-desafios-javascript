//Crear una función que reciba 1 número, imprimir si es negativo o si es positivo o si es cero.

function es_impar(a) {
    if (a > 0) {
      console.log("es positivo");
    } else if (a == 0) {
      console.log("es cero");
    } else {
      console.log("es negativo");
    }
  }
  
  es_impar(9);