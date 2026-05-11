# zgen Magazine

Plataforma de arte digital donde la gente puede descargar imágenes, pagar e interactuar con el arte.

## Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje:** TypeScript
- **Fuentes:** Google Fonts (Playfair Display + Inter)

## Requisitos

- Node.js 18.17 o superior
- npm / yarn / pnpm

## Inicio rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/zgen-magazine.git
cd zgen-magazine

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores reales

# 4. Iniciar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz (Header + Footer)
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales + Tailwind
│   ├── gallery/
│   │   └── page.tsx        # Galería de arte
│   └── about/
│       └── page.tsx        # Sobre nosotros
└── components/
    ├── Header.tsx           # Navegación principal
    ├── Footer.tsx           # Pie de página
    ├── HeroSection.tsx      # Sección hero de la home
    └── ArtCard.tsx          # Tarjeta de obra de arte
```

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | Verificar código con ESLint |

## Despliegue

### Vercel (recomendado)

1. Conecta tu repositorio de GitHub en [vercel.com](https://vercel.com)
2. Añade las variables de entorno de `.env.example`
3. Vercel desplegará automáticamente en cada push a `main`

### Docker (alternativa)

```bash
docker build -t zgen-magazine .
docker run -p 3000:3000 zgen-magazine
```

## Próximas funcionalidades

- [ ] Integración de pagos con Stripe
- [ ] Sistema de descarga de archivos en alta resolución
- [ ] Autenticación de usuarios (Supabase Auth)
- [ ] Panel de administración para subir obras
- [ ] Sistema de favoritos y colecciones
- [ ] Newsletter

## Contacto

Daniel — [dani.96.lg@gmail.com](mailto:dani.96.lg@gmail.com)
