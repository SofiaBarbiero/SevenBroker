create database SevenBroker
go
use SevenBroker
go

create table USUARIOS(
 idUsuario int not null identity(1,1),
 nombre varchar(50) not null,
 apellido varchar(50) not null,
 email varchar(50) not null,
 telefono varchar(50) not null,
 dni int,
 userName varchar(50),
 pass varchar(50),
 constraint pk_usuarios primary key (idUsuario))

create table CUENTAS(
 idCuenta int not null identity(1,1),
 idUsuario int,
 saldo decimal(24,4)
 constraint pk_cuentas primary key (idCuenta),
 constraint fk_cuentas_usuarios foreign key (idUsuario) references USUARIOS (idUsuario))

create table ACCIONES(
 idAccion int not null identity(1,1),
 nombre varchar(50),
 simbolo varchar(30),
 precio decimal(24,4),
 cantidadDisponible int,
 constraint pk_acciones primary key (idAccion))

create table COMPRAS(
 idCompra int not null identity(1,1),
 idCuenta int,
 fecha datetime,
 precioCompra decimal(24,4),
 cantidadCompra int,
 idAccion int,
 constraint pk_compra primary key (idCompra),
 constraint fk_compras_cuentas foreign key (idCuenta) references CUENTAS (idCuenta),
 constraint fk_compras_acciones foreign key (idAccion) references ACCIONES (idAccion))