DROP DATABASE IF EXISTS blackjack_db;
CREATE DATABASE blackjack_db;

USE blackjack_db;

CREATE TABLE player (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100)
);



