import*as rls from "readline-sync";
let numeroingresado,negativo,positivo:number;
numeroingresado=-1;
negativo=-1;
positivo=0;
let numeromaximo:number=rls.questionInt("ingrese numero maximo:");
let numerominimo:number=rls.questionInt("ingrese el numero minimo:");
while(numeroingresado!=0) {
    numeroingresado=rls.questionInt("ingrese un numero:");
}if(numeroingresado>positivo&&numeroingresado!=0){
positivo=positivo+1;}
if(numeroingresado<negativo&&numeroingresado!=0){
    negativo=negativo+1;
}if(numeromaximo==0){
    numeromaximo=positivo;
}if(numerominimo!=0){
    numerominimo=negativo;
}
console.log("el numero maximo es:",positivo+1);
console.log("el numero minimo es:",negativo+1);
