'use strict';

angular.module('mmmApp')
  .filter('floor', function () {
    return function (input) {
      return Math.floor(input);
    };
  });
