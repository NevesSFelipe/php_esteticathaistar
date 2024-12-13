<?php

    namespace App\model;

    use App\core\Database;
    use Exception;

    class ProcedimentosModel {

        public function carregarProcedimentos()
        {

            try {

                $db = new Database('procedimentos');

                return $db->buscar();
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

        public function adicionarProcedimento($dados): array
        {    
            
            try {

                $db = new Database('procedimentos');
                $retornoBD = $db->inserir($dados);

                $mensagemRetorno = ($retornoBD['status'] === true) ? "Procedimento inserido com sucesso." : "Nao foi possível inserir o procedimento";

                $retornoBD['message'] = $mensagemRetorno;

                return $retornoBD;
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

        public function editarProcedimento($dados): array
        {    
            
            try {

                $db = new Database('procedimentos');
                $retornoBD = $db->editar($dados);

                $mensagemRetorno = ($retornoBD['status'] === true) ? "Procedimento editado com sucesso." : "Nao foi possível editar o procedimento";

                $retornoBD['message'] = $mensagemRetorno;

                return $retornoBD;
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

        public function excluirProcedimento($dados): array
        {    
            
            try {

                $db = new Database('procedimentos');
                $retornoBD = $db->excluir($dados);

                $mensagemRetorno = ($retornoBD['status'] === true) ? "Procedimento removido com sucesso." : "Nao foi possível remover o procedimento";

                $retornoBD['message'] = $mensagemRetorno;

                return $retornoBD;
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

    }