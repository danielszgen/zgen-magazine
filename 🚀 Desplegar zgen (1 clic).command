#!/bin/bash
PROJECT="/Users/daniels/Documents/Claude/Projects/Daniels zgen Magazine"
cd "$PROJECT" || exit 1
clear
echo "╔══════════════════════════════════════════════╗"
echo "║   🚀  DESPLEGAR ZGEN MAGAZINE              ║"
echo "╚══════════════════════════════════════════════╝"
echo ""
echo "→ Limpiando candados de git huérfanos…"
rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/main.lock .git/refs/heads/master.lock 2>/dev/null
echo "→ Preparando cambios…"
git add -A
git commit -m "feat: hero voxel-Z interactivo + design system Terminal Zgen (verde/glass) en todo el repo" || echo "  (sin cambios nuevos que commitear)"
echo ""
echo "→ Subiendo a GitHub con tus credenciales guardadas…"
git push origin main
PUSH=$?
echo ""
if [ $PUSH -eq 0 ]; then
  echo "✅ Subido a GitHub. Vercel desplegará automáticamente."
  echo "   Abriendo el panel de Vercel para ver el progreso…"
  open "https://vercel.com/dashboard"
else
  echo "⚠️  El push no se completó (probablemente pide login)."
  echo "   Si te pide usuario/contraseña, la contraseña es un TOKEN:"
  echo "   → https://github.com/settings/tokens/new  (marca: repo)"
fi
echo ""
echo "Ya puedes cerrar esta ventana."
