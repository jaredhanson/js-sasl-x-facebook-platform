(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('../main'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-x-facebook-platform'], factory);
  }
}(this, function(saslxfacebookplatform) {

  describe('sasl-x-facebook-platform', function() {
    
    it('should export Mechanism', function() {
      expect(saslxfacebookplatform.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(saslxfacebookplatform).to.equal(saslxfacebookplatform.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-x-facebook-platform' };
  
}));
