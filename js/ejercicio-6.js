function pedirLado(lado) {
	return Number(prompt(`Ingrese un lado ${lado} del rectangulo.`));
};

function calcularPerimetro(ladoA, ladoB) {
	return 2 * (ladoA + ladoB)
}

let ladoA = pedirLado('A');
while (isNaN(ladoA) || Math.sign(ladoA) !== 1) {
	if (isNaN(ladoA)) alert('No ingresaste un numero.');
	if (Math.sign(ladoA) !== 1) alert('Ingrese un numero mayor a 0.');
	ladoA = pedirLado('A');
};

let ladoB = pedirLado('B');
while (isNaN(ladoB) || Math.sign(ladoB) !== 1 || ladoA === ladoB) {
	if (isNaN(ladoB)) alert('No ingresaste un numero.');
	if (Math.sign(ladoB) !== 1) alert('Ingrese un numero mayor a 0.');
	if (ladoA === ladoB) alert(`Los lados no pueden ser iguales, ingrese un numero mayor a 0 y distinto de ${ladoA}.`)
	ladoB = pedirLado('B');
};

document.write(`<p>El primetro de tu rectangulo es de ${calcularPerimetro(ladoA, ladoB)}.</p>`);