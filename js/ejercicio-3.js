const resultados = [];
for (let i = 1; i <= 50; i++) {
	const dadoUno = (Math.ceil(Math.random() * 6));
	const dadoDos = (Math.ceil(Math.random() * 6));
	resultados.push(dadoUno + dadoDos);
};

let resultadoDos = 0,
	resultadoTres = 0,
	resultadoCuatro = 0,
	resultadoCinco = 0,
	resultadoSeis = 0,
	resultadoSiete = 0,
	resultadoOcho = 0,
	resultadoNueve = 0,
	resultadoDiez = 0,
	resultadoOnce = 0,
	resultadoDoce = 0;

console.log(resultados);

for (let i = 0; i < resultados.length; i++) {
	switch (resultados[i]) {
		case 2:
			resultadoDos++
			break;
		case 3:
			resultadoTres++
			break;
		case 4:
			resultadoCuatro++
			break;
		case 5:
			resultadoCinco++
			break;
		case 6:
			resultadoSeis++
			break;
		case 7:
			resultadoSiete++
			break;
		case 8:
			resultadoOcho++
			break;
		case 9:
			resultadoNueve++
			break;
		case 10:
			resultadoDiez++
			break;
		case 11:
			resultadoOnce++
			break;
		case 12:
			resultadoDoce++
			break;
	};
};
document.write(`
	<ul>
		<li>El numero dos salio ${resultadoDos} veces.</li>
		<li>El numero tres salio ${resultadoTres} veces.</li>
		<li>El numero cuatro salio ${resultadoCuatro} veces.</li>
		<li>El numero cinco salio ${resultadoCinco} veces.</li>
		<li>El numero seis salio ${resultadoSeis} veces.</li>
		<li>El numero siete salio ${resultadoSiete} veces.</li>
		<li>El numero ocho salio ${resultadoOcho} veces.</li>
		<li>El numero nueve salio ${resultadoNueve} veces.</li>
		<li>El numero diez salio ${resultadoDiez} veces.</li>
		<li>El numero once salio ${resultadoOnce} veces.</li>
		<li>El numero doce salio ${resultadoDoce} veces.</li>
	</ul>
`);