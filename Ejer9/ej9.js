var resultado="";
var salida=document.getElementById("valor_salida")

alert('Introduce un número para realizar la tabla de multiplicar:');
	var num1=prompt();
	alert('Introduce un número tope:');
	var num2=prompt();
	var num2=10;
	for (i=1; i<=num2; i++){
		salida.innerHTML+=(num1 +" x " + i + " = " + (num1*i)+"<br/>");
	}

var entrada=document.getElementById("valor_entrada")
entrada.innerHTML+=(num1+" "+num2);


