![project logo](https://raw.github.com/gasolin/webapplate/master/public/style/icons/icon128.png)

# Webapplate v0.6 [![Build Status](https://travis-ci.org/gasolin/webapplate.png)](https://travis-ci.org/gasolin/webapplate)

A Mobile First WebApp template that help you quickly start the mobile web app development. 

Webapplate provide a ready-to-deploy project bootstrap settings for both hosted (dynamic/static website) and packaged (no server) webapp.
It provide deployable webapp manifest template and auto appcache generation script that make offline webapp support easier.

Website inherit from Webapplate can be [deployed in minutes](https://github.com/gasolin/webapplate/wiki/Deployment).


## Demos

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before its officially release.
* [FxOS BMI](http://gasolin.github.io/fxosbmi/public/index.html) , the BMI calculator demo, with offline support. [Source](https://github.com/gasolin/fxosbmi) is available.

## Features

1. *HTML5 Mobile Web App support in mind*: Mobile friendly templates based on [Mobile Boilerplate](https://github.com/h5bp/mobile-boilerplate), MIME types, favicons and webapp manifest (Firefox OS).

2. Firefox Marketplace ready: provide every elements that needs to apply your webapp to [Marketplace](http://marketplace.firefox.com/)

3. Server-side support: Provide grade A speed web server/client configuration in [yslow](http://developer.yahoo.com/yslow/) measurement.

4. *Support offline appcache generator* via [grunt.js](https://github.com/gunta/grunt-manifest)

5. Test with browser via [mocha](http://visionmedia.github.io/mocha/) JS test framework

6. Dynamic page support based on [express](http://www.expressjs.com)

Read Documentation at [https://github.com/gasolin/webapplate/wiki](https://github.com/gasolin/webapplate/wiki).

## Get Webapplate

Go to https://github.com/gasolin/Webapplate website, click 'ZIP' button to download nodera template.

or you can use git command to get Webapplate:

    git clone https://github.com/gasolin/Webapplate.git


## Usage

### No Server (Packaged webapp)

just drag index.html into browser. 

The page will redirect to /public/index.html. Read [Syntax](https://github.com/gasolin/webapplate/wiki/Syntax) doc to learn plenty of sensible defaults.

webapplate enable you to genergate the packaged webapp via command:

    $ grunt pack

### With dynamic/static web Server (Hosted webapp)

1. install [node.js](http://www.nodejs.org)

2. To fetch dependent packages, enter the webapplate folder and run

        $ npm install

3. To start the server, run

        $ node app.js

Now you can open browser and see the web page at localhost:8000 



## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, font-awesome, bower, and people who involved in improving Web technologies.
