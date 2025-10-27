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

---

## 🌿 Trabajar con Ramas en Git

### 📌 Crear una nueva rama

```bash
# Crear una nueva rama (sin cambiar a ella)
git branch nombre-de-la-rama

# Crear una nueva rama y cambiarse a ella automáticamente
git checkout -b nombre-de-la-rama

# O usando el comando moderno
git switch -c nombre-de-la-rama
```

**Ejemplo:**
```bash
git checkout -b feature/nuevo-componente
# Creó la rama "feature/nuevo-componente" y se cambió a ella
```

---

### 🔄 Cambiarse a una rama

```bash
# Cambiar a una rama existente
git checkout nombre-de-la-rama

# O usando el comando moderno
git switch nombre-de-la-rama

# Ver todas las ramas disponibles
git branch

# Ver ramas locales y remotas
git branch -a
```

**Ejemplo:**
```bash
git checkout main
# Ahora estás en la rama main
```

---

### ⬆️ Subir cambios a una rama

```bash
# Subir cambios a la rama actual
git push

# Subir a una rama específica
git push origin nombre-de-la-rama

# Subir la rama actual por primera vez
git push -u origin nombre-de-la-rama
```

**Ejemplo completo:**
```bash
# Estás en la rama "feature/login"
git add .
git commit -m "Agregar componente de login"
git push -u origin feature/login
```

---

### 🔽 Traer toda la información de todas las ramas

```bash
# Descargar todas las ramas del repositorio remoto
git fetch origin

# Traer todas las ramas remotas y sus cambios
git fetch --all

# Sincronizar con la rama remota (actualiza la rama local)
git pull origin nombre-de-la-rama

# Actualizar todas las ramas locales con los cambios remotos
git fetch --all --prune
```

**Ver todas las ramas disponibles:**
```bash
# Ver ramas locales
git branch

# Ver ramas remotas
git branch -r

# Ver todas las ramas (locales y remotas)
git branch -a
```

---

### 📦 Mover archivos entre ramas

#### Opción 1: Merge (combinar ramas)

```bash
# Cambia a la rama destino (ej: main)
git checkout main

# Trae los cambios de otra rama a main
git merge feature/nueva-funcionalidad
```

#### Opción 2: Cherry-pick (copiar commits específicos)

```bash
# Ver el historial de commits en otra rama
git log feature/otra-rama

# Copia un commit específico de otra rama
git cherry-pick hash-del-commit

# Ejemplo:
git checkout main
git cherry-pick abc123
```

#### Opción 2: Rebase (reorganizar ramas)

```bash
# Reorganizar la rama actual sobre otra rama
git checkout mi-rama
git rebase main

# Si hay conflictos, resolverlos y continuar
git rebase --continue
```

---

### 🔀 Ejemplos prácticos de flujo de trabajo

#### Escenario 1: Crear nueva funcionalidad

```bash
# Crear y cambiar a nueva rama
git checkout -b feature/header-component

# Hacer cambios en los archivos
# ... editar archivos ...

# Hacer commit
git add .
git commit -m "Agregar componente Header"

# Subir la rama
git push -u origin feature/header-component
```

#### Escenario 2: Combinar cambios en main

```bash
# Cambiar a main
git checkout main

# Traer últimos cambios de main
git pull origin main

# Combinar tu rama con main
git merge feature/header-component

# Subir los cambios combinados
git push origin main
```

#### Escenario 3: Copiar un archivo de otra rama

```bash
# Cambiar a la rama que tiene el archivo
git checkout otra-rama

# Copiar el archivo específico a la rama actual
git checkout main -- src/components/NuevoComponente.jsx

# O si estás en otra rama y quieres el archivo de main
git checkout main -- ruta/al/archivo.jsx
```

#### Escenario 4: Ver diferencias entre ramas

```bash
# Ver qué archivos son diferentes
git diff main..mi-rama

# Ver lista de archivos diferentes
git diff --name-only main..mi-rama

# Ver cambios en un archivo específico
git diff main..mi-rama -- src/App.jsx
```

---

### 🧹 Limpiar ramas

```bash
# Eliminar una rama local (ya fusionada)
git branch -d nombre-de-la-rama

# Forzar eliminación de rama local
git branch -D nombre-de-la-rama

# Eliminar rama remota
git push origin --delete nombre-de-la-rama

# Limpiar referencias de ramas remotas eliminadas
git fetch --prune
```

---

### ⚠️ Consejos importantes

- **Antes de cambiar de rama, haz commit de tus cambios** o usa `git stash`
- Usa `git status` para ver en qué rama estás y qué cambios tienes
- Si hay conflictos al hacer merge, resuelve los archivos con `<<<<<<<`, `=======`, `>>>>>>>`
- Usa ramas descriptivas: `feature/login`, `bugfix/header-error`, `hotfix/security-patch`

