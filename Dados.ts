import*as rls from "readline-sync";
let dados=rls.questionInt("ingrese cantidad de dados:");
let casosPosibles=6;
let resultado=0;
for(let i =1;i<=casosPosibles;i++); 
let probabilidad=1/casosPosibles;
let combinacion=Math.pow(probabilidad,dados);
resultado+=combinacion;
resultado-=combinacion;
resultado=dados/casosPosibles;
console.log("resultado:"+resultado);