'use strict';

angular.module('mmmApp')
  .directive('viewConfig', function (ViewConfig) {
    return {
      templateUrl: 'app/view-config/view-config.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.vc = ViewConfig;
      }
    };
  });