    document.addEventListener("DOMContentLoaded", () => {
    carregarClientes();
});

async function carregarClientes() {
    
    try {

        const resposta = await fetch("clientes/carregarClientes", {
            method: "GET"
        });

        if (resposta.ok) {

            const resultado = await resposta.json();

            if( resultado.length == 0) {
                document.getElementById("corpoTabela").innerHTML = "<tr><td colspan='4' class='text-center'>Nao ha clientes cadastrados.</td></tr>";
                return;
            }

            resultado.forEach((valor) => {
               
                const tr = document.createElement("tr");
                tr.id = `linha_${valor.id}`;

                const tdID = document.createElement("td");
                tdID.appendChild(document.createTextNode(valor.id));
                tdID.id = "input_td_id";
                tr.appendChild(tdID);

                const tdTelefone = document.createElement("td");
                tdTelefone.appendChild(document.createTextNode(valor.telefone));
                tdTelefone.id = "input_td_telefone";
                tr.appendChild(tdTelefone);

                const tdNome = document.createElement("td");    
                tdNome.appendChild(document.createTextNode(valor.nome));
                tdNome.id = "input_td_nome";
                tr.appendChild(tdNome);

                const tdDataNascimento = document.createElement("td");
                tdDataNascimento.appendChild(document.createTextNode(converter_data_us_to_br(valor.dataNascimento)));
                tdDataNascimento.id = "input_td_dataNascimento";
                tr.appendChild(tdDataNascimento);

                const tdGenero = document.createElement("td");
                tdGenero.appendChild(document.createTextNode(valor.genero));
                tdGenero.id = "select_td_genero";
                tr.appendChild(tdGenero);

                const tdAutorizacaoImagem = document.createElement("td");
                tdAutorizacaoImagem.appendChild(document.createTextNode(valor.autorizacaoImagem));
                tdAutorizacaoImagem.id = "select_td_autorizacaoImagem";
                tr.appendChild(tdAutorizacaoImagem);

                const tdFichaCorporal = document.createElement("td");
                tdFichaCorporal.appendChild(document.createTextNode(valor.fichaCorporal));
                tdFichaCorporal.id = "select_td_fichaCorporal";
                tr.appendChild(tdFichaCorporal);

                const tdFichaFacial = document.createElement("td");
                tdFichaFacial.appendChild(document.createTextNode(valor.fichaFacial));
                tdFichaFacial.id = "select_td_fichaFacial";
                tr.appendChild(tdFichaFacial);

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
                    
                    '<span onclick="excluirCliente(' + valor.id + ')" class="text-danger botao_acao_tabela">' +
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
     
    const form = document.getElementById("form_cliente");
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);

    if( acao_modal == "Adicionar" ) {
        adicionarClientes(dados);
    }

    if( acao_modal == "Editar" ) {
        editarClientes(dados);
    }
    

    setTimeout(() => {        
        window.location.reload(true);
    }, 2000);


}

async function adicionarClientes(dados) {

    delete dados["id"]; // Removendo posiçao desnecessaria

    try {

        const resposta = await fetch("clientes/adicionarCliente", {
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

async function editarClientes(dados) {

    try {

        const resposta = await fetch("clientes/editarCliente", {
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

async function excluirCliente(idItem) {

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

            const resposta = await fetch("clientes/excluirCliente", {
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
