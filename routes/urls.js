/* jshint node: true */
'use strict';
// REGISTER OUR ROUTES
module.exports = function(app) {
  app.use('/', require('./index'));
  app.use('/api/1/', require('./api'));
};
