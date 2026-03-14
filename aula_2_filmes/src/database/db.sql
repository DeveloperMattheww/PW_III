create database if not exists movies_api;

use movies_api;

create table movie (
    id int auto_increment primary key,
    title varchar(255) not null,
    director varchar(255) not null,
    genre varchar(50) not null,
    year_release int not null,
    duration int not null,
    classification varchar(15)
);

INSERT INTO movie (title, director, genre, year_release, duration, classification) VALUES 
('Interestelar', 'Christopher Nolan', 'ficcao', 2014, 169, '12 anos'), 
('O Poderoso Chefão', 'Francis Ford Coppola', 'drama', 1972, 175, '16 
anos'), 
('Velozes e Furiosos', 'Rob Cohen', 'acao', 2001, 106, '14 anos'), 
('Shrek', 'Andrew Adamson', 'animacao', 2001, 90, 'Livre'), 
('O Exorcista', 'William Friedkin', 'terror', 1973, 122, '18 anos'), 
('Se Beber Não Case', 'Todd Phillips', 'comedia', 2009, 100, '14 anos'), 
('Planeta Terra II', 'David Attenborough', 'documentario', 2016, 240, 
'Livre'), 
('Vingadores: Ultimato', 'Russo Brothers', 'acao', 2019, 181, '12 anos'), 
('Toy Story', 'John Lasseter', 'animacao', 1995, 81, 'Livre'), 
('Coringa', 'Todd Phillips', 'drama', 2019, 122, '16 anos'), 
('Alien: O Oitavo Passageiro', 'Ridley Scott', 'terror', 1979, 117, '16 
anos'), 
('De Volta para o Futuro', 'Robert Zemeckis', 'ficcao', 1985, 116, 
'Livre'), 
('A Vida é Bela', 'Roberto Benigni', 'drama', 1997, 116, '12 anos'), 
('Capitão América: Guerra Civil', 'Russo Brothers', 'acao', 2016, 147, '12 
anos'), 
('Procurando Nemo', 'Andrew Stanton', 'animacao', 2003, 100, 'Livre'), 
('Annabelle', 'John R. Leonetti', 'terror', 2014, 99, '16 anos'), 
('Todo Mundo em Pânico', 'Keenen Ivory Wayans', 'comedia', 2000, 88, '14 
anos'), 
('Planeta dos Macacos', 'Franklin J. Schaffner', 'ficcao', 1968, 112, '12 
anos'), 
('Free Solo', 'Elizabeth Chai Vasarhelyi', 'documentario', 2018, 100, 
'Livre'), 
('Os Trapalhões na Serra Pelada', 'J. B. Tanko', 'comedia', 1982, 95, 
'Livre');

select * from movie;

create user 'movies_api_user'@'localhost' identified by 'password123';
grant all privileges on movies_api.* to 'movies_api_user'@'localhost';
flush privileges;