
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19275, hash: '14dbe81fc6303c63fb6828d889de2daa3ade9e6fac349770e3930625e8d8ff96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: 'dd6ba00f1a5a90c2842337501cdb5a4bd59b189a5a8560b0a91a0630d6b54175', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LCNLYB5N.css': {size: 28750, hash: 'L27gOPAdtCQ', text: () => import('./assets-chunks/styles-LCNLYB5N_css.mjs').then(m => m.default)}
  },
};
