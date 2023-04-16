import*as rls from "readline-sync";
let NumeroIngresado,Negativo,Positivo:number;
NumeroIngresado=-1;
Negativo=-0;
Positivo=0;
let suma:number= -0;
let multiplicacion:number=-0;
while(NumeroIngresado !=0) {
    NumeroIngresado=rls.questionInt("ingrese un numero:");
    if(NumeroIngresado>Positivo&&NumeroIngresado!=0) {
Positivo=Positivo+1;
    }if(NumeroIngresado<Negativo&&NumeroIngresado!=0)
    Negativo=Negativo+1;
}if(NumeroIngresado==0) {
    suma=Negativo+Positivo;
    multiplicacion=(Positivo*100)/suma;
}console.log(Positivo,"son mayores a 0 y el", multiplicacion,"% son positivo");