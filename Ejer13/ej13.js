//Función
var num=2100;
function bisiesto(num){
	if (((num%4==0) && (num%100!=0)) || (num%400==0)){
		return 1;
	} else {
	 	 return 0;
	}
}

//Pruebas
entrada1.innerHTML+=(num);
var resu=bisiesto();
salida1.innerHTML+=(resu);



