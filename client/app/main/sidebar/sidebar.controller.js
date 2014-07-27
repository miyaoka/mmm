'use strict';

angular.module('mmmApp')
  .controller('SidebarCtrl', function ($scope, $window, Worker, Table, CurrentTime, Workers, PersonNames, ViewConfig) {

    $scope.vc = ViewConfig;
    $scope.ct = CurrentTime;

    var turnPerYear = 12;

    $scope.yearSlider = {
      floor: 2010 * turnPerYear,
      ceil: 2060 * turnPerYear,
      ym: ym(),
      step: turnPerYear,
      translate : function(value){
        return Math.floor(value / turnPerYear) + '年';
      }
    };
    function ym(){
      return CurrentTime.getFullYear() * turnPerYear + CurrentTime.getMonth();
    }
    $scope.$watch(function(){
      return $scope.yearSlider.ym;
    }, function(val){
      var d = new Date(
        Math.floor($scope.yearSlider.ym / turnPerYear),
        $scope.yearSlider.ym % turnPerYear
      );
      CurrentTime.setTime(d.getTime());
    });

    $scope.$watch(function(){
      return CurrentTime.getTime();
    }, function(val){
      $scope.yearSlider.ym = ym();
    });

    $scope.nextMonth = function(){
      CurrentTime.nextMonth();
    };





  });
