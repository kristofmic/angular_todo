module.exports = function routeHandler(app) {
  app.use('/', require('./main'));
};

