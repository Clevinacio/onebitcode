const imoveis = [];

function salvarImovel() {
	const proprietario = prompt('Nome do proprietário:');
	if (proprietario === null || proprietario.trim() === '') {
		alert('Cadastro cancelado ou nome inválido.');
		return;
	}

	const quartosRaw = prompt('Quantidade de quartos:');
	if (quartosRaw === null) { alert('Cadastro cancelado.'); return; }
	const quartos = Number(quartosRaw);
	if (Number.isNaN(quartos) || quartos < 0) { alert('Quantidade de quartos inválida.'); return; }

	const banheirosRaw = prompt('Quantidade de banheiros:');
	if (banheirosRaw === null) { alert('Cadastro cancelado.'); return; }
	const banheiros = Number(banheirosRaw);
	if (Number.isNaN(banheiros) || banheiros < 0) { alert('Quantidade de banheiros inválida.'); return; }

	const garagem = confirm('Possui garagem?\nOK = Sim, Cancel = Não');

	const imovel = {
		proprietario: proprietario.trim(),
		quartos,
		banheiros,
		garagem
	};

	imoveis.push(imovel);
	alert('Imóvel salvo com sucesso!');
}

function mostrarImoveis() {
	if (imoveis.length === 0) {
		alert('Nenhum imóvel cadastrado.');
		return;
	}

	let texto = `Total de imóveis: ${imoveis.length}\n\n`;
	imoveis.forEach((imovel, i) => {
		texto += `Imóvel ${i + 1}\n`;
		texto += `Proprietário: ${imovel.proprietario}\n`;
		texto += `Quartos: ${imovel.quartos}\n`;
		texto += `Banheiros: ${imovel.banheiros}\n`;
		texto += `Garagem: ${imovel.garagem ? 'Sim' : 'Não'}\n`;
		texto += '-----------------------------\n';
	});

	alert(texto);
}

function iniciarSistema() {
	while (true) {
		const opcao = prompt(
			`Cadastro de Imóveis\nTotal de imóveis: ${imoveis.length}\n\n` +
				'1 - Salvar imóvel\n' +
				'2 - Mostrar imóveis\n' +
				'3 - Sair\n\n' +
				'Digite o número da opção:'
		);

		if (opcao === null) {
			const sair = confirm('Deseja realmente sair do sistema?');
			if (sair) break;
			else continue;
		}

		const escolha = opcao.trim();
		if (escolha === '1') {
			salvarImovel();
		} else if (escolha === '2') {
			mostrarImoveis();
		} else if (escolha === '3') {
			break;
		} else {
			alert('Opção inválida. Digite 1, 2 ou 3.');
		}
	}

	alert('Sistema encerrado.');
}

// Inicia o sistema automaticamente quando o script for carregado
iniciarSistema();

