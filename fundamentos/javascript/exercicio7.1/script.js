let listaPaciente = [];

function atualizarFila() {
    const filaElement = document.getElementById('fila');
    const filaVaziaElement = document.getElementById('fila-vazia');
    const novoPacienteInput = document.getElementById('novo-paciente');
    const novoPacienteNome = novoPacienteInput.value.trim();
    const consultarPacienteButton = document.getElementById('consultar-paciente');

    if (novoPacienteNome !== '') {
        listaPaciente.push(novoPacienteNome);
        novoPacienteInput.value = '';
    }

    if (listaPaciente.length > 0) {
        consultarPacienteButton.hidden = false;
    } else {
        consultarPacienteButton.hidden = true;
    }

    filaElement.innerHTML = '';

    if (listaPaciente.length === 0) {
        filaVaziaElement.hidden = false;
    } else {
        filaVaziaElement.hidden = true;
        listaPaciente.forEach((paciente, index) => {
            const pacienteElement = document.createElement('p');
            pacienteElement.textContent = `${index + 1}º ${paciente}`;
            filaElement.appendChild(pacienteElement);
        });
    }
    novoPacienteInput.value = '';
}

function removerPaciente() {
    listaPaciente.shift();
    atualizarFila();
}

atualizarFila();