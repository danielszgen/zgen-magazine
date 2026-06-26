# hero-lab — Intro motion (prototipo)

Prototipo autónomo de la intro/hero de **Daniels zgen magazine**.

## Cómo verlo
- **Local:** `npm run dev` → abre `http://localhost:3000/hero-lab/`
- **Vercel:** en el deploy de la branch `hero`, ruta `/hero-lab/`
- O abre directamente `public/hero-lab/index.html` en el navegador.

## Qué es
Intro 3D (Three.js) "el código crea la creación":

1. **Construir** — el código flota como nube; con el **láser** (cursor) lo barres y la
   figura se condensa (imán). Barra de progreso + flashes en la transición.
2. **Mensaje** — al completarse, las partículas-glifo **forman las palabras** (mini-letras)
   y se resuelve un **texto sólido** legible (Roboto, verde) con halo de código detrás.
3. **Avanzar** — sin botón/reloj: vuelves a **barrer** para pasar a la siguiente figura/frase.
4. **Hero Z** — al final, el logo **Z** se compone en código con sus colores naturales;
   **scroll** para adentrarte + **arrastrar** para orbitar.

Frases (propuesta de valor): ver `SCENES` en `index.html`.

## Estado
Prototipo de diseño/motion en iteración. La versión de producción será un componente
React (App Router) integrado en la home. Assets de muestra: `man.jpg`, `woman.jpg`,
`physical.jpg` (versión física), `zlogo.png` (logo voxel). Tipografías: Roboto + JetBrains
Mono (Google Fonts); Three.js r128 (cdnjs).
