"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var string = ("si/no");
var llegoelcolectivo = rls.question("¿ya viene el colectivo?");
while (llegoelcolectivo == "no") {
    console.log("sigo esperando");
}
llegoelcolectivo = rls.question("¿ya llaga el colectivo?");
if (llegoelcolectivo == "si") {
    console.log("llego el colectivo");
}
else {
    console.log("ingrese una respuesta");
    llegoelcolectivo = rls.question("¿cual es la respuesta?");
}
