<?php

    namespace App\core;

    use PDO;
    use Exception;
    use PDOException;

    class Database {

        private PDO $pdo;
        private string $tabela;

        public function __construct(string $nomeTabela)
        {
            $this->tabela = $nomeTabela;
            $this->estabelecerConexaoMySQL();
        }

        private function estabelecerConexaoMySQL(): PDO
        {
            try {

                $this->pdo = new PDO("mysql:host=localhost;dbname=esteticathaistar", "root", "");
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $this->pdo;
    
            } catch (PDOException $e) {
                throw new Exception("Erro ao conectar ao banco de dados: " . $e->getMessage());
            }

        }

        public function inserir(array $dados): array
        {
            try {

                $stringColunas = implode(",", array_keys($dados));
                $placeholders  = implode(",", array_fill(0, count($dados), "?"));
     
                $sql = "INSERT INTO $this->tabela ($stringColunas) VALUES ($placeholders)";

                $stmt = $this->pdo->prepare($sql);

                $stmt->execute(array_values($dados));
    
                if ($stmt->rowCount() > 0) {
                
                    return [ 'status' => true ];
                
                } else {
                
                    return [ 'status' => false ];
                }
    
            } catch (PDOException $e) {
                throw new Exception("Erro ao inserir os dados: " . $e->getMessage());
            }

        }

        public function buscar(): array 
        {
            $sql = "SELECT * FROM $this->tabela ORDER BY nome ASC";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        public function editar(array $dados): array
        {
     
            try {

                $stringUpdate = "";

                $idWhere = $dados['id'];
                unset($dados['id']);

                foreach($dados as $key => $valor) {
                    $stringUpdate .= $key . " = ?,";
                }

                $stringUpdate = rtrim($stringUpdate, ",");
    
                $sql = "UPDATE $this->tabela SET $stringUpdate WHERE id = $idWhere";

                $stmt = $this->pdo->prepare($sql);

                $stmt->execute(array_values($dados));
    
                if ($stmt->rowCount() > 0) {
                
                    return [ 'status' => true ];
                
                } else {
                
                    return [ 'status' => false ];
                }
    
            } catch (PDOException $e) {
                throw new Exception("Erro ao inserir os dados: " . $e->getMessage());
            }
            
        }

        public function excluir(array $dados): array
        {
     
            try {

                $sql = "DELETE FROM $this->tabela WHERE id = ?";

                $stmt = $this->pdo->prepare($sql);

                $stmt->execute(array_values($dados));
    
                if ($stmt->rowCount() > 0) {
                
                    return [ 'status' => true ];
                
                } else {
                
                    return [ 'status' => false ];
                }
    
            } catch (PDOException $e) {
                throw new Exception("Erro ao inserir os dados: " . $e->getMessage());
            }
            
        }        

    }