
const botoes = document.querySelectorAll('.botao');
const images = document.querySelectorAll('.image');
const infos = document.querySelectorAll('.infos');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desmarcarBotão();

        marcarBotaoClicado(botao);

        esconderImagemAtiva();

        mostrarImagemCorrespondenteAoBotao(indice);

        esconderInfosAtivas();

        mostrarInfosCorrespondenteAoBotao(indice);
    })
})

function mostrarInfosCorrespondenteAoBotao(indice) {
    infos[indice].classList.add('active');
}

function esconderInfosAtivas() {
    const infoActive = document.querySelector('.infos.active');
    infoActive.classList.remove('active');
}

function mostrarImagemCorrespondenteAoBotao(indice) {
    images[indice].classList.add('active');
}

function esconderImagemAtiva() {
    const imageActive = document.querySelector('.image.active');
    imageActive.classList.remove('active');
}

function marcarBotaoClicado(botao) {
    botao.classList.add('selected');
}

function desmarcarBotão() {
    const buttonSelected = document.querySelector('.selected');
    buttonSelected.classList.remove('selected');
}
