let pilha = [];

function adicionarCarta() {
    const carta = prompt("Digite o nome da carta a ser adicionada:");
    if (carta) {
        pilha.push(carta);
        atualizarPilha();
        alert(`Carta "${carta}" adicionada à pilha.`);
    } else {
        alert("Nenhuma carta foi adicionada.");
    }
}

function atualizarPilha() {
    const pilhaElement = document.getElementById("pilha");
    const avisoElement = document.getElementById("aviso-pilha-vazia");
    pilhaElement.innerHTML = "";
    if (pilha.length === 0) {
        avisoElement.hidden = false;
        return;
    }
    for (let i = pilha.length - 1; i >= 0; i--) {
        avisoElement.hidden = true;
        const cartaElement = document.createElement("p");
        cartaElement.textContent = pilha[i];
        pilhaElement.appendChild(cartaElement);
    }
}

function puxarCarta() {
    if (pilha.length > 0) {
        const carta = pilha.pop();
        atualizarPilha();
        alert(`Carta "${carta}" puxada da pilha.`);
    } else {
        alert("A pilha está vazia.");
    }
}