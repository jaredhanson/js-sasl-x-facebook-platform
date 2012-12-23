(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports, module, require('querystring'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module', 'querystring'], factory);
  }
}(this, function(exports, module, querystring) {

  /**
   * X-FACEBOOK-PLATFORM `Mechanism` constructor.
   *
   * This class implements the X-FACEBOOK-PLATFORM SASL mechanism.
   *
   * The X-FACEBOOK-PLATFORM SASL mechanism provides support for using OAuth 2.0
   * access tokens for authentication.  This mechanism is defined by Facebook
   * and implemented in Facebook Chat. 
   *
   * References:
   *  - [Facebook Chat API](http://developers.facebook.com/docs/chat/)
   *
   * @api public
   */
  function Mechanism() {
  }
  
  Mechanism.prototype.name = 'X-FACEBOOK-PLATFORM';
  Mechanism.prototype.clientFirst = false;
  
  /**
   * Encode a response using given credential.
   *
   * Options:
   *  - `apiKey`
   *
   * @param {Object} cred
   * @api public
   */
  Mechanism.prototype.response = function(cred) {
    var params = {
      method: this._method,
      nonce: this._nonce,
      api_key: cred.apiKey,
      access_token: cred.token,
      call_id: 0,
      v: '1.0'
    };
    return querystring.stringify(params);
  };
  
  /**
   * Decode a challenge issued by the server.
   *
   * @param {String} chal
   * @api public
   */
  Mechanism.prototype.challenge = function(chal) {
    var q = querystring.parse(chal);
    this._method = q.method;
    this._nonce = q.nonce;
  };

  exports = module.exports = Mechanism;
  
}));
