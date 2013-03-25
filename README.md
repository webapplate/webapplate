![project logo](https://raw.github.com/gasolin/noderea/master/public/img/icon128.png)

# Noderea v0.4

A Mobile First WebApp fromework that help you quickly start the mobile web app development. 

Nodera provide a familiar project bootstrap settings like Django/TurboGears/Play! framework but based on [node.js](http://nodejs.org/).

Noderea is prepared for static and dynamic mobile web app development. Support grade A speed in yslow measurement with elegant server/client configuration.

Can be deployed to PaaS Provider like [appfog](https://www.appfog.com) or [heroku](http://www.heroku.com) in minutes.


Nodera denotes "node area", which means connect many dots(node components) to form an usable framework.

## Demos

* [UI Demos] (https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before its officially release.
* [FxOS BMI] (http://gasolin.github.com/fxosbmi/public/index.html) , the BMI calculator demo, with offline support

## Features

1. *HTML5 Mobile Web App support in mind*: Support mobile friendly templates, MIME types, favicons and webapp menifest (Firefox OS).

2. Provide Dynamic Routes and underlying functions based on [express](http://www.expressjs.com).

3. *Default Static file hosting*: host static files in /public folder.

4. *Support appcache/manifest generator* via [grunt.js](https://github.com/gunta/grunt-manifest)

### options (prefered defaults)

* Default template support: use the Django-like template [swig](http://paularmstrong.github.com/swig) syntax to render templates from /views folder.

* Manage Javascript libraries with [bower](http://sindresorhus.com/bower-components/) .


## Get Nodera

Go to https://github.com/gasolin/noderea, press 'ZIP' button to download nodera template.

or you can use git command to get nodera:

    git clone https://github.com/gasolin/noderea.git

## Install

1. install [node.js](http://www.nodejs.org), and [bower](http://sindresorhus.com/bower-components/) (optional for library management)

        $ npm install -g grunt grunt-init bower

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


## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, font-awesome, bower, and people who involved in improving Web technologies.
