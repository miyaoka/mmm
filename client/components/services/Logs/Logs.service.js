'use strict';

angular.module('mmmApp')
  .factory('Logs', function () {

    var _items = [];
    var _indexes = {};


    var Logs = {
      get list(){
        return _items;
      },
      push: function(log){
        _items.push(log);
      },
      removeAll: function(){
        _items = [];
      }
    }
    return Logs;
  });
