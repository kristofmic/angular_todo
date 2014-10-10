module.exports = function routeHandler(app) {
  app.use('/', require('./main'));

  app.use(function defaultHandler(req, res) {
    res.render('main/index');
  });
};

