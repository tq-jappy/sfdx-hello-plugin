const sayHello = require('./commands/say_hello');

(function() {
  'use strict';

  exports.topics = [{
    name: 'hello',
    description: 'print various message'
  }];

  /*
  exports.namespace = {
    name: 'hello'
  };
  */

  exports.commands = [
    sayHello
  ];
}());