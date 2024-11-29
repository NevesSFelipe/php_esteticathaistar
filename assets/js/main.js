document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {

}

function excluirItem(idItem) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success m-2",
            cancelButton: "btn btn-danger m-2",
        },
        buttonsStyling: false,
    });
    
    swalWithBootstrapButtons
    
        .fire({
            title: "Atenção!!",
            text: `Tem certeza que deseja excluir o item #${idItem}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            reverseButtons: true,
        })
        
        .then((result) => {
        
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Removido!",
                    text: `O item #${idItem} foi removido com sucesso.`,
                    icon: "success",
                });
        
            } 
        });

}