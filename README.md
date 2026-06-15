# TPY1101-001D-FULLSTACK — Mantenedor de Usuarios

Sistema web Full Stack para gestión de usuarios con Login, Listado, Creación, Edición y Eliminación.

## Integrantes

- Anais Palma
- Vicente Verdaguer

---

## Explicación técnica

El sistema está dividido en tres capas:

- **Frontend (React + Vite):** SPA con React Router para navegación entre pantallas. Llama al backend mediante `fetch`. Guarda el usuario autenticado en `localStorage` para proteger las rutas privadas.
- **Backend (Spring Boot):** API REST con controladores para autenticación (`/api/auth/login`) y CRUD completo de usuarios (`/api/usuarios`). Usa JPA/Hibernate para mapear la entidad `Usuario` a MySQL. CORS habilitado para el puerto 5173.
- **Base de datos (MySQL):** Tabla `usuarios` creada automáticamente por JPA (`ddl-auto=update`). Datos iniciales cargados desde `data.sql` con `INSERT IGNORE`.

---

## Dependencias

### Backend
- Java 17
- Spring Boot 3
- Spring Data JPA
- MySQL Connector

### Frontend
- React 18
- Vite
- react-router-dom

### Base de datos
- MySQL 8 (vía Laragon)

---

## Puertos

| Servicio   | Puerto |
|------------|--------|
| Backend    | 8080   |
| Frontend   | 5173   |
| MySQL      | 3306   |

---

## Configuración de la base de datos

La base de datos se crea automáticamente. Solo se requiere tener MySQL corriendo en `localhost:3306` con usuario `root` sin contraseña (configuración por defecto de Laragon).

El archivo `database/schema.sql` contiene el DDL completo y los datos de prueba para revisión o carga manual.

---

## Ejecución del backend

```bash
cd backend
./mvnw spring-boot:run
```

El backend quedará disponible en `http://localhost:8080`.

---

## Ejecución del frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend quedará disponible en `http://localhost:5173`.

---

## Credenciales de prueba

| Username | Password  | Rol   |
|----------|-----------|-------|
| admin    | admin123  | ADMIN |
| jperez   | jperez123 | USER  |

---

## Estructura del proyecto

```
/backend      → API REST (Spring Boot)
/frontend     → Interfaz de usuario (React + Vite)
/database     → schema.sql con DDL y datos iniciales
README.md
```

---

## API disponible

### Login
`POST /api/auth/login`
```json
{ "username": "admin", "password": "admin123" }
```

### CRUD Usuarios
| Método | Endpoint            | Descripción              |
|--------|---------------------|--------------------------|
| GET    | /api/usuarios       | Listar todos             |
| GET    | /api/usuarios/{id}  | Obtener por ID           |
| POST   | /api/usuarios       | Crear usuario            |
| PUT    | /api/usuarios/{id}  | Editar usuario           |
| DELETE | /api/usuarios/{id}  | Eliminar usuario         |
