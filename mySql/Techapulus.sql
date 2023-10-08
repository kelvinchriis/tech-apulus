create database techapulus;

use techapulus;

create table cadastro (
id_empresa int primary key auto_increment,
tamanho_local int not null,
nome_empresa varchar(35) unique not null,
representante varchar(40),
email varchar(40) unique not null,
telefone char(11) unique,
endereco varchar(70),
senha varchar(20) not null) auto_increment = 100;

insert into cadastro values
	(null, 10, 'GRUPO TRES CORACOES', 'Gustavo Samuel', 'gustavo.samuel@gmail.com', 1140028922, 'Rua Haddock Lobo, 973', 'Gustavo123'),
    (null, 20, 'JACOBS DOUWE EGBERTS BR', 'Elizeu', 'elizeus456@outlook.com', 1189224002, 'Rua Aurora, 793', 'Zeu456'),
    (null, 30, 'MELITTA DO BRASIL', 'Amanda', 'amanda1208@hotmail.com', 1198282998, 'Rua Halo, 117', 'Amanda789');

select * from cadastro;

select nome_empresa as Empresa from cadastro;

describe cadastro;

create table sensor (
id_sensor int primary key auto_increment,
nome varchar(30),
statusSensor varchar(30));

insert into sensor values
    (null, 'DHT11', 'ativo'),
    (null, 'LM35', 'ativo');

create table registros (
id_registros int primary key auto_increment,
tempo datetime default current_timestamp,
temperatura_celsius int(3),
umidade_porcentagem int(3),
fkSensor int) auto_increment = 1000; 

alter table registros add constraint fkSens foreign key (fkSensor) references sensor(id_sensor);

insert into registros values
   (null, null, '23', '60', 1),
   (null, null, '21', '60', 2);
   
insert into registros (temperatura_celsius, umidade_porcentagem, fkSensor) values
   ('23', '60', 1),
   ('21', '60', 2);
   
select * from registros;
        
select * from sensor;

select * from sensor join registros 
   on fkSensor = id_sensor;
    
create table graos (
id_grao int primary key auto_increment,
nome_grao varchar(30) not null,
temp_adequada int(3) not null,
umid_adequada int(3) not null
);

insert into graos values
 (null, 'Arábico', 25, 12),
 (null, 'Libérica', 20, 13);
 
select * from graos;
    
describe graos;