
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19274, hash: 'c5fc469ddac0ce0f0932aaba01895df90ca7fde529d5380e5a10aaf41ccc3ab0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'cf8d5b0ee1793bf8024f4fc58f44df5888112b869645d1575c778fb9e0964476', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3DAHTQDF.css': {size: 34131, hash: 'qpsMgW3YJ/I', text: () => import('./assets-chunks/styles-3DAHTQDF_css.mjs').then(m => m.default)}
  },
};
