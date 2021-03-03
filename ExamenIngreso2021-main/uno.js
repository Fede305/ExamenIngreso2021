
function mostrar() {

	let nombreDelProductoDelProducto;
	let cantidad;
	let precio;
	let tipoInfla;
	let marca;
	//promedios
	let promedioA;
	let promedioI;
	let promedioQ;
	let promAl;
	let nProd;
	//declaracion de contadores,acumuladores y precios
	let promedioIAC; 
	let promedioQUAT; 
	let precioAlcohol = 0;
	let precioIAC = 0; 
	let precioQUAT= 0;
	let contadorAlcohol = 0;
	let contadorIAC = 0; 
	let contadorQuat = 0;
	let acumuladorAlcohol = 0;
	let acumuladorIAC = 0; 
	let acummulardotQuat = 0;
	// minimo
	let inflamable = ""; 
	let minimoIac = 0;
	//maximo
	let max;
	let flag = 0;
	let tipoMasCaro;
	let marcaMasCara;
    


	for (i = 0; i < 5; i++) {
		nombreDelProductoDelProducto= prompt("Ingrese nombrDelProducto del producto:");
		nombreDelProductoDelProducto= prompt("Ingrese tipo de producto: ALCOHOL/IAC/QUAT").toUpperCase();
		while (nombreDelProductoDelProducto != "ALCOHOL" && nombreDelProductoDelProducto!= "IAC" && nombreDelProductoDelProducto!= "QUAT") {
		  nombreDelProductoDelProducto= prompt("Error. ingrese tipo de producto: (ALCOHOL/IAC/QUAT)").toUpperCase();
		}
		precio = parseInt(prompt("Ingrese precio del producto:"));
		while(precio < 100  || precio > 300){
			precio = parseInt(prompt("Error. ingrese precio del producto: (Entre 100 y 300)"));
		}
		cantidad= parseInt(prompt("Ingrese cantidad:"));
		while(cantidad< 1  || cantidad> 1000){
			cantidad= parseInt(prompt("Error. Reingrese cantidad: (Entre 1 y 1000)"));
		}
		tipoInfla = prompt("Ingrese tipo de inflamable: (ignífugo/combustible/explosivo)").toLowerCase();
		while(tipoInfla != "ignífugo" && tipoInfla != "combustible" && tipoInfla != "explosivo"){
			tipoInfla = prompt("Error. ingrese tipo de inflamable: (ignífugo/combustible/explosivo)").toLowerCase();
		} if (promedioA == cantidad) {
			promedioA = promedioA * cantidad / 100
		}
		marca = prompt("Ingrese la marca del producto:")
	
	    while (!isNaN(marca)) {
			marca = prompt("Reingrese la marca");
		}

		switch (nombreDelProductoDelProducto) {
			case "ALCOHOL":
				contadorAlcohol++;
				acumuladorAlcohol += cant;
				precioAlcohol += precio;
				break;
			case "IAC":
				contadorIAC++;
				acumuladorIAC += cant;
				precioIAC += precio;
				if (precio <= 200) {
					minimoIac += cant;
				}
				break;
			case "QUAT":
				contadorQuat++;
				acummulardotQuat += cant;
				precioQUAT+= precio;
				break;
		}

		if (flag == 0) {
			flag = 1;
			max = precio;
			tipoMasCaro = tipo;
			marcaMasCara = marca;
		} else if (max < precio) {
			max = precio;
			tipoMasCaro = tipo;
			marcaMasCara = marca;
		}

		total += precio;
	}
		  
	if (acumuladorAlcohol > acumuladorIAC && acumuladorAlcohol > acummulardotQuat) {
		inflamable =  + acumuladorAlcohol;
	} else if (acumuladorIAC >= acumuladorAlcohol && acumuladorIAC > acummulardotQuat) {
		inflamable =  + acumuladorIAC;
	} else if (acummulardotQuat > acumuladorIAC && acummulardotQuat > acumuladorAlcohol) {
		inflamable =  + acummulardotQuat;
	}

	promAl = acumuladorAlcohol / contadorAlcohol;
	promedioIAC = acumuladorIAC / contadorIAC;
	promedioQUAT = acummulardotQuat / contadorQuat;

	if (promAl == 0) {
		console.log("a. El promedio de cantidad por tipo de producto Alcohol no tiene IAC: " + promedioIAC + "QUAT: " + promedioQUAT);
	} else if (promedioIAC == 0) {
		console.log("a. El promedio de cantidad por tipo de producto Alcohol " + promAl + "IAC no tiene QUAT " + promedioQUAT);
	} else if (promedioQUAT == 0) {
		console.log("a. El promedio de cantidad por tipo de producto: Alcohol: no tiene" + "IAC: " + promedioIAC + "QUAT " + promedioQUAT);
	} else {
		console.log("El promedio de cantidad por tipo de producto alcohol " + promAl + "IAC " + promedioIAC + "QUAT " + promedioQUAT);
	}
	console.log("El tipo de inflamable con más cantidad de unidades en total de la compra " + inflamable);
	if (isNaN(minimoIac)) {
		console.log("Cuántas unidades de IAC con precios menos a 200 se compraron en total no existe");
	} else {
		console.log("Cuántas unidades de IAC con precios menos a 200  se compraron en total " + minimoIac);
	}
	console.log("d. La marca y tipo del más caro de los productos: " + "Marca " + marcaMasCara + "Tipo " + tipoMasCaro);

	

	
}
	