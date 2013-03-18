var express = require('express');
var cons = require('consolidate');
var swig = require('swig');
var app = express();

app.configure(function(){
    // template
    app.engine('.html', cons.swig);
    app.set('view engine', 'html');
    swig.init({
	  root: __dirname + '/views',
	  allowErrors: true
	});
    app.set('views', __dirname + '/views');
    app.set('view options', { layout: false });
    app.set('view cache', false);

    // gzip
    app.use(express.compress());
    // static files, cached and expire in 30 days
    app.use("/public", express.static(__dirname+'/public', {maxAge:2592000000}));
    // link to bower components
    // app.use("/public/lib", express.static(__dirname+'/components'));

    // mime
    express.static.mime.define({'application/x-web-app-manifest+json': ['webapp']});
    express.static.mime.define({'text/cache-manifest': ['appcache']});
    express.static.mime.define({'image/x-icon': ['ico']});
    // express.static.mime.define({'audio/ogg': ['ogg']});
    // express.static.mime.define({'audio/mp4': ['m4a']});

    // error
    app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
});

// routes
app.get('/', function(req, res) {
    // res.send('Hello from <a href="http://appfog.com">AppFog.com</a>');
    res.render('index.html', {foo:'bar'});
});

// port
var app_port = process.env.VCAP_APP_PORT || 8000;
app.listen(app_port, function() {
  console.log("Listening on " + app_port);
});
