var nota="";
var arr = [];
entrada = parseInt(nota);
var salida=document.getElementById("valor_salida");
var entrada=document.getElementById("valor_entrada");

while (nota!=-1 && nota>=0 && nota<=10){
		nota=prompt('Introduce una nota: ');
		if (nota==10){ 
			salida.innerHTML=("SI");
		} else {
			salida.innerHTML=("NO");
		}
		arr.push(nota);
	}
	entrada.innerHTML+=(arr);
