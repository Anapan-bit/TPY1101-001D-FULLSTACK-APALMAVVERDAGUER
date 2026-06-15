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
- Java 21
- Spring Boot 4.1.0
- Spring Data JPA
- Spring Boot Starter Validation
- Spring Boot Starter Web MVC
- MySQL Connector/J
- Lombok

### Frontend
- React 19
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

## Instrucciones de instalación

### Requisitos previos

- Java 21 (JDK)
- Node.js (LTS) y npm
- MySQL corriendo en `localhost:3306`, usuario `root` sin contraseña (configuración por defecto de Laragon)

### Pasos

1. Clonar el repositorio y ubicarse en la rama `AnaisPalma-VicenteVerdaguer`:
   ```bash
   git clone https://github.com/Anapan-bit/TPY1101-001D-FULLSTACK-APALMA-VVERDAGUER
   cd TPY1101-001D-FULLSTACK-APALMA-VVERDAGUER
   git checkout AnaisPalma-VicenteVerdaguer
   ```
2. Levantar MySQL (Laragon). La base de datos `tpy1101_db` se crea automáticamente al iniciar el backend (`createDatabaseIfNotExist=true`).
3. Instalar dependencias e iniciar el backend (ver [Ejecución del backend](#ejecución-del-backend)).
4. Instalar dependencias e iniciar el frontend (ver [Ejecución del frontend](#ejecución-del-frontend)).

---

## Configuración de la base de datos

La base de datos se crea automáticamente. Solo se requiere tener MySQL corriendo en `localhost:3306` con usuario `root` sin contraseña (configuración por defecto de Laragon).

Hibernate crea la tabla `usuarios` automáticamente (`spring.jpa.hibernate.ddl-auto=update`) y `data.sql` carga los datos de prueba al iniciar el backend.

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
