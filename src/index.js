//declarar variables
//let se puede reasignar
//const valor fijo
const signo = "**";
let nombre = "Camilo";
let apellido = "giraldo";

console.log("hola" + signo + nombre + " " + apellido);

nombre = "susana";
apellido = "perez";

console.log("hola" + signo + nombre + " " + apellido);

//metodo random
let numero = Math.random();
//operador logico OR
numero > 10 || numero < 10;

//operador ternaria
let prueba = false;
prueba === false ? (apellido = "diaz") : (apellido = "zapata");

console.log(apellido);

const s = "$";
let dolar = 3500;
let aux;
dolar === 4000 ? (aux = "incremento") : (aux = "estable");

console.log("El valor del dolar" + signo + aux + " el valor es: " + s + dolar);

//if_else
let numeror = Math.random();
if (numeror > 50) {
  console.log("el numero es mayor a 50 el numero es: " + numeror);
} else {
  console.log("El numero es menor a 50 el numero es: " + numeror);
}

let precio = 1000;
if (precio > 1500) {
  console.log("El valor incremento");
} else {
  console.log("El valor es estable");
}

//switch
let opcion = 2;
switch (opcion) {
  case 1:
    console.log("Bienvenido");
    break;
  case 2:
    console.log("Sigue intentando");
    break;
  default:
    console.log("Error");
}

//if declaracion

let j = false;
if (j) {
  console.log("La opcion es verdadera");
} else {
  console.log("La opcion es falsa");
}

//if encapsulado

const a = "---";
let nota = 2;

if (nota == 5) {
  console.log("Aprobado");
} else if (nota < 5 && nota >= 4) {
  console.log("Alto");
} else if (nota >= 3 && nota < 4) {
  console.log("Basico");
} else if (nota < 3) {
  console.log("Perdio");
}
