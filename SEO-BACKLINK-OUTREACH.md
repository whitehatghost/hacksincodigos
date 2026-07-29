# Plan de atribución con clientes

Los enlaces desde sitios de clientes reales son los mejores que podés conseguir: dominios
legítimos, relación verificable, contexto relevante. Es lo contrario a comprar enlaces.

> **Nadie fue contactado.** Este documento es un plan; los mensajes están escritos para que los
> mandés vos cuando lo veás oportuno.

---

## Cómo funciona el pie de atribución

El texto va en el pie de página del sitio del cliente, junto al copyright. Es la ubicación
habitual, la que Google espera, y no molesta a nadie.

```html
<p>Sitio web desarrollado por
  <a href="https://hacksincodigos.com" rel="noopener">HacksinCodigos</a>
</p>
```

**Reglas:**

- Un solo enlace por sitio. Repetirlo en cada página del pie ya lo pone en todas.
- Anchor **variado** entre clientes. Seis sitios con el mismo texto exacto parece coordinado —
  porque lo está — y pierde valor.
- **Sin `nofollow`** — es una atribución legítima, no publicidad pagada.
- Nunca insistir si el cliente dice que no. Un enlace no vale la relación.

---

## Por cliente

### 1. Grupo Novo — `gruponovocr.com`

| | |
| --- | --- |
| Proyecto | E-commerce de productos de construcción |
| Caso | [/proyectos/grupo-novo/](https://hacksincodigos.com/proyectos/grupo-novo/) |
| Anchor sugerido | `HacksinCodigos` |
| Texto | Sitio web desarrollado por HacksinCodigos |
| Ubicación | Pie de página, junto al copyright |
| Razón SEO | Dominio de comercio activo, sector distinto al nuestro — enlace natural y temáticamente limpio |

### 2. La Casita del Bebé — `lacasitadelbebecr.com`

| | |
| --- | --- |
| Proyecto | Tienda online con carrito y pagos |
| Caso | [/proyectos/la-casita-del-bebe/](https://hacksincodigos.com/proyectos/la-casita-del-bebe/) |
| Anchor sugerido | `desarrollo web en Costa Rica` |
| Texto | Tienda en línea desarrollada por HacksinCodigos, desarrollo web en Costa Rica |
| Ubicación | Pie de página |
| Razón SEO | Anchor con la palabra clave objetivo, en contexto de e-commerce real |

### 3. Carlouis — `carlouis.net`

| | |
| --- | --- |
| Proyecto | Tienda de salsas artesanales gourmet |
| Caso | [/proyectos/carlouis/](https://hacksincodigos.com/proyectos/carlouis/) |
| Anchor sugerido | `diseño y desarrollo web` |
| Texto | Diseño y desarrollo web por HacksinCodigos |
| Ubicación | Pie de página |
| Razón SEO | Anchor de marca + servicio; dominio `.net` distinto al resto, diversifica el perfil |

### 4. Costa Rica Realty PRO — `costaricarealtypro.com`

| | |
| --- | --- |
| Proyecto | Portal inmobiliario |
| Caso | [/proyectos/costa-rica-realty-pro/](https://hacksincodigos.com/proyectos/costa-rica-realty-pro/) |
| Anchor sugerido | `HacksinCodigos Costa Rica` |
| Texto | Desarrollado por HacksinCodigos Costa Rica |
| Ubicación | Pie de página |
| Razón SEO | Refuerza la asociación marca + país; sector inmobiliario con buena autoridad local |

### 5. RyV Dental — `ryvdental.com`

| | |
| --- | --- |
| Proyecto | Sitio de clínica dental con solicitud de cita |
| Caso | [/proyectos/ryv-dental/](https://hacksincodigos.com/proyectos/ryv-dental/) |
| Anchor sugerido | `páginas web en Costa Rica` |
| Texto | Sitio web creado por HacksinCodigos — páginas web en Costa Rica |
| Ubicación | Pie de página |
| Razón SEO | Sector salud, dominios con buena confianza; anchor con la palabra clave principal |

### 6. Efecto Poker — `efectopoker.com`

⚠️ **En espera.** El dominio no respondió al verificarlo el 28/07/2026. No se enlaza desde el
portafolio hasta confirmar que sigue activo. Si vuelve a estar en línea:

| | |
| --- | --- |
| Anchor sugerido | `desarrollo de plataformas web` |
| Texto | Plataforma desarrollada por HacksinCodigos |

---

## Resumen de anchors

Diversificado a propósito. Ningún texto se repite.

| Cliente | Anchor |
| --- | --- |
| Grupo Novo | HacksinCodigos |
| La Casita del Bebé | desarrollo web en Costa Rica |
| Carlouis | diseño y desarrollo web |
| Costa Rica Realty PRO | HacksinCodigos Costa Rica |
| RyV Dental | páginas web en Costa Rica |
| Efecto Poker *(en espera)* | desarrollo de plataformas web |

---

## Mensajes listos para enviar

### Para clientes cuyo sitio mantenemos nosotros

> Hola [nombre], ¿cómo va todo?
>
> Le estoy dando una repasada al sitio y quería consultarte una cosa. Actualizamos nuestra
> página y armamos una sección donde mostramos los proyectos que hemos hecho. El de ustedes
> quedó acá: [enlace al caso]
>
> Si te parece bien, me gustaría agregar una línea chiquita en el pie de página del sitio de
> ustedes que diga "Sitio web desarrollado por HacksinCodigos", con enlace a nuestra página. Es
> lo normal en el gremio y ayuda a que otros negocios nos encuentren.
>
> Si preferís que no, no hay ningún problema, se queda tal cual está.
>
> ¡Saludos!

### Para clientes que administran su propio sitio

> Hola [nombre], ¿todo bien?
>
> Te cuento: renovamos la página de HacksinCodigos y ahora tenemos una sección de proyectos.
> Incluimos el de ustedes acá: [enlace al caso]
>
> Le puse enlace a su sitio, así que también les suma a ustedes.
>
> Si te parece justo, ¿podrías agregar en el pie de página de su sitio algo como
> "[texto de atribución]" con enlace a hacksincodigos.com? Es una línea nomás. Si querés te paso
> el código listo para pegar y no tenés que hacer nada más.
>
> Y si no te calza, tranquilo, no pasa nada.
>
> Un abrazo.

### Fragmento para pasarle al cliente

```html
<!-- Pegar en el pie de página, junto al copyright -->
<p style="font-size:0.85em;opacity:0.7;margin-top:0.5rem">
  Sitio web desarrollado por
  <a href="https://hacksincodigos.com" rel="noopener">HacksinCodigos</a>
</p>
```

---

## Lo que no vamos a hacer

Por si alguien lo sugiere alguna vez:

- ❌ Comprar enlaces o paquetes de "backlinks"
- ❌ Redes privadas de sitios creados para enlazarse entre sí
- ❌ Intercambios masivos de enlaces
- ❌ Comentarios en blogs ajenos con el enlace metido
- ❌ Directorios que existen solo para vender enlaces
- ❌ Poner la atribución sin permiso del cliente
- ❌ Usar el mismo anchor exacto en todos los sitios

Todo eso da resultados unas semanas y después cuesta meses de recuperación. No vale la pena.

---

## Seguimiento

| Cliente | Contactado | Respuesta | Enlace puesto | Verificado |
| --- | --- | --- | --- | --- |
| Grupo Novo | ☐ | | ☐ | ☐ |
| La Casita del Bebé | ☐ | | ☐ | ☐ |
| Carlouis | ☐ | | ☐ | ☐ |
| Costa Rica Realty PRO | ☐ | | ☐ | ☐ |
| RyV Dental | ☐ | | ☐ | ☐ |
| Efecto Poker | ☐ *(en espera)* | | ☐ | ☐ |

Para verificar que el enlace quedó indexado, buscá en Google:
`site:dominiodelcliente.com hacksincodigos`
