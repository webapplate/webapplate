![project logo](https://raw.github.com/webapplate/webapplate/master/public/style/icons/icon128.png) 

# Webapplate 

The template to create new web application.

Webapplate is the Mobile First, full stack WebApp template that help you quickly start the maintainable mobile web app development. Webapplate enable you to export your optimized webapp to hosting server, Firefox/Chrome webapp store, Android, iOS, and more platforms.  
http://webapplate.github.io/

[![Build Status](https://travis-ci.org/webapplate/webapplate.png)](https://travis-ci.org/webapplate/webapplate) [![david-dm](https://david-dm.org/webapplate/webapplate.png)](https://david-dm.org/webapplate/webapplate) [![devDependency Status](https://david-dm.org/webapplate/webapplate/dev-status.svg)](https://david-dm.org/webapplate/webapplate#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/webapplate/webapplate/badge.png?branch=master)](https://coveralls.io/r/webapplate/webapplate?branch=master) [![Code Climate](https://codeclimate.com/github/webapplate/webapplate.png)](https://codeclimate.com/github/webapplate/webapplate) [![Codacy Badge](https://www.codacy.com/project/badge/b0dbc808c4fb83b26706fb376ceea678)](https://www.codacy.com/public/gasolin_1667/webapplate)

current version: v2.0.1

## Why need webapplate?

Though there are many powerful tools surround web technologies, web does not provide the `SDK` or ready to use `template` that just like Android or iOS. Web apps are simple to write but hard to get done right. Developer who wants to quickly build an web app usually consume much longer time to make their web app right.

Thus developer who is approaching to the `web app`(make web site behaves like mobile app) concept need a bootstrap or template project to start with. That's why webapplate comes.

Here is the screenshot when you first time running webapplate

![Real welcome page](http://i.imgur.com/8AGwXCG.png)

## How webapplate do

Webapplate provide a ready-to-deploy project bootstrap settings for both `hosted` (dynamic/static website) and `packaged` (no server) web app, with convention of file structure, [express](http://expressjs.com/) server-side support, and preconfigured helper tools like code style check, appcache generator, multi-locales and testframework.

Website inherit from Webapplate can be [deployed to any host provider](https://github.com/webapplate/webapplate/wiki/Deployment).

All magics are well integrated and configurable.

![Webapplate Functionality](http://i.imgur.com/r069BsG.png)

## Demos

Here are some examples that start the development by webapplate:

* [UI Demos](https://marketplace.firefox.com/app/ui-demos/) , which is on Firefox Marketplace before Firefox OS device officially release.
* [FxOS BMI](http://gasolin.github.io/fxosbmi/public/index.html) , the BMI calculator demo, with offline support. [Source](https://github.com/gasolin/fxosbmi) is available.
* [bgzla](http://gasolin.github.io/bgzla/), Bugzilla monitor for Gaia project.
* [FoxQR](https://marketplace.firefox.com/app/qrcode-1/), QRCode scanner for Firefox OS, via WebRTC.

## Get Webapplate

Go to https://github.com/webapplate/webapplate website, click 'ZIP' button to download nodera template.

or you can use git command to clone Webapplate:

```
$ git clone https://github.com/webapplate/webapplate.git
```

## Usage

Note: If you use docker, just skip `Setup` section and check `With docker` section.

### Setup

1. install [node.js](http://www.nodejs.org)

2. Install useful command-line tools globally:

    ```
    $ npm install -g grunt-cli bower karma
    ```

   To fetch dependent packages, enter the webapplate folder and run

    ```
    $ npm install
    ```

   To bind the git pre-commit code style check, run command:

    ```
    $ grunt githooks
    ```
    
   Now you are all set.

3. While you are editing code, run command:

    ```
    $ grunt karma
    ```

   To automaticly monitor and trigger all test when you change the code.

### With docker

Webapplate come with docker support. It helps you auto configure the development environment and could be deploy to Amazon Web Service or Google Cloud Platform.

Run

```
docker build -t webapplate/webapplate .
```

To build image at first time.

In linux, run

```
docker run webapplate/webapplate
```

to execute the server. You could connect to `localhost:8000` on browser to see the web page.

In other platform docker needs to run within `boot2docker` VM, you could get VM host ip via command

```
$ boot2docker ip
```

Then run command

```
docker run --rm -i -t -p 8000:8000 webapplate/webapplate
```

To forwarding port to your desktop. Connect to `$(boot2docker ip):8000` on browser to see the web page.
(generally is `http://192.168.59.103:8000/`)


## Features

Learn more from [webapplate document](https://github.com/webapplate/webapplate/wiki).

## License

[The MIT License](http://opensource.org/licenses/MIT)

Credit: developers and designers from node.js, express, grunt.js, Firefox OS, bower, and people who involved in improving Web technologies.
