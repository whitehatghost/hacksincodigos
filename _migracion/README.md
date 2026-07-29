# Material de referencia de la migración

Esta carpeta guarda la copia del sitio original de WordPress que se usó como fuente de verdad
durante la migración.

**No se versiona.** `_migracion/mirror/` está en `.gitignore` porque son 114 archivos de medios
que ya viven procesados en `public/images/`. Duplicarlos en el repositorio solo lo haría pesado
sin aportar nada.

## Para qué sirve

`scripts/prepare-assets.mjs` lee de aquí para regenerar las imágenes de producto, el logo, los
iconos y la imagen Open Graph. Si nunca vas a regenerarlas, no necesitás esta carpeta para nada:
el sitio construye igual sin ella.

## Cómo reconstruir el mirror

Solo hace falta si querés volver a procesar los assets desde el original.

Estructura esperada:

```
_migracion/mirror/wp-content/uploads/
├─ 2025/12/...
└─ 2026/01/...
```

Una vez colocados los archivos:

```bash
node scripts/prepare-assets.mjs
```

> Mientras el sitio de EasyWP siga en línea, los originales se pueden recuperar desde
> `https://hacksincodigos.com/wp-content/uploads/`. Conviene guardar una copia antes de dar de
> baja ese hosting.
