/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  'mochacov': {
    travis: {
      options: {
        coveralls: {
          serviceName: 'travis-ci',
          serviceJobId: process.env.TRAVIS_JOB_ID,
          repoToken: '9Lqs288pJNb4aYw10BdWnjdJ5Vbx1zZM7'
        }
      }
    }
  }
};
