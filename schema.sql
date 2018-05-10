-- Drops the user if it exists currently --
DROP DATABASE IF EXISTS app_entries;
-- Creates the "writer" database --
CREATE DATABASE app_entries;

USE app_entries;

-- CREATE TABLE IF NOT EXISTS authors (
--     `id` INT NOT NULL AUTO_INCREMENT,
--     `name` varchar(45) NOT NULL,
--     `password` varchar(45),
--     `role` varchar(45),
--     PRIMARY KEY (id)
-- )

-- CREATE TABLE IF NOT EXISTS entries (
--     `id` INT NOT NULL AUTO_INCREMENT,
--     `title` varchar (100),
--     `letter` varchar (1000),
--     `category` varchar (50),
--     `authorID` INT,
--     PRIMARY KEY (id),
--     FOREIGN KEY (authorID) REFERENCES authors(id)
-- )