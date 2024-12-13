    document.addEventListener("DOMContentLoaded", () => {
    carregarProcedimentos();
});

async function carregarProcedimentos() {
    
    try {

        const resposta = await fetch("procedimentos/carregarProcedimentos", {
            method: "GET"
        });

        if (resposta.ok) {

            const resultado = await resposta.json();

            if( resultado.length == 0) {
                document.getElementById("corpoTabela").innerHTML = "<tr><td colspan='4' class='text-center'>Nao ha procedimentos cadastrados.</td></tr>";
                return;
            }

            resultado.forEach((valor) => {
               
                const tr = document.createElement("tr");
                tr.id = `linha_${valor.id}`;

                const tdID = document.createElement("td");
                tdID.appendChild(document.createTextNode(valor.id));
                tdID.id = "input_td_id";
                tr.appendChild(tdID);

                const tdNome = document.createElement("td");
                tdNome.appendChild(document.createTextNode(valor.nome));
                tdNome.id = "input_td_nome";
                tr.appendChild(tdNome);


                const tdPreco = document.createElement("td");
                tdPreco.appendChild(document.createTextNode(valor.preco));
                tdPreco.id = "input_td_preco";
                tr.appendChild(tdPreco);

                const tdAcoes = document.createElement("td");
                tdAcoes.innerHTML =
                
                    '<span class="text-primary botao_acao_tabela" data-bs-toggle="modal" data-bs-target="#exampleModal" data-botao_modal data-acao="Visualizar">' +
                        `<i onclick="carregarDadosModal(linha_${valor.id})" class="fa-solid fa-eye"></i>` +
                    '</span>' +
                    
                    '&nbsp;' +
                    
                    '<span class="text-warning botao_acao_tabela" data-bs-toggle="modal" data-bs-target="#exampleModal" data-botao_modal data-acao="Editar">' +
                        `<i onclick="carregarDadosModal(linha_${valor.id})" class="fa-solid fa-pen-to-square"></i>` +
                    '</span>' +
                    
                    '&nbsp;' +
                    
                    '<span onclick="excluirProcedimentos(' + valor.id + ')" class="text-danger botao_acao_tabela">' +
                        '<i class="fa-solid fa-trash"></i>' +
                    '</span>'
                ;
                
                tr.appendChild(tdAcoes);

                document.getElementById("corpoTabela").appendChild(tr);
            });

            montarModal();

        }


    } catch (error) {
        
        console.error("Erro na requisição:", error);
    }

}

async function processarAcaoModal(acao_modal) {
     
    const form = document.getElementById("form_processamento");
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);

    if( acao_modal == "Adicionar" ) {
        adicionarProcedimentos(dados);
    }

    if( acao_modal == "Editar" ) {
        editarProcedimentos(dados);
    }
    

    setTimeout(() => {        
        window.location.reload(true);
    }, 2000);


}

async function adicionarProcedimentos(dados) {

    delete dados["id"]; // Removendo posiçao desnecessaria

    try {

        const resposta = await fetch("procedimentos/adicionarProcedimento", {
            method: "POST",
            body: JSON.stringify(dados),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        if (resposta.ok) {
            const resultado = await resposta.json();

            if(resultado.status == true) {

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: resultado.message,
                    showConfirmButton: false,
                    timer: 2000
                });

            }

        }
    } catch (error) {
        
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Não foi possível inserir.",
            showConfirmButton: false,
            timer: 2000
        });

        console.error("Erro na requisição:", error);
    }

}

async function editarProcedimentos(dados) {

    try {

        const resposta = await fetch("procedimentos/editarProcedimento", {
            method: "PUT",
            body: JSON.stringify(dados),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        if (resposta.ok) {
            const resultado = await resposta.json();

            if(resultado.status == true) {

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: resultado.message,
                    showConfirmButton: false,
                    timer: 2000
                });

            }

        }
    } catch (error) {
        
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Não foi possível editar.",
            showConfirmButton: false,
            timer: 2000
        });

        console.error("Erro na requisição:", error);
    }

}

async function excluirProcedimentos(idItem) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success m-2",
            cancelButton: "btn btn-danger m-2",
        },
        buttonsStyling: false,
    });

    try {
    
        const result = await swalWithBootstrapButtons.fire({
            title: "Atenção!!",
            text: `Tem certeza que deseja excluir o item #${idItem}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            reverseButtons: true,
        });

        if (result.isConfirmed) {

            const dados = { id: idItem };

            const resposta = await fetch("procedimentos/excluirProcedimento", {
                method: "DELETE",
                body: JSON.stringify(dados),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (resposta.ok) {

                const resultado = await resposta.json();

                if (resultado.status === true) {

                    await swalWithBootstrapButtons.fire({
                        title: "Removido!",
                        text: `O item #${idItem} foi removido com sucesso.`,
                        icon: "success",
                    });

                    window.location.reload();

                } else {
                    throw new Error(resultado.message || "Erro ao remover o item.");
                }

            } else {
                throw new Error("Erro na resposta do servidor.");
            }
        }

    } catch (error) {

        Swal.fire({
            position: "top",
            icon: "error",
            title: "Não foi possível remover o item.",
            text: error.message,
            showConfirmButton: false,
            timer: 2000,
        });

        console.error("Erro na requisição:", error);
    }
}
