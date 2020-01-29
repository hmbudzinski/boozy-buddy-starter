-- DROP DATABASE IF EXISTS boozybuddy_db;

CREATE DATABASE boozybuddy_db;

USE boozybuddy_db;

CREATE TABLE drinks (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(75) NOT NULL,
type VARCHAR(30) NOT NULL, 
location VARCHAR(100), 
price DECIMAL(6,2), 
notes TEXT, 
rating TINYINT NOT NULL,
love_it BOOLEAN DEFAULT false,
hate_it BOOLEAN DEFAULT false
);

INSERT INTO drinks (name, type, location, price, notes, rating)
VALUES ("Red Wine", "Wine", "The Social in Fort Collins", null, "Nice smokey flavor, dry, and delicious", 4);

SELECT*FROM drinks;