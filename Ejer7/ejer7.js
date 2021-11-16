console.log("jamon");
var N=10;
var resultado="";
var entrada=document.getElementById("valor_entrada");

for (i=2; i<=N; i+=2){
	resultado+=`${i},`;
}
document.getElementById("valor_entrada").innerHTML = N;
document.getElementById("valor_salida").innerHTML = resultado;
console.log(resultado);