-- Active: 1658325348046@@35.226.146.116@3306@guimaraes-4211089-raul-rita
USE `guimaraes-4211089-raul-rita`;

CREATE TABLE LS_Turma(
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	modulo ENUM('0','1','2','3','4','5','6') DEFAULT '0'
);

CREATE TABLE LS_Estudante(
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE, 
	data_nasc VARCHAR(255) NOT NULL,
	turma_id VARCHAR(255), FOREIGN KEY (turma_id) REFERENCES LS_Turma(id)
);

CREATE TABLE LS_Hobby (
	id VARCHAR(255) PRIMARY KEY,
	nome_hobby ENUM("assistir séries de tv", "jogar videogames", "sair com os amigos", "praticar esportes") NOT NULL
);



CREATE TABLE LS_Hobby_Estudante(
	id VARCHAR(255) PRIMARY KEY,
	id_estudante VARCHAR(255), FOREIGN KEY(id_estudante) REFERENCES LS_Estudante(id),
	id_hobby VARCHAR(255), FOREIGN KEY(id_hobby) REFERENCES LS_Hobby(id)
);
SELECT * FROM `LS_Hobby_Estudante`;

CREATE TABLE LS_Docente(
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE, 
	data_nasc VARCHAR(255) NOT NULL,
	turma_id VARCHAR(255), FOREIGN KEY (turma_id) REFERENCES LS_Turma(id)
);

SELECT * FROM `LS_Docente_Especialidade`;

CREATE TABLE LS_Especialidade (
	id VARCHAR(255) PRIMARY KEY,
	nome_especialidade ENUM("JS", "CSS", "React", "Typescript", "POO") NOT NULL
);

ALTER TABLE `LS_Especialidade`
MODIFY COLUMN nome_especialidade VARCHAR(255) NOT NULL;
SELECT * FROM `LS_Especialidade`;

CREATE TABLE LS_Docente_Especialidade (
	id VARCHAR(255) PRIMARY KEY,
	id_docente VARCHAR(255), FOREIGN KEY(id_docente) REFERENCES LS_Docente(id),
	id_especialidade VARCHAR(255), FOREIGN KEY(id_especialidade) REFERENCES LS_Especialidade(id)
);

ALTER TABLE `LS_Turma`
MODIFY COLUMN modulo VARCHAR(255) NOT NULL DEFAULT 0;

SELECT * FROM `LS_Turma`;

SELECT * FROM LS_Turma INNER JOIN `LS_Estudante` ON LS_Turma.id = LS_Estudante.turma_id;

INSERT INTO `LS_Especialidade`(id,nome_especialidade) VALUES ("1", "react");
INSERT INTO `LS_Especialidade`(id,nome_especialidade) VALUES ("2", "js");
INSERT INTO `LS_Especialidade`(id,nome_especialidade) VALUES ("3", "css");
INSERT INTO `LS_Especialidade`(id,nome_especialidade) VALUES ("4", "typescript");
INSERT INTO `LS_Especialidade`(id,nome_especialidade) VALUES ("5", "poo");