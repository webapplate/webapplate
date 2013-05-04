![project logo](https://raw.github.com/gasolin/webapplate/master/public/style/icons/icon128.png)

# Webapplate v0.5 [![Build Status](https://travis-ci.org/gasolin/webapplate.png)](https://travis-ci.org/gasolin/webapplate)

A Mobile First WebApp fromework that help you quickly start the mobile web app development. 

Webapplate provide a ready-to-deploy project bootstrap settings.

Website developed by Webapplate can be deployed to PaaS Provider like [appfog](https://www.appfog.com) or [heroku](http://www.heroku.com) in minutes.


Webapplate denotes "webapp template". Provide templates that suit for both offline and server hosting webapp development.

## Demos

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before its officially release.
* [FxOS BMI](http://gasolin.github.com/fxosbmi/public/index.html) , the BMI calculator demo, with offline support

## Features

1. *HTML5 Mobile Web App support in mind*: Support mobile friendly templates, MIME types, favicons and webapp manifest (Firefox OS).

2. Firefox Marketplace ready: provide every elements that needs to apply your webapp to [Marketplace](http://marketplace.firefox.com/)

3. Server-side support: Provide grade A speed web server/client configuration in [yslow](http://developer.yahoo.com/yslow/) measurement.

4. *Support offline appcache generator* via [grunt.js](https://github.com/gunta/grunt-manifest)

5. Test with browser via [mocha](http://visionmedia.github.io/mocha/) JS test framework

6. Dynamic page support based on [express](http://www.expressjs.com)


## Get Webapplate

Go to https://github.com/gasolin/Webapplate website, click 'ZIP' button to download nodera template.

or you can use git command to get Webapplate:

    git clone https://github.com/gasolin/Webapplate.git

## Install

1. install [node.js](http://www.nodejs.org)

2. To fetch dependent packages, enter the webapplate folder and run

        $ npm install

3. To start the server, run

        $ node app.js

Now you can open browser and see the web page at localhost:8000 


## (optional) Generate offline cache manifest

To generate appcache, run

    $ grunt

the manifest.appcache will be generated at public/manifest.appcache

## (optional) Development without Server

provide default /index.html page that redirect to public/index.html

## (optional) Ablkte Development with Dynamic pages

* Default template support: use the Django-like template [swig](http://paularmstrong.github.com/swig) syntax to render templates from /views folder.


## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, font-awesome, bower, and people who involved in improving Web technologies.
