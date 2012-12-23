(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-x-facebook-platform/lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-x-facebook-platform/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('should be named X-FACEBOOK-PLATFORM', function() {
      expect(mech.name).to.equal('X-FACEBOOK-PLATFORM');
    });
    it('should not be client first', function() {
      expect(mech.clientFirst).to.equal(false);
    });
  });
  
  describe('response to challenge', function() {
    var mech = new Mechanism();
    mech.challenge('method=GET&nonce=ABCDEFG');
    
    it('should encode credentials', function() {
      var enc = mech.response({ apiKey: 'app123', token: 'secret' });
      expect(enc).to.equal('method=GET&nonce=ABCDEFG&api_key=app123&access_token=secret&call_id=0&v=1.0');
    });
  });
  
  return { name: 'test.sasl-x-facebook-platform.mechanism' };
  
}));
