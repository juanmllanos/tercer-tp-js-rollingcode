let frase = (prompt('Ingrese un texto:'));
let minusculas = /[a-z]/;
let mayusculas = /[A-Z]/;


if (!Number(frase)) {
	if (frase.search(minusculas) === -1) document.write('El texto esta en mayusculas.');
	if (frase.search(mayusculas) === -1) document.write('El texto esta en minusculas.');
	if (frase.search(mayusculas) !== -1 && frase.search(minusculas) !== -1) {
		document.write('El texto tiene minusculas y mayusculas.');
	};
} else {
	document.write('Ingresaste un numero.')
};