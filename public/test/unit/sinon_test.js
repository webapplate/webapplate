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

function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

// sinon test samples http://sinonjs.org/docs/
suite('As a developer, I want to use Sinon in test,' +
      ' so I can write test with spies, mocks.. easily', function() {
  test('Sinon should be defined', function() {
    assert.notStrictEqual(sinon, undefined);
  });

  test('Sinon should able to be used as spy', function() {
    var callback = sinon.spy();
    PubSub.subscribe('message', callback);

    // PubSub.publishSync("message");
    assert.equal(callback.called, true);
  });

  test('calls the original function', function () {
      var callback = sinon.spy();
      var proxy = once(callback);

      proxy();

      assert(callback.called);
  });

  test('calls the original function only once', function () {
    var callback = sinon.spy();
    var proxy = once(callback);

    proxy();
    proxy();

    assert(callback.calledOnce);
    // ...or:
    // assert.equals(callback.callCount, 1);
  });

  test('calls original function with right this and args', function () {
    var callback = sinon.spy();
    var proxy = once(callback);
    var obj = {};

    proxy.call(obj, 1, 2, 3);

    assert(callback.calledOn(obj));
    assert(callback.calledWith(1, 2, 3));
  });
});

// sinon test samples http://sinonjs.org/docs/
suite('As a developer, I want to use Sinon as Spy,' +
      ' so I can records arguments, return value easily', function() {
  setup(function() {
    // sinon = sinon.sandbox.create();
    sinon.spy(PubSub, 'publishSync');
  });

  teardown(function() {
    // sinon.restore();
    PubSub.publishSync.restore(); // Unwraps the spy
  });

  test('spy should able to be used on existing methods', function() {
    PubSub.publishSync('message');
    assert(PubSub.publishSync.calledOnce);
    // or ...
    assert.equal(PubSub.publishSync.callCount, 1);
  });

});

suite('As a developer, I want to use Sinon as Stub,' +
      ' so I can return whatever the original function returns', function() {
  test('returns the return value from the original function', function () {
    var callback = sinon.stub().returns(42);
    var proxy = once(callback);

    assert.equal(proxy(), 42);
  });

});