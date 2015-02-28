/* global module, require */
'use strict';
var express = require('express');
var router = express.Router();
//var model = require('../models/model');
/* mocked model
var model = {
  task: []
};
*/

// enable route if need dynamic web
// middleware to use for all requests
router.use(function(req, res, next) {
  // do something first before every request
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
  // create
  .post(function(req, res) {
    res.json({code: 200, message: 'create!'});
  })
  // retrieve all
  .get(function(req, res) {
    res.json({code: 200, message: 'get all!'});
  });

router.route('/:id?')
  // retrieve
  .get(function(req, res) {
    res.json({code: 200, message: 'get!'});
  })
  // update
  .put(function(req, res) {
    res.json({code: 200, message: 'update!'});
  })
  // delete
  .delete(function(req, res) {
    res.json({code: 200, message: 'delete!'});
  });

module.exports = router;
