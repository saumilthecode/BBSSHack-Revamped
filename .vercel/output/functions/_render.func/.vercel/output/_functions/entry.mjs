import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dv39Usp-.mjs';
import { manifest } from './manifest_B8jMZOhB.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/competition.astro.mjs');
const _page3 = () => import('./pages/join-us.astro.mjs');
const _page4 = () => import('./pages/our-people.astro.mjs');
const _page5 = () => import('./pages/projects.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const _page7 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.6_@types+node@22.7.7_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/competition.astro", _page2],
    ["src/pages/join-us.astro", _page3],
    ["src/pages/our-people.astro", _page4],
    ["src/pages/projects.astro", _page5],
    ["src/pages/index.astro", _page6],
    ["src/pages/[...slug].astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4519c30e-d829-4557-89a7-9c07195ec34f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
