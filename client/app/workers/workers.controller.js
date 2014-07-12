'use strict';

angular.module('mmmApp')
  .controller('WorkersCtrl', function ($scope, $window, Worker, Table, CurrentTime, Workers, PersonNames, ViewConfig) {

    $scope.vc = ViewConfig;
    $scope.ct = CurrentTime;

    var turnPerYear = 12;

    $scope.yearSlider = {
      floor: 2000 * turnPerYear,
      ceil: 2060 * turnPerYear,
      ym: 2014 * turnPerYear,
      step: turnPerYear,
      translate : function(value){
        return Math.floor(value / turnPerYear) + '年';
      }
    };
    $scope.$watch(function(){
      return $scope.yearSlider.ym;
    }, function(val){
      var d = new Date(
        Math.floor($scope.yearSlider.ym / turnPerYear),
        $scope.yearSlider.ym % turnPerYear
      );
      CurrentTime.setTime(d.getTime());
    });



    $scope.reset = function(){
      Workers.removeAll();

      $scope.add();
    }

    $scope.add = function(){

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
      $scope.reset();
    });


  });
