# Posquirúrgicos con Propósito: landing page

Landing page estática para convertir el tráfico de Facebook e Instagram (Meta Ads) en conversaciones de WhatsApp.

- **Stack:** Astro 7, TypeScript estricto, HTML semántico, CSS y JavaScript mínimo.
- **Arquitectura:** JAMstack. Es un sitio 100 % estático, sin backend ni base de datos.
- **Despliegue:** Cloudflare Pages, conectado a este repositorio de GitHub.

## Requisitos

Node 22.23.4 o superior. El proyecto usa Node 24.11.0 (ver `.node-version`).

## Comandos

```powershell
npm install
```

```powershell
npm run dev
```

Abre el sitio en `http://localhost:4321` con recarga automática.

```powershell
npm run build
```

Verifica los tipos (`astro check`) y genera el sitio final en `dist/`.

```powershell
npm run preview
```

Sirve localmente el contenido de `dist/` para probar el resultado final.

## Estructura

```
public/                  Archivos que se publican tal cual
  _headers               Cabeceras de seguridad y caché para Cloudflare Pages
  favicon.svg
  apple-touch-icon.png
  og-image.png           Imagen que se muestra al compartir el enlace
src/
  assets/
    brand/               Logo (logo.png)
    images/              Fotos (hero.jpg, instructora.jpg)
  components/            Una sección de la landing por archivo
    ui/                  Piezas reutilizables: botón de WhatsApp, sección, íconos
  data/
    site.ts              WhatsApp, redes, Meta Pixel, SEO y datos legales
    course.ts            Todos los textos del curso
    types.ts             Tipos de los datos
  layouts/BaseLayout.astro   <head>, SEO, Open Graph y Pixel
  lib/                   Utilidades (enlaces de WhatsApp, imágenes, texto)
  pages/                 index, política de privacidad, 404, robots.txt y sitemap.xml
  scripts/tracking.ts    Parámetros UTM y eventos de clic en WhatsApp
  styles/global.css      Paleta verde agua, tipografía y botones
```

## Cómo modificar el contenido

Todo el contenido está en `src/data/`. No hace falta tocar los componentes.

| Quiero cambiar… | Archivo | Campo |
|---|---|---|
| Número y mensajes de WhatsApp | `site.ts` | `whatsapp` |
| Redes sociales | `site.ts` | `social` |
| Título y descripción para Google y redes | `site.ts` | `title`, `description` |
| Textos del hero, dolores, método y módulos | `course.ts` | `hero`, `pains`, `method`, `modules` |
| Datos de la instructora | `course.ts` | `instructors.people` |
| Modalidad, fechas, duración e inversión | `course.ts` | `details.items[].value` |
| Preguntas frecuentes | `course.ts` | `faq.items` |

Reglas:

- **Palabras resaltadas:** el texto entre asteriscos se muestra en cursiva verde agua. Ejemplo: `'Trabaja con *criterio*'`.
- **Datos pendientes:** un campo en `null` muestra un recuadro naranja que dice «Pendiente». Antes de publicar no debe quedar ninguno visible.
- **Modalidad e inversión:** mientras `value` sea `null`, se muestra el texto `fallback` que invita a escribir por WhatsApp. Cuando el dato esté confirmado, escríbelo en `value`.
- **Bonos:** se muestran solo si `bonuses.confirmed` es `true`.
- **Certificación:** se muestra solo si `certification` deja de ser `null`.
- **Testimonios:** la sección aparece sola cuando `testimonials.items` tiene al menos uno. Usa solo testimonios reales.
- **Varias instructoras:** agrega otro objeto a `instructors.people`.

## Imágenes

Coloca los archivos con estos nombres. Astro los optimiza (WebP y varios tamaños) al compilar. Si un archivo no existe, la página usa un diseño alternativo y no se rompe.

| Imagen | Ruta | Recomendación |
|---|---|---|
| Logo | `src/assets/brand/logo.png` | PNG con fondo transparente, al menos 88 px de alto |
| Foto principal | `src/assets/images/hero.jpg` | Vertical 4:5, al menos 900 px de ancho |
| Foto de la instructora | `src/assets/images/instructora.jpg` | Vertical 4:5, al menos 640 px de ancho |
| Imagen para redes | `public/og-image.png` | 1200 × 630 px. La actual es provisional |
| Favicon | `public/favicon.svg` y `public/apple-touch-icon.png` | Reemplázalos cuando el logo esté listo |

Para usar otro nombre de archivo, cambia la ruta en `site.ts` (`logo`) o en `course.ts` (`hero.image`, `instructors.people[].photo`).

Evita fotos de cirugías y de antes y después: Meta revisa la landing y puede rechazar los anuncios.

## WhatsApp, UTM y medición

### Número

En `site.ts`, escribe `whatsapp.phone` con el código de país seguido del número, solo dígitos (por ejemplo `'57XXXXXXXXXX'`). Mientras sea `null`, los botones abren WhatsApp para que la persona elija el contacto, lo cual sirve solo para pruebas.

### Referencia de campaña

Si la URL trae `utm_campaign` o `utm_content`, el mensaje de WhatsApp termina con `Ref: campaña / anuncio`. Así se sabe qué anuncio trajo a cada persona.

En Meta Ads, usa estos parámetros de URL:

```
utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

### Meta Pixel

Elige **una sola** de estas opciones; si usas las dos, los eventos se duplican.

- **Opción A, en el código:** escribe el ID en `site.ts` (`metaPixelId`). La página envía `PageView` al cargar y `Contact` en cada clic de WhatsApp, con `content_name` igual a la ubicación del botón (`hero`, `modulos`, `final`, etc.).
- **Opción B, con Cloudflare Zaraz** (requiere que el dominio esté en Cloudflare): deja `metaPixelId` en `null`, agrega la herramienta «Facebook Pixel» en Zaraz y crea un activador de clic con el selector CSS `a[data-whatsapp]` para el evento `Contact`.

Si existe `window.dataLayer` (por ejemplo, con Google Tag Manager), cada clic también envía el evento `whatsapp_click` con la ubicación y los UTM.

## Despliegue en Cloudflare Pages

1. Sube los cambios a GitHub.
2. En Cloudflare entra a **Workers & Pages → Create → Pages → Connect to Git** y elige este repositorio.
3. Configura:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Variable de entorno:** `SITE_URL` con el dominio final, por ejemplo `https://www.tudominio.com`
4. Rama de producción: `main`. Cada push a `main` publica el sitio, y las demás ramas generan una URL de vista previa.

La versión de Node se toma de `.node-version`. Las cabeceras de seguridad y caché están en `public/_headers`.

## Dominio personalizado

1. En el proyecto de Pages abre **Custom domains → Set up a custom domain** y escribe el dominio.
2. Si el DNS del dominio está en Cloudflare, el registro se crea solo. Si no, crea un `CNAME` que apunte a `<tu-proyecto>.pages.dev`. Un dominio raíz (sin `www`) necesita que los nameservers estén en Cloudflare.
3. Actualiza `SITE_URL` con el dominio final y vuelve a desplegar, para que el sitemap, el canonical y Open Graph usen la URL correcta.

## Checklist de publicación y pruebas

### Contenido

- [ ] Número de WhatsApp en `site.ts`.
- [ ] Logo, foto principal y foto de la instructora en `src/assets/`.
- [ ] Nombre, profesión y biografía reales de la instructora.
- [ ] Modalidad, fechas, duración e inversión confirmadas, o el texto que invita a escribir por WhatsApp.
- [ ] Bonos y certificación activados solo si están confirmados.
- [ ] Responsable y correo de contacto en `site.ts` (`legal`).
- [ ] Enlaces de Instagram y Facebook.
- [ ] Imagen final para redes (`public/og-image.png`).
- [ ] Ningún recuadro «Pendiente» visible en la página.

### Técnico

- [ ] `npm run build` termina sin errores.
- [ ] Se ve bien en 360 px, 390 a 430 px, tablet y escritorio.
- [ ] Abre el enlace dentro de Instagram y de Facebook (envíatelo por mensaje directo) y toca cada botón de WhatsApp.
- [ ] Abre `/?utm_campaign=prueba&utm_content=anuncio1` y confirma que el mensaje de WhatsApp termina con `Ref: prueba / anuncio1`.
- [ ] En el Administrador de eventos de Meta aparecen `PageView` y `Contact`.
- [ ] Lighthouse móvil con 90 o más en las cuatro categorías.
- [ ] La vista previa del enlace se ve bien en el Depurador de enlaces de Facebook y en WhatsApp.
- [ ] `https://tu-dominio/robots.txt` y `https://tu-dominio/sitemap.xml` muestran el dominio real.
- [ ] La política de privacidad abre desde el footer.
