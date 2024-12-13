<?php

    namespace App\controller;

    use App\core\Controller;
    use App\controller\Template\Template;
    use App\model\ProcedimentosModel;

    class ProcedimentosController extends Controller implements Template {

        public function index()
        {
            $this->carregarView('procedimentos');            
        }

        public function carregarProcedimentos()
        {
            $procedimentosModel = new ProcedimentosModel;
            echo json_encode($procedimentosModel->carregarProcedimentos());
        }

        public function adicionarProcedimento(): void 
        {    
            header('Content-Type: application/json');
            $dados = json_decode(file_get_contents('php://input'), true);

            $procedimentosModel = new ProcedimentosModel;
            echo json_encode($procedimentosModel->adicionarProcedimento($dados));
        }

        public function editarProcedimento(): void
        {
            header('Content-Type: application/json');
            $dados = json_decode(file_get_contents('php://input'), true);
            
            $procedimentosModel = new ProcedimentosModel;
            echo json_encode($procedimentosModel->editarProcedimento($dados));
        }

        public function excluirProcedimento(): void
        {
            header('Content-Type: application/json');
            $dados = json_decode(file_get_contents('php://input'), true);            
            $procedimentosModel = new ProcedimentosModel;
            echo json_encode($procedimentosModel->excluirProcedimento($dados));
        }

    }