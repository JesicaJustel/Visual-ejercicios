import * as rls from "readline-sync";
const posicion:number=rls.questionInt("ingresar la posicion de llegada:");
let mensaje: string="";
if(posicion === 1) {
    console.log(mensaje="medalla de oro");
} else {
    if(posicion === 2) {
console.log(mensaje="medalla de plata");
    } else {
if(posicion === 3) {
    console.log(mensaje="medalla de bronce");
} else {
    if(posicion > 3)
    console.log(mensaje="certificado de participacion");
}
    }
}
