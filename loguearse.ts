import * as rls from "readline-sync";
let nombredeusuario: string="Juan";
let contraseniaadecuada: string="JuaN";
nombredeusuario:rls.questionInt("ingrese su nombre de usuario:");
contraseniaadecuada:rls.questionInt("ingrese su contrasenia:");
if("nombredeusuario && contrseniaadecuada") {
    console.log("nombredeusuario y contraseniaadecuada");
} else {
    console.log("nombredeusuario incorrecto y contrasenia incorrecta");
}