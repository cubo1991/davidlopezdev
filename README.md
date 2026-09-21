# davidlopezdev

Sitio personal de David López, desarrollador full-stack (Mendoza, Argentina): proyectos, servicios, blog y formulario de contacto. Producción: https://davidlopezdev.com.ar

## Stack

- Next.js 15 (App Router) + React 18 + TypeScript
- CSS propio (`src/app/globals.css`), fuente Space Grotesk vía `next/font`
- Formulario de contacto con EmailJS (`emailjs-com`)
- Blog: los posts se leen de una hoja de Google Sheets publicada como CSV (`src/app/data/sheets.ts`) y se renderizan con `react-markdown` (sin HTML crudo)
- SEO: `sitemap.ts`, `robots.ts`, imagen Open Graph estática en `public/og.png` (1200x630), JSON-LD `Person` en `layout.tsx`

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Variables de entorno

No hay variables de entorno: el sitio no lee ningún `.env`. Los valores están hardcodeados en el código:

- `src/app/sections/Contact.tsx`: service, template y public key de EmailJS (las public keys de EmailJS son públicas por diseño).
- `src/app/data/sheets.ts`: URL del CSV publicado de Google Sheets con los posts.

Si querés sacarlos del código, pasalos a `NEXT_PUBLIC_*` (EmailJS) y a una variable de servidor (`SHEET_CSV_URL`).

## Estructura

```
src/app/
  page.tsx, about/, proyectos/, servicios/, contacto/, blog/   rutas
  sections/        secciones de cada página
  data/            proyectos, servicios y lectura del blog
  components/      navbar y popup de éxito
```

Los proyectos (`src/app/data/projectsData.ts`) llevan stack y rol; si agregás uno, verificá el stack contra el repo real.
