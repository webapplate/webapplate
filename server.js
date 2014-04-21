(function() {
  'use strict';

  var express = require('express'),
      swig = require('swig'),
      bodyParser = require('body-parser')(),
      compress = require('compression')(),
      serveStatic = require('serve-static'),
      errorHandler = require('errorhandler'),
      app = express();

  // template
  app.engine('.html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', __dirname + '/views');
  app.set('view options', { layout: false });
  // Swig will cache templates for you, but you can disable
  // that and use Express's caching instead, if you like:
  app.set('view cache', false);
  // To disable Swig's cache, do the following:
  swig.setDefaults({ cache: false });
  // NOTE: You should always cache templates in a production environment.
  // Don't leave both of these to `false` in production!

  // configure app to use bodyParser()
  // this will let us get the data from a POST via
  // POST: {"name":"foo","color":"red"} or
  // POST: name=foo&color=red
  app.use(bodyParser);

  // gzip
  app.use(compress);

  // static files, cached and expire in 30 days
  // change path / to /public if need dynamic web
  app.use('/', serveStatic(__dirname + '/public', {maxAge: 2592000000}));

  // mime
  express.static.mime.define(
    {'application/x-web-app-manifest+json': ['webapp']});
  express.static.mime.define({'text/cache-manifest': ['appcache']});
  express.static.mime.define({'image/x-icon': ['ico']});
  // express.static.mime.define({'audio/ogg': ['ogg']});
  // express.static.mime.define({'audio/mp4': ['m4a']});

  // error
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  // routes
  var router = express.Router();
  // enable route if need dynamic web
  /*
  router.get('/', function(req, res) {
      res.render('index.html', {foo:'bar'});
  });
  */
  // REGISTER OUR ROUTES
  app.use('/', router);

  // port
  var app_port = process.env.VCAP_APP_PORT || 8000;
  app.listen(app_port, function() {
    console.log('Listening on ' + app_port);
  });
}());
