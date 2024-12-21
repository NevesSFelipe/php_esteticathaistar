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

    const novoBotao = btnAcaoModal.cloneNode(true);
    btnAcaoModal.replaceWith(novoBotao);

    novoBotao.textContent = acao_modal;

    novoBotao.className = "btn";
    novoBotao.classList.add(corBotao);
    novoBotao.classList.add(visibilidadeBotao);

    novoBotao.addEventListener("click", () => processarAcaoModal(acao_modal));

}

function formatarCamposModal(acao_modal) {
    formataInput(acao_modal);
    formatarSelect(acao_modal);
}

function formataInput(acao_modal) {

    const statusDisabled = (acao_modal == "Visualizar");
    
    const input = document.querySelectorAll("input");

    input.forEach((elemento) => {
        
        elemento.disabled = statusDisabled;
        
    });

}

function formatarSelect(acao_modal) {

    const statusDisabled = (acao_modal == "Visualizar");
    
    const select = document.querySelectorAll("select");

    select.forEach((elemento) => {
        
        elemento.disabled = statusDisabled;
        
    });

}
    
function carregarDadosModal(linha) {
    
    limparCamposModalESC();

    const objTDs = linha.querySelectorAll('td');
    let objParametrosInputs = {};
    let objParametrosSelect = {};

    objTDs.forEach((td) => {
        
        let idElemento = td.id;
        let conteudoElemento = td.textContent;

        if(idElemento != "") {

            if( idElemento.indexOf("input_")  > -1) {
                objParametrosInputs[td.id] = conteudoElemento;
            }

            if( idElemento.indexOf("select_")  > -1) {
                objParametrosSelect[td.id] = conteudoElemento;
            }
        
        }
        
    });

    carregarDadosInputs(objParametrosInputs);
    carregarDadosSelect(objParametrosSelect);


}

function carregarDadosInputs(objParametrosInputs) {

    Object.entries(objParametrosInputs).forEach(([chave, valor]) => {

        let idInput = chave.replace("input_td_", "");
        
        const valorInput = (document.getElementById(idInput).type == "date") ? converter_data_br_to_us(valor) : valor;

        document.getElementById(idInput).value = valorInput;

    });

}

function carregarDadosSelect(objParametrosSelect) {

    Object.entries(objParametrosSelect).forEach(([chave, valor]) => {

        let idSelect = chave.replace("select_td_", "");

        let elementoSelect = document.getElementById(idSelect);

        Array.from(elementoSelect.options).forEach((option) => {
            if (option.value === valor) {
                option.selected = true;
            }
        });

    });

}

function limparCamposModal() {
    limparDadosInputs();
    limparDadosSelect();
}

function limparDadosInputs() {
 
    const input = document.querySelectorAll("input");

    input.forEach((elemento) => { elemento.value = ""; });

}

function limparDadosSelect() {
 
    const select = document.querySelectorAll("select");

    select.forEach((elemento) => { elemento.value = ""; });

}

function limparCamposModalESC() {
     
    document.addEventListener("keydown", (event) => {
    
        if (event.key === "Escape") {            
            limparDadosInputs();
            limparDadosSelect();
        }

    });

}