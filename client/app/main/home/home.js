'use strict';

angular.module('mmmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.home', {
        url: '/',
        templateUrl: 'app/main/home/home.html',
        controller: 'HomeCtrl'
      });
  });