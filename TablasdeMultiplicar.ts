import*as rls from "readline-sync";
let tabla=rls.questionInt("ingrese un numero:");
let numeroFinaldelaTabla=rls.questionInt("ingrese el numero final:");
let variableDeControl:number=0;
let resultado=0;
while(variableDeControl<=tabla) {
    resultado=(tabla*variableDeControl);
    variableDeControl++
    console.log(tabla*variableDeControl);
}