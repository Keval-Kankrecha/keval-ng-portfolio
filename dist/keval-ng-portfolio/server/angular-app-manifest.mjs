
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19274, hash: '2b53985d74043cefde5b781b8f0d58a009d68a90c3b1a0cb7e426efb0c7a83ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '53b8a37265ff2ac52a3c95ad5f683abfd11afe10c9263d16a687309bc5a5fb22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LCNLYB5N.css': {size: 28750, hash: 'L27gOPAdtCQ', text: () => import('./assets-chunks/styles-LCNLYB5N_css.mjs').then(m => m.default)}
  },
};
