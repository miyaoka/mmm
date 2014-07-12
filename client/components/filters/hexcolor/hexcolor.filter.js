'use strict';

angular.module('mmmApp')
  .filter('hexcolor', function () {
    return function (num) {
      return '#'+(0x1000000+num).toString(16).substr(1,6);
    };
  });
