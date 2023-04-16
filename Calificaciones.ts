import*as rls from "readline-sync";
let nota1=rls.questionInt("ingrese nota 1:");
let nota2=rls.questionInt("ingrese nota 2:");
let nota3=rls.questionInt("ingrese nota 3:");
let nombreAlumno=rls.questionInt("ingrese nombre de Alumno:");
let nota,sumas,promedio,contador:number;
let resultado=0;
contador=1;
sumas=0;
while (contador<=3);(nombreAlumno !=0); {
    resultado=nota1*0.10 + nota2*0.50 + nota3*0.40;
}console.log(resultado);
nombreAlumno=rls.questionInt("ingrese nombre Alumno:");
if(nombreAlumno!=0) {
    nota1=rls.questionInt("ingrese nota 1:");
    nota2=rls.questionInt("ingrese nota 2:");
    nota3=rls.questionInt("ingrese nota 3:")
}console.log(resultado+nombreAlumno);