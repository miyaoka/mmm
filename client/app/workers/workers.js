'use strict';

angular.module('mmmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('workers', {
        url: '/workers',
        templateUrl: 'app/workers/workers.html',
        controller: 'WorkersCtrl'
      });
  });