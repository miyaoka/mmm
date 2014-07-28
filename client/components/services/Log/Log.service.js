'use strict';

angular.module('mmmApp')
  .factory('Log', function (CurrentTime) {

    // Define the constructor function.
    function Log(msg){
      this.date = new Date(CurrentTime.getTime());
      this.msg = msg;
    };


    // instance vars, methods
    Log.prototype = {
    };

    return Log;
  });
