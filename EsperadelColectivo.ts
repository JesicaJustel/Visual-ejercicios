import*as rls from "readline-sync";
const string=("si/no")
let llegoelcolectivo=rls.question("¿ya viene el colectivo?");
while(llegoelcolectivo =="no") {
    console.log("sigo esperando");
} llegoelcolectivo=rls.question("¿ya llega el colectivo?");
if(llegoelcolectivo =="si") {
    console.log("llego el colectivo");
} else {
    console.log("ingrese una respuesta");
    llegoelcolectivo=rls.question("¿cual es la respuesta?");
}