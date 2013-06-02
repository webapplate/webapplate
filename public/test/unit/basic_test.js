'use strict';

if ('undefined' !== typeof require) {
  // Require server-side-specific modules
  var chai = require('chai');
  var assert = chai.assert;
  var expect = chai.expect;
  var should = chai.should();
}

// BDD test example
var foobar = {
  sayHello: function() {
    return 'Hello World!';
  }
};

describe('As a developer, I want to know supported assertions type,' +
         ' that I can use in other tests', function() {
  describe('#sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'Hello World!');
    });

    it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('Hello World!');
    });

    it('should work with should', function() {
      foobar.sayHello().should.equal('Hello World!');
    });
  });
});
