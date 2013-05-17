'use strict';

if ('undefined' !== typeof require) {
  // Require server-side-specific modules
  var sinon = require('sinon');
  var chai = require('chai');
  var assert = chai.assert;
}

// sinon test samples http://sinonjs.org/docs/
suite('As a developer, I want to use Sinon in test,' +
      ' so I can write test with spies, mocks.. easily', function() {
  test('Sinon should be defined', function() {
    assert.notStrictEqual(sinon, undefined);
  });
});
