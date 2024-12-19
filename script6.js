//Crear una función que reciba cuatro párametros, un nombre, una prenda, un color y una cantidad y retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.

function describir_vestimenta(nombre, prenda, color, cantidad) {
  console.log(
    nombre + " tiene " + cantidad + " " + prenda + " de color " + color + "."
  );
}

describir_vestimenta("Pepita", "camisas", "azul", 2);
