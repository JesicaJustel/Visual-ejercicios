import*as rls from "readline-sync";
let tabla=rls.questionInt("ingrese un numero");
let numeroFinaldelaTabla=rls.questionInt("ingrese el numero final");
let resultado:string;
var i=1;
for(let i=1;i<=numeroFinaldelaTabla;i++);{
resultado=(tabla*i).
toString(10)
console.log(tabla,"x",i,"=",resultado);
}