'use strict';

angular.module('mmmApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router',
  'ngTable',
  'ngDialog',
  'rzModule',
  'mobile-angular-ui'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function ($templateCache, $rootScope, CaptureService, Game) {
    $templateCache.put('ng-table/pager.html2', '');

/*
    $rootScope.$on('$locationChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('lcs');
//      CaptureService.resetAll();
    });
*/
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      console.log('scs');
      CaptureService.resetAll();
    });

    /*
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('scsuc');
//      CaptureService.resetAll();
    });
    $rootScope.$on('$includeContentLoaded', function(event, toState, toParams, fromState, fromParams) {
    console.log($rootScope);
      console.log('icl', toState, toParams, fromState, fromParams);
//      if(!toParams) return;
     CaptureService.resetAll();
    });

    $rootScope.$on('$routeChangeStart', function(event, toState, toParams, fromState, fromParams) {
      console.log('*rcs');
      CaptureService.resetAll();
    });
    $rootScope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams) {
      console.log('*vcl');
      CaptureService.resetAll();
    });
*/

    Game.init();


  });