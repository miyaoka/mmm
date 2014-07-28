'use strict';

angular.module('mmmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.logs', {
        url: '/logs',
        templateUrl: 'app/main/logs/logs.html',
        controller: 'LogsCtrl'
      });
  });