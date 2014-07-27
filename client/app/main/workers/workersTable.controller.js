'use strict';

angular.module('mmmApp')
  .controller('WorkersTableCtrl', function ($scope, $rootScope, $state, $window, $location, ViewConfig, Table, CurrentTime, Workers) {

    $scope.vc = ViewConfig;
    $scope.workers = new Table({
      sorting: {
        id: 'desc'
      },
      count: 100
    });

    $scope.onSelect = function(item){
      console.log(item.id);
      $rootScope.selectitem = item;
//      $state.go('main.workersDetail', {id: item.id});
//      $location.path('/workers/' + item.id);
    };


    //worker内容が年月で変化するので監視してソートをアップデート
    $scope.$watch(function(){
      return CurrentTime.getTime();
    }, function(){
      $scope.workers.refresh();
    });

    //workers連想配列データを監視してリストを入れ直す
    function initTable(){
      $scope.workers.setItems(Workers.list);
    }
    initTable();

    $scope.$watch(function(){
      return Workers.data;
    }, initTable);
  });
