const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const dayOfYear = require("dayjs/plugin/dayOfYear")

const DATA_NASCIMENTO = "15/01/1998";
dayjs.extend(customParseFormat);
dayjs.extend(dayOfYear);

function calcularAniversario(dataNascimento){
    const hoje = dayjs();
    const dataObj = dayjs(dataNascimento, "DD/MM/YYYY");
    const idadeHoje = hoje.diff(dataObj, 'year');
    const proximoAniversario = dataObj.add(idadeHoje + 1, 'year');
    const diasRestantes = proximoAniversario.diff(hoje, 'day') + 1;
    console.log(
    `
    No dia de hoje você possui ${idadeHoje} anos
    Seu próximo aniversário será em ${proximoAniversario.format('DD/MM/YYYY')}
    Faltam exatamente ${diasRestantes} dia(s) para seu aniversário
    `
    );
}

calcularAniversario(DATA_NASCIMENTO);