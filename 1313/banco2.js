const numeroConta = "001";
let titular = "Antonio Alves";
let saldo = 800.00;
let contaAtiva = true;
const historico = [];
const elsaldo = document.querySelector('#saldo')
const elMensagem = document.querySelector('#mensagem')
const elStatusConta = document.querySelector('#status-conta')
const btnDepositar = document.querySelector('#btn-depositar')
const btnSacar = document.querySelector('#btn-sacar')
const btnBloquear = document.querySelector('#btn-bloquear')
const elTotalDepositos = document.querySelector('#total-depositos')
const elTotalSaques = document.querySelector('#total-saques')
const elTotalTransacoes = document.querySelector('#total-transacoes')
const elListaHistorico = document.querySelector('#lista-historico')
const btnLimparHistorico = document.querySelector('#btn-limpar-historico')
const campoTitular = document.querySelector('#campo-titular')
const btnAtualizarTitular = document.querySelector('#btn-atualizar-titular')
const elTitular = document.querySelector('#titular')

btnDepositar.addEventListener('click', function(){
    const campValor = document.querySelector('#campo-valor')
    const valor =  Number(campValor.value)
    depositar(valor)
})

btnSacar.addEventListener('click', function(){
    const campValor = document.querySelector('#campo-valor')
    const valor =  Number(campValor.value)
    sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)

btnLimparHistorico.addEventListener('click', limparHistorico)
atualizarBotaoLimparHistorico()

function obterStatusConta() {
    return contaAtiva ? "Ativa" : "Inativa";
}

function exibirLinha(tipo = "=") {
    console.log(tipo.repeat(34));
}

function registrarTransacao(tipo, valor) {
    historico.push(`${tipo}: R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
    atualizarHistorico();
    atualizarBotaoLimparHistorico()
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
        //console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        //console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
        atualizarSaldo()
        verResumo()
        exibirMensagem(`Depósito de ${valor} realizado com sucesso!` , 'sucesso')

    } else {
        console.log("Valor inválido para depósito ou conta inativa!");
    }
}


function sacar(valor) {
    if (valor > 0 && valor <= saldo && contaAtiva) {
        saldo -= valor;
        registrarTransacao("Saque", valor);
        //console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        //console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
        atualizarSaldo()
        verResumo()
        exibirMensagem(`Saque de ${valor} realizado com sucesso!` , 'sucesso')
    } else {
        exibirMensagem(`Valor inválido para saque ou conta inativa!`);
    }
}

function bloquearConta() {
    if (contaAtiva) {
        contaAtiva = false;
        elStatusConta.textContent = 'Inativa'
        elStatusConta.className = 'status-bloqueada'
        btnBloquear.textContent = '🔓 Desbloquear conta'
        btnBloquear.textContent = 'Desbloquear conta'
        exibirMensagem(`Conta bloqueada com sucesso!` , 'sucesso');
    } else {
        // console.log("Conta já está bloqueada!");
        contaAtiva = true
        elStatusConta.textContent = 'Ativa'
        elStatusConta.className = 'status-ativa'
        btnBloquear.textContent = '🔒 Bloquear conta'
        btnBloquear.textContent = 'Bloquear conta'
        exibirMensagem(`Conta desbloqueada com sucesso!` , 'sucesso');
    }
}

function verResumo() {
    let totalDepositos = 0;
    let totalSaques = 0;
    let totalTransacoes = 0

    for (const transacao of historico) {
        if (transacao.includes("Depósito")) {
            totalDepositos++;
        } else if (transacao.includes("Saque")) {
            totalSaques++;
        }
        totalTransacoes++;
    }

    /*console.log("RESUMO DA CONTA");
    exibirLinha("-");
    console.log(`Depósitos realizados: ${totalDepositos}`);
    console.log(`Saques realizados:    ${totalSaques}`);
    console.log(`Transações totais:    ${historico.length}`);
    exibirLinha("-");*/

    elTotalDepositos.textContent = totalDepositos
    elTotalSaques.textContent = totalSaques
    elTotalTransacoes.textContent = totalTransacoes
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
        console.log(`Tentativas esgotadas. Saque não realizado.`);
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

function atualizarSaldo() {
    elsaldo.textContent = `saldo : R$ ${saldo.toFixed(2)}`
}

function atualizarHistorico() {
    elListaHistorico.innerHTML = ''

    if (historico.length === 0) {
        const itemVazio = document.createElement('li')
        itemVazio.textContent = 'Nenhuma transação ainda.'
        itemVazio.className = 'historico-vazio'
        elListaHistorico.appendChild(itemVazio)
        return
    }

    const ultimasTransacoes = historico.slice(-5).reverse()

    for (const transacao of ultimasTransacoes) {
        const item = document.createElement('li')
        item.textContent = transacao
        elListaHistorico.appendChild(item)
    }
}

function atualizarBotaoLimparHistorico() {
    btnLimparHistorico.disabled = historico.length === 0
}


function exibirMensagem(texto, tipo){
    elMensagem.textContent = texto
    elMensagem.style.display = 'block'
    elMensagem.className = tipo ==='sucesso' ? 'msg-sucesso' : 'msg-erro'
}


function limparHistorico() {
    historico.length = 0
    atualizarHistorico()
    atualizarBotaoLimparHistorico()
    verResumo()
    exibirMensagem(`Histórico limpo com sucesso!` , 'sucesso')
}

function verSaldoAtual() {
    if (saldo > 5000) {
        elsaldo.style.color = 'green'
    } else if (saldo > 1000 && saldo < 5000) {
        elsaldo.style.color = 'yellow'
    } else {
        elsaldo.style.color = 'red'
    }
}       

verSaldoAtual()

setInterval(verSaldoAtual, 1000)

btnAtualizarTitular.addEventListener('click', function(){
    titular = campoTitular.value                                    // atualiza o titular
    atualizarTitular()
})

function atualizarTitular() {
    elTitular.textContent = titular                           // atualiza o titular na tela
}

atualizarTitular()              