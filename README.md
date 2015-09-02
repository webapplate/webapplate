![project logo](https://raw.github.com/webapplate/webapplate/master/public/style/icons/icon128.png) 

# Webapplate 

The template to create a maintainable web app. For your server, client, Android/iOS/FxOS or desktop projects.

Before hacking with webapplate, Try it with [jsfiddle playground](http://jsfiddle.net/gasolin/sxjja37j/)! Or you can fork [ghapplate](https://github.com/webapplate/ghapplate) to experience web app directly on github! Webapplate is the most maintainable choice which allows you write with future proved javascript and css and trans-compile to current working code.

[![Build Status](https://travis-ci.org/webapplate/webapplate.png)](https://travis-ci.org/webapplate/webapplate) [![Dependency Status](https://gemnasium.com/webapplate/webapplate.svg)](https://gemnasium.com/webapplate/webapplate) [![Code Climate](https://codeclimate.com/github/webapplate/webapplate.png)](https://codeclimate.com/github/webapplate/webapplate) [![Codacy Badge](https://www.codacy.com/project/badge/b0dbc808c4fb83b26706fb376ceea678)](https://www.codacy.com/public/gasolin_1667/webapplate)

current version: v3.0.0

* Project page http://webapplate.github.io/
* Follow [Setup Instruction](https://github.com/webapplate/webapplate/wiki/Setup-Instruction) to setup the webpplate project.
* More Guides
  * Learn more from [webapplate document](https://github.com/webapplate/webapplate/wiki).
  * [Webapplate introduction](https://hacks.mozilla.org/2014/09/webapplate-maintainable-web-app-template-for-firefox-os-and-chrome-apps/) from hacks.mozilla.org.

## Get the template

You can use git command to **clone** Webapplate:

```
$ git clone https://github.com/webapplate/webapplate.git
```

Or click 'ZIP' button on [github](https://github.com/webapplate/webapplate) to **download** the template.

## Demos

Here are some examples that start the development by webapplate:

* [WebbyMouse](https://github.com/gasolin/webbymouse) Touchpad & Air mouse with full web technology (Desktop + Web App)
* [Lookfor](http://jsfiddle.net/gasolin/d2z8gnm6/) (Web App)
* [BMI](http://jsfiddle.net/gasolin/88ccfwLr/) (Web App)
* [Tomodoro](http://jsfiddle.net/gasolin/d0hb39oo/) (Web App)
* [Author's homepage](http://www.gasolin.idv.tw/) (Web page)

## What is webapplate?

Webapplate is the Mobile First, full stack web app template/boilerplate that curated several libraries to help you quickly start a maintainable mobile web app development process. Webapplate enable you to optimized and export your web app to hosting server, Firefox/Chrome webapp store, or even Android, iOS, and more platforms.

When you first time running, webapplate provide you a material-designed web app frame.

![Real welcome page](http://i.imgur.com/8AGwXCG.png)


### Application Structure

All applications follow the same set of guidelines as far as how code is formatted, build, and structured. A typical app looks like this:

* **public/** - The application runtime code.
* **public/manifest.webapp** - The application manifest.
* **public/js/** - All javascript for your app. This code is converted during the build step using Babel, and should be using es6 modules.
* **public/style/** - Stylesheets for the app. This code is converted during the build step using cssnext, to support css variable and more emerging CSS specs.
* **public/*** - Dotfiles and metadata for packagers such as bower, npm, etc.

### Key Technologies

* **Bower** - For library and app dependency management.
* **npm** - For build-time dependency management.
* **gulp** - For building, packaging, and workflow.
* **Babel** - So we can leverage es6 modules and classes today.
* **CssNext** - So we can leverage new CSS specs today.

## Why need webapplate?

Though there are many powerful tools surround web technologies, web does not provide the `SDK` or ready to use `template` that just like Android or iOS. Web apps are simple to write but hard to get done right. Developer who wants to quickly build an web app usually consume much longer time to make their web app right.

Thus developer who is approaching to the `web app`(make web site behaves like mobile app) concept need a bootstrap or template project to start with. That's why webapplate comes.

## What kind of web app webapplate supports?

* **static hosting** web app
* **dynamic** web app with node.js/express backend 
* **packaged** web app for Firefox Marketplace or Chrome Store
* **cordova/phonegap** for multiple platform native app

To build the deployable web app, run command:

  ```
  $ gulp static|dynamic|pack|cordova|github
  ```
  
   Choose one of the above [gulp command](https://github.com/webapplate/webapplate/blob/master/gulpfile.js) based on your needs.

## How does webapplate do

Webapplate provide full HTML5 development experience, use javascript to rule frontend, backend, build and test.

Webapplate provide a ready-to-deploy project bootstrap settings for both `hosted` (dynamic/static website) and `packaged` (no server) web app, with convention of file structure, [express](http://expressjs.com/) server-side support, and preconfigured helper tools like code style check, appcache generator, multi-locales and testframework.

Website inherit from Webapplate can be [deployed to any host provider](https://github.com/webapplate/webapplate/wiki/Deployment).

All magics are well integrated and configurable.

![Webapplate Functionality](http://i.imgur.com/r069BsG.png)


## Tools Used:

__Package Management__
- [npm](https://www.npmjs.com/) Node Package manager
- [bower](http://bower.io/) Libraries manager

__Build__
- [gulp](http://gulpjs.com/) Javascript build system

-  __Transpiler__
  - [Babel](https://babeljs.io) (ES6)
  - [Cssnext](http://cssnext.io/) (CSS)

- __Optimize__
  - [UglifyJS](https://github.com/mishoo/UglifyJS) javascript Compressor
  - [cssmin](https://github.com/murphydanger/gulp-minify-css) Compress CSS files
  - [htmlmin](https://github.com/murphydanger/gulp-minify-html)  Minify HTML

- __Code Quality & Analysis__
  - [jshint](http://jshint.com/) javascript code quality
  - [jscs](http://jscs.info/) javascript code style linter
  - [csslint](https://github.com/CSSLint/csslint) css code style linter
  - [jsonlint] (https://github.com/rogeriopvl/gulp-jsonlint) json linter
  - [sloc](https://github.com/oddjobsman/gulp-sloc) Source line of codes
  - [jsdoc] Generate javascript doc by running jsdoc3

__Test__
- [Karma](http://karma-runner.github.io) test runner
- [Mocha](http://mochajs.org/) test framework
  - [Chai](http://chaijs.com/) assertion library
  - [Sinon](http://sinonjs.org/) test spies, stubs and mocks

__Server__
- [Express](http://expressjs.com/)
  - [Swig](http://paularmstrong.github.io/swig/) JavaScript Template Engine

__Client side libraries__
- [l20n](http://l20n.org/) client side internationalization
- [Bootstrap](http://getbootstrap.com) mobile first front-end framework
  - [Bootstrap Material Design](https://github.com/FezVrasta/bootstrap-material-design) material design theme for Bootstrap

- __Browser polyfill__
  - [localforage](https://github.com/mozilla/localForage) enhanced offline storage API
  - [fetch](https://github.com/github/fetch) replacement of XMLHTTPRequest

## License

[The MIT License](http://opensource.org/licenses/MIT)

## Credit

Developers and designers from node.js, bower, express, gulp, Firefox OS, and people who involved in improving Web technologies.
