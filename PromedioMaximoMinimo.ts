import*as rls from "readline-sync";
let Maximo,Minimo,MediaTodosNumeros,numeroingresado,Promedio:number;
numeroingresado=rls.questionInt("ingrese un numero entero:");
Maximo=numeroingresado;
Minimo=numeroingresado;
MediaTodosNumeros=numeroingresado;
Promedio=numeroingresado;
let contador:number=0;
while(numeroingresado!=0) {
    contador=contador+1;
    numeroingresado=rls.questionInt("ingrese un numero entero:");
    MediaTodosNumeros=numeroingresado+MediaTodosNumeros;
}if(numeroingresado>Maximo) {
    Maximo=numeroingresado;
}if(numeroingresado<Minimo&&numeroingresado!=0){
    Minimo=numeroingresado;
}if(numeroingresado==0){
    let Promedio:number=MediaTodosNumeros/contador;
}console.log("el numero maximo es:",Maximo,"el numero minimo es:", Minimo, "el promedio es:",Promedio);