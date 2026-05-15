// ============================================================
// BATALHA NAVAL - InovaWeb Games
// ============================================================
//
// O computador esconde 3 navios num tabuleiro 5x5.
// O jogador tenta afundar todos clicando nas celulas.
// O jogo termina quando todos os navios forem encontrados.
// ============================================================

const TAMANHO_TABULEIRO = 5;
const QUANTIDADE_NAVIOS = 3;

// ------------------------------------------------------------
// VARIAVEIS GLOBAIS DO JOGO
// ------------------------------------------------------------

let tabuleiro;
let naviosRestantes;
let tentativas;
let jogoAtivo;

// ------------------------------------------------------------
// REFERENCIAS AO DOM
// ------------------------------------------------------------

const elTabuleiro = document.querySelector('#tabuleiro');
const elMensagem = document.querySelector('#mensagem');
const elTentativas = document.querySelector('#tentativas');
const btnReiniciar = document.querySelector('#btn-reiniciar');

// ============================================================
// DESAFIO 1 - criarTabuleiro(tamanho)
// ============================================================

function criarTabuleiro(tamanho) {
  const novoTabuleiro = [];

  for (let i = 0; i < tamanho; i++) {
    const linha = [];

    for (let j = 0; j < tamanho; j++) {
      linha.push(0);
    }

    novoTabuleiro.push(linha);
  }

  return novoTabuleiro;
}

// ============================================================
// DESAFIO 2 - posicionarNavios(tabuleiro)
// ============================================================

function posicionarNavios(tabuleiroAtual) {
  tabuleiroAtual[0][1] = 1;
  tabuleiroAtual[2][3] = 1;
  tabuleiroAtual[4][0] = 1;
}

/*function posicionarNaviosAleatorio(tabuleiroAtual, quantidade) {
  let naviosPosicionados = 0;

  while (naviosPosicionados < quantidade) {
    const linha = Math.floor(Math.random() * TAMANHO_TABULEIRO);
    const coluna = Math.floor(Math.random() * TAMANHO_TABULEIRO);

    if (tabuleiroAtual[linha][coluna] === 0) {
      tabuleiroAtual[linha][coluna] = 1;
      naviosPosicionados++;
    }
  }
}*/ 

// ============================================================
// DESAFIO 3 - atirar(tabuleiro, linha, coluna)
// ============================================================

function atirar(tabuleiroAtual, linha, coluna) {
  const valorCelula = tabuleiroAtual[linha][coluna];

  if (valorCelula === 2 || valorCelula === 3) {
    return 'Posicao ja atingida!';
  }

  tentativas++;

  if (valorCelula === 0) {
    tabuleiroAtual[linha][coluna] = 3;
    return 'Agua!';
  }

  tabuleiroAtual[linha][coluna] = 2;
  naviosRestantes--;

  if (naviosRestantes > 0) {
    return 'Acerto!';
  }

  jogoAtivo = false;
  return 'Parabens! Voce afundou todos os navios!';
}

// ============================================================
// DESAFIO 4 e 5 - renderizarTabuleiro()
// ============================================================

function renderizarTabuleiro() {
  elTabuleiro.replaceChildren();

  for (let linha = 0; linha < tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {
      const celula = document.createElement('div');
      const valorCelula = tabuleiro[linha][coluna];

      if (valorCelula === 2) {
        celula.classList.add('acerto');
      } else if (valorCelula === 3) {
        celula.classList.add('erro');
      }

      celula.dataset.linha = linha;
      celula.dataset.coluna = coluna;

      celula.addEventListener('click', () => {
        if (!jogoAtivo) {
          return;
        }

        const l = Number(celula.dataset.linha);
        const c = Number(celula.dataset.coluna);
        const mensagem = atirar(tabuleiro, l, c);

        renderizarTabuleiro();
        atualizarMensagem(mensagem);
        elTentativas.textContent = `Tentativas: ${tentativas}`;
      });

      elTabuleiro.appendChild(celula);
    }
  }
}

function atualizarMensagem(texto) {
  elMensagem.textContent = texto;
  elMensagem.classList.remove('acerto', 'sucesso');

  if (texto === 'Acerto!') {
    elMensagem.classList.add('acerto');
  }

  if (texto.includes('Parabens')) {
    elMensagem.classList.add('sucesso');
  }
}

// ============================================================
// DESAFIO 6 - iniciarJogo()
// ============================================================

function iniciarJogo() {
  tabuleiro = criarTabuleiro(TAMANHO_TABULEIRO);
  //posicionarNaviosAleatorio(tabuleiro, QUANTIDADE_NAVIOS);
  posicionarNavios(tabuleiro);
  naviosRestantes = QUANTIDADE_NAVIOS;
  tentativas = 0;
  jogoAtivo = true;

  atualizarMensagem('Clique em uma celula para atirar.');
  elTentativas.textContent = 'Tentativas: 0';
  renderizarTabuleiro();
}

// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------

btnReiniciar.addEventListener('click', iniciarJogo);

// ------------------------------------------------------------
// INICIO DO JOGO
// ------------------------------------------------------------

iniciarJogo();
