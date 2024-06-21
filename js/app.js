function alterarStatus(id){
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let capaJogo = jogoSelecionado.querySelector('.dashboard__item__img');
    let botaoJogo = jogoSelecionado.querySelector('.dashboard__item__button');

    if (capaJogo.classList.contains('dashboard__item__img--rented')) {
        capaJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return')
        botaoJogo.textContent = 'Alugar';
    } else {
        capaJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.textContent = 'Devolver';
    }
}