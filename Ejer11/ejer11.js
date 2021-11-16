var num_asteriscos="";
//var salida=document.getElementById("num_asteriscos");
entrada = parseInt(num_asteriscos);
var entrada=document.getElementById("num_asteriscos");

	num_asteriscos=prompt("Introduce una numero: ");
		
	 piramide(num_asteriscos);

	alert("➟Valor introducido: "+num_asteriscos);

	function piramide(num_asteriscos){
	 for (let i = 0; i < num_asteriscos; i++) {
   		 let x = '';
    for (let j = 0; j < i + 1; j++) {
      x = x + '*';
    }
    console.log(x);
  }
}

	