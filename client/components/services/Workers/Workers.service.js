'use strict';

angular.module('mmmApp')
  .factory('Workers', function ($rootScope) {

    var _workers = {};

    function values(obj){
      var a = [], i = 0, p;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          a[i++] = obj[p];
        }
      }
      return a;
    }

    var Workers = {
      get data(){
        return _workers;
      },
      get list(){
        return values(_workers);
      },
      get: function(id){
        return _workers[id];
      },
      add: function(worker){
        _workers[worker.id] = worker;
      },
      remove: function(id){
        delete _workers[id];
      },
      removeAll: function(){
        _workers = {};
      }
    }
    return Workers;
  });
