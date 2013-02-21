Noderea
=========

A Mobile First Web App fromework that can help you quickly start the mobile web app development. 

Nodera provide [node.js](http://nodejs.org/) a familiar project bootstrap settings like Django/TurboGears/Play! framework.

Noderea is prepared for static and dynamic mobile web app development. Can be deployed to PaaS like [appfog](https://www.appfog.com) or [heroku](http://www.heroku.com) in minutes.

Nodera denotes "node area", which means connect many dots(node components) to form an usable framework.


Features
-------------

1. HTML5 Mobile Web App support in mind. Support mobile friendly templates and MIME types.

2. Default Static file hosting: host static files in /public folder.

3. Dynamic Routes and underlying functions based on [express](http://www.expressjs.com).

4. Default template support: use the Django-like template [swig](http://paularmstrong.github.com/swig) syntax to render templates from /views folder.

5. Manage Javascript libraries with [bower](http://sindresorhus.com/bower-components/) .


Controller sample (in app.js):

    app.get('/', function(req, res) {
        res.render('index.html', {foo:'bar'});
    });


Install
---------------

1. install [node.js](http://www.nodejs.org), and [bower](http://sindresorhus.com/bower-components/) (optional for library management)

    $ npm install -g bower

2. Clone the source

    $ git clone https://github.com/gasolin/noderea.git

3. To fetch dependent packages, enter the folder, run

    $ npm install

4. To start the server, run

    $ node app.js

Now you can open browser and see the web page at localhost:3000 


(optional) 

To manage libraries, config component.json and run

    $ bower install

bower will fetch proper libraries to components/ folder, which will be hosted as /public/lib folder.


License
-----------------

[The MIT License](http://opensource.org/licenses/MIT)
