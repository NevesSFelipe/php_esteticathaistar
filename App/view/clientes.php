<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thais Alves | @esteticathaistar</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="<?= URL_BASE ?>/../../assets/css/style.css?v=<?= time(); ?>">
        <link rel="stylesheet" href="<?= URL_BASE ?>/../../assets/css/modal.css?v=<?= time(); ?>">
    </head>

    <body>

        <div class="container mt-4">

            <div class="row">

                <div class="col-sm-6">
                    <h2 class="text-dark" id="nome-pagina">Clientes</h2>
                </div>

                <div class="col-sm-6">

                    <div class="float-end">
                            
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-botao_modal data-acao="Adicionar">
                            <i class="fa-solid fa-plus"></i>
                        </button>
    
                        <a href="<?= URL_BASE ?>/../" class="btn btn-danger">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                        </a>

                    </div>

                
                </div>

            </div>


            <table class="table table-striped table-hover table-bordered table-light text-center mt-3">
                
                <thead class="table-warning">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data Nascimento</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Autorizaçao Imagem</th>
                        <th scope="col">Ficha Corporal</th>
                        <th scope="col">Ficha Facial</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                
                <tbody id="corpoTabela"></tbody>
            </table>
        </div>

        <?php require_once 'modais/modalClientes.php' ?>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://kit.fontawesome.com/910e6444fa.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script src="<?= URL_BASE ?>/../../assets/js/main.js?v=<?= time(); ?>"></script>
        <script src="<?= URL_BASE ?>/../../assets/js/clientes.js?v=<?= time(); ?>"></script>
        <script src="<?= URL_BASE ?>/../../assets/js/modais.js?v=<?= time(); ?>"></script>
        <script src="<?= URL_BASE ?>/../../assets/js/helpers.js?v=<?= time(); ?>"></script>

    </body>
</html>