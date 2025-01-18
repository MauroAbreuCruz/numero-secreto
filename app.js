let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroAleatorio);

//COLOCAR O TEXTO NA H1
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//colocar texto no paragrafo
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//função para mostrat texto conforme parametro, h1, p, etc... substituindo o código anterior comentado...
function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

exibirMensagemInicial();

//função verificar chute
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        mostrarTextoNaTela('h1', 'Acertou! ' + chute);
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto '${chute}' com ${tentativas} ${palavraTentativas}!`;
        
        mostrarTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limparCampo();
    } else {
        if (chute > numeroAleatorio) {
            mostrarTextoNaTela('p', 'Número secreto é menor que ' + chute);
        } else {
            mostrarTextoNaTela('p', 'Número secreto é maior que ' + chute);
        }
        tentativas++;
        limparCampo();
    }
}

//funcão para gerar número aleatório...
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 50 + 1)
}

/*
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
*/


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(numeroAleatorio);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {

    mostrarTextoNaTela('h1', 'Jogo do número secreto');
    mostrarTextoNaTela('p', 'Escolha um número entre 1 e 50');
}