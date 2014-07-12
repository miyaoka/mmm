'use strict';

angular.module('mmmApp')
  .controller('WorkersTableCtrl', function ($scope, $window, Table, CurrentTime, Workers) {

    $scope.workers = new Table({
      sorting: {
        id: 'desc'
      }
    });
    $scope.pages = {
      floor: 1,
      step:0.01,
      precision: 2,
      translate : function(value){
        return isNaN(value) ? '' : 'P' + Math.floor(value);
      }
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
    $scope.$watch(function(){
      return Workers.data;
    }, function(){
      $scope.workers.setItems(Workers.list);
      updatePager();
    });
  });
