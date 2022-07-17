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

