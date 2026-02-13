create database if not exists aula_1;

use aula_1;

create table transacao (
    id int auto_increment primary key,
    valor decimal(10, 2) not null,
    tipo char(1) not null,
    data_hora datetime not null,
    titulo varchar(255) not null
);

ALTER USER 'root'@'localhost' IDENTIFIED VIA mysql_native_password USING PASSWORD('');
FLUSH PRIVILEGES;