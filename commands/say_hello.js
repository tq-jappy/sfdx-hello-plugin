(function() {
  'use strict';

  module.exports = {
    topic: 'hello',
    command: 'sayHello',
    description: 'display hello message',
    run(context) {
      console.log('Hello sfdx!');
    }
  }
}());