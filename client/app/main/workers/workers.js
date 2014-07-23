'use strict';

angular.module('mmmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.workers', {
        url: '/workers',
        templateUrl: 'app/main/workers/workers.html',
        controller: 'WorkersCtrl'
      })
      .state('main.workersDetail', {
        url: '/workers/:id',
        templateUrl: 'app/main/workers/worker.html',
        controller: 'WorkerCtrl'
      });
  });