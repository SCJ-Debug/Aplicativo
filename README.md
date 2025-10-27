# Maaji Dashboard

Dashboard creado con React.js replicando el diseño de la interfaz Maaji.

## 🚀 Iniciar el proyecto

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en la URL que aparece en la terminal (generalmente `http://localhost:5173`)

## 📦 Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa de la build de producción

## 🎨 Características

- **Header**: Barra de navegación verde lima con logo "Maaji", búsqueda, navegación y iconos de notificaciones
- **Sección Documents**: Lista de documentos con tarjeta de "Update Docs" y barras placeholder
- **Sección Cases**: Lista de casos con tags de estado (In progrest/Unclosed)
- Diseño responsive y moderno
- Animaciones suaves en hover

## 📁 Estructura del proyecto

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── DocumentsSection.jsx
│   │   ├── DocumentsSection.css
│   │   ├── CasesSection.jsx
│   │   └── CasesSection.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
