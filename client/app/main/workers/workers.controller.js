'use strict';

angular.module('mmmApp')
  .controller('WorkersCtrl', function ($scope, $rootScope, $window, Worker, Table, CurrentTime, Workers, PersonNames, ViewConfig) {


    $scope.clearSelect = function(){
      delete $rootScope.selectitem;
      delete $rootScope.templateUrl;
    };





  });
