![Banner Peliculas](https://cdn.pixabay.com/photo/2015/09/21/14/47/banner-949944_1280.jpg)

# 🎬 API de Películas con Mongoose y Express

Una **API REST** moderna para gestionar una base de datos de películas utilizando **Node.js**, **Express** y **MongoDB** con **Mongoose**.

> Esta API implementa un patrón **MVC** (Modelo-Vista-Controlador) para una mejor organización del código.

---

## 📝 Lista de Tareas del Proyecto

### 🚀 Funcionalidades Básicas
- [x] Configuración inicial del proyecto con Express y Mongoose
- [x] Modelo de datos para películas con validación
- [x] Endpoints CRUD completos (GET, POST, PATCH, DELETE)
- [x] Filtrado por género y director
- [x] Conexión a MongoDB con variables de entorno
- [x] Estructura MVC + Services implementada
- [x] Manejo centralizado de errores con middleware
- [x] Capa de servicios para separar lógica de negocio
- [x] Documentación completa con diagrama de arquitectura

### 🔍 Mejoras Pendientes
- [ ] Implementar sistema de autenticación JWT
- [ ] Agregar validación de entrada más robusta
- [ ] Implementar paginación para listado de películas
- [ ] Agregar endpoint de búsqueda por título
- [ ] Implementar filtrado por puntuación mínima
- [ ] Implementar rate limiting
- [ ] Agregar logging con Winston
- [ ] Implementar tests unitarios con Jest
- [ ] Agregar tests de integración
- [x] Implementar manejo de errores centralizado
- [ ] Agregar endpoint para subir imágenes de posters

### 🛡️ Seguridad y Producción
- [ ] Implementar helmet para headers de seguridad
- [ ] Agregar validación de CORS
- [ ] Implementar compresión de respuestas
- [ ] Configurar variables de entorno para producción
- [ ] Implementar backup automático de base de datos
- [ ] Configurar SSL/TLS
- [ ] Implementar monitoreo de la aplicación
- [ ] Agregar documentación de API con Swagger

### 📊 Funcionalidades Avanzadas
- [ ] Implementar sistema de favoritos
- [ ] Agregar comentarios y reseñas
- [ ] Implementar sistema de calificaciones por usuarios
- [ ] Agregar recomendaciones basadas en géneros
- [ ] Implementar cache con Redis
- [ ] Agregar notificaciones push
- [ ] Implementar API GraphQL como alternativa
- [ ] Agregar soporte para múltiples idiomas

### 🧪 Testing y Calidad
- [ ] Configurar ESLint y Prettier
- [ ] Implementar pre-commit hooks con Husky
- [ ] Agregar coverage de tests
- [ ] Implementar tests de performance
- [ ] Configurar CI/CD pipeline
- [ ] Agregar análisis de código estático

---

## 📡 Endpoints de la API

### 🎯 Operaciones CRUD Básicas

| Método | Endpoint | Descripción | Ejemplo |
|--------|----------|-------------|---------|
| `GET` | `/` | Página principal | `http://localhost:3000/` |
| `GET` | `/movies` | Obtener todas las películas | `http://localhost:3000/movies` |
| `GET` | `/movies/:id` | Obtener película por ID | `http://localhost:3000/movies/684b5bc648f3b1c63ff28829` |
| `POST` | `/movies` | Crear nueva película | `http://localhost:3000/movies` |
| `PATCH` | `/movies/:id` | Actualizar película | `http://localhost:3000/movies/684b5bc648f3b1c63ff28829` |
| `DELETE` | `/movies/:id` | Eliminar película | `http://localhost:3000/movies/684b5bc648f3b1c63ff28829` |

### 🔍 Endpoints de Filtrado

<details>
<summary><strong>Ver endpoints de filtrado avanzado</strong></summary>

| Método | Endpoint | Descripción | Ejemplo |
|--------|----------|-------------|---------|
| `GET` | `/movies?genre=:genre` | Filtrar por género | `http://localhost:3000/movies?genre=Romance` |
| `GET` | `/movies/director/:director` | Filtrar por director | `http://localhost:3000/movies/director/Christopher%20Nolan` |

</details>

### 📊 Códigos de Respuesta HTTP

| Código | Estado | Descripción | Cuándo se usa |
|--------|--------|-------------|---------------|
| `200` | ✅ **OK** | Operación exitosa | GET, PATCH exitosos |
| `201` | ✅ **Created** | Recurso creado exitosamente | POST exitoso |
| `400` | ❌ **Bad Request** | Datos inválidos o faltantes | Validación fallida |
| `404` | ❌ **Not Found** | Película no encontrada | ID inexistente |
| `422` | ❌ **Unprocessable Entity** | Error de validación de Mongoose | Datos no válidos |
| `500` | ❌ **Internal Server Error** | Error del servidor | Problemas de BD o servidor |

---

## 🧪 Pruebas con API HTTP

> [!TIP]  
> Utiliza el archivo `src/tests/api.http` incluido para probar todos los endpoints fácilmente.

<details>
<summary><strong>📝 Ejemplos de peticiones HTTP</strong></summary>

### ➕ Crear una nueva película
```http
POST http://localhost:3000/movies
Content-Type: application/json

{
    "title": "Mi película con Mongoose",
    "year": 2024,
    "director": "Tu Nombre",
    "duration": 120,
    "genre": ["Action", "Drama", "Crime"]
}
```

### ✏️ Actualizar una película existente
```http
PATCH http://localhost:3000/movies/6851fed7cb30539e30ee7f9b
Content-Type: application/json

{
    "duration": 222,
    "year": 2025,
    "rate": 8.5
}
```

### 🗑️ Eliminar una película
```http
DELETE http://localhost:3000/movies/6851f6ea8fb013ee9ba1a276
```

</details>

---

### Estructura de respuestas
```javascript
// Respuesta exitosa (GET todas las películas)
[
  {
    "_id": "...",
    "title": "...",
    "year": 2024,
    ...
  }
]

// Respuesta exitosa (POST/PATCH)
{
  "_id": "...",
  "title": "...",
  ...
}

// Respuesta de error
{
  "message": "Descripción del error",
  "error": "Detalles del error"
}
```