create database TechApulus;

use TechApulus;

create table usuario (
idUsuario int primary key auto_increment not null,
empresa varchar(45) not null,
email varchar(45) not null unique, 
senha varchar(45) not null,
cnpj char(14) unique,
qtdFazenda int not null
); 

insert into usuario values 
(null, 'Três corações', 'trescoracoes@gmail.com', '#Trescoracoes123', '73648593986254', 2),
(null, 'Melitta', 'melitta@gmail.com', '#Melitta123', '72837466827365', 2);

select * from usuario;

CREATE TABLE contato(
	idContato INT  PRIMARY KEY AUTO_INCREMENT not null,
    telefone1 CHAR(11) NOT NULL UNIQUE,
    telefone2 CHAR(11) UNIQUE,
    email1 VARCHAR(45) NOT NULL UNIQUE,
    email2 VARCHAR(45) UNIQUE,
    fkUsuario INT,
    CONSTRAINT fkUser FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
)AUTO_INCREMENT = 100;

insert into contato values
(null, '11928374467', '11983746689', 'trescoracoes@outlook.com', 'cafecoracoes@outlook.com', 1),
(null, '11982736489', '11983748840', 'melitta@outlook.com', 'cafemelitta@outlook.com', 2);

select * from contato;

CREATE TABLE Endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT not null,
    CEP CHAR(8) not null,
    rua VARCHAR(45) not null,
    numero INT not null,
    bairro VARCHAR(45) not null,
    cidade VARCHAR(45) not null,
    estado CHAR(2) not null,
    fkUsuarioEnd INT not null,
    CONSTRAINT fkUserEnd FOREIGN KEY (fkUsuarioEnd)
		REFERENCES usuario(idUsuario)
)AUTO_INCREMENT = 1000;

insert into endereco values
(null, '06386675', 'Rua Coelho Ferreira', '7', 'Vila Cretti', 'São Paulo', 'SP', 1),
(null, '02367075', 'Avenida Coronel Miguel', '7555', 'Tremembé', 'São Paulo', 'SP', 1),
(null, '06827365', 'Avenida Brigadeiro', '289', 'Sé', 'São Paulo', 'SP', 2),
(null, '06837483', 'Rua Maria Antonia', '10', 'Jardim Apurá', 'São Paulo', 'SP', 2);

select * from endereco;

CREATE TABLE Fazenda(
	idFazenda INT PRIMARY KEY AUTO_INCREMENT not null,
    qtdArmazem INT not null,
    fkEndereco INT not null,
    CONSTRAINT fkEndFazenda FOREIGN KEY (fkEndereco)
		REFERENCES Endereco(idEndereco)
)AUTO_INCREMENT = 2000;

INSERT INTO Fazenda VALUES
(null, 2, 1000),
(null, 2, 1001),
(null, 1, 1002),
(null, 1, 1003);

select * from fazenda;

CREATE TABLE armazem(
	idArmazem INT PRIMARY KEY AUTO_INCREMENT not null,
    tamanho VARCHAR(45) not null,
    fkFazenda INT not null,
    CONSTRAINT fkFazenda FOREIGN KEY (fkFazenda)
		REFERENCES Fazenda(idFazenda)
)AUTO_INCREMENT = 3000;

INSERT INTO Armazem VALUES
(null, '148m²', 2000),
(null, '130m²', 2000),
(null, '146m²', 2001),
(null, '123m²', 2001),
(null, '122m²', 2002),
(null, '132m²', 2003);

select * from armazem;

CREATE TABLE perda(
	idPerda INT PRIMARY KEY AUTO_INCREMENT,
    sacas DOUBLE,
    fkArmazem INT,
    CONSTRAINT fkArmazem FOREIGN KEY (fkArmazem)
		REFERENCES armazem(idArmazem)
)AUTO_INCREMENT = 4000;

insert into perda values
(null, '2880000', 3000),
(null, '7680000', 3001),
(null, '1800000', 3002),
(null, '3600000', 3003),
(null, '960000', 3004),
(null, '1320000', 3005);

select * from perda;

CREATE TABLE sensores(
	idSensores INT PRIMARY KEY AUTO_INCREMENT not null,
    status_sensor VARCHAR(45),
    tipo VARCHAR(45),
    fkArmazem INT,
    CONSTRAINT fkArmazemSensor FOREIGN KEY (fkArmazem)
		REFERENCES armazem(idArmazem)
)AUTO_INCREMENT = 5000;

insert into sensores values
(null, 'ativado', 'lm35', 3000),
(null, 'desativado', 'dht11', 3000),
(null, 'ativado', 'lm35', 3001),
(null, 'ativado', 'dht11', 3001),
(null, 'ativado', 'lm35', 3002),
(null, 'desativado', 'dht11', 3002),
(null, 'ativado', 'lm35', 3003),
(null, 'ativado', 'dht11', 3003),
(null, 'ativado', 'lm35', 3004),
(null, 'desativado', 'dht11', 3004),
(null, 'ativado', 'lm35', 3005),
(null, 'desativado', 'dht11', 3005);	

select * from sensores;

CREATE TABLE registros(
	idRegistros INT PRIMARY KEY AUTO_INCREMENT,
    dataHora DATETIME,
    temperatura VARCHAR(45),
    umidade VARCHAR(45),
    fkSensor INT,
    CONSTRAINT fkSensor FOREIGN KEY (fkSensor) 
		REFERENCES Sensores(idSensores)
)AUTO_INCREMENT = 6000;

insert into registros values 
(null, '2023-02-04 16:05:00', null, '55', 5000),
(null, '2023-02-04 16:05:00', '23', null, 5000),
(null, '2023-05-04 17:10:00', null, '60', 5001),
(null, '2023-05-04 17:10:00', '20', null, 5001),
(null, '2023-04-05 09:10:00', null, '50', 5002),
(null, '2023-04-05 09:10:00', '29', null, 5002), 
(null, '2023-05-06 10:06:00', null, '60', 5003),
(null, '2023-05-06 10:06:00', '22', null, 5003),
(null, '2023-05-08 05:40:00', null, '45', 5004),
(null, '2023-05-08 05:40:00', '28', null, 5004),
(null, '2023-10-20 09:40:00', null, '50', 5005),
(null, '2023-10-20 09:40:00', '30', null, 5005),
(null, '2023-04-03 14:04:09', null, '66', 5006),
(null, '2023-04-03 14:04:09', '22', null, 5006),
(null, '2023-05-10 05:10:00', null, '55', 5007),
(null, '2023-05-10 05:10:00', '19', null, 5007),
(null, '2023-03-24 12:34:00', null, '57', 5008),
(null, '2023-03-24 12:34:00', '23', null, 5008),
(null, '2023-09-17 11:54:00', null, '59', 5009),
(null, '2023-09-17 11:54:00', '26', null, 5009),
(null, '2023-11-04 07:28:00', null, '60', 5010),
(null, '2023-11-04 07:28:00', '18', null, 5010),
(null, '2023-07-29 15:31:00', null, '58', 5011),
(null, '2023-07-29 15:31:00', '27', null, 5011);

select * from registros;

select * from contato join usuario 
	on fkUsuario = idUsuario;
    
select * from endereco join usuario 
	on fkUsuarioEnd = idUsuario;
    
select u.empresa as NomeEmpresa, c.email1 as EmailPrincipal from usuario as u
	join contato as c
		on u.idUsuario = c.fkUsuario;
        
select * from endereco join fazenda
	on fkEndereco = idEndereco;
    
    select * from sensores;
    select * from fazenda;
    
select f.qtdArmazem, a.tamanho as TamanhoArmazem, s.status_sensor, s.tipo from fazenda as f join armazem as a
	on a.fkFazenda = f.idFazenda
		join sensores as s on 
			s.fkArmazem = a.idArmazem;
            
select a.tamanho as TamanhoArmazem, p.sacas as PerdaSacas from armazem as a
	join perda as p
		on a.idArmazem = p.fkArmazem;
        
select * from sensores join registros 
	on fkSensor = idSensores;
    
select a.tamanho as TamanhoArmazem, s.status_sensor, s.tipo as TipoSensor, r.datahora, r.temperatura, r.umidade
	from armazem as a 
		join sensores as s
			on a.idArmazem = s.fkArmazem
				join registros as r
					on s.idSensores = r.fkSensor;