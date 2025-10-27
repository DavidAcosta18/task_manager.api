# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# 🚀 TaskFlow: Plataforma de Gestión de Proyectos Ágil

## 📋 Descripción del Proyecto

**TaskFlow** es una plataforma de gestión de tareas y proyectos, diseñada para equipos pequeños a medianos que buscan una herramienta sencilla y visual para organizar su trabajo. La aplicación permite a los usuarios:

- Crear y gestionar proyectos con fechas de inicio y fin.
- Visualizar tareas en un **Tablero Kanban** con estados personalizables ("To Do", "In Progress", "Completed").
- Asignar tareas a miembros del equipo.
- Ver detalles de la tarea, incluyendo un _feed_ de comentarios.
- Mantener un registro de los usuarios del sistema.

El objetivo principal es proporcionar una experiencia de usuario fluida y reactiva mediante una arquitectura moderna de microservicios o monolito modular.

---

## ⚙️ Tecnologías Utilizadas

Este proyecto está construido con una arquitectura **Full-Stack** que utiliza las siguientes tecnologías y versiones principales:

| Componente | Tecnología | Versión Clave |
| :--------- | :--------- | :------------ |

express express ^4.17.2

---

## ✅ Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- **Node.js:** Versión `v18.x` o superior.
- **yarn:** Versión `8.x` o superior.
- Servidor mysql

---

## 🛠️ Instrucciones de Instalación Paso a Paso

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### 1. Clonar el Repositorio

```bash
git clone [https://github.com/DavidAcosta18/task_manager.api](https://github.com/DavidAcosta18/task_manager.api) TaskFlow
git checkout develop
cd TaskFlow
yarn
 ##Crear archivo .env y Añadir variables de entorno
 ##colocar usuario de base de datos en la variable DB_USER
 ##colocar contraseña de base de datos en la variable DB_PASSWORD
##Crear Base de datos de mysql con el nombre taskmaker e importar el respaldo adjunto (taskmaker.sql)
yarn db-refresh
yarn start
```

## Datos .env

# App

APP_KEY=secret
TZ=America/Puerto_Rico
DOMAIN=

# API

PORT=4000

# Database

DB_HOST=localhost
DB_PORT=
DB_NAME=taskMaker
DB_USER=root
DB_PASSWORD=
DB_LOG=

# Captcha

CAPTCHA_SECRET=secret

# E-mail

MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME =
MAIL_PASSWORD=

### Decisiones técnicas importantes Persistencia y Base de Datos (Backend

Se decidió no definir las relaciones (.belongsTo(), .hasMany()) dentro de los archivos de definición de modelos individuales. En su lugar, las asociaciones se configuraron en un archivo central (index.js o associations.js) después de que todos los modelos se hayan cargado.
Esto previene el error común de not a subclass of Sequelize.Model y resuelve los problemas de dependencia circular que son habituales en esquemas con muchas referencias mutuas (como Tareas referenciando Usuarios y viceversa).

En todas las consultas que requieren incluir modelos relacionados (tasksDbModel.findOne({... include: [...]})), se utiliza el método .get({ plain: true }) antes de devolver la respuesta.
Esta es la solución principal para evitar el error de Converting circular structure to JSON, ya que elimina todos los metadatos internos de Sequelize, dejando solo un objeto JSON limpio y serializable.
