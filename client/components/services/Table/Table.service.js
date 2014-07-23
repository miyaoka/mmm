'use strict';

angular.module('mmmApp')
  .factory('Table', function (ngTableParams, $filter) {

    // Define the constructor function.
    function Table(baseParameters) {
      var _items = [];
      var tp = new ngTableParams({
        count: 20         // count per page
      },
      {
        counts: [],//[10, 20, 50, 100], // 1ページあたりの表示件数（空配列で非表示）
        getData: function($defer, params) {
          params.total(_items.length);
          _items = (params.filter() ?
            $filter('filter')(_items, params.filter()) :
            _items
          );
          _items = (params.sorting() ?
            $filter('orderBy')(_items, params.orderBy()) :
            _items
          );

          $defer.resolve(
            _items.slice(
              (params.page() - 1) * params.count(), params.page() * params.count()
            )
          );
        }
      });
      tp.parameters(baseParameters, false);
      tp.setItems = function(items){
        _items = items;
        if(!tp.settings().$scope){
          return
        }
        tp.page(1);
        tp.reload();
      };
      tp.refresh = function(){
        if(!tp.settings().$scope){
          return
        }
        tp.reload();
      };
      return tp;
    }
    return Table
  });
