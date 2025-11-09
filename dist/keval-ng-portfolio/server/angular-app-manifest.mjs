
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19275, hash: '7a232c19caec4b64f8acc57d5834e6eaafada9e9cd08ef3969d3e21b1bee462f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '9917de97e39d737664551c2bbd2eb3cf0db663990fbeb964d3eabc910cb4a070', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LCNLYB5N.css': {size: 28750, hash: 'L27gOPAdtCQ', text: () => import('./assets-chunks/styles-LCNLYB5N_css.mjs').then(m => m.default)}
  },
};
