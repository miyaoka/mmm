'use strict';

angular.module('mmmApp')
  .factory('Workers', function ($rootScope) {

    var _workers = {};
    var _values = [];

    function values(obj){
      var a = [], i = 0, p;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          a[i++] = obj[p];
        }
      }
      return a;
    }
    function valuesUpdate(){
      _values = values(_workers);
    }

    var Workers = {
      get data(){
        return _workers;
      },
      get list(){
        return _values;
      },
      get: function(id){
        return _workers[id];
      },
      add: function(worker){
        _workers[worker.id] = worker;
        valuesUpdate();
      },
      remove: function(id){
        delete _workers[id];
        valuesUpdate();
      },
      removeAll: function(){
        _workers = {};
        valuesUpdate();
      }
    }
    return Workers;
  });
