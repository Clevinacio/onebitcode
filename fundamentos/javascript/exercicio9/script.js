(function() {
	const PI = 3.14;

	function getNumber(message) {
		while (true) {
			let input = prompt(message);
			if (input === null) return null;
			input = input.replace(',', '.').trim();
			const num = parseFloat(input);
			if (!isNaN(num)) return num;
			alert('Entrada inválida. Informe um número.');
		}
	}

	function areaTriangulo(base, altura) { return (base * altura) / 2; }
	function areaRetangulo(base, altura) { return base * altura; }
	function areaQuadrado(lado) { return lado * lado; }
	function areaTrapezio(baseMaior, baseMenor, altura) { return ((baseMaior + baseMenor) * altura) / 2; }
	function areaCirculo(raio) { return PI * raio * raio; }

	function format(valor) {
		return Number.isFinite(valor) ? valor.toFixed(2) : String(valor);
	}

	let opcao;
	do {
		opcao = prompt(
			'Calculadora geométrica\n\nEscolha uma opção:\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n6 - Sair'
		);
		if (opcao === null) break;
		opcao = opcao.trim();

		switch (opcao) {
			case '1': {
				const b = getNumber('Base do triângulo:');
				if (b === null) break;
				const h = getNumber('Altura do triângulo:');
				if (h === null) break;
				alert('Área do triângulo: ' + format(areaTriangulo(b, h)));
				break;
			}
			case '2': {
				const b = getNumber('Base do retângulo:');
				if (b === null) break;
				const h = getNumber('Altura do retângulo:');
				if (h === null) break;
				alert('Área do retângulo: ' + format(areaRetangulo(b, h)));
				break;
			}
			case '3': {
				const l = getNumber('Lado do quadrado:');
				if (l === null) break;
				alert('Área do quadrado: ' + format(areaQuadrado(l)));
				break;
			}
			case '4': {
				const B = getNumber('Base maior do trapézio:');
				if (B === null) break;
				const b = getNumber('Base menor do trapézio:');
				if (b === null) break;
				const h = getNumber('Altura do trapézio:');
				if (h === null) break;
				alert('Área do trapézio: ' + format(areaTrapezio(B, b, h)));
				break;
			}
			case '5': {
				const r = getNumber('Raio do círculo:');
				if (r === null) break;
				alert('Área do círculo (pi = 3.14): ' + format(areaCirculo(r)));
				break;
			}
			case '6':
				break;
			default:
				alert('Opção inválida. Escolha entre 1 e 6.');
		}
	} while (opcao !== '6');

	alert('Programa encerrado.');
})();

