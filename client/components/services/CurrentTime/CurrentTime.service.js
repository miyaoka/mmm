'use strict';

angular.module('mmmApp')
  .factory('CurrentTime', function () {
    // Service logic
    // ...

    var date = new Date(2020,0,1);
    date.nextMonth = function() {
      this.setMonth(this.getMonth()+1);
      // body...
    };
    date.clone = function(){
      return new Date(this.getTime());
    }

    // Public API here
    return date;
  });
