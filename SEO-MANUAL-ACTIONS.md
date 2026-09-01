# Acciones de SEO que no se pueden hacer desde el código

Lo técnico ya está implementado. Esto es lo que depende de cuentas, credenciales o información
que solo vos tenés.

Ordenado por impacto real, no por facilidad.

---

## 1. Google Business Profile

**Impacto: alto.** Para "diseño web San José" o "páginas web Costa Rica" con intención local,
el perfil de Google Business pesa más que cualquier cosa que hagamos en el sitio.

**Dónde:** <https://business.google.com>

- [ ] Reclamar y **verificar** el perfil. Sin verificar no compite.
- [ ] Nombre: `HacksinCodigos` — exactamente igual que en el sitio, sin agregar palabras clave
      (eso es motivo de suspensión).
- [ ] Categoría principal: **Diseñador de sitios web**.
- [ ] Categorías secundarias: *Servicio de informática*, *Agencia de marketing*.
- [ ] Teléfono: `+506 8984 0662` — el mismo del sitio, sin variantes.
- [ ] Sitio web: `https://hacksincodigos.com`
- [ ] Horario: lunes a viernes, 8:00–18:00. El mismo que dice el sitio.
- [ ] Área de servicio: si trabajás sin local abierto al público, configurá "negocio de servicio
      a domicilio" y listá las provincias en lugar de una dirección.
- [ ] Descripción: usá el texto de `/paginas-web-costa-rica/` como base.
- [ ] Fotos: logo, capturas de proyectos reales, foto del equipo si querés. Las fotos propias
      rinden más que las de banco.
- [ ] Publicar novedades cada tanto (un proyecto nuevo, un servicio). El perfil activo se
      posiciona mejor.

### Reseñas

- [ ] Pedirle reseña a clientes reales — Grupo Novo, La Casita del Bebé, RyV Dental, Carlouis,
      Costa Rica Realty PRO. Ya trabajaron con vos.
- [ ] Responder **todas**, también las malas.
- [ ] **Nunca comprar reseñas.** Google las detecta y la penalización es peor que no tener
      ninguna.

> **Por qué el sitio no muestra estrellas:** el Schema no declara `aggregateRating` ni `review`
> porque no hay reseñas verificables detrás. Publicar ratings inventados es motivo de acción
> manual. Cuando tengas reseñas reales en Google, se pueden mostrar correctamente — decime y lo
> implemento.

---

## 2. Analítica — hoy no hay ninguna

**Impacto: alto**, aunque indirecto.

Auditamos el sitio actual y **no tiene ninguna herramienta de medición instalada**: ni Google
Analytics, ni Tag Manager, ni Search Console vinculado, ni píxel de Meta. No hay forma de saber
cuánta gente entra ni de dónde.

**Recomendación: Cloudflare Web Analytics.**
Gratis, un clic en el mismo panel donde ya vas a estar, sin cookies (no necesitás banner de
consentimiento), sin impacto en la velocidad.

- [ ] Activarla en Cloudflare → Analytics → Web Analytics

Si preferís Google Analytics 4, se puede — pero implica banner de cookies, actualizar la
política de privacidad y agregar el dominio a la CSP de `_headers`. Decime cuál querés y lo dejo
configurado.

- [ ] Vincular Search Console con Analytics, sea cual sea la que elijas.

---

## 3. Consistencia de datos (NAP)

**Impacto: medio-alto.** Google confía más en un negocio cuyos datos coinciden en todos lados.

Datos oficiales, tal como están en el sitio:

| Campo | Valor |
| --- | --- |
| Nombre | HacksinCodigos |
| Teléfono | +506 8984 0662 |
| WhatsApp | wa.me/50689840662 |
| Instagram | @hacksincodigos |
| Sitio | https://hacksincodigos.com |
| Horario | Lunes a viernes, 8:00–18:00 |

- [ ] Revisar que Instagram tenga el enlace al sitio y el mismo teléfono en la bio
- [ ] Revisar la página de Facebook, si existe
- [ ] Revisar cualquier directorio donde ya estés listado

**Pendiente de decisión:** no hay correo electrónico público ni dirección física. Ver el
[paso 7 de MANUAL-STEP-BY-STEP.md](MANUAL-STEP-BY-STEP.md#paso-7--decisiones-que-necesito-que-tomés).

---

## 4. Directorios costarricenses

**Impacto: medio.** Enlaces legítimos y señales locales.

- [ ] Cámara de Comercio de Costa Rica
- [ ] Cámara de Industrias, si aplica
- [ ] CAMTIC (Cámara de Tecnologías de Información y Comunicación) — es el gremio directo
- [ ] Directorios locales de negocios
- [ ] Perfil de empresa en LinkedIn

Regla en todos: **exactamente el mismo nombre, teléfono y URL** que en la tabla de arriba.

> **Lo que NO hay que hacer:** comprar paquetes de enlaces, contratar servicios de "1000
> backlinks", o inscribirse en directorios que existen solo para enlazar. Eso funciona unas
> semanas y después hunde el dominio.

---

## 5. Atribución en los sitios de clientes

**Impacto: medio-alto.** Son los enlaces más legítimos que podés conseguir: sitios reales, de
clientes reales, con una relación verificable.

El plan completo, con el texto sugerido para cada cliente y los mensajes listos para enviar,
está en [SEO-BACKLINK-OUTREACH.md](SEO-BACKLINK-OUTREACH.md).

---

## 6. Contenido — el siguiente paso natural

El blog quedó montado con tres artículos (los que ya estaban dentro de la portada, ahora como
páginas propias). Agregar uno nuevo es agregar una entrada a `src/data/articles.ts`.

Temas con demanda real de búsqueda en Costa Rica, en orden de prioridad:

1. Cómo crear una página web en Costa Rica (paso a paso)
2. Cuánto cuesta una tienda online en Costa Rica
3. WordPress vs desarrollo a medida: cuál conviene
4. Páginas web para PYMES en Costa Rica
5. Diseño web para restaurantes
6. Diseño web para clínicas dentales
7. Diseño web para abogados y bufetes
8. Cómo aparecer en Google Maps con tu negocio

Regla: **un artículo bueno vale más que diez rellenos**. Google lleva años premiando
profundidad y castigando el contenido escrito para el buscador.

---

## 7. Lo que ya quedó hecho (no hace falta que hagas nada)

Para que no lo busqués:

- ✅ `<html lang="es-CR">` — antes decía `en-US`
- ✅ `og:locale` en `es_CR` — antes `en_US`
- ✅ Title, meta description y H1 únicos en las 39 páginas
- ✅ Canonical en todas
- ✅ Open Graph y Twitter Cards completos, con imagen que ya no da 404
- ✅ Schema: `ProfessionalService`, `WebSite`, `WebPage`, `Service`, `Product`,
     `BreadcrumbList`, `FAQPage`, `BlogPosting`, `ItemList` — todo con datos reales
- ✅ Sitemap XML generado en cada build, solo con URLs indexables
- ✅ `robots.txt` con referencia al sitemap
- ✅ Redirecciones 301 desde todas las URLs de WordPress
- ✅ Enlazado interno: home → servicios → proyectos → tienda → blog → contacto
- ✅ Los 17 productos dejaron de ser páginas huérfanas
- ✅ Rendimiento: fuera jQuery, Astra, Elementor, WooCommerce y dos familias tipográficas que
     no se usaban
- ✅ Tipografías autoalojadas: dos orígenes externos menos en la ruta crítica
- ✅ Imágenes en WebP con `width`/`height` declarados (evita saltos de layout)
- ✅ Accesibilidad: `alt` en todas las imágenes, foco visible, `aria-*` en menús y acordeones,
     cierre del menú móvil con Escape

---

## URLs nuevas para inspeccionar en Search Console

Agregadas el 1 de setiembre de 2026 junto con el servicio de software a la medida.
Pegalas en **Inspección de URLs → Solicitar indexación** (una por día alcanza; el
sitemap hace el trabajo de fondo):

```
https://hacksincodigos.com/software-a-la-medida-costa-rica/
https://hacksincodigos.com/blog/crm-empresarial-caso-grupo-novo/
```

También conviene volver a solicitar indexación de estas dos, porque cambiaron:

```
https://hacksincodigos.com/proyectos/grupo-novo/
https://hacksincodigos.com/
```
