//Crear una función que reciba 2 números, imprimir si el primer número es divisible por el segundo.

function es_divisible(a, b) {
  if (a % b == 0) {
    console.log("es divisible");
  } else {
    console.log("no es divisible");
  }
}

es_divisible(5, 2);
