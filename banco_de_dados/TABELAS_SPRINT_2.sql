create database TechApulus_sprint2;

use TechApulus_sprint2;

create table Empresa(
idEmpresa int primary key auto_increment,
empresa varchar(45) not null,
email varchar(45) not null unique,
senha varchar(45) not null,
cnpj char(14) not null unique,
chave_acesso int not null unique
) auto_increment = 100;


    select * from Empresa;

create table Fazenda(
idFazenda int primary key auto_increment,
nome varchar(45),
identificador int,
fkEmpresa int,
constraint fkEmpresaFaz foreign key (fkEmpresa) references Empresa(idEmpresa)) auto_increment = 300;
    
    select * from Fazenda;


create table Funcionario(
idFuncionario int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) not null unique,
senha varchar(45) not null,
cpf char(14) not null unique,
fkEmpresaFuncionario int,
constraint fkEmpresaFuncionario foreign key (fkEmpresaFuncionario) references Empresa(idEmpresa)) auto_increment = 100;


    select * from Funcionario;


create table Endereco(
idEndereco int primary key auto_increment,
cep char(8),
logradouro varchar(45),
numero varchar(7),
bairro varchar(45),
cidade varchar(45),
estado varchar(15),
fkEnderecoEmpresa int,
fkEnderocoFazenda int,
constraint fkEnderecoEmpresa foreign key (fkEnderecoEmpresa) references Empresa(idEmpresa),
constraint fkEnderocoFazenda foreign key (fkEnderocoFazenda) references Fazenda(idFazenda)) auto_increment = 100;


    select * from Endereço;


create table Contato(
idContato int primary key auto_increment,
telefonePrincipal char(11) not null,
telefoneSecundario char(11),
emailPrincipal varchar(45) not null,
emailSecundario varchar(45),
fkContatoEmpresa int,
constraint fkContatoEmpresa foreign key (fkContatoEmpresa) references Empresa(idEmpresa)) auto_increment = 100;


    select * from Contato;



-------------------- FEITO ATÉ AQUI ------------------



create table Armazém(
idArmazem int primary key auto_increment,
area double,
fkFazenda int,
constraint fkFaz foreign key (fkFazenda) references Fazenda(idFazendas)) auto_increment = 400;

insert into Armazém values
	(null, '126', 300),
    (null, '147', 300),
    (null, '152', 301),
    (null, '122', 302),
    (null, '142', 302),
    (null, '120', 303),
    (null, '140', 304),
    (null, '130', 304),
    (null, '128', 305);
    
    select * from Armazém;

create table Relatório(
idPerda int primary key auto_increment,
perdaGraos double,
dataInicio date,
dataFim date,
fkArmazemRel int,
constraint fkArmRel foreign key (fkArmazemRel) references Armazém(idArmazem)) auto_increment = 500;

insert into Relatório values
	(null, '09', '2023-04-20', '2023-09-20', 400),
    (null, '07', '2023-01-08', '2023-10-21', 401),
    (null, '08', '2023-02-17', '2023-08-17', 402),
    (null, '09', '2023-05-30', '2023-10-30', 403),
    (null, '08', '2023-01-29', '2023-10-28', 404),
    (null, '10', '2023-03-10', '2023-09-10', 405),
    (null, '07', '2023-04-15', '2023-08-30', 406),
    (null, '10', '2023-02-21', '2023-10-20', 407),
    (null, '11', '2023-01-10', '2023-09-12', 408);
    
    select * from Relatório;

create table Sensores(
idSensores int primary key auto_increment,
status_sensores varchar(45),
tipo varchar(45),
fkArmazem int,
constraint fkArm foreign key(fkArmazem) references Armazém(idArmazem)) auto_increment = 600;

select * from Armazém;

insert into Sensores values
	(null, 'Ativado', 'LM35', 401),
    (null, 'Ativado', 'DHT11', 401),
    (null, 'Em Manutenção', 'LM35', 402),
    (null, 'Ativado', 'DHT11', 402),
    (null, 'Desativado', 'LM35', 403),
    (null, 'Ativado', 'DHT11', 403),
    (null, 'Ativado', 'LM35', 404),
    (null, 'Ativado', 'DHT11', 404),
    (null, 'Em Manutenção', 'LM35', 405),
    (null, 'Ativado', 'DHT11', 405),
    (null, 'Ativado', 'LM35', 406),
    (null, 'Ativado', 'DHT11', 406),
    (null, 'Ativado', 'LM35', 407),
    (null, 'Ativado', 'DHT11', 407),
    (null, 'Desativado', 'LM35', 408),
    (null, 'Ativado', 'DHT11', 408);
    
select * from Sensores;

create table Registros(
idRegistros int primary key auto_increment,
dataHora datetime,
valor double,
fkSensor int,
constraint fkSens foreign key (fkSensor) references Sensores(idSensores)) auto_increment = 700;

insert into Registros values
	(null, '2023-10-01 12:41:03', '21', 600),
    (null, '2023-10-01 12:41:03', '60', 601),
    (null, '2023-09-12 10:21:34', null, 602),
    (null, '2023-09-12 10:21:34', '59', 603),
    (null, '2023-07-29 16:10:47', null, 604),
    (null, '2023-07-29 16:10:47', '59', 605),
    (null, '2023-03-04 13:24:09', '23', 606),
    (null, '2023-03-04 13:24:09', '60', 607),
    (null, '2023-08-23 15:01-37', null, 608),
    (null, '2023-08-23 15:01:37', '58', 609),
    (null, '2023-05-02 11:09:21', '24', 610),
    (null, '2023-05-02 11:09:21', '60', 611),
    (null, '2023-10-20 17:55:43', '19', 612),
    (null, '2023-10-20 17:55:43', '58', 613),
    (null, '2023-03-27 09:10:59', null, 614),
    (null, '2023-03-27 09:10:59', '58', 615);
        
select * from Contato;
select * from Usuário;
select * from Endereço;
select * from Fazenda;
select * from Armazém;
select * from Relatório;
select * from Sensores;
select * from Registros;

select u.empresa as NomeEmpresa, u.email, u.cnpj, u.qtdFazendas, 
c.telefonePrincipal, c.telefoneSecundario, c.emailPrincipal, c.emailSecundario
	from Usuário as u
		join Contato as c
			on u.idUsuario = c.fkUsuario;
            
select f.nome as NomeFazenda, f.qtdArmazem, 
u.empresa as NomeEmpresa, u.email, u.cnpj, u.qtdFazendas
	from Fazenda as f
		join Usuário as u
			on f.fkUsuario = u.idUsuario;
            
select e.cep, e.logradouro, e.numero, e.bairro, e.cidade, e.estado,
u.empresa as NomeEmpresa
	from Endereço as e
		join Usuário as u
			on e.idEndereco = u.fkEndereco;
            
select f.nome as NomeFazenda,
e.cep as CEP, e.logradouro, e.numero as Número, e.bairro, e.cidade, e.estado
	from Fazenda as f
		join Endereço as e
			on f.fkEndFazenda = e.idEndereco;
            
select a.idArmazem, a.area as 'ÁreaArmazém(m²)', a.fkFazenda, 
f.nome as NomeFazenda
	from Armazém as a
		join Fazenda as f
			on a.fkFazenda = f.idFazendas;
            
select r.perdaGraos as 'PerdaGraos(%)', r.dataInicio, r.dataFim,
a.area as ÁreaArmazém, a.idArmazem
	from Relatório as r
		join Armazém as a
			on r.fkArmazemRel = a.idArmazem;
            
select a.idArmazem, a.area as 'ÁreaArmazém(m²)',
s.status_sensores, s.tipo
	from Armazém as a
		join Sensores as s
			on a.idArmazem = s.fkArmazem;
            
select s.fkArmazem, s.status_sensores, s.tipo, 
r.dataHora, r.valor
	from Sensores as s
		join Registros as r
			on s.idSensores = r.fkSensor;
            
select u.empresa as NomeEmpresa, u.cnpj, u.qtdFazendas,
c.telefonePrincipal, c.emailPrincipal,
f.nome as NomeFazenda, f.qtdArmazem
	from Usuário as u
		join Contato as c
			on u.idUsuario = c.fkUsuario
				join Fazenda as f
					on u.idUsuario = f.fkUsuario;
                    
select e.cep, e.logradouro, e.numero, e.estado,
f.nome as NomeFazenda, f.qtdArmazem,
a.area as 'ÁreaArmazém(m²)'
	from Endereço as e
		join Fazenda as f
			on e.idEndereco = f.fkEndFazenda
				join Armazém as a
					on f.idFazendas = a.fkFazenda;
                    
select a.area as 'ÁreaArmazém(m²)', 
r.perdaGraos as 'PerdaGraos(%)', r.dataInicio, r.dataFim,
s.status_sensores, s.tipo
	from Armazém as a
		join Relatório as r
			on a.idArmazem = r.fkArmazemRel
				join Sensores as s
					on a.idArmazem = s.fkArmazem;
                    
