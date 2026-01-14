const nome = window.prompt("Digite seu nome:");
const sobrenome = window.prompt("Digite seu sobrenome:");
const campoDeEstudo = window.prompt("Digite seu campo de estudo:");
const idade = parseFloat(window.prompt("Digite sua idade:"));

window.alert(
    `Olá, ${nome} ${sobrenome}! Você tem ${idade} anos e estuda ${campoDeEstudo}.`
);