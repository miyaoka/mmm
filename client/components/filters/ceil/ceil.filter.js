'use strict';

angular.module('mmmApp')
  .filter('ceil', function () {
    return function (input) {
      return Math.ceil(input);
    };
  });
