/**
 * Valida `public/_redirects` contra la sintaxis que Cloudflare Pages acepta.
 *
 * Existe porque una regla inválida rompió un despliegue: se escribió un redirect
 * de dominio (`https://www.hacksincodigos.com/* ... 301!`) que Cloudflare no
 * soporta — el origen debe ser una ruta que empiece con "/", el sufijo "!" es
 * sintaxis de Netlify, y los redirects a nivel de dominio están fuera del alcance
 * de este archivo. La build local pasaba igual, porque `_redirects` no se valida
 * al construir: solo al desplegar.
 *
 * Referencia: https://developers.cloudflare.com/pages/configuration/redirects/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'public', '_redirects');

/** Líneas reales, sin comentarios ni vacías, con su número de línea original. */
const rules = fs
  .readFileSync(FILE, 'utf8')
  .split('\n')
  .map((raw, i) => ({ n: i + 1, raw: raw.trim() }))
  .filter((l) => l.raw && !l.raw.startsWith('#'))
  .map((l) => ({ ...l, parts: l.raw.split(/\s+/) }));

const VALID_CODES = new Set(['200', '301', '302', '303', '307', '308']);

test('_redirects tiene reglas', () => {
  assert.ok(rules.length > 0, 'no se encontró ninguna regla');
});

test('cada regla tiene origen y destino', () => {
  for (const r of rules) {
    assert.ok(
      r.parts.length >= 2 && r.parts.length <= 3,
      `línea ${r.n}: se esperaban 2 o 3 campos, hay ${r.parts.length} -> ${r.raw}`
    );
  }
});

test('el origen es siempre una ruta, nunca una URL con dominio', () => {
  for (const r of rules) {
    const from = r.parts[0];
    assert.ok(
      from.startsWith('/'),
      `línea ${r.n}: el origen debe empezar con "/". Cloudflare no soporta redirects ` +
        `a nivel de dominio en _redirects (usá una Redirect Rule del panel) -> ${from}`
    );
  }
});

test('el código de estado es válido y sin el sufijo "!" de Netlify', () => {
  for (const r of rules) {
    if (r.parts.length < 3) continue;
    const code = r.parts[2];
    assert.ok(
      !code.endsWith('!'),
      `línea ${r.n}: "${code}" usa el forzado "!" de Netlify, que Cloudflare no acepta`
    );
    assert.ok(
      VALID_CODES.has(code),
      `línea ${r.n}: código de estado no válido "${code}"`
    );
  }
});

test('el destino es una ruta interna o una URL absoluta con esquema', () => {
  for (const r of rules) {
    const to = r.parts[1];
    assert.ok(
      to.startsWith('/') || /^https?:\/\//.test(to),
      `línea ${r.n}: destino inválido -> ${to}`
    );
  }
});

test('solo un comodín por origen, y al final', () => {
  for (const r of rules) {
    const from = r.parts[0];
    const stars = (from.match(/\*/g) || []).length;
    assert.ok(stars <= 1, `línea ${r.n}: más de un "*" en el origen -> ${from}`);
    if (stars === 1) {
      assert.ok(from.endsWith('*'), `línea ${r.n}: el "*" debe ir al final -> ${from}`);
    }
  }
});

test('no hay orígenes duplicados', () => {
  const seen = new Map();
  for (const r of rules) {
    const from = r.parts[0];
    assert.ok(
      !seen.has(from),
      `línea ${r.n}: el origen "${from}" ya estaba en la línea ${seen.get(from)}; gana el primero`
    );
    seen.set(from, r.n);
  }
});

test('se respetan los límites de Cloudflare', () => {
  const dynamic = rules.filter((r) => r.parts[0].includes('*') || r.parts[0].includes(':'));
  const staticR = rules.length - dynamic.length;
  assert.ok(staticR <= 2000, `${staticR} redirects estáticos, el máximo es 2000`);
  assert.ok(dynamic.length <= 100, `${dynamic.length} redirects dinámicos, el máximo es 100`);
});
