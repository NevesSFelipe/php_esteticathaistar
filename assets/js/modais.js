document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    montarModal();
}

function montarModal() {

    const objBotoesModal = document.querySelectorAll('[data-botao_modal]');

    objBotoesModal.forEach(botao => {

        botao.addEventListener('click', event => {

            const elementoClicado = event.currentTarget;

            const acao = elementoClicado.getAttribute('data-acao');
            
            definirTituloModal(acao);
            formatarBotaoModal(acao);
            formatarCamposModal(acao);

        });

    });

}

function definirTituloModal(acao_modal) {

    const nome_pagina = document.getElementById("nome-pagina").textContent;

    document.getElementById("exampleModalLabel").textContent = `${acao_modal} ${nome_pagina}`;

}

function formatarBotaoModal(acao_modal) {

    let corBotao = "";
    let visibilidadeBotao = "";

    if(acao_modal == "Adicionar") {
        corBotao = "btn-success";
        visibilidadeBotao = 'd-flex';
    }

    if(acao_modal == "Editar") {
        corBotao = "btn-warning";
        visibilidadeBotao = 'd-flex';
    }

    if(acao_modal == "Visualizar") {
        corBotao = "btn-info";
        visibilidadeBotao = 'd-none';
    }

    const btnAcaoModal = document.getElementById("btnAcaoModal");

    btnAcaoModal.textContent = acao_modal;

    btnAcaoModal.className = "btn";
    btnAcaoModal.classList.add(corBotao);
    btnAcaoModal.classList.add(visibilidadeBotao);

}

function formatarCamposModal(acao_modal) {
    formataInput(acao_modal);
}

function formataInput(acao_modal) {

    const input = document.querySelectorAll("input");

    const statusDisabled = (acao_modal == "Visualizar");

    input.forEach((elemento) => {
        elemento.disabled = statusDisabled;
    })

}