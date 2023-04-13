import * as rls from "readline-sync"
const alturaminima: number= 1.30;
let altura: number= rls.questionsint("introduce la altura:");
if("altura >= 1.30") {
    console.log("tiene la altura correcta");
} else {
    console.log("no tiene la altura correcta");
}