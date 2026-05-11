#!/bin/bash

PROJECT="/Users/daniels/Documents/Claude/Projects/Daniels zgen Magazine"

cd "$PROJECT"

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
  echo "📦 Instalando dependencias por primera vez..."
  npm install
fi

echo ""
echo "🧬 Iniciando zgen magazine..."
echo "🌐 Abriendo en http://localhost:3000"
echo ""
echo "   Pulsa Ctrl+C para detener el servidor."
echo ""

# Abrir el navegador tras 3 segundos
sleep 3 && open http://localhost:3000 &

npm run dev
