
/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// - passo 1 - dar um jeito de pegar o elemento html dos botões
const carrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.image');
const infos = document.querySelectorAll('.infos')

// - passo 2 - Indentificar o click do usuário no botão
carrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        EsconderImagemAnterior();

        mostrarImagemDeFundo(indice);

        EsconderInfosDragãoAnterior();

        MostrarInfosDragaoSelecionado(indice);

    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selected');
}

function MostrarInfosDragaoSelecionado(indice) {
    infos[indice].classList.add('active');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('active');
}

function EsconderInfosDragãoAnterior() {
    const infosAtivas = document.querySelector('.infos.active');
    infosAtivas.classList.remove('active');
}

function EsconderImagemAnterior() {
    const imagemAtiva = document.querySelector('.active');
    imagemAtiva.classList.remove('active');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selected');
    botaoSelecionado.classList.remove('selected')
}