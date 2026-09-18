/**
 * Los contactos que la gente deja en el chat del sitio.
 *
 *   node scripts/leads.mjs            → los últimos 30, del más nuevo al más viejo
 *   node scripts/leads.mjs 100        → los últimos 100
 *   node scripts/leads.mjs --csv      → en CSV, para abrirlo en una hoja de cálculo
 *
 * Salen del KV de Cloudflare donde los guarda el Worker del chat. No pasan por
 * ningún tercero y se borran solos a los 180 días.
 */
import { execFileSync } from 'node:child_process';

const NAMESPACE = '093cfd6921ea49a282b68ee2e940b992';
const args = process.argv.slice(2);
const csv = args.includes('--csv');
const limite = Number(args.find((a) => /^\d+$/.test(a))) || 30;

const wrangler = (...params) =>
  execFileSync('npx', ['--yes', 'wrangler@latest', ...params], {
    encoding: 'utf8',
    maxBuffer: 20 * 1024 * 1024,
    shell: process.platform === 'win32',
  });

const claves = JSON.parse(wrangler('kv', 'key', 'list', '--namespace-id', NAMESPACE, '--remote'))
  .map((k) => k.name)
  .sort()
  .reverse()
  .slice(0, limite);

if (claves.length === 0) {
  console.log('Todavía no hay contactos guardados desde el chat.');
  process.exit(0);
}

const leads = [];
for (const clave of claves) {
  try {
    leads.push(JSON.parse(wrangler('kv', 'key', 'get', clave, '--namespace-id', NAMESPACE, '--remote')));
  } catch {
    // Una clave rota no debería tumbar el listado completo.
  }
}

if (csv) {
  console.log('fecha,nombre,telefono,correo,interes,pagina,pais');
  for (const l of leads) {
    const campo = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    console.log([l.cuando, l.nombre, l.telefono, l.correo, l.interes, l.pagina, l.pais].map(campo).join(','));
  }
} else {
  const fmt = new Intl.DateTimeFormat('es-CR', { dateStyle: 'short', timeStyle: 'short' });
  console.log(`\n${leads.length} contacto(s) del chat, del más reciente al más viejo:\n`);
  for (const l of leads) {
    console.log(`${fmt.format(new Date(l.cuando))} — ${l.nombre || '(sin nombre)'}`);
    if (l.telefono) console.log(`  WhatsApp: ${l.telefono}`);
    if (l.correo) console.log(`  Correo:   ${l.correo}`);
    if (l.interes) console.log(`  Interés:  ${l.interes}`);
    if (l.pagina) console.log(`  Entró por: ${l.pagina}`);
    console.log('');
  }
  console.log('Para exportarlos: node scripts/leads.mjs --csv > contactos.csv');
}
