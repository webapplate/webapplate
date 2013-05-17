'use strict';

if ('undefined' !== typeof require) {
  // Require server-side-specific modules
  var chai = require('chai');
  var assert = chai.assert;
}

// TDD test example
suite('As a developer, I want to have some test examples,' +
      'that I can follow with', function() {
  setup(function() {
    // ...
  });

  suite('Array #indexOf()', function() {
    test('should return -1 when not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
