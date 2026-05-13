globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_52A3W-Zj.mjs';
import './chunks/astro/server_UrxGwwQU.mjs';
import { s as sequence } from './chunks/index_BRojEVas.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
