'use strict';

angular.module('mmmApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router',
  'ngTable',
  'ngDialog',
  'rzModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put('ng-table/pager.html', '');
  }]);