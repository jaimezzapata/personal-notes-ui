# 📒 Aplicación de Notas Colaborativas

Una aplicación web simple que permite a cualquier persona registrarse y crear notas tipo apuntes colaborativos, usando tecnologías del lado del cliente, almacenamiento local en el navegador y una interfaz amigable con librerías modernas.

---

## ❗️Problemática

En muchos entornos de estudio o trabajo, los usuarios requieren una herramienta rápida y accesible para tomar apuntes y compartir ideas. Sin embargo, muchas soluciones existentes requieren registro complejo o están limitadas a entornos cerrados. Esto dificulta la colaboración informal y ágil entre personas que solo necesitan registrar notas simples y compartir ideas de forma directa.

---

## 🎯 Objetivos

### Objetivo General
Desarrollar una aplicación web de notas colaborativas que permita a los usuarios registrarse de forma sencilla y crear apuntes que se guarden en el navegador mediante `localStorage`.

### Objetivos Específicos

- ✅ Permitir el **registro y acceso básico** de usuarios con persistencia local.
- ✅ Implementar una interfaz para que los usuarios **puedan escribir, editar y eliminar notas** personales.
- ✅ Mostrar las notas registradas en una **vista organizada y accesible**.
- ✅ Ofrecer una experiencia simple, amigable y sin necesidad de back-end.

---

## 📌 Alcance

| Objetivo Específico                                      | Funcionalidad Asociada                                                                 |
|----------------------------------------------------------|----------------------------------------------------------------------------------------|
| Registro de usuarios                                     | Formulario de registro básico con validación y persistencia en `localStorage`         |
| Gestión de notas                                         | Crear, editar y eliminar notas propias usando una interfaz intuitiva                  |
| Visualización de contenido                               | Listado de notas con diseño responsivo y organizado por usuario                       |
| Uso exclusivo de tecnologías del navegador               | No se usará servidor; todo el almacenamiento se realizará en `localStorage`           |

---

## 🛠️ Herramientas Utilizadas

- ⚙️ **HTML5** – estructura semántica del contenido
- 🎨 **CSS3** – estilos visuales y diseño responsivo
- 🧠 **JavaScript Vanilla** – lógica de la aplicación
- 💾 **LocalStorage** – almacenamiento de usuarios y notas en el navegador
- 💬 **[SweetAlert](https://sweetalert2.github.io/)** – alertas personalizadas y amigables para feedback del usuario
- ⭐ **[FontAwesome](https://fontawesome.com/)** – íconos modernos para mejorar la interfaz

---

## 🧪 Técnicas Aplicadas

- ✅ **Manipulación del DOM** para crear y actualizar la interfaz dinámica
- ✅ **Gestión de eventos** (`click`, `submit`, `input`) para interacción fluida del usuario
- ✅ **Validación de formularios** para garantizar entradas correctas
- ✅ **Persistencia con localStorage** para mantener datos entre sesiones sin servidor
- ✅ **Diseño responsivo** utilizando media queries en CSS
- ✅ **Manejo modular con `import/export`** para mantener el código limpio y escalable
- ✅ **Uso de librerías externas** para mejorar experiencia de usuario sin aumentar la complejidad del backend

---

## 📁 Estructura de Carpetas

```plaintext
notas-colaborativas/
│
├── 📄 index.html               # Página principal del proyecto
├── 📄 README.md                # Documentación del proyecto
│
├── 📁 src/                     # Carpeta principal de desarrollo
│   ├── 📁 assets/              # Archivos estáticos (imágenes, íconos, etc.)
│   ├── 📁 css/
│   │   └── style.css          # Estilos generales del sitio
│   ├── 📁 js/
│   │   ├── main.js            # Punto de entrada principal de la app
│   │   ├── app.js             # Lógica general de la aplicación
│   │   ├── auth.js            # Registro y validación de usuarios
│   │   ├── notes.js           # Lógica para gestionar las notas (CRUD)
│   │   └── storage.js         # Funciones para interacción con localStorage

## 👨‍💻 Autor

- Jaime Zapata  
  [💼 Portafolio](#) • [📧 Contacto](mailto:zapataval2304@gmail.com) • [🐙 GitHub](https://github.com/jaimezzapata)

---