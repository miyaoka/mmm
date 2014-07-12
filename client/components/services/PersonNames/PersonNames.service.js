'use strict';

angular.module('mmmApp')
  .factory('PersonNames', function ($resource, $q) {

    var _names = {};
    var _res = $resource('/api/person_names/random');


    // Public API here
    return {
      langs : 'en de fr it es sv fi ru cs ja'.split(' '),
      nametypes : 'family male female'.split(' '),
      genders: 'male female'.split(' '),
      load: function(){
        var deferred = $q.defer();
        $resource('/api/person_names/dump').get(function(res){
          _names = res;
          deferred.resolve(_names);
        });
        return deferred.promise;
      },
      getName: function(nametype, lang){
        var names = _names[nametype];

        if(!names){
          return null;
        }

        if(!!lang){
          names = names[lang];
        } else {
          var allnames = [];
          for(var lang in names){
            allnames = allnames.concat(names[lang]);
          }
          names = allnames;
        }
        return names[ Math.floor(Math.random()* names.length) ];


      }
    };
  });
