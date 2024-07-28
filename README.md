# Proyecto de API REST con Docker y Docker Compose

Este proyecto es una demostración de una API REST simple construida con Node.js, Express y MongoDB, empaquetada y orquestada utilizando Docker y Docker Compose. Está diseñado para mostrar mis conocimientos en Docker y cómo utilizarlo para desarrollar y desplegar aplicaciones.

## Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución en Desarrollo](#ejecución-en-desarrollo)
- [Ejecución en Producción](#ejecución-en-producción)
- [Endpoints](#endpoints)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)

## Requisitos

- Docker
- Docker Compose

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio ```

2. Construye y levanta los contenedores usando Docker Compose.
   ```bash
   docker-compose up --build
   ```

## Ejecución en Desarrollo

   1. Levanta los contenedores de desarrollo:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

   2. La aplicación estará disponible en http://localhost:3000.


## Ejecución en Producción
   
   1.Levanta los contenedores de producción:
   ```bash
   docker-compose up --build
   ```

   2. La aplicación estará disponible en http://localhost:3000.

## Endpoits
   
   Obtener todos los animales

   ```bash
   GET /
   ```

   Retorna una lista de todos los animales en la base de datos.

   Crear un nuevo animal
   ```bash
   POST /crear
   Content-Type: application/json
   
   {
       "tipo": "chanchito",
       "estado": "feliz"
   }
   ```
   Crea un nuevo animal con el tipo y estado especificados.

   Obtener un animal por ID
   ```bash
   GET /:id
   ```
   Retorna un animal específico por ID.
   
   Actualizar un animal por ID
   ```bash
   PUT /:id
   Content-Type: application/json
   
   {
       "tipo": "nuevo_tipo",
       "estado": "nuevo_estado"
   }
   ```
   Actualiza el tipo y estado de un animal específico por ID.
   
   Eliminar un animal por ID
   ```bash
   DELETE /:id
   ```
   Elimina un animal específico por ID.
   
   Arquitectura del Proyecto
   El proyecto está compuesto por los siguientes archivos y directorios:
   
   ```plaintext
   .
   ├── Dockerfile
   ├── Dockerfile.dev
   ├── docker-compose.yml
   ├── docker-compose.dev.yml
   ├── index.mjs
   └── README.md
   Dockerfile: Define la configuración del contenedor para producción.
   Dockerfile.dev: Define la configuración del contenedor para desarrollo.
   docker-compose.yml: Define los servicios y la configuración de red para producción.
   docker-compose.dev.yml: Define los servicios y la configuración de red para desarrollo.
   index.mjs: Archivo principal de la aplicación Node.js.
   README.md: Este archivo de documentación.
   Contribuciones
   Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request en GitHub.
   ```
   Licencia
   Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
