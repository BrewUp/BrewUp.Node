'use strict'

var pubsModule = (function() {
  return {
    sayHello : function(name) {
      return "Hey Brewer. Greetings from " + name + "'s Pub"
    }
  }
})();

module.exports = pubsModule;
