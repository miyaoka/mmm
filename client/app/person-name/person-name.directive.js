'use strict';

angular.module('mmmApp')
  .directive('personName', function (ViewConfig) {
    return {
      scope:{
        item: "="
      },
      templateUrl: 'app/person-name/person-name.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.item.kana = scope.item.kana.replace(/（.*）/,'');
        scope.vc = ViewConfig;
        function swap(val){
          if(val){
            scope.base = scope.item.kana;
            scope.text = scope.item.name;
          }else{
            scope.base = scope.item.name;
            scope.text = scope.item.kana;
          }
        }
        if(scope.item.nametype == 'family'){
          scope.$watch(function(){
            return ViewConfig.invertFamilyName;
          }, function(val){
            swap(val);
          });
        } else{
          scope.$watch(function(){
            return ViewConfig.invertFirstName;
          }, function(val){
            swap(val);
          });
        }
      }
    };
  });