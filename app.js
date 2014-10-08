var
  express = require('express'),
  path = require('path'),

  controllers = require('./controllers'),

  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// dev config
if (process.env.NODE_ENV === 'development') {
  app.use(require('errorhandler')());
}

// init routes and handlers
controllers(app);

// start app
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
