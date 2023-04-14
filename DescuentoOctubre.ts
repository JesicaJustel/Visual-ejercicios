import*as rls from "readline-sync";
let precioUnitario:number=rls.questionInt("ingrese el precio unitario");
let precioConDescuento:number=0;
let descuento:number=0;
let cantidad:number=rls.questionInt("ingrese cantidad");
let precioTotal:number=precioUnitario*cantidad;
let mes:number=rls.questionInt("ingrese mes");
if (mes===10) {
 descuento=(precioTotal*15/100);
precioConDescuento=precioTotal=descuento;
console.log("por comprar en el mes de Octubre/10 obtiene un descuento del 15%");
console.log("el precio a pagar es:"+ precioConDescuento);
} else {
console.log ("usted no tiene descuento:"+ precioTotal); }