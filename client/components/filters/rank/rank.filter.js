'use strict';

angular.module('mmmApp')
  .filter('rank', function () {
    var labels = 'SS S A B C D E F G'.split(' ').reverse();
    var min = .14;
    var max = .86;
    var span = max - min;
    var len = labels.length;

    //input: 0 - 1
    return function (input) {
      var i = input;
      var label = "";
      if(max < i){
        label = 'SSS';
      } else if (min > i){
        label = labels[0];
      } else {
        label = labels[Math.floor(len * (i - min)/span)];

      }
      return label;
    };
  });
