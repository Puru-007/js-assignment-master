-- create tables
create table if not exists mydb.sports
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    status boolean not null default true,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp
);

create table if not exists mydb.tours
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    sportId int not null,
    status boolean not null default true,
    startTime timestamp not null,
    endTime timestamp not null,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (sportId) references sports(id)
);

create table if not exists mydb.matches
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    tourId int not null,
    status boolean not null default true,
    format varchar(50) not null,
    startTime timestamp not null,
    endTime timestamp not null,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (tourId) references tours(id)
);

create table if not exists mydb.news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    matchId INT NULL,
    tourId INT NULL,
    FOREIGN KEY (matchId) REFERENCES matches(id),
    FOREIGN KEY (tourId) REFERENCES tours(id)
);

-- seed data
insert ignore into mydb.sports (id, name) values (1, 'Cricket');
insert ignore into mydb.sports (id, name) values (2, 'Football');

insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (1, 'Indian Premier League, 2023', 1, '2023-04-09 00:00:00', '2023-05-30 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (2, 'India Super League, 2023', 2, '2023-04-21 00:00:00', '2023-06-20 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (3, 'India Tour of West Indies, 2023', 1, '2023-06-10 00:00:00', '2023-06-29 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (4, 'English Premier League, 2022', 2, '2022-04-09 00:00:00', '2022-05-30 00:00:00');

insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('GT vs RCB', 1, 'T20', '2023-04-09 18:00:00', '2023-04-09 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('CSK vs MI', 1, 'T20', '2023-04-10 18:00:00', '2021-04-10 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('LSG vs KXIP', 1, 'T20', '2023-04-11 18:00:00', '2023-04-11 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('RR vs SRH', 1, 'T20', '2023-04-12 18:00:00', '2023-04-12 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('BLR vs BEN', 2, 'soccer', '2023-04-29 18:00:00', '2023-04-29 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('ATK vs MCFC', 2, 'soccer', '2023-04-21 18:00:00', '2023-04-21 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('KER vs JFC', 2, 'soccer', '2023-04-22 18:00:00', '2023-04-22 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-10 10:00:00', '2023-06-10 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-12 10:00:00', '2023-06-12 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-14 10:00:00', '2023-06-14 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('KER vs JFC', 4, 'soccer', '2022-04-09 18:00:00', '2022-04-09 23:00:00');


-- Insert news related to a specific match
INSERT INTO mydb.news (title, description, matchId, tourId)
VALUES 
('Match 1: Exciting Finish!', 'Match 1 concluded with a thrilling finish that kept fans on the edge of their seats.', 1, 1),
('Match 2: Record-breaking Performance!', 'Match 2 witnessed a record-breaking performance by the star player.', 2, 1);

-- Insert news related to a tour
INSERT INTO mydb.news (title, description, tourId)
VALUES 
('Tour 1: Opening Ceremony Highlights', 'The opening ceremony of Tour 1 was a grand spectacle with performances by famous artists.', 1),
('Tour 2: Mid-Tournament Analysis', 'Midway through Tour 2, teams are gearing up for the knockout stages.', 2);

-- Insert news that only belongs to a tour and not a specific match
INSERT INTO mydb.news (title, description, tourId)
VALUES 
('Tour 3: All Teams Ready', 'All teams are set and ready for the start of Tour 3.', 3);

-- Insert news related to another match
INSERT INTO mydb.news (title, description, matchId, tourId)
VALUES 
('Match 3: Defensive Masterclass', 'Match 3 was a display of defensive brilliance by both teams.', 3, 2);
