'use strict';

angular.module('mmmApp')
  .controller('WorkersTableCtrl', function ($scope, $rootScope, $state, $window, $location, Table, CurrentTime, Workers) {

    $scope.workers = new Table({
      sorting: {
        id: 'desc'
      },
      count: 100
    });
    $scope.pages = {
      floor: 1,
      step:0.01,
      precision: 2,
      translate : function(value){
        return isNaN(value) ? '' : 'P' + Math.floor(value);
      }
    };
    $scope.onSelect = function(item){
      console.log(item.id);
      $rootScope.selectitem = item;
//      $state.go('main.workersDetail', {id: item.id});
//      $location.path('/workers/' + item.id);
    };

    function updatePager(){
      $scope.pages.ceil = Math.ceil($scope.workers.total() / $scope.workers.count());
      $scope.pages.current = $scope.workers.page();
    }
    //pagerを監視してpage切り替え
    $scope.$watch(function(){
      return $scope.pages.current;
    }, function(){
      var page = Math.floor($scope.pages.current);
      if(page != $scope.workers.page()){
        $scope.workers.page(page);
      }
    });
    //表示件数の変更時にpager更新
    $scope.$watch(function(){
      return $scope.workers.count();
    }, updatePager);


    //worker内容が年月で変化するので監視してソートをアップデート
    $scope.$watch(function(){
      return CurrentTime.getFullYear();
    }, function(){
      $scope.workers.refresh();
    });

    //workers連想配列データを監視してリストを入れ直す
    function initTable(){
      $scope.workers.setItems(Workers.list);
      updatePager();
    }
    initTable();

    $scope.$watch(function(){
      return Workers.data;
    }, initTable);
  });
