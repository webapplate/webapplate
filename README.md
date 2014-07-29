![project logo](https://raw.github.com/webapplate/webapplate/master/public/style/icons/icon128.png) 

# Webapplate 

The template to create new web application.

Webapplate is the Mobile First, full stack WebApp template that help you quickly start the maintainable mobile web app development.
http://webapplate.github.io/webapplate

[![Build Status](https://travis-ci.org/webapplate/webapplate.png)](https://travis-ci.org/webapplate/webapplate) [![david-dm](https://david-dm.org/webapplate/webapplate.png)](https://david-dm.org/webapplate/webapplate) [![devDependency Status](https://david-dm.org/webapplate/webapplate/dev-status.svg)](https://david-dm.org/webapplate/webapplate#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/webapplate/webapplate/badge.png?branch=master)](https://coveralls.io/r/webapplate/webapplate?branch=master) [![Code Climate](https://codeclimate.com/github/webapplate/webapplate.png)](https://codeclimate.com/github/webapplate/webapplate)

~~~
                __                      __      __
 _      _____  / /_  ____ _____  ____  / /___ _/ /____
| | /| / / _ \/ __ \/ __ `/ __ \/ __ \/ / __ `/ __/ _ \
| |/ |/ /  __/ /_/ / /_/ / /_/ / /_/ / / /_/ / /_/  __/
|__/|__/\___/_.___/\__,_/ .___/ .___/_/\__,_/\__/\___/
                       /_/   /_/
~~~
current version: v1.5.0

## Why need webapplate?

Though there are many powerful tools surround web technologies, web does not provide the `SDK` or ready to use `template` that just like Android or iOS. Web is simple to write but hard to done right. Developer who want to quickly build an webapp usually consume much longer time to make their webapp right.

Thus developer who is approaching to the `webapp`(write web as app) concept need a bootstrap or template project to start with. That's why webapplate comes.


## How webapplate do

Webapplate provide a ready-to-deploy project bootstrap settings for both `hosted` (dynamic/static website) and `packaged` (no server) webapp
, with convention of file structure, [express](http://expressjs.com/) server-side support,
and preconfigured helper tools like code style check, appcache generator, multi-locales and testframework.

Website inherit from Webapplate can be [deployed to any host provider](https://github.com/webapplate/webapplate/wiki/Deployment).

All magics are well integrated and configurable.


## Demos

Here are some examples that start the development by webapplate:

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before Firefox OS device officially release.
* [FxOS BMI](http://gasolin.github.io/fxosbmi/public/index.html) , the BMI calculator demo, with offline support. [Source](https://github.com/gasolin/fxosbmi) is available.
* [bgzla](http://gasolin.github.io/bgzla/), Bugzilla monitor for Gaia project


## Get Webapplate

Go to https://github.com/webapplate/webapplate website, click 'ZIP' button to download nodera template.

or you can use git command to clone Webapplate:

    git clone https://github.com/webapplate/webapplate.git


## Usage

### Setup

1. install [node.js](http://www.nodejs.org)

2. Install useful command-line tools globally:

        $ npm install -g grunt-cli bower karma

   To fetch dependent packages, enter the webapplate folder and run

        $ npm install

### Develop Hosted webapp(With dynamic/static web Server)

Note: to only install required library for production, run

        $ npm install --production

1. To start the server, run

        $ grunt server

or call the `server.js` manually.

        $ node server.js

Now you can open browser and see the web page at localhost:8000. The server.js is a fully functional server side script based on popular [express](http://expressjs.com/) framework, you can expand it to fit your needs.

with `grunt server` command, the browser and server will auto reload when you edit any js file within webapplate so you could preview the result directly.

  The default page is stored in `/publish/index.html`. Read [Syntax](https://github.com/webapplate/webapplate/wiki/Syntax) doc to learn plenty of sensible defaults that webapplate configured for you.

2. To autotest and generate appcache for offline usage (if you plan to publish a hosted webapp), run

        $ grunt

### Develop Packaged webapp (No Server)

just drag `/public/index.html` into browser. Or select `/public/manifest.webapp` in [Firefox OS Simulator](https://developer.mozilla.org/en-US/docs/Tools/Firefox_OS_Simulator).

Plus webapplate enable you to genergate the packaged webapp via command:

    $ grunt pack

Read [Deployment](https://github.com/webapplate/webapplate/wiki/Deployment#3-packaged-webapp) doc for further configurations.

### Automatic testing during development

While you are editing code, run command:

    $ grunt karma

To automaticly monitor and trigger all test when you change the code.

### Generate static webapp (Server independent - experimental)

Generate minimized static web app

    $ grunt static

### JavaScript lint check and generate document

    $ grunt docs

## Features

1. *HTML5 Mobile Web App support in mind*: Mobile friendly templates based on [Mobile Boilerplate](https://github.com/h5bp/mobile-boilerplate), MIME types, favicons and webapp manifest (Firefox OS).

2. WebApp ready: provide every elements that needs to apply your webapp to [Firefox Marketplace](http://marketplace.firefox.com/), and provide `Firefox webapp install detection script` for self hosting. 
  * Support add WebApp to Homescreen from Chrome and Saffari mobile.
  * Also provide the manifest file for Chrome App to [Chrome Store](https://chrome.google.com/webstore).

3. Dynamic Server-side support based on [express](http://www.expressjs.com): Provide `grade A` speed web server/client configuration in [yslow](http://developer.yahoo.com/yslow/) measurement.

4. Support `offline appcache` and `packaged webapp` generator via [grunt.js](https://github.com/gunta/grunt-manifest) that make `offline webapp` support easier.

5. Support client side localization for webapp via [l20n](https://github.com/l20n/l20n.js/blob/master/docs/html.md)

6. Style check for js, css, json, jsdoc via [jshint](http://www.jshint.com/), [jscs](https://github.com/mdevils/node-jscs), [csslint](https://github.com/stubbornella/csslint), [jsonlint](https://www.npmjs.org/package/grunt-jsonlint).

7. Integrate unittest with browser via [mocha](http://visionmedia.github.io/mocha/) JS test framework


Read Documentation at [https://github.com/webapplate/webapplate/wiki](https://github.com/webapplate/webapplate/wiki).


## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, bower, and people who involved in improving Web technologies.
