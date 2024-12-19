//Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia), cada función debe recibir 2 números y retornar un resultado según corresponda.
//Crear otra función que reciba el nombre de la operación y 2 números, debe imprimir el resultado. Ej entrada: suma, 8, 4 Ej salida: 8 + 4 = 12

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
function potencia(a, b) {
  return a ** b;
}

function calcular(operación, a, b) {
  if (operación == "suma") {
    console.log(a + " + " + b + " = " + sumar(a,b));
  }
  else if (operación == "resta") {
    console.log(a + " - " + b + " = " + restar(a,b));
  }
  else if (operación == "multiplicacion") {
    console.log(a + " * " + b + " = " + multiplicar(a,b));
  }
  else if (operación == "division") {
    console.log(a + " / " + b + " = " + dividir(a,b));
  }
  else if (operación == "modulo") {
    console.log(a + " % " + b + " = " + modulo(a,b));
  }
  else if (operación == "potencia") {
    console.log(a + " ** " + b + " = " + potencia(a,b));
  }
  else{
    console.log("Operacion no valida, intente con 'suma', 'resta', 'multiplicacion', 'division', 'modulo' o 'potencia'");
  }
}


calcular("suma",4,2);
calcular("resta",4,2);
calcular("multiplicacion",4,2);
calcular("division",4,2);
calcular("modulo",4,2);
calcular("potencia",4,2);
calcular("pasdasd",4,2);
