import*as rls from "readline-sync";
const clavecorrecta:string="eureka";
let clavestring=rls.question("ingrese la clave:");
let intentos:number=3;
console.log("ingrese la Clave");
while(clavestring==clavecorrecta && intentos <3); {
    console.log("contrasenia incorrecta, vuelve a escribir clave");
    Clave:rls.question("por favor ingrese la clave:");
} if(clavestring===clavecorrecta) {
    console.log("usted a ingresado correctamente");
} else {
    console.log("usted a agotado el numero de intentos");
}