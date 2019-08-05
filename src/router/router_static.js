const path = process.env.NODE_ENV;

let _import;
if (path === 'development') {
  _import = require('./_import_development.js');
} else {
  _import = require('./_import_production.js');
}

export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: _import('dashboard'),
  },
];
