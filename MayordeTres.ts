import *as rls from "readline-sync";
let number1:number=rls.questionInt("ingrese un numero:");
let number2:number=rls.questionInt("ingrese un numero:");
let number3:number=rls.questionInt("ingrese un numero:");
if(number1 > number2 && number1 > number3) {
    console.log("el primer numero es mayor");
} else {
    if(number2 > number1 && number3 > number2) {
        console.log("el segundo numero es mayor");
    }
}
