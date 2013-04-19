// BDD test example
var foobar = {
  sayHello: function() {
    return 'Hello World!';
  }
};

describe('Assertions', function() {
  describe('#sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'Hello World!');
    })

    it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('Hello World!');
    })

    it('should work with should', function() {
      foobar.sayHello().should.equal('Hello World!');
    })
  })
})
