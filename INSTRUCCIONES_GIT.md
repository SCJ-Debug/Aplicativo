# 📝 Instrucciones para Subir el Proyecto a GitHub

## Opción 1: Desde GitHub Web (Más fácil)

### Paso 1: Crear el repositorio en GitHub
1. Ve a [GitHub](https://github.com)
2. Haz clic en el botón **"+"** (arriba a la derecha) y selecciona **"New repository"**
3. Nombra tu repositorio (ej: `maaji-dashboard`)
4. **NO marques** la opción "Initialize this repository with a README" (ya tenemos uno)
5. Crea el repositorio
6. GitHub te mostrará comandos, usa los de "...push an existing repository from the command line"

### Paso 2: Ejecutar estos comandos en tu terminal
Abre PowerShell en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit: Maaji Dashboard con React"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/maaji-dashboard.git
git push -u origin main
```

**⚠️ Importante:** Reemplaza `TU_USUARIO` con tu usuario de GitHub y `maaji-dashboard` con el nombre de tu repositorio.

---

## Opción 2: Si quieres usar otra rama (no main)

Si prefieres usar otra rama como `develop` o `master`:

```bash
git init
git add .
git commit -m "Initial commit: Maaji Dashboard con React"
git branch -M develop  # o 'master', o el nombre que prefieras
git remote add origin https://github.com/TU_USUARIO/maaji-dashboard.git
git push -u origin develop
```

---

## Opción 3: Si el repositorio ya existe y quieres subir a otra rama

```bash
# Crear una nueva rama local
git branch nueva-rama

# Cambiar a la nueva rama
git checkout nueva-rama

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Maaji Dashboard"

# Subir la nueva rama
git push -u origin nueva-rama
```

---

## 🎯 Pasos para Completar:

1. **Crea el repositorio en GitHub** (usando Opción 1)
2. **Copia la URL** del repositorio (ej: `https://github.com/tuusuario/maaji-dashboard.git`)
3. **Ejecuta los comandos** de la Opción 1, reemplazando la URL con la de tu repositorio

---

## 🔑 Información adicional

- El archivo `.gitignore` ya está creado y evitará subir carpetas innecesarias
- El README.md ya incluye información sobre el proyecto
- Tu código está listo para ser compartido

---

## 🛠️ Comandos útiles después

```bash
# Ver el estado de tus archivos
git status

# Ver el historial de commits
git log

# Agregar cambios después de una actualización
git add .
git commit -m "Descripción de los cambios"
git push
```

