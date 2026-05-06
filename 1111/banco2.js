const numeroConta = "001";
let titular = "Antonio";
let saldo = 800.00;
let contaAtiva = true;
const historico = [];

function obterStatusConta() {
    return contaAtiva ? "Ativa" : "Inativa";
}

function exibirLinha(tipo = "=") {
    console.log(tipo.repeat(34));
}

function registrarTransacao(tipo, valor) {
    historico.push(`${tipo}: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
}

function verExtrato() {
    exibirLinha();
    console.log("         EXTRATO DA CONTA");
    exibirLinha();
    console.log(`Conta:   ${numeroConta}`);
    console.log(`Titular: ${titular}`);
    console.log(`Status:  ${obterStatusConta()}`);
    exibirLinha("-");

    if (historico.length === 0) {
        console.log("Nenhuma transação realizada.");
    } else {
        const ultimasTransacoes = historico.slice(-5); //pega as últimas 5 transações

        for (let i = 0; i < ultimasTransacoes.length; i++) {
            console.log(`${i + 1}. ${ultimasTransacoes[i]}`);
        }
    }

    exibirLinha("-");
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
    exibirLinha();
}

function depositar(valor) {
    if (valor > 0 && contaAtiva) {
        saldo += valor;
        registrarTransacao("Depósito", valor);
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
    } else {
        console.log("Valor inválido para depósito ou conta inativa!");
    }
}

function sacar(valor) {
    if (valor > 0 && valor <= saldo && contaAtiva) {
        saldo -= valor;
        registrarTransacao("Saque", valor);
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
    } else {
        console.log("Valor inválido para saque ou conta inativa!");
    }
}

function bloquearConta() {
    if (contaAtiva) {
        contaAtiva = false;
        console.log("Conta bloqueada com sucesso!");
    } else {
        console.log("Conta já está bloqueada!");
    }
}

function verResumo() {
    let totalDepositos = 0;
    let totalSaques = 0;

    for (const transacao of historico) {
        if (transacao.includes("Depósito")) {
            totalDepositos++;
        } else if (transacao.includes("Saque")) {
            totalSaques++;
        }
    }

    console.log("RESUMO DA CONTA");
    exibirLinha("-");
    console.log(`Depósitos realizados: ${totalDepositos}`);
    console.log(`Saques realizados:    ${totalSaques}`);
    console.log(`Transações totais:    ${historico.length}`);
    exibirLinha("-");
}

function simularTentativasSaque(valor, maxTentativas) {
    let tentativa = 1;
    let valorTentativa = valor;

    while (tentativa <= maxTentativas && valorTentativa > saldo) {
        console.log(`Tentativa ${tentativa}: R$ ${valorTentativa.toFixed(2)} - saldo insuficiente`);
        valorTentativa *= 0.8;
        tentativa++;
    }

    if (valorTentativa <= saldo && tentativa <= maxTentativas) {
        console.log(`Tentativa ${tentativa}: R$ ${valorTentativa.toFixed(2)} - valor aprovado`);
        sacar(valorTentativa);
    } else {
        console.log("Tentativas esgotadas. Saque não realizado.");
    }
}

function buscarTransacoes(tipo) {
    let encontradas = 0;

    console.log(`BUSCA POR: ${tipo}`);
    exibirLinha("-");

    for (const transacao of historico) {
        if (transacao.includes(tipo)) {
            encontradas++;
            console.log(`${encontradas}. ${transacao}`);
        }
    }

    if (encontradas === 0) {
        console.log("Nenhuma transação encontrada.");
    }

    exibirLinha("-");
}

console.log("======= Banco InovaWeb v2.0 =======");
verExtrato();
depositar(1000);
depositar(500);
sacar(200);
depositar(300);
sacar(100);
depositar(200);
sacar(9999);
verExtrato();
verResumo();
simularTentativasSaque(5000, 3);
verExtrato();
buscarTransacoes("Saque");
buscarTransacoes("Depósito");
buscarTransacoes("Pix");
console.log("======= Fim do Relatório =======");
