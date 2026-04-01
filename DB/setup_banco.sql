CREATE DATABASE simulacaoSAEP 

CREATE TABLE usuarios (
	id_usuarios INT PRIMARY KEY,
	Nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL
);

CREATE TABLE tarefas (
	id_tarefas INT PRIMARY KEY,
	usuarios_id_usuarios INT NOT NULL,
	descricao_tarefa VARCHAR(250) NOT NULL,
	nome_setor VARCHAR(50) NOT NULL,
	prioridade INT NOT NULL,
	data_cadastro DATE NOT NULL,
	status_tarefa INT NOT NULL,
	
	FOREIGN KEY (usuarios_id_usuarios) REFERENCES usuarios(id_usuarios)
);
