var express = require('express');
var cons = require('consolidate');
var swig = require('swig');
var app = express.createServer();

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

    // static
    app.use("/public", express.static(__dirname+'/public'));

    // mime
    // express.static.mime.define({'text/plain': ['md']});

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

app.listen(process.env.VCAP_APP_PORT || 3000);
