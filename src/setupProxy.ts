const proxy = require('http-proxy-middleware');

module.exports = function(app: { use: (arg0: string, arg1: any) => void }) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:3000',
      changeOrigin: true,
    }),
  );
};
