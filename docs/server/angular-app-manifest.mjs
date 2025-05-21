
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23570, hash: '04a5b9b251eebe029e91c6c66757d286942f57089c131fc011a5c16f35d9b007', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17144, hash: 'fb29e56d00486f99fd7b307f712372c2688ed4f98e060eef2a6671ebcce93ab1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26117, hash: '6c79e5256c3713b1dfd883d5fb3379fbff2841a06e6613949f71009f9e723edd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
