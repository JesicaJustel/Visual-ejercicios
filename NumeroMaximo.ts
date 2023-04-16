import*as rls from "readline-sync";
let numero:number=rls.questionInt("ingrese un numero");
let numeromaximo:number=rls.questionInt("ingrese numero maximo:");
let i:number=0;
while (numeromaximo !== 0); {
    if(i <= numeromaximo) {
    i=numero;}
    i=numero -1 ;}
    i=numeromaximo;{
   
    numero=rls.questionInt("ingrese numero:");
    numeromaximo=rls.questionInt("el numero maximo es:");
}
console.log("el numero maximo es:"+i);
