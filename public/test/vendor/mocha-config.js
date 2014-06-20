mocha.setup({ui:'tdd'});
window.assert = window.chai.assert;
window.expect = window.chai.expect;
// Note that should has to be executed
window.should = window.chai.should();
