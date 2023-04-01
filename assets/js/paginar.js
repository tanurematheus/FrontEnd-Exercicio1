function paginar(Id) {
    var elementoAtivo = document.querySelector('.active');
    elementoAtivo.classList.remove('active');

    var divSelecionada = document.getElementById(Id);
    divSelecionada.classList.add('active');
}
