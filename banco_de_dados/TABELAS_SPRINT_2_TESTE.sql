create database TechApulus_sprint2_teste;

use TechApulus_sprint2_teste;

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


    select * from Endereco;


create table Contato(
idContato int primary key auto_increment,
telefonePrincipal char(11) not null,
telefoneSecundario char(11),
emailPrincipal varchar(45) not null,
emailSecundario varchar(45),
fkContatoEmpresa int,
constraint fkContatoEmpresa foreign key (fkContatoEmpresa) references Empresa(idEmpresa)) auto_increment = 100;


    select * from Contato;


create table Armazem(
idArmazem int primary key auto_increment,
nome varchar(45),
area double,
fkFazenda int,
constraint fkFaz foreign key (fkFazenda) references Fazenda(idFazenda)) auto_increment = 100;
    select * from Armazem;

-------------------- FEITO ATÉ AQUI ------------------

create table Relatório(
idPerda int primary key auto_increment,
perdaGraos double,
dataInicio date,
dataFim date,
fkArmazemRel int,
constraint fkArmRel foreign key (fkArmazemRel) references Armazem(idArmazem)) auto_increment = 500;

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

create table sensores(
    idSensores int primary key auto_increment,
    lm35_temperatura double,
    dht11_umidade double,
    fkArmazem int,
constraint fkArm foreign key(fkArmazem) references Armazem(idArmazem)
)auto_increment = 600;

select * from sensores;
select * from empresa;
insert into sensores values
	(null, '20.0', '60', 100),
    (null, '22.5', '60', 100),
    (null, '24', '58', 100),
    (null, '24.5', '58', 100),
    (null, '24.8', '59', 100),
    (null, '25.0', '60', 100),
    (null, '25.2', '61', '100'),
    (null, '26.0', '61', 100);
    
select idSensores,
        lm35_temperatura as temperatura, 
        dht11_umidade as umidade,
                        fkArmazem 
                        from sensores where fkArmazem = 100 
                    order by idSensores;
                    
select lm35_temperatura as temperatura, dht11_umidade as umidade, fkArmazem
	from sensores
		where fkArmazem = 100;
        
select * from sensores join Armazem on idArmazem = fkArmazem where fkArmazem = 100; 
                    
-- create table Sensores(
-- idSensores int primary key auto_increment,
-- status_sensores varchar(45),
-- tipo varchar(45),
-- fkArmazem int,
-- constraint fkArm foreign key(fkArmazem) references Armazem(idArmazem)) auto_increment = 600;

select * from Armazem;

select * from Sensores;

insert into Sensores values
(null, 23, 60, 100),
    (null, 24, 58, 100),
    (null, 26, 55, 100),
    (null, 24, 53, 100),
    (null, 27, 58, 100);
    -- (null, 'Em Manutenção', 'LM35', 402),
    -- (null, 'Ativado', 'DHT11', 402),
    -- (null, 'Desativado', 'LM35', 403),
    -- (null, 'Ativado', 'DHT11', 403),
    -- (null, 'Ativado', 'LM35', 404),
    -- (null, 'Ativado', 'DHT11', 404),
    -- (null, 'Em Manutenção', 'LM35', 405),
    -- (null, 'Ativado', 'DHT11', 405),
    -- (null, 'Ativado', 'LM35', 406),
    -- (null, 'Ativado', 'DHT11', 406),
    -- (null, 'Ativado', 'LM35', 407),
    -- (null, 'Ativado', 'DHT11', 407),
    -- (null, 'Desativado', 'LM35', 408),
    -- (null, 'Ativado', 'DHT11', 408);
   
select * from Sensores;

select * from armazem;

-- create table Registros(
-- idRegistros int primary key auto_increment,
-- dataHora datetime,
-- valor double,
-- fkSensor int,
-- constraint fkSens foreign key (fkSensor) references Sensores(idSensores)) auto_increment = 700;

-- insert into Registros values
   -- (null, '2023-10-01 12:41:03', '21', 632),
   -- (null, '2023-10-01 12:41:03', '60', 633),
   -- (null, '2023-09-12 10:21:34', 22, 632),
   -- (null, '2023-09-12 10:21:34', '59', 633),
   -- (null, '2023-07-29 16:10:47', 24, 632),
   -- (null, '2023-07-29 16:10:47', '59', 633),
   -- (null, '2023-03-04 13:24:09', '23', 632),
   -- (null, '2023-03-04 13:24:09', '60', 633),
   -- (null, '2023-08-23 15:01-37', 23, 632),
   -- (null, '2023-08-23 15:01:37', '58', 633),
   -- (null, '2023-05-02 11:09:21', '24', 632),
   -- (null, '2023-05-02 11:09:21', '60', 633),
   -- (null, '2023-10-20 17:55:43', '19', 632),
   -- (null, '2023-10-20 17:55:43', '58', 633),
   -- (null, '2023-03-27 09:10:59', 23, 632),
   -- (null, '2023-03-27 09:10:59', '58', 633);
       
select * from Contato;
select * from empresa;
select * from Endereco;
select * from Fazenda;
select * from Armazém;
select * from Relatório;
select * from Sensores;
select * from Registros;

select e.empresa as NomeEmpresa, e.email, e.cnpj,
c.telefonePrincipal, c.telefoneSecundario, c.emailPrincipal, c.emailSecundario
      from empresa as e
            join Contato as c
                  on e.idEmpresa = c.fkContatoEmpresa;
           
select f.nome as NomeFazenda, e.empresa as NomeEmpresa, e.email, e.cnpj
      from Fazenda as f
            join empresa as e
                  on f.fkEmpresa = e.idEmpresa;
           
select en.cep, en.logradouro, en.numero, en.bairro, en.cidade, en.estado,
e.empresa as NomeEmpresa
      from Endereco as en
            join empresa as e
                  on e.idEmpresa = en.fkEnderecoEmpresa;
           
select f.nome as NomeFazenda,
e.cep as CEP, e.logradouro, e.numero as Número, e.bairro, e.cidade, e.estado
      from Fazenda as f
            join Endereco as e
                  on f.idFazenda= e.fkEnderocoFazenda;
           
select a.idArmazem, a.area as 'ÁreaArmazém(m²)', a.fkFazenda,
f.nome as NomeFazenda
      from Armazem as a
            join Fazenda as f
                  on a.fkFazenda = f.idFazenda;

select r.perdaGraos as 'PerdaGraos(%)', r.dataInicio, r.dataFim,
a.area as ÁreaArmazém, a.idArmazem
      from Relatório as r
            join Armazem as a
                  on r.fkArmazemRel = a.idArmazem;
                       
select a.idArmazem, a.area as 'ÁreaArmazém(m²)',
s.status_sensores, s.tipo
      from Armazem as a
            join Sensores as s
                  on a.idArmazem = s.fkArmazem;
           
select s.fkArmazem, s.status_sensores, s.tipo,
r.dataHora, r.valor
      from Sensores as s
            join Registros as r
                  on s.idSensores = r.fkSensor;
           
select e.empresa as NomeEmpresa, e.cnpj,
c.telefonePrincipal, c.emailPrincipal,
f.nome as NomeFazenda
      from empresa as e
            join Contato as c
                  on e.idEmpresa = c.fkContatoEmpresa
                        join Fazenda as f
                              on e.idEmpresa = f.fkEmpresa;
                   
select e.cep, e.logradouro, e.numero, e.estado,
f.nome as NomeFazenda,
a.area as 'ÁreaArmazém(m²)'
      from Endereco as e
            join Fazenda as f
                  on e.fkEnderecoEmpresa = f.idFazenda
                        join Armazem as a
                              on f.idFazenda = a.fkFazenda;
                   
                   
select a.area as 'ÁreaArmazém(m²)',
r.perdaGraos as 'PerdaGraos(%)', r.dataInicio, r.dataFim,
s.status_sensores, s.tipo
      from Armazem as a
            join Relatório as r
                  on a.idArmazem = r.fkArmazemRel
                        join Sensores as s
                              on a.idArmazem = s.fkArmazem;
