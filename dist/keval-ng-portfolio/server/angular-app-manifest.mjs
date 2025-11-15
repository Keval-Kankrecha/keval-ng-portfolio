
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 19274, hash: '3f4381329511562224e0e354bcb42c4422c26b065ed95fcc3813ca2686852189', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '83548e30642a3041fba0f9e9e731ddab1f79d95b9fd8c84717b60bfdf7573474', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3DAHTQDF.css': {size: 34131, hash: 'qpsMgW3YJ/I', text: () => import('./assets-chunks/styles-3DAHTQDF_css.mjs').then(m => m.default)}
  },
};
