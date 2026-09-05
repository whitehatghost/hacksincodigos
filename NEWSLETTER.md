# Boletín mensual

Un correo al mes a clientes y suscriptores, con lo nuevo del sitio, un caso real
y una recomendación práctica.

**No cuesta nada.** Se manda a mano desde Zoho Mail con los destinatarios en
copia oculta. Con la cantidad de correos que hay hoy, eso alcanza y sobra: no
hace falta contratar ninguna plataforma de envío.

---

## Cómo mandar la edición del mes

Toma unos diez minutos.

### 1. Escribir la edición

Abrí [`src/data/newsletter.ts`](src/data/newsletter.ts) y agregá una entrada al
arreglo `ediciones`, copiando la del mes anterior:

```ts
{
  mes: '2026-10',
  asunto: 'Lo que decide si lo abren — que sea concreto',
  preheader: 'La línea que se ve junto al asunto en la bandeja.',
  intro: 'Dos o tres oraciones. Por qué te escribimos este mes.',
  servicios: ['slug-del-catalogo'],       // de src/data/shop.ts
  articulos: ['slug-del-articulo'],       // de src/data/articles.ts
  proyectos: ['slug-del-proyecto'],       // de src/data/projects.ts
  consejo: { titulo: '...', texto: '...' },
  despedida: '...',
},
```

Los títulos, resúmenes e imágenes salen solos del sitio. Solo se escriben a mano
la introducción, el consejo y la despedida — así el boletín **nunca dice algo que
el sitio no diga**.

### 2. Verla

```bash
npm run dev
```

Y abrir `http://localhost:4321/newsletter/edicion/2026-10/`.

### 3. Copiarla al correo

1. En esa página: **Ctrl+A** y **Ctrl+C**.
2. En Zoho Mail, redactar un correo nuevo y **Ctrl+V**. El formato se conserva.
3. **Asunto:** el mismo que pusiste en `asunto`.
4. **Para:** tu propia dirección.
5. **CCO (copia oculta):** los correos de
   `newsletter/contactos/suscriptores.csv`.

> **Siempre CCO, nunca "Para" ni "CC".** En copia normal cada destinatario ve el
> correo de todos los demás — eso es filtrar el dato de un cliente a los otros.

### 4. Antes de darle enviar

- [ ] Mandátelo primero **solo a vos** y abrilo en el celular.
- [ ] Que los enlaces abran donde deben.
- [ ] Que el logo se vea (algunos clientes bloquean imágenes hasta que se pide
      mostrarlas — por eso el correo se entiende igual sin ellas).
- [ ] Que el asunto no pase de unos 50 caracteres, o se corta en el celular.

### 5. Después

Al que responda **BAJA**, borrale la línea del CSV. Ese es todo el trámite.

---

## La lista de destinatarios

Vive en `newsletter/contactos/suscriptores.csv`, que **está en `.gitignore`**.

El repositorio es público en GitHub. Una lista de correos ahí la levanta
cualquier scraper en cuestión de días y termina en spam. Por eso no se sube, y
por eso no hay que moverla a ninguna carpeta que sí se suba.

Si trabajás desde otra computadora, copiá el archivo a mano — no lo commitees.

### A quién se le puede mandar

- **Clientes actuales y anteriores.** Hay una relación comercial de por medio y
  el contenido es sobre los servicios que ya contrataron. Es lo normal.
- **Quien lo pidió** por WhatsApp.

A nadie más. Nada de listas compradas ni correos levantados de directorios: además
de ser una mala práctica, hunde la reputación del dominio y hace que los correos
que sí importan —una cotización, una factura— terminen en spam.

---

## Cuándo dejar de mandarlo a mano

La copia oculta deja de servir cerca de los **40 o 50 destinatarios**:

- Los proveedores de correo empiezan a mirar con desconfianza los envíos con
  muchos destinatarios ocultos.
- Gestionar bajas a mano se vuelve un trabajo.
- No hay forma de saber quién abrió ni quién hizo clic.

Ahí conviene pasar a **Zoho Campaigns**, que tiene plan gratuito y ya está
previsto en el código:

1. Crear la cuenta y la lista, e importar el CSV.
2. Verificar el dominio y configurar SPF y DKIM (Zoho guía el proceso). Sin eso
   los correos caen en spam.
3. Contactos → Formularios de registro → *Insertar en el sitio web*.
4. Copiar el `action` del formulario y sus campos ocultos a la constante `zoho`
   de [`src/data/newsletter.ts`](src/data/newsletter.ts).
5. Autorizar ese host en la directiva `form-action` de la CSP, en
   [`public/_headers`](public/_headers). Sin esto el navegador bloquea el envío
   del formulario y no se ve ningún error.
6. Cambiar `envio.metodo` a `'zoho-campaigns'`.

Si se llega a ese punto habrá que volver a poner un bloque de alta en el sitio:
hoy no hay ninguno, porque el boletín es un correo y no una sección de la web.

> **Nunca** pongas en el repositorio un token de API ni una contraseña de Zoho.
> Los datos del formulario sí pueden ir: son públicos por diseño, quedan a la
> vista en el HTML de cualquier sitio que use Zoho Campaigns.

---

## Qué toca el boletín en el sitio

| Archivo | Para qué |
| --- | --- |
| [`src/data/newsletter.ts`](src/data/newsletter.ts) | Ediciones, la promesa al suscriptor y la configuración de envío |
| [`src/pages/newsletter/edicion/[mes].astro`](src/pages/newsletter/edicion/) | El HTML del correo — `noindex` y fuera del sitemap |
| [`src/pages/politica-de-privacidad.astro`](src/pages/politica-de-privacidad.astro) | Qué se hace con el correo del suscriptor |

---

## Reglas del contenido

Las mismas que rigen el resto del sitio:

- **Nada de cifras inventadas.** Ni resultados de clientes sin autorización
  escrita de ese cliente.
- **Nada de precios cerrados.** El catálogo se cotiza caso por caso; el boletín
  no puede contradecirlo.
- **Un cliente se menciona solo si aceptó** que se hable de su proyecto.
- **La recomendación del mes tiene que servir aunque el que lee no contrate
  nada.** Es lo que hace que abran el siguiente.
