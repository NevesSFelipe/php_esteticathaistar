<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thais Alves | @esteticathaistar</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="<?= URL_BASE ?>/../../assets/css/style.css?v=<?= time(); ?>">
    </head>

    <body>

        <div class="container mt-4">

            <div class="row">

                <div class="col-sm-6">
                    <h2 class="text-dark" id="nome-pagina">Procedimentos</h2>
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
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Design de Sobrancelha</td>
                        <td>R$ <span>25.00</span></td>
                        <td>

                            <span class="text-primary botao_acao_tabela" data-bs-toggle="modal" data-bs-target="#exampleModal" data-botao_modal data-acao="Visualizar">
                                <i class="fa-solid fa-eye"></i>
                            </span>

                            &nbsp;

                            <span class="text-warning botao_acao_tabela" data-bs-toggle="modal" data-bs-target="#exampleModal" data-botao_modal data-acao="Editar">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </span>

                            &nbsp;

                            <span onclick="excluirItem(1)" class="text-danger botao_acao_tabela">
                                <i class="fa-solid fa-trash"></i>
                            </span>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <?php require_once 'modais/modalProcedimentos.php' ?>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://kit.fontawesome.com/910e6444fa.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script src="<?= URL_BASE ?>/../../assets/js/main.js?v=<?= time(); ?>"></script>
        <script src="<?= URL_BASE ?>/../../assets/js/modais.js?v=<?= time(); ?>"></script>

    </body>
</html>