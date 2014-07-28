'use strict';

angular.module('mmmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.workers', {
        url: '/workers',
        templateUrl: 'app/main/workers/workers.html',
        controller: 'WorkersCtrl'
      })
        .state('main.workers.detail', {
          url: '/:id',
          templateUrl: 'app/main/workers/worker.html',
          controller: 'WorkerCtrl'
        });
  });