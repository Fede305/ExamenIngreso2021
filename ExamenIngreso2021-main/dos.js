function mostrar() {
  let TipoCursada;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir = "s";
  let promedioMax;
  let mejorPromedio;
  let nombreNoBinario;
  let nombreLibre;
  let edadMinima;
  let acumpromedioMasculino = 0;
  let acumpromF = 0;
  let acumpromN = 0;
  let promedioMasculino;
  let promFemenino;
  let promNoBinario;
  let alumnoMasculino;
  let alumnoFemenino;
  let alumNoBinario;
  let totalmaterias;
  let materiasMax;
  let nombremat;
  let edadmat;
  let prom;

  do {
    nombre = prompt("Ingrese su nombre:");
    TipoCursada = prompt("Ingrese  el Tipo de cursada es 'libre', 'presencial', 'remota' ");
    cantmaterias = prompt("Ingrese cantidad de materias, mas de 0, menos de 8");

    sexo = prompt("Ingrese sexo f/m/no").toLowerCase();
    while (sexo != "m" && sexo != "f" && sexo != "n") {
      sexo = prompt("Dato inválido.Ingrese sexo f/n");
    }

    notaPromedio = parseInt(prompt("Ingrese la nota promedio, entre 0 y 10 "));
    while (!(notaPromedio >= 0 && notaPromedio <= 10)) {
      notaPromedio = parseInt(prompt("Error, Ingrese la nota promedio, entre 0 y 10 "));
    }

    edad = parseInt(prompt("Ingrese la edad:"));
    while (edad >= 0 && isNaN(edad)) {
      edad = parseInt(prompt("Error, Ingrese edad."))
    }

    if (sexo != "m") {
      if (prom > promedioMax) {
        promedioMax = prom;
        mejorPromedio = nombre;
      }

    }

    if (TipoCursada == "libre") {
      if (edad < edadMinima) {
        edadMinima = edad;
        nombreLibre = nombre;
      }

    }

    if (sexo == "m") {
      acumpromedioMasculino += notaPromedio;
      alumnoMasculino++;
    } else if (sexo == "f") {
      acumpromF += notaPromedio;
      alumnoFemenino++;
    } else {
      acumpromN += notaPromedio
      alumNoBinario++;
    }

    promedioMasculino = acumpromedioMasculino / alumnoMasculino;
    promF = acumpromF / alumnoFemenino;
    promN = acumpromN / alumNoBinario;

    if (tipoCursada != "remota") {
      totalmaterias + cantmaterias;
      if (totalmaterias > materiasMax) {
        materiasMax = totalmaterias;
        nombremat = nombre;
        edadmat = edad;

      }


    }

    seguir = prompt("Desea seguir ingresando productos?  s/n");

  } while (seguir == "s")

  console.log("El mejor promedio no mas culino es" + mejorPromedio + "<br>")
  console.log("El nombre del más joven entre los libres es" + nombreLibre + "<br>")
  console.log("El promedio de la nota por sexo es masculino" + promedioMasculino + "femenino" + promFemenino + "no binario" + promNoBinario + "<br>")
  console.log("La edad y nombre del que cursa mas materias que no sean en forma remota" + nombremat + "y tiene" + edadmat + "años." + "<br>")

}

