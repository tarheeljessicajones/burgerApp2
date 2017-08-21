CREATE DATABASE burger_db;

USE burger;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  devoured boolean NOT NULL,
  _date TIMESTAMP NOT NULL,
  primary key(id)
);