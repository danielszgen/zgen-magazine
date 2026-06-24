#!/bin/bash

PROJECT="/Users/daniels/Documents/Claude/Projects/Daniels zgen Magazine"
cd "$PROJECT"

clear
echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║   📤  ZGEN MAGAZINE → GITHUB               ║"
echo "╚══════════════════════════════════════════════╝"
echo ""
echo "   ✅ El commit inicial ya está preparado."
echo "      34 archivos listos para subir."
echo ""

# Limpiar locks residuales si existen
rm -f .git/HEAD.lock .git/index.lock .git/refs/heads/master.lock .git/refs/heads/main.lock 2>/dev/null

# Renombrar a main si hace falta
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ "$CURRENT_BRANCH" = "master" ]; then
  git branch -M main 2>/dev/null && echo "   ✅ Rama renombrada a 'main'." || true
fi

echo ""
echo "1️⃣  Crea el repositorio en GitHub."
echo "   Se abrirá en tu navegador:"
echo ""
echo "   → Nombre:      zgen-magazine"
echo "   → Visibilidad: Public  (o Private si prefieres)"
echo "   → ⚠️  NO marques 'Add a README file'"
echo "   → Clic en 'Create repository'"
echo ""
sleep 1
open "https://github.com/new"

read -p "   Pulsa ENTER cuando el repo esté creado... "
echo ""

read -p "2️⃣  Tu usuario de GitHub: " GITHUB_USER
REPO="zgen-magazine"

echo ""
echo "3️⃣  Conectando y subiendo los archivos..."
echo ""

git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$GITHUB_USER/$REPO.git"

# Añadir cualquier cambio nuevo
git add . && git commit -m "⚡ zgen — sync $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || true

git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "╔══════════════════════════════════════════════╗"
  echo "║   ✅  ¡SUBIDO CORRECTAMENTE!               ║"
  echo "╚══════════════════════════════════════════════╝"
  echo ""
  echo "   Tu repo: https://github.com/$GITHUB_USER/$REPO"
  echo ""
  echo "   → Siguiente: ejecuta"
  echo "     '🌐 Paso 2 - Deploy en Vercel.command'"
  echo ""
  open "https://github.com/$GITHUB_USER/$REPO"
else
  echo ""
  echo "╔══════════════════════════════════════════════╗"
  echo "║   ⚠️  Error en el push                     ║"
  echo "╚══════════════════════════════════════════════╝"
  echo ""
  echo "   Si falla la contraseña, necesitas un Token:"
  echo ""
  echo "   1. Ve a: https://github.com/settings/tokens/new"
  echo "   2. Nombre: zgen-deploy"
  echo "   3. Marca: ✅ repo"
  echo "   4. Clic 'Generate token' y cópialo"
  echo "   5. Vuelve a ejecutar este script"
  echo "      y pega el token como contraseña"
  echo ""
  open "https://github.com/settings/tokens/new"
fi

echo ""
read -p "Pulsa ENTER para cerrar..."
