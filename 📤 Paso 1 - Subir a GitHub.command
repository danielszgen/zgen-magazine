#!/bin/bash

PROJECT="/Users/daniels/Documents/Claude/Projects/Daniels zgen Magazine"
cd "$PROJECT"

clear
echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║   📤  ZGEN MAGAZINE → GITHUB               ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

# ── Paso 1: Configurar git global si no está ───────────────────────────────
GIT_USER=$(git config --global user.name 2>/dev/null)
if [ -z "$GIT_USER" ]; then
  echo "⚙️  Configurando tu identidad git..."
  read -p "   Tu nombre (ej. Daniel): " INPUT_NAME
  read -p "   Tu email de GitHub:      " INPUT_EMAIL
  git config --global user.name "$INPUT_NAME"
  git config --global user.email "$INPUT_EMAIL"
  echo ""
fi

# ── Paso 2: Init + commit ──────────────────────────────────────────────────
if [ ! -d ".git" ]; then
  echo "1️⃣  Inicializando repositorio..."
  git init -q
  git add .
  git commit -q -m "🧬 zgen magazine — initial commit"
  echo "   ✅ Commit inicial creado."
else
  echo "1️⃣  Git ya inicializado. Guardando cambios..."
  git add .
  git commit -q -m "⚡ zgen — update $(date '+%Y-%m-%d %H:%M')" 2>/dev/null \
    && echo "   ✅ Cambios guardados." \
    || echo "   ℹ️  Sin cambios nuevos."
fi

echo ""

# ── Paso 3: Crear repo en GitHub ──────────────────────────────────────────
echo "2️⃣  Ahora crea el repositorio en GitHub."
echo "   Se abrirá en tu navegador. Sigue estos pasos:"
echo ""
echo "   → Nombre:      zgen-magazine"
echo "   → Visibilidad: Public  (o Private si prefieres)"
echo "   → ⚠️  NO marques 'Add a README file'"
echo "   → Pulsa 'Create repository'"
echo ""
sleep 1
open "https://github.com/new"

read -p "   Pulsa ENTER cuando el repo esté creado... "

echo ""

# ── Paso 4: Conectar y subir ──────────────────────────────────────────────
read -p "3️⃣  ¿Cuál es tu usuario de GitHub? " GITHUB_USER
REPO="zgen-magazine"

echo ""
echo "4️⃣  Conectando con GitHub y subiendo código..."
echo "   (Si te pide contraseña, usa un Personal Access Token)"
echo ""

git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$GITHUB_USER/$REPO.git"
git branch -M main

git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "╔══════════════════════════════════════════════╗"
  echo "║   ✅  ¡SUBIDO CORRECTAMENTE!               ║"
  echo "╚══════════════════════════════════════════════╝"
  echo ""
  echo "   Tu repo: https://github.com/$GITHUB_USER/$REPO"
  echo ""
  echo "   → Siguiente paso: ejecuta"
  echo "     '🌐 Paso 2 - Deploy en Vercel.command'"
  echo ""
  open "https://github.com/$GITHUB_USER/$REPO"
else
  echo ""
  echo "╔══════════════════════════════════════════════╗"
  echo "║   ⚠️  Hubo un error al hacer push          ║"
  echo "╚══════════════════════════════════════════════╝"
  echo ""
  echo "   Si te ha pedido contraseña y ha fallado:"
  echo "   1. Ve a https://github.com/settings/tokens"
  echo "   2. Genera un token con permisos 'repo'"
  echo "   3. Úsalo como contraseña cuando git te la pida"
  echo ""
fi

read -p "Pulsa ENTER para cerrar..."
