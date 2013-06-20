![project logo](https://raw.github.com/gasolin/webapplate/master/public/style/icons/icon128.png) 

# Webapplate [![Build Status](https://travis-ci.org/gasolin/webapplate.png)](https://travis-ci.org/gasolin/webapplate) [![Coverage Status](https://coveralls.io/repos/gasolin/webapplate/badge.png?branch=master)](https://coveralls.io/r/gasolin/webapplate?branch=master)

current version: v0.8

A Mobile First WebApp template that help you quickly start the mobile web app development. 

Webapplate provide a ready-to-deploy project bootstrap settings, and deployable `webapp manifest template` 
for both hosted (dynamic/static website) and packaged (no server) webapp.

Website inherit from Webapplate can be [deployed in minutes](https://github.com/gasolin/webapplate/wiki/Deployment).


## Demos

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before its officially release.
* [FxOS BMI](http://gasolin.github.io/fxosbmi/public/index.html) , the BMI calculator demo, with offline support. [Source](https://github.com/gasolin/fxosbmi) is available.
* [bgzla] (http://gasolin.github.io/bgzla/), Bugzilla monitor for Gaia project


## Get Webapplate

Go to https://github.com/gasolin/Webapplate website, click 'ZIP' button to download nodera template.

or you can use git command to clone Webapplate:

    git clone https://github.com/gasolin/Webapplate.git


## Usage

### Develop Hosted webapp(With dynamic/static web Server)

1. install [node.js](http://www.nodejs.org)

2. To fetch dependent packages, enter the webapplate folder and run

        $ npm install

3. To start the server, run

        $ node app.js

  Now you can open browser and see the web page at localhost:8000 .

  The default page is stored in `/publish/index.html`. Read [Syntax](https://github.com/gasolin/webapplate/wiki/Syntax) doc to learn plenty of sensible defaults.

4. To autotest and generate appcache for offline usage, run

        $ grunt

All magics are well integrated and configurable in webapplate.


### Develop Packaged webapp (No Server)

just drag `/public/index.html` into browser. Or select `/public/manifest.webapp` in [Firefox OS Simulator](https://developer.mozilla.org/en-US/docs/Tools/Firefox_OS_Simulator).

Plus webapplate enable you to genergate the packaged webapp via command:

    $ grunt pack

Read [Deployment](https://github.com/gasolin/webapplate/wiki/Deployment#3-packaged-webapp) doc for further configurations.


## Features

1. *HTML5 Mobile Web App support in mind*: Mobile friendly templates based on [Mobile Boilerplate](https://github.com/h5bp/mobile-boilerplate), MIME types, favicons and webapp manifest (Firefox OS).

2. Firefox OS ready: provide every elements that needs to apply your webapp to [Marketplace](http://marketplace.firefox.com/), and `webapp install detection script` for self hosting.

3. Server-side support: Provide `grade A` speed web server/client configuration in [yslow](http://developer.yahoo.com/yslow/) measurement.

4. Support `offline appcache` and `packaged webapp` generator via [grunt.js](https://github.com/gunta/grunt-manifest) that make `offline webapp` support easier.

5. Integrate unittest with browser via [mocha](http://visionmedia.github.io/mocha/) JS test framework

6. Dynamic page support based on [express](http://www.expressjs.com)


Read Documentation at [https://github.com/gasolin/webapplate/wiki](https://github.com/gasolin/webapplate/wiki).


## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, font-awesome, bower, and people who involved in improving Web technologies.
