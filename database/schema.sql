-- Base de datos: tpy1101_db
-- Sistema Mantenedor de Usuarios - TPY1101-001D

CREATE DATABASE IF NOT EXISTS tpy1101_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE tpy1101_db;

CREATE TABLE IF NOT EXISTS usuarios (
  id       BIGINT       NOT NULL AUTO_INCREMENT,
  username VARCHAR(50)  NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nombre   VARCHAR(100) NOT NULL,
  email    VARCHAR(100) NOT NULL,
  rol      VARCHAR(20)  NOT NULL DEFAULT 'USER',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Datos iniciales de prueba
INSERT IGNORE INTO usuarios (username, password, nombre, email, rol) VALUES
  ('admin',  'admin123',  'Administrador', 'admin@example.com',  'ADMIN'),
  ('jperez', 'jperez123', 'Juan Perez',    'jperez@example.com', 'USER');
