// Node ESM demands file extensions on relative imports; Vite does not, and the
// app source is written the Vite way. This hook retries a failed relative
// resolve with .js / .jsx / index.js appended, so tests can import the real
// application modules unmodified rather than a copy that can drift.
//
// Used via:  node --import ./scripts/_ext_resolver.mjs <test file>

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

const CANDIDATES = ['.js', '.jsx', '/index.js', '/index.jsx'];

export async function resolve(specifier, context, next) {
  try {
    return await next(specifier, context);
  } catch (err) {
    if (!specifier.startsWith('.') && !specifier.startsWith('/')) throw err;
    for (const ext of CANDIDATES) {
      try {
        return await next(specifier + ext, context);
      } catch { /* try the next one */ }
    }
    throw err;
  }
}

// Self-register when loaded with --import.
register(pathToFileURL(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
