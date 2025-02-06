let numeroMaximo = 100;
let mensagemNumeroSecreto = `Choose a number from 1 to ${numeroMaximo}`;
let listaDeNumerosSorteados = [];
function gerarNumeroSecreto() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}
let numeroSecreto = gerarNumeroSecreto();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Secret Number');
    exibirTextoNaTela('p', mensagemNumeroSecreto);
}
exibirMensagemInicial();

let numeroDeTentativas = 1;
function verificarTentativa() {
    let tentativa = document.querySelector('input').value;

    if(tentativa == numeroSecreto) {
        let palavraTentativa = numeroDeTentativas == 1 ? 'try' : 'tries';
        let mensagemAcerto = `Oh yeah! you got it at ${numeroDeTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Congratulations!!'); 
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(tentativa > numeroSecreto) {
            exibirTextoNaTela('p', 'The secret number is smaller');
        } else {
            exibirTextoNaTela('p', 'The secret number is bigger');
        }
        numeroDeTentativas++;
        limparCampo();
    }
}

function limparCampo() {
    tentativa = document.querySelector('input');
    tentativa.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    numeroDeTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}