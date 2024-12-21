<?php

    namespace App\model;

    use App\core\Database;
    use Exception;

    class ClientesModel {

        public function carregarClientes()
        {

            try {

                $db = new Database('clientes');

                return $db->buscar();
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

        public function adicionarCliente($dados): array
        {    
            
            try {

                $db = new Database('clientes');
                $retornoBD = $db->inserir($dados);

                $mensagemRetorno = ($retornoBD['status'] === true) ? "Cliente inserido com sucesso." : "Nao foi possível inserir o cliente";

                $retornoBD['message'] = $mensagemRetorno;

                return $retornoBD;
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

        public function editarCliente($dados): array
        {    
            
            try {

                $db = new Database('clientes');
                $retornoBD = $db->editar($dados);

                $mensagemRetorno = ($retornoBD['status'] === true) ? "Cliente editado com sucesso." : "Nao foi possível editar o cliente";

                $retornoBD['message'] = $mensagemRetorno;

                return $retornoBD;
            
            } catch (Exception $e) {

                return [
                    'status' => false,
                    'message' => $e->getMessage()
                ];
            }

        }

        public function excluirCliente($dados): array
        {    
            
            try {

                $db = new Database('clientes');
                $retornoBD = $db->excluir($dados);

                $mensagemRetorno = ($retornoBD['status'] === true) ? "Cliente removido com sucesso." : "Nao foi possível remover o cliente";

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