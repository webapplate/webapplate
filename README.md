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

4. Manage Javascript library with [bower](http://sindresorhus.com/bower-components/)


Install
---------------

1. install [node.js](http://www.nodejs.org)

2. Clone the source

    $ git clone https://github.com/gasolin/noderea.git

3. To fetch dependent packages, enter the folder, run

    $ npm install


4. To start the server, run

    $ node app.js

Now you can open browser and see the web page at localhost:3000 

5. (optional) config component.json and run

    $ bower install

To fetch proper libraries which hosted at /public/lib folder.


License
-----------------

[The MIT License](http://opensource.org/licenses/MIT)
