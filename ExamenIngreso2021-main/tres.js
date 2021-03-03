function mostrar()
{
	let nombre; 
	let eCivil; 
	let edad; 
	let temperatura; 
	let sexo; 
	let resp = "s";
	let precio = 600;
	let conViudo = 0; 
	let nombreSoltera; 
	let edadSoltera; 
	let minEdad; 
	let flagSoltera = 0;
	let total = 0; 
	let desc = 0; 
	let contMayor = 0; 
	let contTotal = 0;
	let porcenaje;
	do {
		nombre = prompt("Ingrese su nombre: ");
		while (!isNaN(nombre)) {
			nombre = prompt("Reingrese su nombre: ");
		}
		eCivil = prompt("Estado civil (soltero, casado, viudo)");
		while (!(eCivil == "soltero" || eCivil == "casado" || eCivil == "viudo")) {
			eCivil = prompt("ERROR. Estado civil (soltero, casado, viudo)");
		}
		edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad) || edad < 17) {
			edad = parseInt(prompt("Reingrese su edad"));
		}
		temperatura = parseInt(prompt("Ingrese su temeperatura corporal"));
		while (isNaN(temperatura) || temperatura < 36 || temperatura > 40) {
			temperatura = parseInt(prompt("Reingrese su temeperatura corporal"));
		}
		sexo = prompt("Ingrese su sexo (f o m)");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Reingrese su sexo (f o m)");
		}

		switch (eCivil) {
			case "soltero":
				if (sexo == "f") {
					if (flagSoltera == 0) {
						minEdad = edad;
						nombreSoltera = nombre;
						edadSoltera = edad;
						flagSoltera = 1;
					} else if (minEdad > edad) {
						minEdad = edad;
						nombreSoltera = nombre;
						edadSoltera = edad;
					}
				}
				break;
			case "viudo":
				if (edad >= 60) {
					conViudo++;
				}
				break;
			case "casado":
				break;
		}

		contTotal++;

		if (edad >= 60) {
			contMayor++;
		}

		total += precio;
		resp = prompt("Desea continuar? s/n: ");
	} while (resp == "s");

	porcenaje = Math.round(contMayor / 100 * contTotal);
	if (porcenaje >= 50) {
		desc = total - (total * 0.25);
	}

	console.log( "La cantidad de personas con estado 'viudo' de mas de 60 años: " + conViudo);
	console.log( "El nombre y edad de la mujer soltera mas joven " + "Nombre: " + nombreSoltera + "Edad: " + edadSoltera);
	console.log("¿Cuanto sale el viaje total sin descuento? " + total);
	if (desc == 0) {
		console.log("Si hay mas del 50% de los pasajeros que tiene mas de 60 años, el precio final tiene un descuento  del 25%, se muestra si es necesario");
	} else {
		console.log("Si hay mas del 50% de los pasajeros que tiene mas de 60 años " +
		" el precio final tiene un descuento  del 25%, que solo mostramos si es necesario " + desc);
	}
}
