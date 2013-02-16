Noderea
=========

Provide node.js a familiar project bootstrap settings like Django/TurboGears/Play! framework.

Nodera denotes "node area", which means connect many dots(node components) to form an usable framework.


Features:

1. Routes and underlying functions based on [express](http://www.expressjs.com)

2. Default Static file hosting: put static files in /public folder.

3. Default template support: Put templates in /views folder, and use the Django-like template syntax[swig](http://paularmstrong.github.com/swig).

Controller sample::

    app.get('/', function(req, res) {
        res.render('index.html', {foo:'bar'});
    });

Install
---------------

1. install [node.js](http://www.nodejs.org)

2. Clone the source

$ git clone https://github.com/gasolin/noderea.git

3. enter the folder, run

$ npm install

to fetch dependent packages

4. run

$ node app.js

to start the server. Now you can open browser and see the web page at localhost:3000 

License: [The MIT License](http://opensource.org/licenses/MIT)
