# Examen final - Programación Híbrida
Proyecto desarrollado por **Constanza Núñez Sánchez**  
Carrera: Técnico en Informática - IPLACEX  
Asignatura: Programación Híbrida (26-1B-PRH0523-101-05-QM)


## Tablon Avisos

Aplicación híbrida desarrollada con **Ionic + Angular** como parte del examen final de la asignatura *Programación Híbrida*.  
Su objetivo es permitir a los habitantes de la comunidad de **Peor es Nada** crear, visualizar y gestionar avisos de utilidad pública (mascotas perdidas, hallazgos de documentos, alertas vecinales, etc.).

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ConyFreya180993/TablonAvisos.git


2. Instalar dependencias:
   ```bash
   npm install

3. Ejecutar en el navegador: 
    ```bash
   ionic serve

4. Sincronizar con Android:
   ```bash
   ionic capacitor sync
   ionic capacitor open android


// Nota importante: La carpeta node_modules fue eliminada antes de la entrega.
Para regenerar dependencias , basta con ejecutar npm install en la raíz del proyecto.

---

## Evidencia
- Probado en emulador **Pixel 4 (Android Studio)**.
- Persistencia confirmada con **SQLite**: los avisos se mantienen tras reinicio en frío.
- Se adjuntan pantallazos y grabaciones como evidencia de desarrollo y  funcionamiento.

---

## 📂 Estructura del proyecto

TablonAvisos/
├── android/                  # Configuración del entorno Android
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/         # Página principal con listado de avisos
│   │   │   ├── crear-aviso/  # Formulario para crear avisos
│   │   │   ├── mis-avisos/   # Listado de avisos propios
│   │   │   ├── modal-confirmar/ # Modal de confirmación para eliminar
│   │   └── models/           # Modelos de datos (Aviso)
│   └── services/
│       └── database.service.ts # Servicio SQLite para persistencia local
├── capacitor.config.ts       # Configuración de Capacitor
├── ionic.config.json         # Configuración general del proyecto Ionic
├── package.json              # Dependencias y scripts del proyecto
├── angular.json              # Configuración de compilación Angular
├── .gitignore                # Archivos y carpetas excluidas del repositorio
└── README.md                 # Documentación del proyecto


---

## ⚙️ Funcionalidades principales
- Creación y eliminación de avisos con validaciones.
- Persistencia local mediante **SQLite**.
- Captura de fotografías con el plugin de cámara.
- Modal de confirmación antes de eliminar avisos.
- Formateo automático de fecha con **Pipe** personalizado.
- Interfaz modular y comentada para facilitar mantenimiento.

---

## 

## Evidencia
- Probado en emulador **Pixel 4 (Android Studio)**.
- Persistencia confirmada con **SQLite**: los avisos se mantienen tras reinicio en frío.
- Se adjuntan pantallazos y grabaciones como evidencia de desarrollo y  funcionamiento en la carpeta drive ( https://drive.google.com/drive/folders/1qXmRPTYyQVUpUpUMJ2n4nsHWUcK4ePqT?usp=drive_link.)

## 📎 Enlaces
- 📁 [Respaldo en Google Drive] (https://drive.google.com/file/d/1x-riQghhaf98hBxIdDxOnu1ei5rbred_/view?usp=drive_link)
- 🌐 [Repositorio GitHub](https://github.com/ConyFreya180993/TablonAvisos)



---
## Autor
**Constanza Núñez Sánchez**  
Carrera: Técnico en Informática - IPLACEX  
Correo de contacto: conyfreyatecnico@gmail.com  
GitHub: [ConyFreya180993](https://github.com/ConyFreya180993)
