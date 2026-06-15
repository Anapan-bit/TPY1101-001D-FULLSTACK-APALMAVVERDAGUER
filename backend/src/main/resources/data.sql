INSERT IGNORE INTO usuarios (username, password, nombre, email, rol)
VALUES
    ('admin', 'admin123', 'Administrador', 'admin@example.com', 'ADMIN'),
    ('jperez', 'jperez123', 'Juan Perez', 'jperez@example.com', 'USER');
