'use strict';

if ('undefined' !== typeof require) {
  // Require server-side-specific modules
  var sinon = require('sinon');
  var chai = require('chai');
  var assert = chai.assert;
}

var PubSub = {
  subscribe: function subscribe(msg, callback) {
    callback();
  },
  publishSync: function publishSync(msg) {

  }
};

// sinon test samples http://sinonjs.org/docs/
suite('As a developer, I want to use Sinon in test,' +
      ' so I can write test with spies, mocks.. easily', function() {
  test('Sinon should be defined', function() {
    assert.notStrictEqual(sinon, undefined);
  });

  test('Sinon should able to be used as spy', function() {
    var callback = sinon.spy();
    PubSub.subscribe("message", callback);

    // PubSub.publishSync("message");
    assert.equal(callback.called, true);
  });

});

// sinon test samples http://sinonjs.org/docs/
suite('As a developer, I want to use Sinon as Spy,' +
      ' so I can records arguments, return value easily', function() {
  setup(function() {
    // sinon = sinon.sandbox.create();
    sinon.spy(PubSub, "publishSync");
  });

  teardown(function() {
    // sinon.restore();
    PubSub.publishSync.restore(); // Unwraps the spy
  });

  test('spy should able to be used on existing methods', function() {
    var callback = sinon.spy();

    PubSub.publishSync("message");
    assert(PubSub.publishSync.calledOnce);
  });

});