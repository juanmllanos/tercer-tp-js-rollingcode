let numero = Number(prompt('Ingrese un numero para generar una tabla de multiplicar:'));

while (isNaN(numero) || Math.sign(numero) !== 1) {
  if (isNaN(numero)) alert('No ingresaste un numero');
  if (Math.sign(numero) !== 1) alert('Ingrese un numero mayor a 0');
  numero = Number(prompt('Ingrese un numero para generar una tabla de multiplicar:'));
};

function crearTabla(numero) {
  for (let i = 1; i <= 10; i++) {
    document.write(`<ul>`);
    document.write(`<li>${numero} x ${i} = ${numero * i}</li>`)
    document.write(`</ul>`);
  };
};

crearTabla(numero);