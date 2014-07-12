'use strict';

angular.module('mmmApp')
  .factory('CurrentTime', function () {
    // Service logic
    // ...

    var date = new Date();

    // Public API here
    return date;
  });
