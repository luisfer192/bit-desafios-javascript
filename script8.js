//Crear seis funciones, (sumar, restar, multiplicar, dividir, módulo, potencia), debe recibir 2 números e imprimir el resultado así: Ej entrada: 8, 4 Ej salida: 8 + 4 = 12

function sumar(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}
function restar(a, b) {
  console.log(a + " - " + b + " = " + (a - b));
}
function multiplicar(a, b) {
  console.log(a + " * " + b + " = " + a * b);
}
function dividir(a, b) {
  console.log(a + " / " + b + " = " + a / b);
}
function modulo(a, b) {
  console.log(a + " % " + b + " = " + (a % b));
}
function potencia(a, b) {
  console.log(a + " ** " + b + " = " + a ** b);
}

sumar(4, 2);
restar(4, 2);
multiplicar(4, 2);
dividir(4, 2);
modulo(4, 2);
potencia(4, 2);
