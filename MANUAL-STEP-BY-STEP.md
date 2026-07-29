# Pasos que tenés que hacer vos

Todo lo que se podía automatizar ya está hecho. Lo que queda acá necesita tus credenciales o
son decisiones que solo vos podés tomar.

**El orden importa.** No cambiés el DNS (paso 4) hasta haber revisado la vista previa (paso 3).
Mientras tanto el sitio en EasyWP sigue funcionando como respaldo.

---

## Paso 1 — Conectar el repositorio a Cloudflare Pages

**Dónde:** <https://dash.cloudflare.com> → Workers & Pages → Create → Pages → Connect to Git

1. Autorizá Cloudflare en GitHub y elegí `whitehatghost/hacksincodigos`.
2. Rama de producción: `main`.
3. Configuración de build:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: vacío
4. En **Environment variables**, agregá:
   - `NODE_VERSION` = `20`
5. **Save and Deploy.**

La primera build tarda 2–3 minutos. Al terminar tenés una URL tipo
`hacksincodigos.pages.dev`.

> Si la build falla, el log dice exactamente qué pasó. Lo más común es haber olvidado
> `NODE_VERSION`.

---

## Paso 2 — Impedir que Google indexe el dominio de pruebas

**Por qué:** si `hacksincodigos.pages.dev` se indexa, compite con tu dominio real por el mismo
contenido. Es contenido duplicado y perjudica.

**Dónde:** el proyecto en Cloudflare Pages → Settings → **Redirects** (o Rules → Redirect Rules)

Creá una regla que redirija todo lo que llegue a `*.pages.dev` hacia `hacksincodigos.com` con un
301. Se puede dejar para después del paso 4, pero **no lo olvidés**.

---

## Paso 3 — Revisar la vista previa antes de tocar el DNS

Abrí la URL `.pages.dev` y comprobá con calma:

- [ ] La portada se ve igual que hacksincodigos.com
- [ ] La escena 3D del hero carga
- [ ] El fondo de partículas se mueve
- [ ] El menú móvil abre y **se ven los 7 enlaces** (en el sitio viejo solo salían 3)
- [ ] Al tocar un enlace del menú móvil, el menú se cierra
- [ ] El selector de idioma cambia el texto y al volver a español queda completo
- [ ] El formulario de contacto abre WhatsApp con los datos
- [ ] El botón flotante de WhatsApp funciona
- [ ] `/shop/` muestra los 17 servicios con sus precios
- [ ] Una ficha de producto abre WhatsApp con el nombre y el precio correctos
- [ ] Los enlaces "Visitar sitio" del portafolio abren los sitios de los clientes
- [ ] Se ve bien en tu celular

Si algo no cuadra, decímelo antes de seguir.

---

## Paso 4 — Cambiar el DNS

> ⚠️ **Este es el punto de no retorno del día.** A partir de acá el tráfico deja de ir a EasyWP.
> Es reversible (volvés a apuntar el DNS), pero la propagación tarda.
>
> **No lo hagas hasta estar conforme con el paso 3.**

**Antes de empezar:** anotá la configuración DNS actual de EasyWP. Sacale captura.

**Dónde:** proyecto en Cloudflare Pages → **Custom domains** → Set up a custom domain

1. Agregá `hacksincodigos.com`.
2. Agregá también `www.hacksincodigos.com`.
3. Cloudflare te dice qué registros crear:
   - Si el dominio **ya está en Cloudflare**: lo configura solo, en un clic.
   - Si el dominio está en otro proveedor: te da un `CNAME` que hay que crear allá.
4. El certificado SSL se emite solo en unos minutos.

**No des de baja la cuenta de EasyWP todavía.** Dejala un mes por si hay que volver atrás.

---

## Paso 5 — Google Search Console

**Dónde:** <https://search.google.com/search-console>

1. Si aún no tenés la propiedad, creala para `hacksincodigos.com` (verificación por DNS es la
   más estable).
2. **Sitemaps** → enviar: `https://hacksincodigos.com/sitemap-index.xml`
3. **Inspección de URL** → probar `https://hacksincodigos.com/` → "Solicitar indexación".
4. Repetir la solicitud para `/paginas-web-costa-rica/` y `/shop/`.
5. Durante el primer mes, revisar semanalmente **Cobertura** y **Rendimiento**. Lo que hay que
   vigilar está en [URL-MAP.md](URL-MAP.md#6-qué-revisar-después-del-cambio-de-dns).

---

## Paso 6 — Google Business Profile

Esto es lo de mayor impacto para búsquedas locales y no se puede hacer desde el código.

**Dónde:** <https://business.google.com>

Detalle completo en [SEO-MANUAL-ACTIONS.md](SEO-MANUAL-ACTIONS.md#1-google-business-profile).

---

## Paso 7 — Decisiones que necesito que tomés

Estas quedaron pendientes porque solo vos tenés la información:

### 7.1 Correo de contacto

El sitio solo publica el WhatsApp `+506 8984 0662`. **No encontré ninguna dirección de correo
en el sitio actual**, así que no inventé una.

Si querés que aparezca un correo (`hola@hacksincodigos.com`, por ejemplo), decime cuál y lo
agrego al pie de página, a la página de contacto y al Schema. Un correo con dominio propio
también suma confianza para Google.

### 7.2 Ubicación pública

Hoy el sitio dice "Costa Rica" sin más detalle, y el Schema declara el país como área de
servicio, sin dirección postal — porque no hay ninguna publicada.

Si tenés una dirección física o al menos un cantón que quieras mostrar, decímelo: para SEO local
una ubicación concreta pesa bastante. Si preferís no publicarla, se queda como está (es una
opción perfectamente válida para un negocio remoto).

### 7.3 Analítica

**El sitio actual no tiene ninguna herramienta de medición instalada.** Ni Analytics, ni Search
Console vinculado, ni píxel. Estás trabajando a ciegas.

Mi recomendación: **Cloudflare Web Analytics**. Es gratis, se activa con un clic en el mismo
panel, no usa cookies (no necesitás banner de consentimiento) y no ralentiza el sitio. Decime y
te dejo listo el fragmento y la CSP.

Si preferís Google Analytics 4, también se puede — pero implica banner de cookies y actualizar
la política de privacidad.

### 7.4 efectopoker.com no responde

Al verificar los sitios del portafolio el 28/07/2026, `efectopoker.com` no respondió. Los otros
cinco están bien.

El caso sigue en el portafolio, pero **sin enlace externo**, para no dejar un link roto.
Comprobá si el sitio sigue activo:
- Si funciona → decime y le devuelvo el enlace.
- Si el cliente ya no lo tiene → decime si lo dejamos así o lo sacamos del portafolio.

---

## Paso 8 — Después de un mes en producción

- [ ] Verificar en Search Console que no aparecieron errores de cobertura
- [ ] Dar de baja el hosting de EasyWP (ahorro directo)
- [ ] Guardar una copia del respaldo de WordPress por si acaso
- [ ] Empezar el plan de atribución con clientes ([SEO-BACKLINK-OUTREACH.md](SEO-BACKLINK-OUTREACH.md))
