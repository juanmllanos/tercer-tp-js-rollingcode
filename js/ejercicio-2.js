const ciudades = [];

do {
	ciudades.push(prompt('Ingrese el nombre de una ciudad:'));
} while (confirm());
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
	document.write(`<li>${ciudades[i]}</li>`);
};
document.write(`</ul>`);

document.write(`Longitud del arreglo: ${ciudades.length}`);
console.log(ciudades[0], ciudades[2], ciudades[ciudades.length - 1]);

ciudades.push('Paris');

document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
	document.write(`<li>${ciudades[i]}</li>`);
};
document.write(`</ul>`);

document.write(`La segunda ciudad en el arreglo es: ${ciudades[1]}`);
ciudades[1] = 'Barcelona';

document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
	document.write(`<li>${ciudades[i]}</li>`);
};
document.write(`</ul>`);