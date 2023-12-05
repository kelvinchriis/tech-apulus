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

create table sensores(
idSensores int primary key auto_increment,
dht11_umidade double,
lm35_temperatura double,
fkArmazem int,
constraint fkArm foreign key(fkArmazem) references Armazem(idArmazem)
)auto_increment = 600;

select * from sensores;

insert into Sensores values
(null, 23, 60, 100),
(null, 24, 58, 100),
(null, 26, 55, 100),
(null, 24, 53, 100),
(null, 27, 58, 100);

select * from Sensores;

select * from Contato;

select * from empresa;

select * from Endereco;

select * from Fazenda;

select * from Armazém;

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
                       

----- select a.idArmazem, a.area as 'ÁreaArmazém(m²)',
----- s.status_sensores, s.tipo
-----  from Armazem as a
----- join Sensores as s
----- on a.idArmazem = s.fkArmazem;

           

----- select s.fkArmazem, s.status_sensores, s.tipo,
----- r.dataHora, r.valor
----- from Sensores as s
----- join Registros as r
----- on s.idSensores = r.fkSensor;


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