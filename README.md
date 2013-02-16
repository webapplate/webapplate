nodegears
=========

A familiar project bootstrap settings like Django/TurboGears/Play! framework


Features:

1. Routes and underlying functions based on [express](http://www.expressjs.com)

2. Default Static file hosting: put static files in /public folder.

3. Default template support: Put templates in /views folder, and use the Django-like template syntax[swig](http://paularmstrong.github.com/swig).


controller::

app.get('/', function(req, res) {
    res.render('index.html', {foo:'bar'});
});

