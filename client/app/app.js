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
  .run(function ($templateCache, $rootScope, CaptureService, PersonNames, Workers, Worker) {
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

    var reset = function(){
      Workers.removeAll();

      add();
    }

    var add = function(){
      var langs = 'en de fr it es ja'.split(' ');
      var workers = [];
      for(var age = -15; age < 16; age++){
        for(var i = 0; i < 10; i++){
          var lang = langs[Math.floor(Math.random()*langs.length)];
          var lang2 = langs[Math.floor(Math.random()*langs.length)];
//          lang = lang2 = 'ja';
          var gender = PersonNames.genders[Math.floor(Math.random()*2)];
          var familyName = PersonNames.getName('family');
          var firstName = PersonNames.getName(gender, lang2);

          var w = new Worker(age);
          w.firstName = firstName;
          w.familyName = familyName;
          w.gender = gender;
          Workers.add(w);
        }
      }
    }

    PersonNames.load().then(function(){
      reset();
    });


  });