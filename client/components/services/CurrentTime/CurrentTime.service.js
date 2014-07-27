'use strict';

angular.module('mmmApp')
  .factory('CurrentTime', function () {
    // Service logic
    // ...

    var date = new Date();
    date.nextMonth = function() {
      this.setMonth(this.getMonth()+1);
      // body...
    };

    // Public API here
    return date;
  });
