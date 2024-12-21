<?php

    namespace App\controller;

    use App\core\Controller;
    use App\controller\Template\Template;
    use App\model\ClientesModel;

    class ClientesController extends Controller implements Template {

        public function index()
        {
            $this->carregarView('clientes');            
        }

        public function carregarClientes()
        {
            $clientesModel = new ClientesModel;
            echo json_encode($clientesModel->carregarClientes());
        }

        public function adicionarCliente(): void 
        {    
            header('Content-Type: application/json');
            $dados = json_decode(file_get_contents('php://input'), true);

            $clienteModel = new ClientesModel;
            echo json_encode($clienteModel->adicionarCliente($dados));
        }

        public function editarCliente(): void
        {
            header('Content-Type: application/json');
            $dados = json_decode(file_get_contents('php://input'), true);
            
            $clienteModel = new ClientesModel;
            echo json_encode($clienteModel->editarCliente($dados));
        }

        public function excluirCliente(): void
        {
            header('Content-Type: application/json');
            $dados = json_decode(file_get_contents('php://input'), true);       
            $clienteModel = new ClientesModel;
            echo json_encode($clienteModel->excluirCliente($dados));
        }

    }