'use strict'

var productionModule = (function() {
  return {
    sayHello : function(name) {
      return "Hello from " + name
    }
  }
})();

module.exports = productionModule;