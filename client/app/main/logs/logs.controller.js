'use strict';

angular.module('mmmApp')
  .controller('LogsCtrl', function ($scope, Logs) {
    $scope.logs = Logs.list;
  });
