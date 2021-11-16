alert('Introduce un número:');
	const num=prompt();
function esPrimo(num){
	for (let i=2; i<=num-1; i++){
		if (i*2==num || i*3==num || i*5==num || i*7==num || i*11==num){
			return false;
		
		}	

	}
	return true;
}

//Pruebas
entrada1.innerHTML+=(num);
const resu=esPrimo(num);
salida1.innerHTML+=(resu);