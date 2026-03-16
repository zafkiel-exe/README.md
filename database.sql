CREATE TABLE players(

id SERIAL PRIMARY KEY,
username VARCHAR(50),
level INT,
xp BIGINT,
gold INT

);

CREATE TABLE inventory(

id SERIAL PRIMARY KEY,
player_id INT,
item VARCHAR(100),
quantity INT

);

CREATE TABLE leaderboard(

id SERIAL PRIMARY KEY,
player_id INT,
score INT

);
