// Ejercicio 1
function calcularInversion() {
    var capital = document.getElementById('capital').value;
    var ganancia = capital * 0.02;
    document.getElementById('resultadoInversion').innerText = 'Ganancia después de un mes: $' + ganancia.toFixed(2);
}

// Ejercicio 2
function calcularSueldo() {
    var sueldoBase = document.getElementById('sueldoBase').value;
    var venta1 = document.getElementById('venta1').value;
    var venta2 = document.getElementById('venta2').value;
    var venta3 = document.getElementById('venta3').value;
    var comisiones = (venta1 * 0.10) + (venta2 * 0.10) + (venta3 * 0.10);
    var sueldoTotal = parseFloat(sueldoBase) + comisiones;
    document.getElementById('resultadoSueldo').innerText = 'Total con comisiones: $' + sueldoTotal.toFixed(2);
}

// Ejercicio 3
function calcularDescuento() {
    var totalCompra = document.getElementById('totalCompra').value;
    var descuento = totalCompra * 0.15;
    var totalPagar = totalCompra - descuento;
    document.getElementById('resultadoDescuento').innerText = 'Total a pagar: $' + totalPagar.toFixed(2);
}

// Ejercicio 4
function calcularCalificacion() {
    var parcial1 = document.getElementById('parcial1').value;
    var parcial2 = document.getElementById('parcial2').value;
    var parcial3 = document.getElementById('parcial3').value;
    var examenFinal = document.getElementById('examenFinal').value;
    var trabajoFinal = document.getElementById('trabajoFinal').value;

    var promedioParciales = (parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3)) / 3;
    var calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
    document.getElementById('resultadoCalificacion').innerText = 'Calificación Final: ' + calificacionFinal.toFixed(2);
}

// Ejercicio 5
function calcularPorcentaje() {
    var numHombres = document.getElementById('numHombres').value;
    var numMujeres = document.getElementById('numMujeres').value;
    var total = parseFloat(numHombres) + parseFloat(numMujeres);

    var porcentajeHombres = (numHombres / total) * 100;
    var porcentajeMujeres = (numMujeres / total) * 100;
    document.getElementById('resultadoPorcentaje').innerText = 'Hombres: ' + porcentajeHombres.toFixed(2) + '%, Mujeres: ' + porcentajeMujeres.toFixed(2) + '%';
}

// Ejercicio 6
function calcularEdad() {
    var anioNacimiento = document.getElementById('anioNacimiento').value;
    var anioActual = new Date().getFullYear();
    var edad = anioActual - anioNacimiento;
    document.getElementById('resultadoEdad').innerText = 'Edad: ' + edad + ' años';
}
