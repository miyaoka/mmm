'use strict';

angular.module('mmmApp')
  .controller('WorkerCtrl', function ($scope, $stateParams, Worker, Table, CurrentTime, Workers, PersonNames, ViewConfig) {


    //workers連想配列データを監視してリストを入れ直す
    function init(){
      var worker = Workers.get($stateParams.id);
//      console.log('wdetail', worker);
      if(!worker) return;
      $scope.item = worker;
    }
    init();

    $scope.$watch(function(){
      return Workers.data;
    }, init);


  });
