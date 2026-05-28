
// Le pido al usuario que escriba 3 números
// y los convierto a tipo -Number- para poder compararlos
let num1 = Number(prompt("Escribe el primer número"));
let num2 = Number(prompt("Escribe el segundo número"));
let num3 = Number(prompt("Escribe el tercer número"));


// Aquí verifico si los 3 números son iguales
if (num1 === num2 && num2 === num3) {

   // Si todos son iguales, muestro este mensaje
   console.log("Los tres números son iguales");

} else {

   // Guardo los 3 números dentro de un array
   let numeros = [num1, num2, num3];

   // Ordeno los números de menor a mayor
   numeros.sort((a, b) => a - b);

   // Muestro el número menor
   console.log(`Número menor: ${numeros[0]}`);

   // Muestro el número que queda en medio
   console.log(`Número del centro: ${numeros[1]}`);

   // Muestro el número mayor
   console.log(`Número mayor: ${numeros[2]}`);

   // Muestro los números ordenados de menor a mayor
   console.log(`De menor a mayor: ${numeros}`);

   // Ordeno los números de mayor a menor
   numeros.sort((a, b) => b - a);

   // Muestro los números ordenados de mayor a menor
   console.log(`De mayor a menor: ${numeros}`);
}