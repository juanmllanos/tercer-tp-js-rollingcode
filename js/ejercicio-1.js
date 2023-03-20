const mesesDelAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
document.write(`<ul>`);
for (let i = 0; i < mesesDelAnio.length; i++) {
	document.write(`<li>${mesesDelAnio[i]}</li>`);
};
document.write(`</ul>`);